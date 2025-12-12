import React from "react";
import { X } from "lucide-react";

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddMarketMaker: React.FC<Props> = ({ setIsOpen }) => {
  return (
    <section className="bg-white w-full max-w-[650px] rounded-2xl shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b">
        <h1 className="text-xl font-semibold text-[#1D1F2C]">
          Add Market Maker
        </h1>

        <button
          onClick={() => setIsOpen(false)}
          className="p-2 rounded-full border hover:bg-gray-100"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="p-6 space-y-6">

        <div className="flex flex-col">
          <label className="text-sm text-[#1D1F2C] font-medium mb-1">
            Market Maker Name
          </label>
          <input
            type="text"
            placeholder="Enter Market Maker Name"
            className="h-12 rounded-lg border px-4 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

 
        <div className="flex flex-col">
          <label className="text-sm text-[#1D1F2C] font-medium mb-1">
            Trading Pairs
          </label>
          <select
            className="h-12 rounded-lg border px-4 text-sm text-gray-700 outline-none bg-white focus:ring-2 focus:ring-blue-500"
          >
            <option>Select Trading Pairs</option>
            <option>BTC/USDT</option>
            <option>ETH/USDT</option>
            <option>BNB/USDT</option>
          </select>
        </div>

        

        
        <div className="flex flex-col">
          <label className="text-sm text-[#1D1F2C] font-medium mb-1">
            Spread Configuration (min/max % tolerance)
          </label>
          <input
            type="text"
            placeholder="Enter Spread"
            className="h-12 rounded-lg border px-4 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

      </div>

      {/* Footer */}
      <div className="flex flex-col md:flex-row items-center gap-3 border-t p-6">
        <button
          onClick={() => setIsOpen(false)}
          className="w-full h-12 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
        >
          Cancel
        </button>

        <button
          className="w-full h-12 rounded-lg bg-[#1570EF] text-white hover:bg-blue-700 transition"
        >
          Continue
        </button>
      </div>
    </section>
  );
};

export default AddMarketMaker;
