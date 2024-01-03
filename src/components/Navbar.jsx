import React from "react";
import { FaBeer } from "react-icons/fa";
function Navbar() {
  return (
    <div className="
    height
    flex 
    justify-between
    items-center
    h-2
    p-10
    ">
      <h1 className="text-white w-full">React</h1>
        <ul className="text-white flex">
          <li>
            <a href="#" className="p-6">Home</a>
          </li>
          <li>
            <a href="#" className="p-4">About</a>
          </li>
        </ul>
    </div>
  );
}

export default Navbar;