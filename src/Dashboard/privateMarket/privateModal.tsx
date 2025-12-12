import React, { useState } from "react";


interface PropType {
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NewListingModal({setIsModal}: PropType) {
    const [step, setStep] = useState(1);

    return (
        <div>
            <div className="bg-white w-full md:min-w-4xl max-h-[600px] max-w-4xl rounded-xl shadow-xl  overflow-scroll  no-scrollbar">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b">
                    <h2 className="text-xl font-semibold">New Listing</h2>
                    <button
                    onClick={()=> setIsModal(false)}
                    >
                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="27.3696" height="27.3696" rx="13.6848" fill="white" />
                            <rect x="0.5" y="0.5" width="27.3696" height="27.3696" rx="13.6848" stroke="#EEEEF2" />
                            <path d="M19 9L9 19M9 9L19 19" stroke="#3C3F44" stroke-width="1.4604" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>


                <div className="px-7 py-8 text-sm text-gray-500 flex items-center gap-2 ">
                    <span className={step === 1 ? "text-blue-600 font-medium" : ""}>Company Info</span>
                    <span>{" > "}</span>
                    <span className={step === 2 ? "text-blue-600 font-medium" : ""}>Financials</span>
                    <span>{" > "}</span>
                    <span className={step === 3 ? "text-blue-600 font-medium" : ""}>Listing Configuration</span>
                </div>

                {/* Step 1 */}
                {step === 1 && (
                    <div className="px-6 py-6 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Company Name</label>
                                <input className="w-full border rounded-lg px-3 py-2" placeholder="Enter Company Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Company Ticker</label>
                                <input className="w-full border rounded-lg px-3 py-2" placeholder="Enter Company Ticker" />
                            </div>
                        </div>

                        {/* Logo */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Company Logo</label>
                            <div className="border rounded-lg px-4 py-10 flex flex-col items-center justify-center text-center cursor-pointer">
                                <div className="text-gray-400 text-3xl mb-2">
                                    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="3" y="3" width="40" height="40" rx="20" fill="#F5F5F5" />
                                        <rect x="3" y="3" width="40" height="40" rx="20" stroke="#FAFAFA" stroke-width="6" />
                                        <g clip-path="url(#clip0_2895_131314)">
                                            <path d="M26.3335 26.3332L23.0002 22.9999M23.0002 22.9999L19.6669 26.3332M23.0002 22.9999V30.4999M29.9919 28.3249C30.8047 27.8818 31.4467 27.1806 31.8168 26.3321C32.1868 25.4835 32.2637 24.5359 32.0354 23.6388C31.807 22.7417 31.2865 21.9462 30.5558 21.3778C29.8251 20.8094 28.9259 20.5005 28.0002 20.4999H26.9502C26.698 19.5243 26.2278 18.6185 25.5752 17.8507C24.9225 17.0829 24.1042 16.4731 23.182 16.0671C22.2597 15.661 21.2573 15.4694 20.2503 15.5065C19.2433 15.5436 18.2578 15.8085 17.3679 16.2813C16.4779 16.7541 15.7068 17.4225 15.1124 18.2362C14.518 19.05 14.1158 19.9879 13.936 20.9794C13.7563 21.9709 13.8036 22.9903 14.0746 23.961C14.3455 24.9316 14.8329 25.8281 15.5002 26.5832" stroke="#535862" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2895_131314">
                                                <rect width="20" height="20" fill="white" transform="translate(13 13)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                                <p className="text-blue-600 text-sm">Click to upload</p>
                                <p className="text-sm text-gray-500">SVG, PNG, JPG or GIF (max. 800×400px)</p>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Company Description</label>
                            <textarea className="w-full border rounded-lg px-3 py-2 h-28" placeholder="Enter Description"></textarea>
                        </div>

                        {/* Socials */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Socials</label>
                            <div className="space-y-3">
                                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-3">
                                    <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.0003 18.3327C14.6027 18.3327 18.3337 14.6017 18.3337 9.99935C18.3337 5.39698 14.6027 1.66602 10.0003 1.66602C5.39795 1.66602 1.66699 5.39698 1.66699 9.99935C1.66699 14.6017 5.39795 18.3327 10.0003 18.3327Z" stroke="#292D32" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M6.66667 2.5H7.5C5.875 7.36667 5.875 12.6333 7.5 17.5H6.66667" stroke="#292D32" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M12.5 2.5C14.125 7.36667 14.125 12.6333 12.5 17.5" stroke="#292D32" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M2.5 13.3333V12.5C7.36667 14.125 12.6333 14.125 17.5 12.5V13.3333" stroke="#292D32" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M2.5 7.5C7.36667 5.875 12.6333 5.875 17.5 7.5" stroke="#292D32" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                        <span>Website</span>
                                    </div>
                                    <input className="border rounded-lg px-3 py-2 md:w-[70%]" placeholder="Enter URL" />
                                    <button className="text-red-500 text-xl">✕</button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-3">
                                    <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.6667 7.75V10.1667H13.8333C14 10.1667 14.0833 10.3333 14.0833 10.5L13.75 12.0833C13.75 12.1667 13.5833 12.25 13.5 12.25H11.6667V18.3333H9.16667V12.3333H7.75C7.58333 12.3333 7.5 12.25 7.5 12.0833V10.5C7.5 10.3333 7.58333 10.25 7.75 10.25H9.16667V7.5C9.16667 6.08333 10.25 5 11.6667 5H13.9167C14.0833 5 14.1667 5.08333 14.1667 5.25V7.25C14.1667 7.41667 14.0833 7.5 13.9167 7.5H11.9167C11.75 7.5 11.6667 7.58333 11.6667 7.75Z" stroke="#17191C" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" />
                                            <path d="M12.5003 18.3327H7.50033C3.33366 18.3327 1.66699 16.666 1.66699 12.4993V7.49935C1.66699 3.33268 3.33366 1.66602 7.50033 1.66602H12.5003C16.667 1.66602 18.3337 3.33268 18.3337 7.49935V12.4993C18.3337 16.666 16.667 18.3327 12.5003 18.3327Z" stroke="#17191C" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                        <span>Facebook</span>
                                    </div>
                                    <input className="border rounded-lg px-3 py-2" placeholder="Enter URL" />
                                    <button className="text-gray-500 text-xl">＋</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 2 Financials */}
                {step === 2 && (
                    <div className="px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            "Profit Margin",
                            "Return on Assets (ttm)",
                            "Return on Equity (ttm)",
                            "Revenue (ttm)",
                            "Net Income Avi to Common (ttm)",
                            "Total Cash (mrq)",
                            "Total Debt/Equity (mrq)",
                            "Levered Free Cash Flow (ttm)",
                        ].map((item) => (
                            <div key={item}>
                                <label className="block text-sm font-medium mb-1">{item}</label>
                                <input className=" w-[250px] border rounded-lg px-3 py-3" placeholder={`Enter ${item}`} />
                            </div>
                        ))}
                    </div>
                )}

                {/* Step 3 Listing Config */}
                {step === 3 && (
                    <div className="px-6 py-6  flex flex-col w-full  md:w-[604px] gap-6">
                        {[
                            "Total Units to Issue",
                            "Trading Price (₦)",
                            "Minimum Order Size",
                            "Maximum Order Size",
                            "Funding Rate (%)",
                        ].map((item) => (
                            <div key={item}>
                                <label className="block text-sm font-medium mb-1">{item}</label>
                                <input className="w-full border rounded-lg px-3 py-4" placeholder={`Enter ${item}`} />
                            </div>
                        ))}

                        {/* Listing date */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-1">Listing Date</label>
                            <input type="date" className="w-full border rounded-lg px-3 py-2" />
                        </div>
                    </div>
                )}

                {/* Footer */}
                <div className="flex flex-row  md:flex-row items-center p-[24px]  gap-4 border-t ">
                    <button 
                       onClick={()=> setIsModal(false)}
                    className="px-5 py-2 w-full md:w-1/2 rounded-lg border-2">Cancel</button>
                    <button
                        onClick={() => setStep(step < 3 ? step + 1 : 3)}
                        className="px-6 py-2 w-full md:w-1/2  rounded-lg bg-blue-600 text-white"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}
