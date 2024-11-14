'use client';
import React, { useEffect, use } from 'react';
import Header from '../../../components/header';
import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';

export interface PageProps {
  // params: {
  //   id: string;
  // };
}

// async function fetchParams(params: PageProps['params']) {
//   return params;
// }

function Page({}: PageProps) {
  // const unwrappedParams = use(fetchParams(params));

  // useEffect(() => {
  //   const id = Number.parseInt(unwrappedParams.id);
  //   if (Number.isNaN(id)) {
  //     notFound();
  //   }
  // }, [unwrappedParams.id]);
  return (
    <div className="py-6 px-10">
      <p>{`Information about company`}</p>
    </div>
  );
}

export default Page;
