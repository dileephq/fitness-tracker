import React from 'react'

interface TableRow {
  id: number
  log: string
  time: string
  calories: number
}

export interface TableProps {
  data: TableRow[]
  headers: string[]
}

function TableFooter() {
  return (
    <tbody className="bg-my-bg-gray">
      <tr className="font-bold">
        <td className="px-4 py-2 ">Net Calories Consumed</td>
        <td className="px-4 py-2 ">182.5</td>
        <td />
      </tr>
      <tr className="font-bold">
        <td className="px-4 py-2 ">Daily Calories Required</td>
        <td className="px-4 py-2 ">2500.0</td>
        <td />
      </tr>
      <tr className="font-bold">
        <td className="px-4 py-2 ">Balance</td>
        <td className="px-4 py-2 ">150.0</td>
        <td />
      </tr>
    </tbody>
  )
}

const SimpleTable: React.FC<TableProps> = ({ data, headers }) => {
  return (
    <table className="table-auto border-collapse border border-gray-200">
      <thead className="bg-my-bg-gray">
        <tr>
          {headers.map((header) => (
            <th key={header} className="px-4 py-2 border capitalize text-start">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {headers.map((header) => (
              <td key={header} className="border px-4 py-2">
                {row[header as keyof TableRow]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <TableFooter />
    </table>
  )
}

export default SimpleTable
