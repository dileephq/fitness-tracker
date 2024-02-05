function MyInformation() {
  return (
    <div className="container mx-auto h-screen flex items-center justify-center">
      <div className="flex-col">
        <p className="block text-gray-900 font-normal mb-2 bg-my-bg-yellow">
          Your daily calorie requirement is -
        </p>
        <div className="p-16 bg-my-bg-gray">
          <h1 className="text-2xl font-normal mb-4">My Information</h1>

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
              placeholder="Enter your height"
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
              placeholder="Enter your weight"
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
              placeholder="Enter your age"
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
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded mr-2"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyInformation
