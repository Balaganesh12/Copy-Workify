import { TABLE_NAME } from '@/constants/tables';
import { supabaseAdmin } from '@/lib/supabase/admin';

const resetTokensTable = TABLE_NAME.RESET_TOKENS;

export async function checkRateLimit(email: string, limit = 2, minutes = 15) {
  const cutoff = new Date(Date.now() - minutes * 60 * 1000).toISOString();
  const { data } = await supabaseAdmin
    .from(resetTokensTable)
    .select('id')
    .eq('email', email)
    .gte('created_at', cutoff);

  return (data?.length || 0) >= limit;
}

export async function storeResetToken(
  token: string,
  email: string,
  ip: string,
  ua: string,
) {
  return await supabaseAdmin.from(resetTokensTable).insert({
    email,
    token,
    ip_address: ip,
    user_agent: ua,
  });
}

export async function validateResetToken(token: string, email: string) {
  const now = new Date().toISOString();

  const { data, error } = await supabaseAdmin
    .from(resetTokensTable)
    .select('*')
    .eq('token', token)
    .eq('email', email)
    .eq('used', false)
    .gte('expires_at', now)
    .maybeSingle();

  return { tokenRecord: data, error };
}

export async function markTokenUsed(id: string) {
  return await supabaseAdmin
    .from(resetTokensTable)
    .update({ used: true })
    .eq('id', id);
}
