'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function useWarnIfUnsavedChanges(isDirty: boolean) {
  const router = useRouter();

  useEffect(() => {
    if (!isDirty) return;

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    router.push = (
      (origPush) =>
      (...args: Parameters<typeof router.push>) => {
        const confirmLeave = window.confirm(
          'Je hebt niet-opgeslagen wijzigingen. Weet je zeker dat je wilt verlaten?',
        );
        if (confirmLeave) {
          return origPush(...args);
        }
        return;
      }
    )(router.push);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isDirty, router]);
}

export default useWarnIfUnsavedChanges;
