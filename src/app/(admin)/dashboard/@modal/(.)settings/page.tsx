'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Modal from '@/app/components/modal';
import SettingForm from '@/app/components/settings-form';
export interface PageProps {}

export default function Page({}: PageProps) {
  const router = useRouter();
  console.log('form');
  return (
    <Modal show={true} onClose={() => router.back()}>
      <SettingForm></SettingForm>
    </Modal>
  );
}
