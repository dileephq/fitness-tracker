import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/Home.tsx'
import MyInformation from './MyInformation/MyInformation.tsx'
import Navbar from './components/Navbar'
import Meals from './Meals/Meals.tsx'
import Activity from './Activity/Activity.tsx'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/my-information" element={<MyInformation />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
