import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function ItemInfo() {
  return (
    <div className="min-h-screen sticky max-w-[350px] flex flex-col bg-white px-8 py-6 grow shadow ">
      <div className="grow">
        <div className="flex gap-2 items-center text-orange-500 font-semibold">
          <FaLongArrowAltLeft />
          <div>Back</div>
        </div>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjFb_sCtwTZQZi5WmIM7W1UceBV72_Bvwf6g&s"
          className="w-full h-[200px] rounded-2xl mt-4"
        />

        <div className="mt-12">
          <div className="text-gray-400">name</div>
          <div className="text-2xl font-semibold">Avocado</div>
        </div>

        <div className="mt-12">
          <div className="text-gray-400">category</div>
          <div className="text-2xl font-semibold">Fruits and Vegetables</div>
        </div>

        <div className="mt-12">
          <div className="text-gray-400">note</div>
          <div className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam saepe
            quibusdam fugiat, tempora alias consequuntur rem iste molestiae
            magni exercitationem?
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 justify-center">
        <div className="text-xl ">delete</div>
        <div className="bg-orange-400 rounded-xl text-white w-fit p-4">
          Add to list
        </div>
      </div>
    </div>
  );
}
