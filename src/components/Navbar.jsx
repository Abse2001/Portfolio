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
    border border-white
    border-solid
    ">
      <h1 className="text-white w-full ">React</h1>
        <ul className="text-white flex">
          <li>
            <a href="#" className="p-6">Home</a>
          </li>
          <li>
            <a href="#" className="p-4">About</a>
          </li>
        </ul>
        <div>
        <CiMenuFries color="#ffffff" />
        </div>
    </div>
  );
}

export default Navbar;