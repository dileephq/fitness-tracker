import SimpleTable from './SimpleTable.tsx'

function Home() {
  const formattedDateTime = new Date().toLocaleString()

  const tableData = [
    {
      id: 1,
      log: 'Did walking',
      time: formattedDateTime,
      calories: 54.4,
    },
    {
      id: 2,
      log: 'Consumed breakfast',
      time: formattedDateTime,
      calories: 254.4,
    },
  ]

  const headers = ['log', 'time', 'calories']

  return (
    <div className="container min-h-screen mx-auto flex items-center justify-center">
      <div>
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <SimpleTable data={tableData} headers={headers} />
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
