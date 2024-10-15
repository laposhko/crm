import React from 'react';
import DashboardCard from '@/app/components/dashboard-card';
import Table from '@/app/components/table';
import { getPromotions } from '@/lib/api';
export interface PageProps {}

export default async function Page({}: PageProps) {
  const promotions = await getPromotions();
  const filteredPromotions = promotions.map(
    ({ companyTitle, title, discount }) => ({
      companyTitle,
      title,
      discount: `-${discount}%`,
    })
  );
  return (
    <DashboardCard label="Promotions">
      <Table
        tableName="promotions"
        columns={['Company', 'Name', '%']}
        items={filteredPromotions}
        numberOfRows={7}
      ></Table>
    </DashboardCard>
  );
}
