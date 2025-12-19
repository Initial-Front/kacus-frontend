import { Search, Trash2, Edit3, MoreVertical } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NewListingModal from "./privateModal";

export default function PrivateMarket() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="w-full p-3 md:p-6 bg-white min-h-screen">
   
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:items-center justify-between mb-6">
                <div>
                    <h1 className="text-xl font-semibold text-gray-800">Private Market</h1>
                    <p className="text-sm text-gray-500 mt-2">
                        Manage company listings of market trading
                    </p>
                </div>

                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition"
                >
                    + New Listing
                </button>
            </div>

            <div className="flex flex-wrap items-center justify-between mb-5 gap-3">
                <button className="border px-4 py-2 rounded-lg text-sm flex items-center">
                    Private Market
                    <span className="ml-2 bg-gray-200 px-2 py-1 rounded text-xs">100</span>
                </button>

                <div className="flex items-center space-x-3">

                    <div className="relative w-72">
                        <input
                            className="w-full border rounded-lg pl-10 pr-3 py-2 text-sm focus:outline-none"
                            placeholder="Search"
                        />
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    </div>

                 
                    <button className="flex items-center border px-3 py-2 rounded-lg text-sm gap-2 hover:bg-gray-50">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M5 10H15M2.5 5H17.5M7.5 15H12.5" stroke="#414651"
                                strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Filters
                    </button>

                    <div className="flex items-center gap-2">
                        <button className="flex items-center border rounded-full p-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.57 5.93018L3.5 12.0002L9.57 18.0702" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M20.4999 12H3.66992" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>


                        </button>

                        <button>
                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="41" height="41" rx="20.5" fill="white" />
                                <rect x="0.5" y="0.5" width="41" height="41" rx="20.5" stroke="#F2F2F2" />
                                <path d="M23.4297 14.9302L29.4997 21.0002L23.4297 27.0702" stroke="#606060" strokeWidth="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.5 21H29.33" stroke="#606060" strokeWidth="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </button>
                    </div>
                </div>
            </div>

            
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                    <thead>
                        <tr className="text-left text-xs text-gray-500 border-y border-gray-100">

                            
                            <th className="py-3 px-3 w-10">
                                <input
                                    type="checkbox"
                                    className="h-[18px] w-[18px] accent-blue-600 cursor-pointer"
                                />
                            </th>

                           
                            <th className="py-3 px-3">
                                <div className="flex items-center gap-2">
                                    Company
                                    <span>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M3.5 7.5L6 10L8.5 7.5M3.5 4.5L6 2L8.5 4.5"
                                                stroke="#A4A7AE" strokeWidth="1.5"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                            </th>

                           
                            <th className="py-3 px-3">
                                <div className="flex items-center gap-2">
                                    Marketcap
                                    <span>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M3.5 7.5L6 10L8.5 7.5M3.5 4.5L6 2L8.5 4.5"
                                                stroke="#A4A7AE" strokeWidth="1.5"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                            </th>

                  
                            <th className="py-3 px-3">
                                <div className="flex items-center gap-2">
                                    Volume
                                    <span>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M3.5 7.5L6 10L8.5 7.5M3.5 4.5L6 2L8.5 4.5"
                                                stroke="#A4A7AE" strokeWidth="1.5"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                            </th>

                         
                            <th className="py-3 px-3">
                                <div className="flex items-center gap-2">
                                    Price
                                    <span>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M3.5 7.5L6 10L8.5 7.5M3.5 4.5L6 2L8.5 4.5"
                                                stroke="#A4A7AE" strokeWidth="1.5"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                            </th>

                        
                            <th className="py-3 px-3">
                                <div className="flex items-center gap-2">
                                    Status
                                    <span>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M3.5 7.5L6 10L8.5 7.5M3.5 4.5L6 2L8.5 4.5"
                                                stroke="#A4A7AE" strokeWidth="1.5"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                            </th>

                          
                            <th className="py-3 px-3 w-20"></th>
                        </tr>
                    </thead>


                    <tbody>
                        {[...Array(10)].map((_, i) => (
                            <tr
                                key={i}
                                className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition"
                                onClick={()=> navigate(`/PrivateMarketDetail/${i}`)}
                            >
                                <td className="py-4 px-3">
                                 <input
                                    type="checkbox"
                                    className="h-[18px] w-[18px] accent-blue-600 cursor-pointer"
                                />
                                </td>

                                <td className="py-4 px-3">
                                    <div className="flex items-center gap-3">
                                        <div className=" flex items-center  justify-center">
                                            <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_2895_130498)">
                                                    <path d="M3.47637 0H26.2491L1.43164 19.9412L12.6822 6.60291L4.22797 6.48839C3.32967 6.47586 2.48208 6.89637 1.95324 7.61393L1.70512 7.95212" fill="#898989" />
                                                    <path d="M22.7727 22.4999H0L24.8192 2.56055L13.5687 15.8988L22.0229 16.0133C22.9212 16.0258 23.7688 15.6053 24.2976 14.8878L24.5458 14.5496" fill="#E31E24" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_2895_130498">
                                                        <rect width="26.25" height="22.5" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>


                                        </div>

                                        <div>
                                            <div className="font-medium">Zenith Bank</div>
                                            <div className="text-xs text-gray-400">ZB</div>
                                        </div>
                                    </div>
                                </td>

                                <td className="py-4 px-3">6.23T</td>
                                <td className="py-4 px-3">42.01B</td>
                                <td className="py-4 px-3">116,010.76</td>


                                <td className="py-4 px-3">
                                    <div className="flex items-center justify-center gap-2 px-3  py-1 text-sm rounded-lg w-fit border">
                                        <span>
                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="4" cy="4" r="3" fill="#17B26A" />
                                            </svg>

                                        </span>
                                        Active
                                    </div>
                                </td>


                                <td className="py-4 px-3">
                                    <div className="flex items-center justify-end gap-3 text-gray-600">
                                        <button className="p-2 rounded-md hover:bg-gray-100">
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                        <button className="p-2 rounded-md hover:bg-gray-100">
                                            <Edit3 className="h-4 w-4" />
                                        </button>
                                        <button className="p-2 rounded-md hover:bg-gray-100">
                                            <MoreVertical className="h-4 w-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <NewListingModal setIsModal={setIsModalOpen}/>
                </div>
            )}
        </div>
    );
}
