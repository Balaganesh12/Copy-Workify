'use server';

import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '@/constants/messages';
import { pageRoutes } from '@/constants/routes';
import { sendPasswordResetEmail } from '@/lib/postmark/templates/sendPasswordReset';
import { supabaseAdmin } from '@/lib/supabase/admin';
import { checkRateLimit } from '@/lib/supabase/resetToken';
import { createClient } from '@/lib/supabase/server';
import { signResetToken } from '@/utils/jwt';
import { checkUserExistsWithEmail } from '..';

export const loginUser = async (email: string, password: string) => {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return {
      success: false,
      message: ERROR_MESSAGE.AUTH.LOGIN_ERROR,
      error,
    };
  }

  if (!data.user?.confirmed_at) {
    await supabase.auth.signOut();
    return {
      success: false,
      message: ERROR_MESSAGE.AUTH.EMAIL_NOT_CONFIRMED,
    };
  }

  return {
    success: true,
    message: SUCCESS_MESSAGE.AUTH.LOGIN_SUCCESS,
    data,
  };
};

export const signupUser = async (email: string, password: string) => {
  const exists = await checkUserExistsWithEmail(email);

  if (exists.success) {
    return {
      success: false,
      message: ERROR_MESSAGE.AUTH.USER_ALREADY_EXISTS,
    };
  }

  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return {
      success: false,
      message: ERROR_MESSAGE.AUTH.SIGNUP_ERROR,
      error,
    };
  }

  return {
    success: true,
    message: SUCCESS_MESSAGE.AUTH.SIGNUP_SUCCESS,
    data,
  };
};

export const logoutUser = async () => {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    return {
      success: false,
      message: ERROR_MESSAGE.AUTH.LOGOUT_ERROR,
      error,
    };
  }

  return {
    success: true,
    message: SUCCESS_MESSAGE.AUTH.LOGOUT_SUCCESS,
  };
};

export const forgotPassword = async (
  email: string,
  rawHeaders: Headers | Record<string, string>,
) => {
  try {
    // Normalize headers to always use the Headers API
    const reqHeaders =
      rawHeaders instanceof Headers ? rawHeaders : new Headers(rawHeaders);

    // Rate limit check
    if (await checkRateLimit(email)) {
      return {
        success: false,
        message: 'Too many requests.',
        status: 429,
      };
    }

    // Delete old tokens for this email
    await supabaseAdmin.from('reset_tokens').delete().eq('email', email);

    // Create new token
    const token = signResetToken(email);

    const ip = reqHeaders.get('x-forwarded-for')?.split(',')[0] || 'unknown';
    const ua = reqHeaders.get('user-agent') || 'unknown';

    // Store token with metadata
    await supabaseAdmin.from('reset_tokens').insert({
      email,
      token,
      ip_address: ip,
      user_agent: ua,
    });

    const origin =
      reqHeaders.get('origin') || `https://${reqHeaders.get('host')}`;
    const link = `${origin}${pageRoutes.RESET_PASSWORD}?token=${token}`;

    // Send password reset email
    const response = await sendPasswordResetEmail({
      to: email,
      name: 'John Doe', // TODO: Replace with actual user name if available
      resetUrl: link,
    });

    if (response.Message === 'OK') {
      return {
        success: true,
        message:
          SUCCESS_MESSAGE.USER.RESET_PASSWORD_LINK_SENT ||
          'Password reset link sent',
      };
    }

    return {
      success: false,
      message: 'Failed to send password reset link',
      status: 500,
    };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to send password reset link',
      error,
      status: 500,
    };
  }
};
