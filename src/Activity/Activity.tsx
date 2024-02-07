import { useReducer, useState } from 'react'
import appReducer, { Action, initialState } from '../shared/reducter.ts'

function Activity() {
  const [state, dispatch] = useReducer(appReducer, initialState)
  const activities = state.activities

  const [type, setType] = useState('')
  const [time, setTime] = useState(0)

  //  TODO make it ''activity' instead of 'name'
  const headers = ['name', 'calories', 'date']

  const onSave = () => {
    const date = new Date().toLocaleString()
    const activity: Action = {
      calories: Math.ceil(time * Math.random() * 10),
      date,
      name: type,
    }
    dispatch({ type: 'add-activity', payload: { activity } })
  }

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
            {activities.map((row) => (
              <tr key={row.date}>
                {headers.map((header) => (
                  <td key={header} className=" px-4 py-2">
                    {row[header as keyof Action]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <form
        className="ml-6 p-16 bg-my-bg-gray"
        onSubmit={(e) => {
          e.preventDefault()
          onSave()
        }}
      >
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
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Select activity</option>
            <option value="Running">Running</option>
            <option value="Walking">Walking</option>
            <option value="Swimming">Swimming</option>
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
            value={time}
            onChange={(e) => setTime(e.target.valueAsNumber)}
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
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded mr-2"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default Activity
