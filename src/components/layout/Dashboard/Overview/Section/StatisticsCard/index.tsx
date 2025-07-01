import { Statistic } from 'antd';
import React from 'react';
import styles from './index.module.scss';
import PercentageBadge from './PercentageBadge';

interface StatisticsCardProps {
  newCustomers?: number;
  activeCustomers?: number;
  totalAddresses?: number;
  newCustomersPercentage?: number;
  activeCustomersPercentage?: number;
  totalAddressesPercentage?: number;
}

const StatisticsCard: React.FC<StatisticsCardProps> = ({
  newCustomers,
  activeCustomers,
  totalAddresses,
  newCustomersPercentage,
  activeCustomersPercentage,
  totalAddressesPercentage,
}) => {
  const renderPercentageBadge = (percentage: number | undefined) => {
    if (!percentage) return null;
    return <PercentageBadge percentageValue={percentage} />;
  };

  return (
    <div className={styles.container}>
      <div className={styles.statGroup}>
        <span className={styles.label}>Nieuwe klanten</span>
        <div className={styles.valueRow}>
          {newCustomers ? (
            <>
              <Statistic value={newCustomers} className={styles.value} />
              {renderPercentageBadge(newCustomersPercentage)}
            </>
          ) : (
            <span className={styles.value}>-</span>
          )}
        </div>
      </div>

      <div className={styles.statGroup}>
        <span className={styles.label}>Actieve klanten</span>
        <div className={styles.valueRow}>
          {activeCustomers ? (
            <>
              <Statistic value={activeCustomers} className={styles.value} />
              {renderPercentageBadge(activeCustomersPercentage)}
            </>
          ) : (
            <span className={styles.value}>-</span>
          )}
        </div>
      </div>

      <div className={styles.statGroup}>
        <span className={styles.label}>Totaal aantal adressen</span>
        <div className={styles.valueRow}>
          {totalAddresses ? (
            <>
              <Statistic value={totalAddresses} className={styles.value} />
              {renderPercentageBadge(totalAddressesPercentage)}
            </>
          ) : (
            <span className={styles.value}>-</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;
