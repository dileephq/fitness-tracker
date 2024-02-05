import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-2 flex items-baseline">
        <a href="#" className="font-bold text-2xl mr-6">
          Fitness Tracker
        </a>

        {/* Toggle button for mobile menu */}

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Navigation links (hidden on mobile) */}
        <ul
          className={` hidden md:flex space-x-8 ${isOpen ? 'block' : 'hidden'}`}
        >
          <li>
            <Link className="hover:text-gray-700 text-xl" to="/">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-700 text-xl" to="/meals">
              Meals
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-700 text-xl" to="/activity">
              Activity
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-700 text-xl" to="/my-information">
              My Information
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
