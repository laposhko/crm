import React from 'react';
import StatCard from '@/app/components/stat-card';
import { StatCardType } from '@/app/components/stat-card';
import { getSummaryStats } from '@/lib/api';
export interface PageProps {}

export default async function Page({}: PageProps) {
  const data = await getSummaryStats();
  return (
    <ul className="grid grid-cols-12 gap-5">
      <StatCard
        type={StatCardType.Gradient}
        label="Total promotions"
        counter={Number(data.promotions)}
      ></StatCard>
      <StatCard
        type={StatCardType.Gradient}
        label="Total category"
        counter={data.categories}
      ></StatCard>
      <StatCard
        type={StatCardType.Gradient}
        label="New companies"
        counter={data.newCompanies}
      ></StatCard>
      <StatCard
        type={StatCardType.Gradient}
        label="Total active companies"
        counter={data.activeCompanies}
      ></StatCard>
    </ul>
  );
}
