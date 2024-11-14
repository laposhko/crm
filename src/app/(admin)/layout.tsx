'use client';
import React, { useState, useEffect } from 'react';
import SideMenu from '../components/side-menu';
import { usePathname, useRouter } from 'next/navigation';
import Modal from '../components/modal';
import SettingsForm from '../components/settings-form';
interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  useEffect(() => {
    if (pathname.includes('/settings')) {
      setIsSettingsModalOpen(true);
    } else {
      setIsSettingsModalOpen(false);
    }
  }, [pathname]);

  return (
    <>
      <SideMenu></SideMenu>
      <div className="ml-60">{children}</div>
      {isSettingsModalOpen && (
        <Modal
          show={isSettingsModalOpen}
          onClose={() => {
            setIsSettingsModalOpen(false);
            router.back();
          }}
        >
          <SettingsForm></SettingsForm>
        </Modal>
      )}
    </>
  );
}
