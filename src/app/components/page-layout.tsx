import React from 'react';
import SideMenu from './side-menu';
interface PageLayoutProps {
  children: React.ReactNode;
}
export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex">
      <SideMenu></SideMenu>
      <div>{children}</div>
    </div>
  );
}
