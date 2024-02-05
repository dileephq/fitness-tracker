import React, { useState } from 'react'

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 flex items-baseline">
        <div className="flex items-center">
          <a href="#" className="font-bold text-xl">
            Fitness Tracker
          </a>
        </div>

        <div className="flex items-center">
          {/* Toggle button for mobile menu */}
          <button className="md:hidden " onClick={() => setIsOpen(!isOpen)}>
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
            className={` hidden md:flex space-x-6 ${isOpen ? 'block' : 'hidden'}`}
          >
            <li>
              <a href="#" className="hover:text-gray-700">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
