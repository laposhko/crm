import React from 'react';
import StatCard from '@/app/components/stat-card';
import { StatCardType } from '@/app/components/stat-card';
import DashboardCard from '@/app/components/dashboard-card';
import { getCategories } from '@/lib/api';
export interface PageProps {}

export default async function Page({}: PageProps) {
  const categories = await getCategories();
  console.log(categories);
  return (
    <DashboardCard label="Categories of companies">
      <ul className="grid grid-cols-12 gap-3 pb-5 px-5">
        {categories.map((category, id) => (
          <StatCard
            key={id}
            type={StatCardType.Dark}
            label={category.title}
            counter={category.id}
          ></StatCard>
        ))}
      </ul>
    </DashboardCard>
  );
}
