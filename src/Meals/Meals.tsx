import { useReducer, useState } from 'react'
import appReducer, { initialState, Action } from '../shared/reducter.ts'

function Meals() {
  const [state, dispatch] = useReducer(appReducer, initialState)
  const meals = state.meals

  const [name, setName] = useState('')
  const [calories, setCalories] = useState(0)

  //  TODO make it ''meal' instead of 'name'
  const headers = ['name', 'calories', 'date']

  const onSave = () => {
    const date = new Date().toLocaleString()
    const meal: Action = {
      calories,
      date,
      name,
    }
    dispatch({ type: 'add-meal', payload: { meal } })
  }

  return (
    <div className="container min-h-screen mx-auto flex items-center justify-center">
      <div className="bg-my-bg-yellow p-16">
        <h1 className="text-2xl font-bold mb-4">Meal Logs</h1>
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
            {meals.map((meal) => (
              <tr key={meal.date}>
                {headers.map((header) => (
                  <td key={header} className=" px-4 py-2">
                    {meal[header as keyof Action]}
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
        <h1 className="text-2xl font-bold mb-4">Add Meal</h1>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-normal mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="calories"
            className="block text-gray-700 font-normal mb-2"
          >
            Calories
          </label>
          <input
            type="number"
            id="calories"
            className="border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none"
            value={calories}
            onChange={(e) => setCalories(e.target.valueAsNumber)}
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

export default Meals
