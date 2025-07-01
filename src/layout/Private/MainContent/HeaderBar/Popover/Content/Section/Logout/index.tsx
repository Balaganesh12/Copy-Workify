import { assets } from '@/assets';
import { useMessage } from '@/components/antd/Notification';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '@/constants/messages';
import { useUser } from '@/contexts/User';
import { createClient } from '@/lib/supabase/client';
import { useAppRouter } from '@/utils/routes';
import Image from 'next/image';
import MenuItem from '../../../../../../../../components/ui/Private/Popover/MenuItem';
import styles from './index.module.scss';

const LogoutSection = () => {
  const { resetUser } = useUser();
  const supabase = createClient();
  const { reload } = useAppRouter();
  const { showMessage } = useMessage();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        showMessage('error', ERROR_MESSAGE.AUTH.LOGOUT_ERROR);
      } else {
        showMessage('success', SUCCESS_MESSAGE.AUTH.LOGOUT_SUCCESS);
      }
      resetUser();
      reload();
    } catch (error) {
      console.error('Logout error:', error);
      showMessage('error', ERROR_MESSAGE.AUTH.LOGOUT_ERROR);
    }
  };

  return (
    <div className={styles.logoutSection}>
      <MenuItem
        label="Logout"
        icon={
          <Image
            src={assets.Logout.src}
            alt={assets.Logout.alt}
            width={16}
            height={16}
          />
        }
        onClick={handleLogout}
      />
    </div>
  );
};

export default LogoutSection;
