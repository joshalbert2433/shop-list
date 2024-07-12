import React from "react";
import { BsCart4 } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { IoIosStats } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function SidebarNav() {
  return (
    <>
      <div className="h-screen sticky min-w-[100px] bg-white flex flex-col justify-between items-center py-8">
        <div className="w-12 h-12 rounded-full bg-green-400"></div>
        <div className="flex flex-col gap-12 w-full items-center">
          <NavLink to={"/shop"}>
            <FaListUl size={24} />
          </NavLink>
          <NavLink to={"/history"}>
            <FaArrowRotateLeft size={24} />
          </NavLink>
          <NavLink to={"/statistics"}>
            <IoIosStats size={24} />
          </NavLink>
        </div>

        <div className="bg-orange-400 rounded-full h-12 w-12 flex justify-center items-center">
          <BsCart4 size={24} fill="white" />
        </div>
      </div>
    </>
  );
}
