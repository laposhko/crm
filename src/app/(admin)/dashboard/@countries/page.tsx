import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import DashboardCard from '@/app/components/dashboard-card';
export interface CountriesProps {}
const countries = [
  { name: 'Canada', amount: 4 },
  { name: 'Canada', amount: 4 },
  { name: 'Canada', amount: 4 },
  { name: 'Canada', amount: 4 },
  { name: 'Canada', amount: 4 },
];
export default function Countries({}: CountriesProps) {
  return (
    <DashboardCard label="Countries of companies">
      <div className="flex items-end pb-5 px-5 gap-2 justify-end relative">
        <ul className="absolute left-5">
          {countries.map((country, id) => (
            <li
              key={id}
              className={clsx(
                'text-sm font-medium flex items-center',
                'before:inline-block before:w-2 before:h-2 before:rounded-full before:align-middle before:mr-2 before:bg-purple-200'
              )}
            >
              <p className="h-5 text-sm font-medium text-left">
                {country.name} - {country.amount}
              </p>
            </li>
          ))}
        </ul>
        <Image
          // className="absolute"
          src={'/images/world.svg'}
          alt="world"
          width={350}
          height={260}
        ></Image>
      </div>
    </DashboardCard>
  );
}