'use client';

import { useRouter } from 'next/navigation';

export const useAppRouter = () => {
  const router = useRouter();

  const push = (path: string, options?: { scroll?: boolean }) => {
    router.push(path);
    if (options?.scroll === false) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const replace = (path: string) => {
    router.replace(path);
  };

  const refresh = () => {
    router.refresh();
  };

  const back = () => {
    router.back();
  };

  const forward = () => {
    window.history.forward();
  };

  const reload = () => {
    window.location.reload();
  };

  const redirect = (path: string) => {
    window.location.href = path;
  };

  return {
    push,
    replace,
    refresh,
    back,
    forward,
    reload,
    redirect,
  };
};
