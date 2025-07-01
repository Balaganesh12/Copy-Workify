import React from 'react';
import AntdTypography from '../../Typography';
import styles from './index.module.scss';

interface NoResultsProps {
  searchTerm?: string;
}

const EmptyTable: React.FC<NoResultsProps> = ({ searchTerm = '' }) => {
  const searchTermText = (
    <AntdTypography.Text>{searchTerm}</AntdTypography.Text>
  );

  return (
    <div className={styles.emptyTable}>
      <div className={styles.container}>
        <AntdTypography.Title className={styles.emptyTableTitle}>
          Geen resultaten gevonden
        </AntdTypography.Title>
        <AntdTypography.Text type="secondary" className={styles.emptyTableText}>
          Geen klanten gevonden voor {searchTermText}. Probeer te zoeken met een
          andere naam, e-mail of telefoonnummer.
        </AntdTypography.Text>
      </div>
    </div>
  );
};

export default EmptyTable;
