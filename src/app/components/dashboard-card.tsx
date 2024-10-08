import React from 'react';

export interface DashboardCardProps {
  children: React.ReactNode;
  label: string;
}

export default function DashboardCard({ children, label }: DashboardCardProps) {
  return (
    <div className="pt-7 bg-gray-100 rounded h-full">
      <h2 className="mb-5 ml-5">{label}</h2>
      {children}
    </div>
  );
}
