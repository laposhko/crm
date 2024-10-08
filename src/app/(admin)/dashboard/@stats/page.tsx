import React from 'react';
import StatCard from '@/app/components/stat-card';
import { StatCardType } from '@/app/components/stat-card';
export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <ul className="grid grid-cols-12 gap-5">
      <StatCard
        type={StatCardType.Gradient}
        label="Total promotions"
        counter={432}
      ></StatCard>
      <StatCard
        type={StatCardType.Gradient}
        label="Total category"
        counter={8}
      ></StatCard>
      <StatCard
        type={StatCardType.Gradient}
        label="New companies"
        counter={28}
      ></StatCard>
      <StatCard
        type={StatCardType.Gradient}
        label="Total active companies"
        counter={670}
      ></StatCard>
    </ul>
  );
}
