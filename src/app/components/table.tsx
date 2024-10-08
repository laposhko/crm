import React from 'react';
import TableHeader from './table-header';
export interface TableProps {
  columns: String[];
  items: Object[];
}

export default function Table({ columns, items }: TableProps) {
  return (
    <table className="text-xs w-full">
      <TableHeader columns={columns}></TableHeader>
      <tbody>
        {items.map((item, id) => (
          <tr key={id} className="h-9 even:bg-gray-100">
            {Object.values(item).map((value, index) => (
              <td key={index} className="text-center">
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
