import React from "react";
import { CiMenuFries } from "react-icons/ci";
function Navbar() {
  return (
    <div className="
    height
    flex 
    justify-between
    items-center
    max-w-[1240px]
    h-2
    p-10
    mx-auto
    
    ">
      <h1 className="text-white w-full text-3xl font-bold ">React</h1>
        <ul className="text-white flex hidden">
          <li>
            <a href="#" className="p-6">Home</a>
          </li>
          <li>
            <a href="#" className="p-4">About</a>
          </li>
        </ul>
        <div>
        <CiMenuFries color="#ffffff" size={20} />
        </div>
        <div>
        <ul className="text-white fixed left-0 top-0 border-r h-full w-[60%] pt-24  ">
          <li>
            <a href="#" className="p-4">Home</a>
          </li>
          <li>
            <a href="#" className="p-4">About</a>
          </li>
        </ul>
        </div>
    </div>
  );
}

export default Navbar;