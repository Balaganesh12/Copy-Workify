'use client';

import DashboardHeader from '@/components/layout/Dashboard/Header';
import Overview from '@/components/layout/Dashboard/Overview';
import Graph from '@/components/layout/Dashboard/Overview/Section/Graph';
import PieChart from '@/components/layout/Dashboard/Overview/Section/PieChart';
import StatisticsCard from '@/components/layout/Dashboard/Overview/Section/StatisticsCard';
import DashboardTable from '@/components/layout/Dashboard/Table';
import React from 'react';
import { ClientDataType } from '../types';
import columns from './Table/columns';
import TableFilters from './Table/filters';
import { dashboardConfig } from './config';

const Dashboard = ({ dataSource }: { dataSource: ClientDataType[] }) => {
  const filterDropDowns = TableFilters(dataSource);

  return (
    <React.Fragment>
      <DashboardHeader dashboardHeader={dashboardConfig.dashboardHeader} />
      <Overview>
        <PieChart />
        <Graph />
        <StatisticsCard
          newCustomers={100}
          activeCustomers={100}
          totalAddresses={100}
          newCustomersPercentage={20}
          activeCustomersPercentage={20}
          totalAddressesPercentage={20}
        />
      </Overview>
      <DashboardTable
        columns={columns}
        dataSource={dataSource}
        filterDropDowns={filterDropDowns}
      />
    </React.Fragment>
  );
};

export default Dashboard;
