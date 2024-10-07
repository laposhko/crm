import React from 'react';
import Header from '../../components/header';
import Toolbar from '../../components/toolbar';
import SearchInput from '../../components/search-input';
import AddCompanyButton from '../../components/add-company-button';
import CompanyTable from '../../components/company-table';
import CompanyRow from '../../components/company-row';
import { Status } from '../../components/status-label';
export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton></AddCompanyButton>}>
        <SearchInput></SearchInput>
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={1}
          category={'Preoducts'}
          company={'Costro'}
          status={Status.Pending}
          promotion={true}
          country="USA"
          joinedDate={'02.02.2022'}
        ></CompanyRow>
      </CompanyTable>
    </>
  );
}
