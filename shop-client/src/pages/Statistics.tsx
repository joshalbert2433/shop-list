import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "jan", sales: 24 },
  { name: "feb", sales: 22 },
];

export default function Statistics() {
  return (
    <div>
      <div className="flex gap-8">
        <div className="w-1/2">
          <div className="text-2xl font-semibold">Top Items</div>
          <div className="mt-8 space-y-6 font-semibold">
            <div>
              <div className="flex justify-between">
                <div>Banana</div>
                <div>12%</div>
              </div>
              <div className="h-2 mt-2 w-full rounded-2xl overflow-hidden flex">
                <div className="bg-orange-400 w-1/4 rounded-br rounded-tr"></div>
                <div className="bg-[#E0E0E0] grow"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <div>Banana</div>
                <div>12%</div>
              </div>
              <div className="h-2 mt-2 w-full rounded-2xl overflow-hidden flex">
                <div className="bg-orange-400 w-1/4 rounded-br rounded-tr"></div>
                <div className="bg-[#E0E0E0] grow"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <div>Banana</div>
                <div>12%</div>
              </div>
              <div className="h-2 mt-2 w-full rounded-2xl overflow-hidden flex">
                <div className="bg-orange-400 w-1/4 rounded-br rounded-tr"></div>
                <div className="bg-[#E0E0E0] grow"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="text-2xl font-semibold">Top Categories</div>
          <div className="mt-8 font-semibold">
            <div className="flex justify-between">
              <div>Banana</div>
              <div>12%</div>
            </div>
            <div className="h-2 mt-2 w-full rounded-2xl overflow-hidden flex">
              <div className="bg-blue-400 w-1/4 rounded-br rounded-tr"></div>
              <div className="bg-[#E0E0E0] grow"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="text-2xl font-semibold">Monthly Summary</div>
        <div className="w-full h-[400px] mt-12">
          <ResponsiveContainer>
            <LineChart
              width={400}
              height={400}
              data={data}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line type="monotone" dataKey="sales" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
