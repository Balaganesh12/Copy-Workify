import { assets } from '@/assets';
import { Button } from 'antd';
import Image from 'next/image';
import React from 'react';
import styles from './index.module.scss';

interface SocialLoginProps {
  type?: 'login' | 'sign';
  onGoogleLogin?: () => void;
  onFacebookLogin?: () => void;
  onAppleLogin?: () => void;
}

const SocialLogin: React.FC<SocialLoginProps> = ({
  type = 'login',
  onGoogleLogin = () => {},
  onFacebookLogin = () => {},
  onAppleLogin = () => {},
}) => {
  const prefix = type === 'sign' ? 'Doorgaan met' : 'Inloggen met';

  return (
    <div className={styles.container}>
      <Button className={styles.loginButton} onClick={onGoogleLogin}>
        <Image
          src={assets.socialLogins.Google.src}
          alt={assets.socialLogins.Google.alt}
          width={24}
          height={24}
        />
        <span>{`${prefix} Google`}</span>
      </Button>

      <Button className={styles.loginButton} onClick={onFacebookLogin}>
        <Image
          src={assets.socialLogins.Facebook.src}
          alt={assets.socialLogins.Facebook.alt}
          width={24}
          height={24}
        />
        <span>{`${prefix} Facebook`}</span>
      </Button>

      <Button className={styles.loginButton} onClick={onAppleLogin}>
        <Image
          src={assets.socialLogins.Apple.src}
          alt={assets.socialLogins.Apple.alt}
          width={24}
          height={24}
        />
        <span>{`${prefix} Apple`}</span>
      </Button>
    </div>
  );
};

export default SocialLogin;
