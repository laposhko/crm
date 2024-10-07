'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';

export interface SideMenuProps {}
export default function SideMenu({}: SideMenuProps) {
  const pathname = usePathname();
  const router = useRouter();
  function handleExit() {
    router.push('/');
  }
  return (
    <aside className="fixed z-40 top-0 left-0 w-60 h-screen">
      <div className="flex flex-col justify-between h-full bg-gray-900  text-zinc-50 font-medium  py-8 px-4 overflow-y-auto">
        <Image
          className=" mx-auto mb-20"
          alt="logo"
          src={'/icons/logo.svg'}
          width={122}
          height={25}
        />
        <nav>
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                className={clsx(
                  'flex items-center h-9 mx-1 gap-3.5',
                  pathname === '/dashboard' &&
                    'after:h-full after:ml-auto after:border-2 after:border-purple-200 after:rounded-sm'
                )}
                href={'/dashboard'}
              >
                <Image
                  alt="squares icon"
                  src={'/icons/squares.svg'}
                  width={18}
                  height={18}
                ></Image>
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                className={clsx(
                  'flex items-center h-9 mx-1 gap-3.5',
                  pathname === '/companies' &&
                    'after:h-full after:ml-auto after:border-2 after:border-purple-200 after:rounded-sm'
                )}
                href={'/companies'}
              >
                <Image
                  alt="briefcase icon"
                  src={'/icons/briefcase.svg'}
                  width={18}
                  height={18}
                ></Image>
                <span>Companies</span>
              </Link>
            </li>
          </ul>
        </nav>
        <button
          onClick={handleExit}
          className="flex gap-2 items-center mt-auto mx-auto"
        >
          <Image
            alt="exit icon"
            src={'/icons/exit.svg'}
            width={18}
            height={18}
          ></Image>
          Exit
        </button>
      </div>
      {/* <div className="w-60 h-screen flex  bg-gray-900 text-white p-5 justify-between flex-col">

      </div> */}
    </aside>
  );
}
