'use client';
import React, { useEffect, use } from 'react';
import Header from '@/app/components/header';
import { notFound } from 'next/navigation';
export interface PageProps {
  // params: {
  //   id: string;
  // };
}
// async function fetchParams(params: PageProps['params']) {
//   return params;
// }
export default function Page({}: PageProps) {
  // const unwrappedParams = use(fetchParams(params));

  // useEffect(() => {
  //   const id = Number.parseInt(unwrappedParams.id);
  //   if (Number.isNaN(id)) {
  //     notFound();
  //   }
  // }, [unwrappedParams.id]);
  return <Header>Company ssaaaaaassss</Header>;
}
