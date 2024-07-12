import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";

export default function History() {
  return (
    <div>
      <div className="text-2xl font-semibold">Shopping History</div>

      <div className="mt-12">
        <div>August 2020</div>

        <div className="shadow bg-white flex justify-between p-4 rounded-lg items-center mt-4">
          <div className="text-lg font-semibold">Grocery List</div>
          <div className="flex gap-4 items-center">
            <FaCalendarDays />
            <div className="text-xs font-semibold text-gray-400">
              Mon 24.6.2020
            </div>
            <div className="text-blue-400 border border-blue-400 w-fit px-2 py-1 rounded-lg font-semibold text-sm">
              completed
            </div>
            <FaChevronRight fill="orange" />
          </div>
        </div>
      </div>
    </div>
  );
}
