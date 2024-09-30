import exp from 'constants';
import React from 'react';
import styles from './active-label.module.css';
export const enum Status {
  Active = 'active',
  NotActive = 'notActive',
  Pending = 'pending',
  Suspended = 'suspended',
}
export interface StatusLabelProps {
  children: React.ReactNode;
  status: Status;
}

export default function StatusLabel({ children, status }: StatusLabelProps) {
  return (
    <span
      className={`inline-flex items-center rounded-[28px] px-[14px] py-[4px] w-[83px] h-[28px] 
        ${
          (status === Status.Active && 'text-green-700 bg-green-100') ||
          (status === Status.NotActive && 'text-red-700 bg-red-100') ||
          (status === Status.Pending && 'text-orange-700 bg-orange-100') ||
          (status === Status.Suspended && 'text-blue-700 bg-blue-100') ||
          ''
        }`}
    >
      <div className="w-1 h-1 mr-1 rounded-full bg-current"></div>
      {children}
    </span>
  );
}
