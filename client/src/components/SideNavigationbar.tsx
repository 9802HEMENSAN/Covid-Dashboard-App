import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineContacts, AiOutlineUserAdd, AiOutlineGlobal } from 'react-icons/ai'; // Import icons

const SideNavigationbar = () => {
  return (
    <nav className="w-full md:w-1/5 p-4 bg-green-600 text-white h-screen md:h-[90vh]">
    <ul className="flex flex-col justify-center items-center space-y-4">
      <li>
        <Link to="/" className="flex items-center hover:underline">
          <AiOutlineContacts className="mr-2" /> Contacts List
        </Link>
      </li>
      <li>
        <Link to="/add-contact" className="flex items-center hover:underline">
          <AiOutlineUserAdd className="mr-2" /> Add Contact
        </Link>
      </li>
      <li>
        <Link to="/mapchart" className="flex items-center hover:underline">
          <AiOutlineGlobal className="mr-2" /> Map & Chart
        </Link>
      </li>
    </ul>
  </nav>
  )
}

export default SideNavigationbar