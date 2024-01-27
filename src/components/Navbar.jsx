import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu  } from "react-icons/ai";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
      <h1 className="text-white w-full text-3xl font-bold ">ABSE</h1>
        <ul className= "text-white hidden">
          <li>
            <a href="#" className="p-6">Home</a>
          </li>
          <li>
            <a href="#" className="p-4">About</a>
          </li>
        </ul>
        <div onClick={toggleMenu}>
          {!isOpen? <AiOutlineMenu  color="#ffffff" size={20}/>  :  <AiOutlineClose  color="#ffffff" size={20} />}
        </div>
        <div className={`text-white fixed  top-0 border-r h-full w-[60%] uppercase bg-[#222831] transition-all duration-500 ${isOpen ? "left-0" : " -left-[500px]"}`}>
          <h1 className="m-6 text-white text-3xl font-bold w-full">ABSE</h1>
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
