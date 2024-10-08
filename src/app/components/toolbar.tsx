import React from 'react';

export interface ToolbarProps {
  children: React.ReactNode;
  action?: React.ReactNode;
}

export default function Toolbar({ children, action }: ToolbarProps) {
  return (
    <div className="flex items-center justify-between gap-7 py-8 px-10">
      {children}
    </div>
    // <div className="flex  gap-7 py-8 px-10">
    //   <div className="flex">{children}</div>
    //   {/* {action} */}
    // </div>
  );
}
