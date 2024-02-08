import SimpleTable from './SimpleTable.tsx'
import { AppActions, AppState } from '../shared/reducter.ts'
import { Dispatch, useEffect, useState } from 'react'

type HomeProps = {
  state: AppState
  dispatch: Dispatch<AppActions>
}
const Home = ({ state }: HomeProps) => {
  const { info, activities, meals } = state
  const logs = [...activities, ...meals]

  const transformedLogs = logs.map(({ name, ...rest }) => ({
    log: name,
    ...rest,
  }))

  const [calorieRequirement, setCalorieRequirement] = useState(0)

  // TODO custom hook
  useEffect(() => {
    if (Object.keys(info).length !== 0) {
      setCalorieRequirement(Math.ceil((info.height * info.weight) / info.age))
    }
  }, [info])

  const headers = ['log', 'date', 'calories']

  return (
    <div className="container min-h-screen mx-auto flex items-center justify-center">
      <div>
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <SimpleTable
          calorieRequirement={calorieRequirement}
          logs={transformedLogs}
          headers={headers}
        />
        <button
          type="button"
          className="bg-gray-400 mt-4 hover:bg-gray-500 text-white font-normal px-8 rounded"
        >
          Clear Data
        </button>
      </div>
    </div>
  )
}

export default Home
