import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import sections from "./sections";

function NavBar() {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className="flex justify-center text-2xl items-center w-full h-20 px-5 text-white bg-black fixed z-50 font-roboto">
      {/* hidden md:flex means that the ul will be hidden on mobile devices and will be visible on desktop devices(will disappear when we minimize the page)*/}
      <ul className="hidden md:flex">
        {/* destructure the links array and map through it, give each key its own li */}
        {sections.map(({ id, section }) => (
          <li
            key={id}
            className="px-5 cursor-pointer font-medium text-gray-500 hover:scale-150 hover:text-purple-300 capitalize"
          >
            <Link to={section} smooth duration={500}>
              {section}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setDropDown(!dropDown)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {/* ternary to switch from true to false, dropdown close to open */}
        {dropDown ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* if dropDown is true, then show the ul */}
      {dropDown && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {sections.map(({ id, section }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-white duration-200"
            >
              <Link
                to={section}
                onClick={() => setDropDown(!dropDown)}
                smooth
                duration={500}
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NavBar;
