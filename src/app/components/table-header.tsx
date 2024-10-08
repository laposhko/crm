import React from 'react';

export interface TableHeaderProps {
  columns: String[];
}

export default function TableHeader({ columns }: TableHeaderProps) {
  return (
    <thead className="rounded">
      <tr className="h-7 rounded">
        <th className="rounded-tl-sm rounded-bl-sm font-normal  bg-gray-900 text-white text-left pl-5">
          {columns[0]}
        </th>
        <th className="font-normal bg-purple-200 text-center">{columns[1]}</th>
        <th className="rounded-tr-sm rounded-br-sm font-normal bg-lime-200 text-center ">
          {columns[2]}
        </th>
      </tr>
    </thead>
  );
}
