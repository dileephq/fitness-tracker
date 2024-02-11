import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const navItems = [
    { id: 1, text: 'Dashboard', path: '/' },
    { id: 2, text: 'Meals', path: '/meals' },
    { id: 3, text: 'Activity', path: '/activity' },
    { id: 4, text: 'My Information', path: '/my-information' },
  ]

  return (
    <div className="flex justify-between items-center h-20 mx-auto px-4">
      <h1 className="text-2xl font-bold">
        <Link to="/">Fitness Tracker</Link>
      </h1>

      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="hover:text-gray-700 text-xl cursor-pointer px-4"
          >
            <Link to={item.path}>{item.text}</Link>
          </li>
        ))}
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-[#F0F4F9] bg-gray-400 ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        <h1 className="w-full text-2xl font-bold text-black m-4">
          <Link to="/">Fitness Tracker</Link>
        </h1>

        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:bg-[#3B82F8] duration-300 hover:text-black cursor-pointer border-gray-600"
          >
            <Link to={item.path}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
