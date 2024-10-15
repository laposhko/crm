import React from 'react';
import TableHeader from './table-header';
export interface TableProps {
  tableName: string;
  columns: String[];
  items: Object[];
  numberOfRows: number;
}

export default function Table({
  tableName,
  columns,
  items,
  numberOfRows,
}: TableProps) {
  const calculatedHeight = `${numberOfRows * 40}px`;
  return (
    <div style={{ maxHeight: calculatedHeight }} className={`overflow-y-auto`}>
      <table className="text-xs w-full border-collapse">
        <TableHeader columns={columns}></TableHeader>
        <tbody>
          {items.map((item, id) => (
            <tr key={`${id}-${tableName}`} className="h-9 even:bg-gray-100">
              {Object.values(item).map((value, index) => (
                <td key={index} className="text-center">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
