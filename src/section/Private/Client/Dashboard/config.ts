import { DashboardHeaderProps } from '@/components/layout/Dashboard/Header/type';
import { pageRoutes } from '@/constants/routes';

export const dashboardConfig: DashboardHeaderProps = {
  dashboardHeader: {
    createButton: {
      label: 'Nieuwe klant',
      href: pageRoutes.CLIENTS.create,
    },
  },
};
