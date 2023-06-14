import React, { useState } from "react";
import svg from './Images/menu-outline.svg'

export default function Navbar() {

    const [dropDown,setDropDown] = useState("hidden")

    function dropDownClick(){
        if(dropDown=="flex"){
            setDropDown("hidden")
        }else{
            setDropDown("flex")
        }
    }
  return (
    <div className="bg-gradient-to-r from-amber-100/50 to-amber-300">
        <ul className="h-12 bg-transparent md:hidden flex items-center">
          <li className="mx-4">
            <img src={svg} className="w-8" onClick={dropDownClick}></img>
          </li>
          </ul>
      <nav className={`bg-transparent p-4 text-xl ${dropDown} md:flex md:items-center md:justify-between`}>
        <ul className="md:flex">
          <li className="m-4 md:my-0">
            <a className="cursor-pointer hover:text-orange-600 duration-300">
              Home
            </a>
          </li>
          <li className="m-4 md:my-0">
            <a className="cursor-pointer hover:text-orange-600 duration-300">
              Products
            </a>
          </li>
          <li className="m-4 md:my-0">
            <a className="cursor-pointer hover:text-orange-600 duration-300">
              Orders
            </a>
          </li>
        </ul>
        <ul className="md:flex">
          <li className="m-4 md:my-0 cursor-pointer hover:text-lime-600 duration-300">
            Log In
          </li>
          <li className="m-4 md:my-0 cursor-pointer hover:text-lime-600 duration-300">
            Sign Up
          </li>
        </ul>
      </nav>
    </div>
  );
}
