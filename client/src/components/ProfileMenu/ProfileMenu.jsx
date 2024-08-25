import React, { useState } from "react";

const ProfileMenu = ({ user, logout }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="flex items-center rounded-full transition duration-150 ease-in-out"
      >
        <img
          src={user?.picture}
          alt="user img"
          className="w-10 h-10 rounded-full object-cover"
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          <ul className="divide-y divide-gray-200">
            <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
              Favourite
            </li>
            <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
              Bookings
            </li>
            <li
              onClick={() => {
                localStorage.clear();
                logout();
              }}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
