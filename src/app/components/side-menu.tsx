'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';
import { logOut } from '@/redux/auth/operations';
import { useAppDispatch } from '@/lib/hooks/useAppDispatch';
import { toast, ToastContainer } from 'react-toastify';
import { useState } from 'react';
import Modal from './modal';
import Button from './button';
export interface SideMenuProps {}
export default function SideMenu({}: SideMenuProps) {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [exitModalVisibility, setExitModalVisibility] =
    useState<boolean>(false);
  return (
    <aside className="fixed z-40 top-0 left-0 w-60 h-screen">
      <div className="flex flex-col justify-between h-full bg-gray-900  text-zinc-50 font-medium  py-8 px-4 overflow-y-auto">
        <div>
          {' '}
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
        </div>

        <div className="flex flex-col gap-2">
          <button
            className="flex gap-2 items-center mt-auto mx-auto"
            onClick={() => router.push(`${pathname}/settings`)}
          >
            <Image
              alt="settings icon"
              src={'/icons/settings.svg'}
              width={18}
              height={18}
            ></Image>
            Settings
          </button>
          <button
            onClick={() => {
              setExitModalVisibility(true);
            }}
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
      </div>
      <Modal
        show={exitModalVisibility}
        onClose={() => setExitModalVisibility(false)}
      >
        <h3 className="m-4">Are you sure you want to exit?</h3>
        <div className="flex gap-8">
          <Button
            onClick={() => {
              dispatch(logOut());
              router.push('/');
              toast.success('Successfully signed out');
            }}
          >
            Yes
          </Button>
          <Button
            onClick={() => {
              setExitModalVisibility(false);
            }}
          >
            No
          </Button>
        </div>
      </Modal>
    </aside>
  );
}
