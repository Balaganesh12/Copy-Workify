export interface BadgeProps {
  textColor: string;
  backgroundColor: string;
}

export interface FilterDropDownProps {
  label: string;
  filterKey: string;
  options: {
    label: string;
    value: string;
    badge?: BadgeProps;
  }[];
  placeholder: string;
  placeholderWidth: string;
}

export type FilterDropDownPropsWithOptional = FilterDropDownProps & {
  value?: string[];
  onChange?: (values: string[]) => void;
};
