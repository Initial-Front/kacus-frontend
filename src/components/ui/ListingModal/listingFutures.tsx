"use client";

import React, { useState } from "react";

export interface FuturesFormData {

  contractCode?: string;
  pairName?: string;
  derivativeType?: string;
  startTradeDate?: string;
  expiryDate?: string;

  leverageCap?: string;
  settlementType?: string;
  finalPriceSource?: string;

  initialMargin?: string;
  maintenanceMargin?: string;
  liquidationPriority?: string;
}

interface Props {
  onClose: () => void;
}

const ListingFuturesModal: React.FC<Props> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("General");

  const [formData, setFormData] = useState<FuturesFormData>({
    derivativeType: "Futures",
  });

  const handleNext = () => {
    if (activeTab === "General") setActiveTab("Settlement Rules");
    else if (activeTab === "Settlement Rules") setActiveTab("Risk");
    else if (activeTab === "Risk") {
      console.log("Final Submitted Data:", formData);
    }
  };

  return (
    <div className="bg-white w-full max-w-[650px] rounded-xl shadow-xl p-6 relative">

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 text-gray-500 hover:text-black"
      >
        ✕
      </button>

      {/* Title */}
      <h2 className="text-xl font-semibold mb-4">New Futures</h2>

      {/* Tabs */}
      <div className="flex items-center gap-4 border-b pb-3 text-sm">
        {["General", "Settlement Rules", "Risk"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${
              activeTab === tab ? "text-blue-600 font-medium" : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ------------------------ GENERAL TAB ------------------------ */}
      {activeTab === "General" && (
        <div className="space-y-4 mt-6">
          <div>
            <label className="text-sm text-gray-700">Contract Code</label>
            <input
              className="w-full border rounded-lg px-3 py-2 mt-1"
              placeholder="Enter Contract Code"
              value={formData.contractCode || ""}
              onChange={(e) =>
                setFormData((p) => ({ ...p, contractCode: e.target.value }))
              }
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Pair Name</label>
            <select
              className="w-full border rounded-lg px-3 py-2 mt-1"
              value={formData.pairName || ""}
              onChange={(e) =>
                setFormData((p) => ({ ...p, pairName: e.target.value }))
              }
            >
              <option value="">Select Pair Name</option>
              <option value="BTC/USDT">BTC/USDT</option>
              <option value="ETH/USDT">ETH/USDT</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-700">Derivative Type</label>
            <select
              className="w-full border rounded-lg px-3 py-2 mt-1"
              value={formData.derivativeType}
              onChange={(e) =>
                setFormData((p) => ({
                  ...p,
                  derivativeType: e.target.value,
                }))
              }
            >
              <option value="Futures">Futures</option>
              <option value="Options">Options</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-700">Start Trading Date</label>
            <input
              type="date"
              className="w-full border rounded-lg px-3 py-2 mt-1"
              value={formData.startTradeDate || ""}
              onChange={(e) =>
                setFormData((p) => ({
                  ...p,
                  startTradeDate: e.target.value,
                }))
              }
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Expiry Date</label>
            <input
              type="date"
              className="w-full border rounded-lg px-3 py-2 mt-1"
              value={formData.expiryDate || ""}
              onChange={(e) =>
                setFormData((p) => ({
                  ...p,
                  expiryDate: e.target.value,
                }))
              }
            />
          </div>
        </div>
      )}

      {/* ------------------------ SETTLEMENT RULES TAB ------------------------ */}
      {activeTab === "Settlement Rules" && (
        <div className="space-y-5 mt-6">
          <div>
            <label className="text-sm text-gray-700">Leverage Cap</label>
            <input
              className="w-full border rounded-lg px-3 py-2 mt-1"
              placeholder="Enter Leverage Cap"
              value={formData.leverageCap || ""}
              onChange={(e) =>
                setFormData((p) => ({ ...p, leverageCap: e.target.value }))
              }
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Settlement Type</label>
            <select
              className="w-full border rounded-lg px-3 py-2 mt-1"
              value={formData.settlementType || ""}
              onChange={(e) =>
                setFormData((p) => ({ ...p, settlementType: e.target.value }))
              }
            >
              <option value="">Select Settlement Type</option>
              <option value="Delivery">Delivery</option>
              <option value="Cash">Cash</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-700">Final Price Source</label>
            <select
              className="w-full border rounded-lg px-3 py-2 mt-1"
              value={formData.finalPriceSource || ""}
              onChange={(e) =>
                setFormData((p) => ({
                  ...p,
                  finalPriceSource: e.target.value,
                }))
              }
            >
              <option value="">Select Final Price Source</option>
              <option value="Index">Index</option>
              <option value="TWAP">TWAP</option>
            </select>
          </div>
        </div>
      )}

      {/* ------------------------ RISK TAB ------------------------ */}
      {activeTab === "Risk" && (
        <div className="space-y-5 mt-6">
          <div>
            <label className="text-sm text-gray-700">Initial Margin %</label>
            <input
              className="w-full border rounded-lg px-3 py-2 mt-1"
              placeholder="Enter Initial Margin %"
              value={formData.initialMargin || ""}
              onChange={(e) =>
                setFormData((p) => ({ ...p, initialMargin: e.target.value }))
              }
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Maintenance Margin %</label>
            <input
              className="w-full border rounded-lg px-3 py-2 mt-1"
              placeholder="Enter Maintenance Margin %"
              value={formData.maintenanceMargin || ""}
              onChange={(e) =>
                setFormData((p) => ({
                  ...p,
                  maintenanceMargin: e.target.value,
                }))
              }
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Liquidation Priority</label>
            <select
              className="w-full border rounded-lg px-3 py-2 mt-1"
              value={formData.liquidationPriority || ""}
              onChange={(e) =>
                setFormData((p) => ({
                  ...p,
                  liquidationPriority: e.target.value,
                }))
              }
            >
              <option value="">Select Liquidation Priority</option>
              <option value="Market">Market</option>
              <option value="Auction">Auction</option>
            </select>
          </div>
        </div>
      )}

      {/* FOOTER BUTTONS */}
      <div className="flex w-full gap-4 mt-8 border-t pt-4">
        <button
          onClick={onClose}
          className="px-6 py-2 border rounded-lg md:w-1/2 text-gray-700"
        >
          Cancel
        </button>

        <button
          onClick={handleNext}
          className="px-6 py-2 bg-blue-600 md:w-1/2 text-white rounded-lg"
        >
          {activeTab === "Risk" ? "Create Contract" : "Continue"}
        </button>
      </div>
    </div>
  );
};

export default ListingFuturesModal;
