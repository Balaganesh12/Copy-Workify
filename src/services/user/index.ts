'use server';

import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '@/constants/messages';
import { TABLE_NAME } from '@/constants/tables';
import { createClient } from '@/lib/supabase/server';
import type { User } from '@/types/user';

export const checkUserExistsWithEmail = async (email: string) => {
  const supabase = await createClient();

  const { data: existingUser, error } = await supabase
    .from(TABLE_NAME.USERS)
    .select('*')
    .eq('email', email)
    .maybeSingle();

  if (error) {
    return {
      success: false,
      message: ERROR_MESSAGE.AUTH.ERROR_CHECKING_EXISTING,
    };
  }

  if (existingUser) {
    return {
      success: true,
      message: ERROR_MESSAGE.AUTH.USER_ALREADY_EXISTS,
      data: existingUser,
    };
  }

  return {
    success: false,
    message: ERROR_MESSAGE.AUTH.USER_DOES_NOT_EXIST,
  };
};

export const checkUserExistsWithId = async (id: string) => {
  const supabase = await createClient();

  const { data: existingUser, error } = await supabase
    .from(TABLE_NAME.USERS)
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error) {
    return {
      success: false,
      message: ERROR_MESSAGE.AUTH.ERROR_CHECKING_EXISTING,
    };
  }

  if (existingUser) {
    return {
      success: true,
      message: ERROR_MESSAGE.AUTH.USER_ALREADY_EXISTS,
      data: existingUser,
    };
  }

  return {
    success: false,
    message: ERROR_MESSAGE.AUTH.USER_DOES_NOT_EXIST,
  };
};

export const getUserProfile = async (id: string) => {
  const supabase = await createClient();

  const { data: userProfile, error } = await supabase
    .from(TABLE_NAME.USERS)
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error) {
    return {
      success: false,
      message: 'Error fetching user profile',
      error,
    };
  }

  if (!userProfile) {
    return {
      success: false,
      message: 'User profile not found',
    };
  }

  return {
    success: true,
    data: userProfile,
  };
};

export const updateUserProfile = async (id: string, data: User) => {
  const supabase = await createClient();

  const { error } = await supabase
    .from(TABLE_NAME.USERS)
    .update(data)
    .eq('id', id);

  if (error) {
    return {
      success: false,
      message: ERROR_MESSAGE.USER.UPDATE_USER_PROFILE_ERROR,
      error,
    };
  }

  return {
    success: true,
    message: SUCCESS_MESSAGE.USER.UPDATE_USER_PROFILE_SUCCESS,
  };
};
