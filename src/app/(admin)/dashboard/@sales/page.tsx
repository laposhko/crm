import React from 'react';
import DashboardCard from '@/app/components/dashboard-card';
import Table from '@/app/components/table';
import { getSummarySales } from '@/lib/api';
export interface PageProps {}
// const companies = [
//   { name: 'Costco Wholesale', sold: 459, income: 600 },
//   { name: 'Costco Wholesale', sold: 459, income: 600 },
//   { name: 'Costco Wholesale', sold: 459, income: 600 },
//   { name: 'Costco Wholesale', sold: 459, income: 600 },
//   { name: 'Costco Wholesale', sold: 459, income: 600 },
//   { name: 'Costco Wholesale', sold: 459, income: 600 },
// ];
export default async function Page({}: PageProps) {
  const sales = await getSummarySales();
  const filteredSales = sales.map(({ companyTitle, sold, income }) => ({
    companyTitle,
    sold,
    income,
  }));
  return (
    <DashboardCard label="Sales details">
      <Table
        tableName="sales"
        columns={['Company', 'Sold', 'Income']}
        items={filteredSales}
        numberOfRows={6}
      ></Table>
    </DashboardCard>
  );
}
