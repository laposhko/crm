import React from 'react';
import SideMenu from '../components/side-menu';
interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <SideMenu></SideMenu>
      <div className="ml-60">{children}</div>
    </>
  );
}
