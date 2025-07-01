// @/services/auth/validateResetPasswordToken.ts

'use server';

import { ERROR_MESSAGE } from '@/constants/messages';
import { validateResetToken } from '@/lib/supabase/resetToken';
import { verifyResetToken } from '@/utils/jwt';

export const validateResetPasswordToken = async (token: string) => {
  try {
    const { email } = verifyResetToken(token);
    const { tokenRecord, error } = await validateResetToken(token, email);

    if (!tokenRecord || error) {
      return {
        valid: false,
        error: ERROR_MESSAGE.AUTH.INVALID_OR_EXPIRED_TOKEN,
        status: 400,
      };
    }

    return {
      valid: true,
    };
  } catch {
    return {
      valid: false,
      error: ERROR_MESSAGE.AUTH.INVALID_OR_EXPIRED_TOKEN,
      status: 400,
    };
  }
};
