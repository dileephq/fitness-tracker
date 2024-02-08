import React from 'react'

export type Log = {
  log: string
  date: string
  calories: number
}

export interface TableProps {
  logs: Log[]
  headers: string[]
  calorieRequirement: number
}

const SimpleTable: React.FC<TableProps> = ({
  calorieRequirement,
  logs,
  headers,
}) => {
  let sum = 0
  logs.forEach((obj) => {
    sum += obj.calories
  })

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
        {/* TODO order of display is jumping*/}
        {logs.map((log) => (
          <tr key={log.date}>
            {headers.map((header) => (
              <td key={header} className="border px-4 py-2">
                {log[header as keyof Log]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <TableFooter calorieRequirement={calorieRequirement} sum={sum} />
    </table>
  )
}

export interface FooterProps {
  calorieRequirement: number
  sum: number
}
function TableFooter({ calorieRequirement, sum }: FooterProps) {
  return (
    <tbody className="bg-my-bg-gray">
      <tr className="font-bold">
        <td className="px-4 py-2 ">Net Calories Consumed</td>
        <td className="px-4 py-2 ">{sum}</td>
        <td />
      </tr>
      <tr className="font-bold">
        <td className="px-4 py-2 ">Daily Calories Required</td>
        <td className="px-4 py-2 ">{calorieRequirement}</td>
        <td />
      </tr>
      <tr className="font-bold">
        <td className="px-4 py-2 ">Balance</td>
        <td className="px-4 py-2 ">{calorieRequirement - sum}</td>
        <td />
      </tr>
    </tbody>
  )
}

export default SimpleTable
