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
      <h1 className="text-white w-full text-3xl font-bold ">Abse</h1>
        <ul className="text-white  hidden">
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
        <div className="  text-white fixed left-0 top-0 border-r h-full w-[60%]   uppercase bg-[#222831]">
        
        <h1 className="m-6 text-white text-3xl font-bold w-full">Abse</h1>

        <ul className="space-y-9 pt-24 m-6">
          <li>
            <a href="#hi" className=" p-4 pr-12 ">Home</a>
          </li>
          <li>
            <a href="#bye" className="p-4 pr-12">About</a>
          </li>
        </ul>
        </div>
    </div>
  );
}

export default Navbar;