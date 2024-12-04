'use client';

import React from 'react';
import CompanyForm from '@/app/components/company-form';
import { createCompany, Company } from '@/lib/api';
import { CompanyFieldValues } from '@/app/components/company-form';
export interface PageProps {}

// export interface Company {
//   id: string;
//   title: string;
//   description: string;
//   status: CompanyStatus;
//   joinedDate: string;
//   hasPromotions: boolean;
//   categoryId: string;
//   categoryTitle: string;
//   countryId: string;
//   countryTitle: string;
//   avatar?: string;
// }
// export type CompanyFieldValues = {
//   name: string;
//   status: CompanyStatus | '';
//   country: string;
//   category: string;
//   date: string;
//   description: string;
// };
export default function Page({}: PageProps) {
  return (
    <div className="py-6 px-10">
      <CompanyForm />
    </div>
  );
}
