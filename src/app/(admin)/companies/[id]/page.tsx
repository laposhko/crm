'use client';
import React, { useEffect } from 'react';
import Header from '../../../components/header';
import { notFound } from 'next/navigation';
export interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  useEffect(() => {
    const id = Number.parseInt(params.id);
    if (Number.isNaN(id)) {
      notFound();
    }
  }, [params.id]);
  return (
    <>
      <Header>Companies {params.id}</Header>
      {/* <Toolbar action={<AddCompanyButton></AddCompanyButton>}>
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
      </CompanyTable> */}
    </>
  );
}
