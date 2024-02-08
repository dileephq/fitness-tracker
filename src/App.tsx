import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/Home.tsx'
import MyInformation from './MyInformation/MyInformation.tsx'
import Navbar from './components/Navbar'
import Meals from './Meals/Meals.tsx'
import Activity from './Activity/Activity.tsx'
import { useReducer } from 'react'
import appReducer, { initialState } from './shared/reducter.ts'

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/meals"
          element={<Meals state={state} dispatch={dispatch} />}
        />
        <Route
          path="/activity"
          element={<Activity state={state} dispatch={dispatch} />}
        />
        <Route
          path="/my-information"
          element={<MyInformation state={state} dispatch={dispatch} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
