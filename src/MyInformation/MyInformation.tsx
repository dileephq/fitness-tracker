import { AppActions, AppState, PersonalInfo } from '../shared/reducter.ts'
import { Dispatch, useEffect, useState } from 'react'

type MyInformationProps = {
  state: AppState
  dispatch: Dispatch<AppActions>
}
const MyInformation = ({ state, dispatch }: MyInformationProps) => {
  const { info } = state

  const [height, setHeight] = useState(info.height | 0)
  const [weight, setWeight] = useState(info.weight | 0)
  const [age, setAge] = useState(info.age | 0)
  const [gender, setGender] = useState(info.gender ?? '')
  const [activityLevel, setActivityLevel] = useState(info.activityLevel ?? '')
  const [calorieRequirement, setCalorieRequirement] = useState(0)

  useEffect(() => {
    if (Object.keys(info).length !== 0) {
      setCalorieRequirement(Math.ceil(info.height * Math.random() * 20))
    }
  }, [info])

  const onSave = () => {
    const info: PersonalInfo = {
      height,
      weight,
      age,
      gender,
      activityLevel,
    }
    setCalorieRequirement(Math.ceil(info.height * Math.random() * 200))
    dispatch({ type: 'add-info', payload: { info } })
  }

  return (
    <div className="container min-h-screen mx-auto flex items-center justify-center">
      <div className="flex-col">
        {calorieRequirement > 0 && (
          <p className="block text-gray-700 text-center font-medium mb-2 bg-my-bg-yellow p-2">
            Your daily calorie requirement is {calorieRequirement}
          </p>
        )}
        <form
          className="p-16 bg-my-bg-gray"
          onSubmit={(e) => {
            e.preventDefault()
            onSave()
          }}
        >
          <h1 className="text-2xl font-bold mb-4">My Information</h1>

          <div className="mb-4">
            <label
              htmlFor="height"
              className="block text-gray-700 font-normal mb-2"
            >
              Height (cm)
            </label>
            <input
              type="number"
              id="height"
              className="border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none"
              value={height}
              onChange={(e) => setHeight(e.target.valueAsNumber)}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="weight"
              className="block text-gray-700 font-normal mb-2"
            >
              Weight (kg)
            </label>
            <input
              type="number"
              id="weight"
              className="border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none"
              value={weight}
              onChange={(e) => setWeight(e.target.valueAsNumber)}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="age"
              className="block text-gray-700 font-normal mb-2"
            >
              Age
            </label>
            <input
              type="number"
              id="age"
              className="border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none"
              value={age}
              onChange={(e) => setAge(e.target.valueAsNumber)}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="gender"
              className="block text-gray-700 font-normal mb-2"
            >
              Gender
            </label>
            <select
              id="gender"
              className="border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="activityLevel"
              className="block text-gray-700 font-normal mb-2"
            >
              Activity Level
            </label>
            <select
              id="activityLevel"
              className="border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none"
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
            >
              <option value="">Select activity</option>
              <option value="sedentary">Sedentary</option>
              <option value="light">Light Exercise</option>
              <option value="moderate">Moderate Exercise</option>
              <option value="intense">Intense Exercise</option>
            </select>
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
    </div>
  )
}

export default MyInformation
