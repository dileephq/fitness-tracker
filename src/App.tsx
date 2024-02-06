import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/Home.tsx'
import MyInformation from './MyInformation/MyInformation.tsx'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-information" element={<MyInformation />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
