export type Dashboard = {
  header: DashboardHeader;
  DashboardOverview: DashboardOverview;
};

export type DashboardHeader = {
  showHeader: boolean;
  showTitle: boolean;
  title: string;
  actions: DashboardAction;
};

export type DashboardAction = {
  showAddButton: boolean;
  addButtonText?: string;
  addButtonRoute?: string;
  showExportButton?: boolean;
};

export type DashboardOverview = {
  showDashboardOverview: boolean;
  dashboardOverviewHeader: {
    showPeriodFilterTabs: boolean;
    PeriodFilterTabs: PeriodFilterTabs;
    DateRangeFilter: DateRangeFilter;
    ComparePeriod: ComparePeriod;
  };
  dashboardOverviewBody: DashboardOverviewBody;
};

export type DashboardOverviewData = {
  lineChartData: SeriesData[];
  pielineChartData: {
    name: string;
    data: number[];
    labels: string[];
  };
};

export interface SeriesData {
  name: string;
  data: number[];
}

export type PeriodFilterTabs = {
  showPeriodFilterTabs: boolean;
  onPeriodChange: (period: string) => void;
};

export type DateRangeFilter = {
  showDateRangeFilter?: boolean;
  selectedDates: [string | null, string | null];
  onDateChange: (dates: [string | null, string | null]) => void;
};

export type ComparePeriod = {
  showComparisonIndicator: boolean;
  text?: string;
  className?: string;
};

export type DashboardOverviewBody = {
  showDashboardOverviewBody: boolean;
  dashboardOverviewBodyData: GraphData;
  dashboardOverviewBodyEmptyState: DashboardOverviewBodyEmptyState[];
};

export type DashboardOverviewBodyEmptyState = {
  label: string;
  value: string;
  percentage: string;
  color: string;
};

export type GraphData = {
  lineChartGrowth: {
    percentage: number;
    trend: 'increase' | 'decrease';
  };
  lineChartData: Array<{
    name: string;
    data: number[];
  }>;
  pielineChartData: {
    name: string;
    data: number[];
    labels: string[];
    colors: string[];
    title: string;
    subtitle: string;
  };
  totalRequests: {
    count: number;
    percentage: number;
    title: string;
    subtitle: string;
  };
  dataNumbers: {
    totalData: number;
    newTitle: string;
    newData: number;
    newPercentage: number;
    conversionTitle: string;
    conversionData: number;
    conversionPercentage: number;
    lostTitle: string;
    lostData: number;
    lostPercentage: number;
  };
};
