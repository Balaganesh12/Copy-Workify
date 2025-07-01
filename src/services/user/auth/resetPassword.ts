'use server';

import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '@/constants/messages';
import { supabaseAdmin } from '@/lib/supabase/admin';
import { markTokenUsed, validateResetToken } from '@/lib/supabase/resetToken';
import { checkUserExistsWithEmail } from '@/services/user';
import { verifyResetToken } from '@/utils/jwt';

export const resetPassword = async (token: string, newPassword: string) => {
  try {
    const { email } = verifyResetToken(token);

    const { tokenRecord, error: tokenError } = await validateResetToken(
      token,
      email,
    );
    if (!tokenRecord || tokenError) {
      return {
        success: false,
        message: ERROR_MESSAGE.AUTH.INVALID_OR_EXPIRED_TOKEN,
        status: 400,
      };
    }

    const user = await checkUserExistsWithEmail(email);
    if (!user.success || !user.data) {
      return {
        success: false,
        message: ERROR_MESSAGE.USER.USER_NOT_FOUND,
        status: 404,
      };
    }

    const { error: updateError } =
      await supabaseAdmin.auth.admin.updateUserById(user.data.id, {
        password: newPassword,
      });
    if (updateError) {
      return {
        success: false,
        message: ERROR_MESSAGE.AUTH.FAILED_TO_RESET_PASSWORD,
        status: 500,
      };
    }

    await markTokenUsed(tokenRecord.id);

    return {
      success: true,
      message: SUCCESS_MESSAGE.USER.RESET_PASSWORD,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: ERROR_MESSAGE.AUTH.INVALID_OR_EXPIRED_TOKEN,
      status: 400,
    };
  }
};
