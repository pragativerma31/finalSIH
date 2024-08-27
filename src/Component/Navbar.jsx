import React from 'react';
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4">
      <div className="flex items-center">
        <a href="#" className="text-lg font-bold text-gray-800 hover:text-gray-600">
          Sheet Name
        </a>
      </div>
      <ul className="flex justify-between items-center">
        <li className="mr-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            File
          </a>
        </li>
        <li className="mr-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Edit
          </a>
        </li>
        <li className="mr-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            View
          </a>
        </li>
        <li className="mr-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Insert
          </a>
        </li>
        <li className="mr-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Format
          </a>
        </li>
        <li className="mr-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Tools
          </a>
        </li>
        <li className="mr-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Help
          </a>
        </li>
      </ul>
      <div className="flex items-center">
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Share
        </button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2">
          Download
        </button>
      </div>
    </nav>
  );
};

export default Navbar;