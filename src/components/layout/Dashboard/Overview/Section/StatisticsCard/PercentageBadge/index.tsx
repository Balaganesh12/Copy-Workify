import { assets } from '@/assets';
import Image from 'next/image';
import styles from './index.module.scss';

const PercentageBadge = ({ percentageValue }: { percentageValue: number }) => {
  const isPositive = percentageValue > 0;

  return (
    <div
      className={`${styles.percentageBadge} ${isPositive ? styles.positive : styles.negative}`}
    >
      <Image
        src={isPositive ? assets.StatsUpArrow.src : assets.StatsDownArrow.src}
        alt={isPositive ? assets.StatsUpArrow.alt : assets.StatsDownArrow.alt}
        width={14}
        height={14}
      />
      <span>{percentageValue}%</span>
    </div>
  );
};

export default PercentageBadge;
