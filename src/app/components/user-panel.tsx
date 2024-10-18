'use client';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectAuthUser } from '../../redux/auth/selectors';
import UserPopupMenu from './user-popup-menu';
import { useState } from 'react';
export interface UserPanelProps {}

export default function UserPanel({}: UserPanelProps) {
  const userData = useSelector(selectAuthUser);
  console.log(userData);
  const [userPopupMenuVisible, setUserPopupMenuVisible] = useState(false);
  return (
    userData.email && (
      <div
        onClick={() => setUserPopupMenuVisible(!userPopupMenuVisible)}
        className="flex gap-3 relative"
      >
        <Image width={44} height={44} src="/images/avatar.png" alt="avatar" />
        <div>
          <p className="text-base	font-semibold text-gray-900">NAME</p>
          <p className="text-sm	font-light text-gray-900">{userData.email}</p>
        </div>
        <UserPopupMenu visibility={userPopupMenuVisible}></UserPopupMenu>
      </div>
    )
  );
}
