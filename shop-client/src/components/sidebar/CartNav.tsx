import React from "react";
import Bottle from "../../assets/source.svg";
import { FaPen } from "react-icons/fa";

export default function CartNav() {
  return (
    <div className="min-h-screen sticky w-[400px] flex flex-col">
      <div className="bg-[#FFF0DE] p-8 grow">
        <div className="relative bg-[#80485B] p-4 rounded-2xl">
          <img src={Bottle} className="absolute -top-4" />
          <div className="pl-28">
            <div className="text-white text-lg leading-[18px]">
              Didn't find what you need?
            </div>
            <div className="bg-white w-fit py-2 px-6 rounded-lg font-semibold mt-4">
              Add item
            </div>
          </div>
        </div>

        <div className="flex justify-between  items-center mt-12">
          <div className="text-2xl font-semibold">Shopping list</div>
          <FaPen />
        </div>

        <div className="mt-12">
          <div className="text-gray-500 ">Fruits and Vegetables</div>
          <div className="mt-6 space-y-4">
            <div className="flex justify-between items-center ">
              <div className="text-lg font-semibold">Avocado</div>
              <div className="border-2 px-6 rounded-2xl border-orange-400 text-orange-400">
                3pcs
              </div>
            </div>
            <div className="flex justify-between items-center ">
              <div className="text-lg font-semibold">Avocado</div>
              <div className="border-2 px-6 rounded-2xl border-orange-400 text-orange-400">
                3pcs
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-28 bg-white flex justify-center items-center">
        <div className="border-2 border-orange-400 w-fit rounded-lg overflow-hidden flex">
          <input
            placeholder="Enter a name"
            className="p-2 focus:outline-none"
          />

          <div className="flex justify-center items-center text-white text-lg bg-orange-400 rounded px-4">
            Save
          </div>
        </div>
      </div>
    </div>
  );
}
