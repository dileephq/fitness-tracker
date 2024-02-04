function MyInformation() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Basic Information</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="mb-4">
          <label
            htmlFor="height"
            className="block text-gray-700 font-bold mb-2"
          >
            Height (cm)
          </label>
          <input
            type="number"
            id="height"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your height"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="weight"
            className="block text-gray-700 font-bold mb-2"
          >
            Weight (kg)
          </label>
          <input
            type="number"
            id="weight"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your weight"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-700 font-bold mb-2">
            Age
          </label>
          <input
            type="number"
            id="age"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your age"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="gender"
            className="block text-gray-700 font-bold mb-2"
          >
            Gender
          </label>
          <select
            id="gender"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="activityLevel"
            className="block text-gray-700 font-bold mb-2"
          >
            Activity Level
          </label>
          <select
            id="activityLevel"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select activity</option>
            <option value="sedentary">Sedentary</option>
            <option value="light">Light Exercise</option>
            <option value="moderate">Moderate Exercise</option>
            <option value="intense">Intense Exercise</option>
          </select>
        </div>
      </div>
      <div className="flex justify-evenly mt-4">
        <button
          type="button"
          className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Cancel
        </button>
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default MyInformation
