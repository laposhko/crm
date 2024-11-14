import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
  header: React.ReactNode;
  newModal: React.ReactNode;
  toolbar: React.ReactNode;
}

export default function Layout({
  children,
  header,
  newModal,
  toolbar,
}: LayoutProps) {
  return (
    <>
      {newModal}
      {/* {settingsModal} */}
      {header}
      <main className="">
        {toolbar}
        {children}
      </main>
    </>
  );
}
