import React from 'react';
import DashboardCard from '@/app/components/dashboard-card';
import Table from '@/app/components/table';
export interface PageProps {}

const companies = [
  { name: 'Costco Wholesale', sold: 459, income: 600 },
  { name: 'Costco Wholesale', sold: 459, income: 600 },
  { name: 'Costco Wholesale', sold: 459, income: 600 },
  { name: 'Costco Wholesale', sold: 459, income: 600 },
  { name: 'Costco Wholesale', sold: 459, income: 600 },
  { name: 'Costco Wholesale', sold: 459, income: 600 },
];
export default function Page({}: PageProps) {
  return (
    <DashboardCard label="Sales details">
      <Table columns={['Company', 'Sold', 'Income']} items={companies}></Table>
      {/* <table className="text-xs w-full">
        <thead className="rounded">
          <tr className="h-7 rounded">
            <th className="rounded-tl-sm rounded-bl-sm font-normal bg-gray-900 text-white w-[54%] text-left pl-5">
              Company
            </th>
            <th className="font-normal bg-purple-200 w-[23%] text-center">
              Sold
            </th>
            <th className=" rounded-tr-sm rounded-br-sm font-normal bg-lime-200 text-center ">
              Income
            </th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, id) => (
            <tr key={id} className="h-9 even:bg-gray-100">
              <td className="pl-5">{company.name}</td>
              <td className="text-center">{company.sold}</td>
              <td className="text-center">{company.income}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </DashboardCard>
  );
}
