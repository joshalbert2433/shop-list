import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";

export default function HistoryItem() {
  return (
    <div>
      <div className="flex gap-2 items-center text-orange-500 font-semibold">
        <FaLongArrowAltLeft />
        <div>Back</div>
      </div>

      <div className="mt-8">
        <div className="text-2xl font-semibold">Juswa Items</div>
        <div className="text-gray-400 flex gap-2 items-center mt-4">
          <FaCalendarDays /> Mon 24.0.2020
        </div>
      </div>

      <div className="mt-12">
        <div className="text-2xl font-semibold">Cookies</div>

        <div className="grid grid-cols-4 mt-4 gap-4 fotn">
          <div className="p-4 bg-white rounded-lg shadow flex justify-between">
            <div className="text-xl">Chocolate Cookies</div>

            <div className="text-orange-500">3pcs</div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow flex justify-between">
            <div className="text-xl">Chocolate Cookies</div>

            <div className="text-orange-500">3pcs</div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow flex justify-between">
            <div className="text-xl">Chocolate Cookies</div>

            <div className="text-orange-500">3pcs</div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow flex justify-between">
            <div className="text-xl">Chocolate Cookies</div>

            <div className="text-orange-500">3pcs</div>
          </div>
        </div>
      </div>
    </div>
  );
}
