import React from 'react';
import DashboardCard from '@/app/components/dashboard-card';
import Table from '@/app/components/table';

const promotions = [
  { company: 'Costco Wholesale', name: 'Norem ipsum dolor', discount: '-40%' },
  { company: 'Costco Wholesale', name: 'Norem ipsum dolor', discount: '-40%' },
  { company: 'Costco Wholesale', name: 'Norem ipsum dolor', discount: '-40%' },
  { company: 'Costco Wholesale', name: 'Norem ipsum dolor', discount: '-40%' },
  { company: 'Costco Wholesale', name: 'Norem ipsum dolor', discount: '-40%' },
  { company: 'Costco Wholesale', name: 'Norem ipsum dolor', discount: '-40%' },
  { company: 'Costco Wholesale', name: 'Norem ipsum dolor', discount: '-40%' },
];
export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <DashboardCard label="Promotions">
      <Table columns={['Company', 'Name', '%']} items={promotions}></Table>
    </DashboardCard>
  );
}
