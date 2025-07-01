import SearchInput from '@/components/ui/Private/SearchInput';
import FilterDropDown from './FilterDropDown';
import { FilterDropDownProps } from './FilterDropDown/types';
import styles from './index.module.scss';

const Header = ({
  searchValue,
  onSearch,
  filterDropDowns,
}: {
  searchValue: string;
  onSearch: (value: string) => void;
  filterDropDowns: FilterDropDownProps[];
}) => {
  return (
    <div className={styles.dashboardTableHeader}>
      <div className={styles.dashboardTableHeaderLeft}>
        {filterDropDowns.map((filterDropDown) => (
          <FilterDropDown
            key={filterDropDown.label}
            {...filterDropDown}
            placeholder={filterDropDown.label}
            placeholderWidth={filterDropDown.placeholderWidth}
          />
        ))}
      </div>
      <div className={styles.dashboardTableHeaderRight}>
        <SearchInput
          value={searchValue}
          onChange={(e) => {
            onSearch(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Header;
