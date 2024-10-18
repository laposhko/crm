'use client';

import React from 'react';
import SettingsForm from '@/app/components/settings-form';
export interface PageProps {}

export default function Page({}: PageProps) {
  console.log('form 1');
  return (
    <div className="py-6 px-10">
      <SettingsForm />
    </div>
  );
}
