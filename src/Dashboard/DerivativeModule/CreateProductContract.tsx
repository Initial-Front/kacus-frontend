// CreateContractModal.tsx
"use client";

import React, { useState } from "react";
import { X } from "lucide-react";


type Step = "General" | "SettlementRules" | "Risk";

type FormState = {
  contractCode: string;
  pairName: string;
  derivativeType: string;
  optionType: string;
  strikePrice: string;
  startTradingDate: string; // yyyy-mm-dd
  expiryDate: string; // yyyy-mm-dd

  // Settlement Rules
  leverageCap: string;
  settlementType: string;
  finalPriceSource: string;

  // Risk
  initialMargin: string;
  maintenanceMargin: string;
  liquidationPriority: string;
};

const initialState: FormState = {
  contractCode: "",
  pairName: "",
  derivativeType: "Options",
  optionType: "Call",
  strikePrice: "",
  startTradingDate: "",
  expiryDate: "",

  leverageCap: "",
  settlementType: "",
  finalPriceSource: "",

  initialMargin: "",
  maintenanceMargin: "",
  liquidationPriority: "",
};

export default function CreateContractModal({
  onClose,
  onSubmit,
}: {
  onClose: () => void;
  onSubmit?: (payload: FormState) => void;
}) {
  const [step, setStep] = useState<Step>("General");
  const [form, setForm] = useState<FormState>(initialState);

  const focusRing = "focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none";

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  function handleBack() {
    if (step === "SettlementRules") setStep("General");
    else if (step === "Risk") setStep("SettlementRules");
  }

  function handleContinue() {
    if (step === "General") setStep("SettlementRules");
    else if (step === "SettlementRules") setStep("Risk");
    else {
      // final submit
      console.log("Create Contract payload:", form);
      if (onSubmit) onSubmit(form);
      onClose();
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4"
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-white rounded-2xl w-[600px] max-h-[90vh] overflow-auto shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4">
          <h3 className="text-lg font-semibold text-[#111827]">New Contracts</h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 rounded-full text-gray-500 hover:text-black"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-6 pb-4">
          <hr className="border-gray-100" />

          {/* Breadcrumb / Steps */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-4">
            <button
              onClick={() => setStep("General")}
              className={`${
                step === "General" ? "text-blue-600 font-medium" : ""
              }`}
            >
              General
            </button>
            <span className="text-gray-300">›</span>
            <button
              onClick={() => setStep("SettlementRules")}
              className={`${step === "SettlementRules" ? "text-blue-600 font-medium" : ""}`}
            >
              Settlement Rules
            </button>
            <span className="text-gray-300">›</span>
            <button
              onClick={() => setStep("Risk")}
              className={`${step === "Risk" ? "text-blue-600 font-medium" : ""}`}
            >
              Risk
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 pb-6">
          {step === "General" && (
            <div className="space-y-4">
              {/* Contract Code */}
              <div>
                <label className="text-sm text-[#111827] block mb-2">Contract Code</label>
                <input
                  name="contractCode"
                  value={form.contractCode}
                  onChange={handleChange}
                  placeholder="Enter Contract Code"
                  className={`w-full h-12 border border-gray-200 rounded-md px-3 ${focusRing}`}
                />
              </div>

              {/* Pair Name */}
              <div>
                <label className="text-sm text-[#111827] block mb-2">Pair Name</label>
                <select
                  name="pairName"
                  value={form.pairName}
                  onChange={handleChange}
                  className={`w-full h-12 border border-gray-200 rounded-md px-3 ${focusRing}`}
                >
                  <option value="">Select Pair Name</option>
                  <option value="BTC/NGN">Bitcoin (BTC/NGN)</option>
                  <option value="ADA/NGN">Cardano (ADA/NGN)</option>
                  <option value="BLZ/NGN">Bluzelle (BLZ/NGN)</option>
                </select>
              </div>

              {/* Derivative Type & Option Type (two columns on wide) */}
              <div className="grid grid-cols-1  gap-4">
                <div>
                  <label className="text-sm text-[#111827] block mb-2">Derivative Type</label>
                  <select
                    name="derivativeType"
                    value={form.derivativeType}
                    onChange={handleChange}
                    className={`w-full h-12 border border-gray-200 rounded-md px-3 ${focusRing}`}
                  >
                    <option value="Options">Options</option>
                    <option value="Futures">Futures</option>
                    <option value="Perpetual">Perpetual</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-[#111827] block mb-2">Option Type</label>
                  <select
                    name="optionType"
                    value={form.optionType}
                    onChange={handleChange}
                    className={`w-full h-12 border border-gray-200 rounded-md px-3 ${focusRing}`}
                  >
                    <option value="Call">Call</option>
                    <option value="Put">Put</option>
                  </select>
                </div>
              </div>

              {/* Strike Price */}
              <div>
                <label className="text-sm text-[#111827] block mb-2">Strike Price</label>
                <input
                  name="strikePrice"
                  value={form.strikePrice}
                  onChange={handleChange}
                  placeholder="Enter Strike Price"
                  className={`w-full h-12 border border-gray-200 rounded-md px-3 ${focusRing}`}
                />
              </div>

              {/* Start Trading Date & Expiry Date */}
              <div className="grid grid-cols-1  gap-4">
                <div>
                  <label className="text-sm text-[#111827] block mb-2">Start Trading Date</label>
                  <input
                    type="date"
                    name="startTradingDate"
                    value={form.startTradingDate}
                    onChange={handleChange}
                    className={`w-full h-12 border border-gray-200 rounded-md px-3 ${focusRing}`}
                  />
                </div>

                <div>
                  <label className="text-sm text-[#111827] block mb-2">Expiry Date</label>
                  <input
                    type="date"
                    name="expiryDate"
                    value={form.expiryDate}
                    onChange={handleChange}
                    className={`w-full h-12 border border-gray-200 rounded-md px-3 ${focusRing}`}
                  />
                </div>
              </div>
            </div>
          )}

          {step === "SettlementRules" && (
            <div className="space-y-4">
              <div>
                <label className="text-sm text-[#111827] block mb-2">Leverage Cap</label>
                <input
                  name="leverageCap"
                  value={form.leverageCap}
                  onChange={handleChange}
                  placeholder="Enter Leverage Cap"
                  className={`w-full h-12 border border-gray-200 rounded-md px-3 ${focusRing}`}
                />
              </div>

              <div>
                <label className="text-sm text-[#111827] block mb-2">Settlement Type</label>
                <select
                  name="settlementType"
                  value={form.settlementType}
                  onChange={handleChange}
                  className={`w-full h-12 border border-gray-200 rounded-md px-3 ${focusRing}`}
                >
                  <option value="">Select Settlement Type</option>
                  <option value="Cash">Cash</option>
                  <option value="Physical">Physical</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-[#111827] block mb-2">Final Price Source</label>
                <select
                  name="finalPriceSource"
                  value={form.finalPriceSource}
                  onChange={handleChange}
                  className={`w-full h-12 border border-gray-200 rounded-md px-3 ${focusRing}`}
                >
                  <option value="">Select Final Price Source</option>
                  <option value="Oracles">Oracles</option>
                  <option value="Index">Index</option>
                </select>
              </div>
            </div>
          )}

          {step === "Risk" && (
            <div className="space-y-4">
              <div>
                <label className="text-sm text-[#111827] block mb-2">Initial Margin %</label>
                <input
                  name="initialMargin"
                  value={form.initialMargin}
                  onChange={handleChange}
                  placeholder="Enter Initial Margin %"
                  className={`w-full h-12 border border-gray-200 rounded-md px-3 ${focusRing}`}
                />
              </div>

              <div>
                <label className="text-sm text-[#111827] block mb-2">Maintenance Margin %</label>
                <input
                  name="maintenanceMargin"
                  value={form.maintenanceMargin}
                  onChange={handleChange}
                  placeholder="Enter Maintenance Margin %"
                  className={`w-full h-12 border border-gray-200 rounded-md px-3 ${focusRing}`}
                />
              </div>

              <div>
                <label className="text-sm text-[#111827] block mb-2">Liquidation Priority</label>
                <select
                  name="liquidationPriority"
                  value={form.liquidationPriority}
                  onChange={handleChange}
                  className={`w-full h-12 border border-gray-200 rounded-md px-3 ${focusRing}`}
                >
                  <option value="">Select Liquidation Priority</option>
                  <option value="Normal">Normal</option>
                  <option value="High">High</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Footer Buttons */}
        <div className="px-6 py-4 border-t flex items-center gap-3">
          {/* Back or Cancel */}
          <div className="flex-1">
            {step !== "General" ? (
              <button
                className="px-4 py-2 border rounded-md text-sm"
                onClick={handleBack}
              >
                Back
              </button>
            ) : (
              <button
                className="px-4 py-2 border rounded-md text-sm"
                onClick={onClose}
              >
                Cancel
              </button>
            )}
          </div>

   
          <div className="flex gap-3">
            {step !== "Risk" && (
              <button
                className="px-5 py-2 bg-blue-600 text-white rounded-md text-sm"
                onClick={handleContinue}
              >
                Continue
              </button>
            )}

            {step === "Risk" && (
              <button
                className="px-5 py-2 bg-blue-600 text-white rounded-md text-sm"
                onClick={handleContinue}
              >
                Create Contract
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
