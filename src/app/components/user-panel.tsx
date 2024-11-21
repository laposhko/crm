'use client';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectAuthUser } from '../../redux/auth/selectors';
export interface UserPanelProps {}

export default function UserPanel({}: UserPanelProps) {
  const userData = useSelector(selectAuthUser);
  console.log(userData);
  return (
    userData &&
    userData.email && (
      <div className="flex gap-3 relative">
        <img
          className="rounded-full w-11 h-11"
          width={44}
          height={44}
          src={userData.photoURL}
          alt="avatar"
        />
        <div>
          <p className="text-base	font-semibold text-gray-900">
            {userData.displayName}
          </p>
          <p className="text-sm	font-light text-gray-900">{userData.email}</p>
        </div>
      </div>
    )
  );
}
