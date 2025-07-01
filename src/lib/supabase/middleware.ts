import { pageRoutes } from '@/constants/routes';
import { createServerClient } from '@supabase/ssr';
import { NextRequest, NextResponse } from 'next/server';

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isPublicPath = [
    '/',
    pageRoutes.LOGIN,
    pageRoutes.SIGNUP,
    pageRoutes.FORGOT_PASSWORD,
    pageRoutes.SIGNUP_SUCCESS,
    pageRoutes.TERMS,
    pageRoutes.PRIVACY,
  ].some((path) => request.nextUrl.pathname.startsWith(path));

  if (!user && !isPublicPath) {
    // Clear Supabase auth cookies
    // Supabase auth cookies typically are: 'sb-access-token', 'sb-refresh-token', 'sb-auth-token', 'sb-session', but double-check your actual cookie names

    const url = request.nextUrl.clone();
    url.pathname = pageRoutes.LOGIN;

    // Create a redirect response
    const redirectResponse = NextResponse.redirect(url);

    // Clear all Supabase auth related cookies in the response
    // Set cookie expiry to past date to remove them
    [
      'sb-access-token',
      'sb-refresh-token',
      'sb-auth-token',
      'sb-session',
    ].forEach((cookieName) => {
      redirectResponse.cookies.set(cookieName, '', {
        path: '/',
        expires: new Date(0),
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
      });
    });

    return redirectResponse;
  }

  return supabaseResponse;
}
