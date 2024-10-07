import React from 'react';
import StatCard from '@/app/components/stat-card';
import { StatCardType } from '@/app/components/stat-card';
import DashboardCard from '@/app/components/dashboard-card';
export interface CategoriesProps {}
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
export default function Categories({}: CategoriesProps) {
  return (
    <DashboardCard label="Categories of companies">
      <ul className="grid grid-cols-12 gap-3 pb-5 px-5">
        {categories.map((category) => (
          <StatCard
            type={StatCardType.Dark}
            label={category.name}
            counter={category.amount}
          ></StatCard>
        ))}
      </ul>
    </DashboardCard>
  );
}
