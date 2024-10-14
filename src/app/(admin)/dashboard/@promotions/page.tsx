import React from 'react';
import DashboardCard from '@/app/components/dashboard-card';
import Table from '@/app/components/table';
import { getPromotions } from '@/lib/api';
export interface PageProps {}

export default async function Page({}: PageProps) {
  const promotions = await getPromotions();
  console.log(promotions);
  return (
    <DashboardCard label="Promotions">
      <Table columns={['Company', 'Name', '%']} items={promotions}></Table>
    </DashboardCard>
  );
}
