interface TableRow {
  id: number
  activity: string
  date: string
  calories: number
}
function Activity() {
  const formattedDateTime = new Date().toLocaleString()

  const tableData: TableRow[] = [
    {
      id: 1,
      activity: 'walking',
      date: formattedDateTime,
      calories: 54.45,
    },
    {
      id: 2,
      activity: 'running',
      date: formattedDateTime,
      calories: 254.4,
    },
  ]

  const headers = ['activity', 'calories', 'date']

  return (
    <div className="container min-h-screen mx-auto flex items-center justify-center">
      <div className="bg-my-bg-yellow p-16">
        <h1 className="text-2xl font-bold mb-4">Activity Logs</h1>
        <table className="table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="border-b">
              {headers.map((header) => (
                <th key={header} className="px-4 py-2 capitalize text-start">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id}>
                {headers.map((header) => (
                  <td key={header} className=" px-4 py-2">
                    {row[header as keyof TableRow]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="ml-6 p-16 bg-my-bg-gray">
        <h1 className="text-2xl font-bold mb-4">Add Activity</h1>
        <div className="mb-4">
          <label
            htmlFor="activityType"
            className="block text-gray-700 font-normal mb-2"
          >
            Activity Type
          </label>
          <select
            id="activityType"
            className="border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none"
          >
            <option value="">Select activity</option>
            <option value="running">Running</option>
            <option value="walking">Walking</option>
            <option value="swimming">Swimming</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="time"
            className="block text-gray-700 font-normal mb-2"
          >
            Time (min)
          </label>
          <input
            type="number"
            id="time"
            className="border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none"
          />
        </div>
        <div className="flex justify-evenly mt-5">
          <button
            type="button"
            className="bg-gray-400 hover:bg-gray-500 text-white font-normal py-2 px-4 rounded mr-2"
          >
            Cancel
          </button>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded mr-2"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default Activity
