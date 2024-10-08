import React from 'react';
import StatCard from '@/app/components/stat-card';
import { StatCardType } from '@/app/components/stat-card';
import DashboardCard from '@/app/components/dashboard-card';
export interface PageProps {}
const categories = [
  { name: 'Products', amount: 22 },
  { name: 'Products', amount: 22 },
  { name: 'Products', amount: 22 },
  { name: 'Products', amount: 22 },
  { name: 'Products', amount: 22 },
  { name: 'Products', amount: 22 },
  { name: 'Products', amount: 22 },
  { name: 'Products', amount: 22 },
];
export default function Page({}: PageProps) {
  return (
    <DashboardCard label="Categories of companies">
      <ul className="grid grid-cols-12 gap-3 pb-5 px-5">
        {categories.map((category, id) => (
          <StatCard
            key={id}
            type={StatCardType.Dark}
            label={category.name}
            counter={category.amount}
          ></StatCard>
        ))}
      </ul>
    </DashboardCard>
  );
}
