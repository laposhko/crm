import clsx from 'clsx';
import React from 'react';
import { useAppDispatch } from '@/lib/hooks/useAppDispatch';
import { useRouter } from 'next/navigation';
import { logOut } from '@/redux/auth/operations';
export interface UserPopupMenuProps {
  visibility: boolean;
}

export default function UserPopupMenu({ visibility }: UserPopupMenuProps) {
  console.log(visibility);
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <ul
      className={clsx(
        ' top-[110%] right-0 p-4 rounded bg-gray-900',
        visibility ? 'absolute' : 'hidden'
      )}
    >
      <li
        className="text-white hover:text-lime-200"
        onClick={() => router.push('/dashboard/settings')}
      >
        Settings
      </li>
      <li
        className="text-white hover:text-lime-200"
        onClick={() => {
          dispatch(logOut());
          router.push('/');
        }}
      >
        Logout
      </li>
    </ul>
  );
}
