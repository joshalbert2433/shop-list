import React from "react";
import Category from "../select/Category";
import { useAddItemStore } from "../../store/addItemStore";

export default function AddNewItem() {
  const { setShowContainer } = useAddItemStore();
  return (
    <div className="min-h-screen sticky w-[350px] bg-[#FAFAFE] flex flex-col">
      <div className="p-8 grow">
        <div className="text-2xl font-bold">Add a new item</div>

        <div className="mt-4 space-y-4">
          <div>
            <div>Name</div>
            <input
              className="p-3 mt-2 w-full border-2 border-gray-400 rounded-lg focus:outline-orange-500"
              placeholder="Enter a name"
            />
          </div>

          <div>
            <div>Note (optional)</div>
            <textarea
              className="p-3 mt-2 w-full border-2 border-gray-400 rounded-lg h-[100px] resize-none focus:outline-orange-500"
              placeholder="Enter a note"
            />
          </div>

          <div>
            <div>Image (optional)</div>
            <input
              className="p-3 mt-2 w-full border-2 border-gray-400 rounded-lg  focus:outline-orange-500"
              placeholder="Enter a url"
            />
          </div>

          <Category />
        </div>
      </div>
      <div className="flex items-center gap-4 justify-center mb-6">
        <div
          className="text-lg font-semibold cursor-pointer"
          onClick={() => setShowContainer(false)}
        >
          cancel
        </div>
        <div className="bg-orange-400 rounded-xl cursor-pointer  text-white w-fit py-4 px-6">
          Save
        </div>
      </div>
    </div>
  );
}
