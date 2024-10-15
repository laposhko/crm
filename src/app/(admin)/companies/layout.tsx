import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
  header: React.ReactNode;
  modal: React.ReactNode;
  toolbar: React.ReactNode;
}

export default function Layout({
  children,
  header,
  modal,
  toolbar,
}: LayoutProps) {
  return (
    <>
      {modal}
      {header}
      <main className="">
        {toolbar}
        {children}
      </main>
    </>
  );
}
