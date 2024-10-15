import React from 'react';
import CompanyTable from '../../components/company-table';
import CompanyRow from '../../components/company-row';
import { Status } from '../../components/status-label';
import { getCompanies } from '@/lib/api';
import mapStatusToEnum from '@/lib/utils/mapStatusToEnum';
export interface PageProps {}

export default async function Page({}: PageProps) {
  const companies = await getCompanies();

  return (
    <CompanyTable>
      {companies.map((company, id) => (
        <CompanyRow
          key={id}
          id={id}
          category={company.categoryTitle || 'Products'}
          company={company.title}
          status={mapStatusToEnum(company.status)}
          promotion={company.hasPromotions}
          country={company.countryTitle}
          joinedDate={company.joinedDate}
        ></CompanyRow>
      ))}
    </CompanyTable>
  );
}
