import React, { useState } from "react";
import { X } from "lucide-react";

export default function ListingSpotModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<"General" | "MarketRules" | "ListingInfo">(
    "General"
  );

  const [formData, setFormData] = useState({
    tokenName: "",
    tokenTicker: "",
    tokenPhoto: null as File | null,
    minOrder: "",
    maxOrder: "",
    takerFee: "",
    makerFee: "",
    priceTick: "",
    qtyStep: "",
    listingDate: "",
    enableDeposits: true,
    enableTrading: true,
    enableWithdrawals: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, tokenPhoto: e.target.files?.[0] || null });
  };

  return (
    <div className="bg-white w-full max-h-[700px] py-3 max-w-[600px] rounded-xl  relative">
       
       <div className="px-6 flex justify-between items-center mb-2">
        <h2 className="text-xl text-[#181D27] font-semibold ">New Spot</h2>

        <button
        onClick={onClose}
        className=" text-gray-500 p-2 border rounded-full w-fit h-fit hover:text-black"
      >
        <X size={20} />
      </button>
       </div>
      <hr />
      <div className="flex gap-2 text-sm text-gray-500 my-6 px-6">
        <span className={step === "General" ? "text-blue-600 font-medium" : ""}>
          General
        </span>
        <span>{">"}</span>

        <span className={step === "MarketRules" ? "text-blue-600 font-medium" : ""}>
          Market Rules
        </span>
        <span>{">"}</span>

        <span className={step === "ListingInfo" ? "text-blue-600 font-medium" : ""}>
          Listing Info
        </span>
      </div>

      {step === "General" && (
        <div className="space-y-4 px-6">
          <div>
            <label className="text-[#181D27] text-sm">Token Name</label>
            <input
              name="tokenName"
              value={formData.tokenName}
              onChange={handleChange}
              placeholder="Enter Token Name"
              className="w-full mt-1 border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="text-[#181D27] text-sm">Token Ticker</label>
            <input
              name="tokenTicker"
              value={formData.tokenTicker}
              onChange={handleChange}
              placeholder="Enter Token Ticker"
              className="w-full mt-1 border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="text-[#181D27] text-sm">Token Photo</label>
            <div className="border border-dotted rounded-lg h-32 flex flex-col items-center justify-center text-sm  cursor-pointer">
              <span>
                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="40" height="40" rx="20" fill="#F5F5F5" />
                  <rect x="3" y="3" width="40" height="40" rx="20" stroke="#FAFAFA" strokeWidth="6" />
                  <g clip-path="url(#clip0_2895_124093)">
                    <path d="M26.3335 26.3332L23.0002 22.9999M23.0002 22.9999L19.6669 26.3332M23.0002 22.9999V30.4999M29.9919 28.3249C30.8047 27.8818 31.4467 27.1806 31.8168 26.3321C32.1868 25.4835 32.2637 24.5359 32.0354 23.6388C31.807 22.7417 31.2865 21.9462 30.5558 21.3778C29.8251 20.8094 28.9259 20.5005 28.0002 20.4999H26.9502C26.698 19.5243 26.2278 18.6185 25.5752 17.8507C24.9225 17.0829 24.1042 16.4731 23.182 16.0671C22.2597 15.661 21.2573 15.4694 20.2503 15.5065C19.2433 15.5436 18.2578 15.8085 17.3679 16.2813C16.4779 16.7541 15.7068 17.4225 15.1124 18.2362C14.518 19.05 14.1158 19.9879 13.936 20.9794C13.7563 21.9709 13.8036 22.9903 14.0746 23.961C14.3455 24.9316 14.8329 25.8281 15.5002 26.5832" stroke="#535862" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2895_124093">
                      <rect width="20" height="20" fill="white" transform="translate(13 13)" />
                    </clipPath>
                  </defs>
                </svg>


              </span>
              <div className="flex items-center gap-1 text-sm text-[#717680] mb-1 ">
                <p className="text-blue-600">Click to upload</p>
                <p>or drag and drop</p>
              </div>
              <p className="text-sm text-[#717680]">SVG, PNG, JPG or GIF (max. 800x400px)</p>

              <input type="file" className="hidden" onChange={handlePhotoUpload} />
            </div>
          </div>

          <div>
            <label className="text-[#181D27] text-sm">Min Order Amount</label>
            <input
              name="minOrder"
              value={formData.minOrder}
              onChange={handleChange}
              placeholder="Enter Min Order Amount"
              className="w-full mt-1 border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="text-[#181D27] text-sm">Max Order Amount</label>
            <input
              name="maxOrder"
              value={formData.maxOrder}
              onChange={handleChange}
              placeholder="Enter Max Order Amount"
              className="w-full mt-1 border rounded-lg px-3 py-2"
            />
          </div>
        </div>
      )}


      {step === "MarketRules" && (
        <div className="space-y-4 px-6">
          <div>
            <label className="text-[#181D27] text-sm">Taker Fee</label>
            <input
              name="takerFee"
              value={formData.takerFee}
              onChange={handleChange}
              placeholder="Enter Taker Fee"
              className="w-full mt-1 border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="text-[#181D27] text-sm">Maker Fee</label>
            <input
              name="makerFee"
              value={formData.makerFee}
              onChange={handleChange}
              placeholder="Enter Maker Fee"
              className="w-full mt-1 border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="text-[#181D27] text-sm">Price Tick Size</label>
            <input
              name="priceTick"
              value={formData.priceTick}
              onChange={handleChange}
              placeholder="Enter Price Tick Size"
              className="w-full mt-1 border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="text-[#181D27] text-sm">Quantity Step Size</label>
            <input
              name="qtyStep"
              value={formData.qtyStep}
              onChange={handleChange}
              placeholder="Enter Quantity Step Size"
              className="w-full mt-1 border rounded-lg px-3 py-2"
            />
          </div>
        </div>
      )}


      {step === "ListingInfo" && (
        <div className="space-y-6 px-6">

          {/* Listing Date */}
          <div>
            <label className="text-gray-700 text-sm mb-1 block">Listing Date</label>

            <div className="relative">
              <input
                type="date"
                name="listingDate"
                value={formData.listingDate}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 pr-12 text-gray-600 placeholder-gray-400"
                placeholder="Select Listing Date"
              />

            </div>
          </div>

          {/* Status Toggles */}
          <div className="space-y-4">

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.enableDeposits ?? true}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, enableDeposits: e.target.checked }))
                }
                className="w-5 h-5 accent-blue-600"
              />
              <span className="text-gray-800">Enable Deposits</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.enableTrading ?? true}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, enableTrading: e.target.checked }))
                }
                className="w-5 h-5 accent-blue-600"
              />
              <span className="text-gray-800">Enable Trading</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.enableWithdrawals ?? true}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    enableWithdrawals: e.target.checked,
                  }))
                }
                className="w-5 h-5 accent-blue-600"
              />
              <span className="text-gray-800">Enable Withdrawals</span>
            </label>

          </div>
        </div>
      )}



      <div className="flex w-full gap-3 mt-6 px-6">

        {step !== "General" && (
          <button
            className="px-6 py-2 md:w-1/2 rounded-lg border"
            onClick={() =>
              setStep(step === "MarketRules" ? "General" : "MarketRules")
            }
          >
            Back
          </button>
        )}

        {step === "General" && (
          <button
            className="px-6 py-2 md:w-1/2 rounded-lg border"
            onClick={onClose}
          >
            Cancel
          </button>
        )}


        <button
          className="px-6 py-2 md:w-1/2 rounded-lg bg-blue-600 text-white"
          onClick={() => {
            if (step === "General") setStep("MarketRules");
            else if (step === "MarketRules") setStep("ListingInfo");
            else console.log("Final Form Data:", formData);
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
