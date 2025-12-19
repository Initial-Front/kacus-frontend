import { useState, } from "react";
import { Trash2, Edit3, } from "lucide-react";
import AddMarketMaker from "./AddMarker";
import AddInstitution from "./AddInstitution";
import DeleteMarketMaker from "./deleteMarker";





interface ApiDataTypes {
    id: number;
    ClientName: string;
    KeyId: string;
    CreatedOn: string;
    status: string;
    ConnectedServices?: string;

}

// const delist = (id: string) => setRows((prev) => prev.filter((r) => r.id !== id));
function MarketMarker() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [DeleteApi, setDeleteApi] = useState<number | null>(null)
    console.log(isModalOpen);
    const [mainTab, setMainTab] = useState<"Market Maker" | "Institutions">("Market Maker");






    const ApiData: ApiDataTypes[] = [
        { id: 1, ClientName: 'QuantumTrader', KeyId: 'Spread Tolerance', CreatedOn: "0.25%", status: "Active" },
        { id: 2,  ClientName: 'QuantumTrader', KeyId: 'Spread Tolerance', CreatedOn: "0.25%", status: "Active" },
        { id: 3,  ClientName: 'QuantumTrader', KeyId: 'Spread Tolerance', CreatedOn: "0.25%", status: "Active" }
    ]

     const InstitutionData: ApiDataTypes[] = [
        { id: 1, ClientName: 'Zenith Securities', KeyId: 'Broker-Dealer', CreatedOn: "USA", ConnectedServices: "Private Market, Futures",  status: "Active" },
        { id: 2,  ClientName: 'Zenith Securities', KeyId: 'Broker-Dealer', CreatedOn: "USA", ConnectedServices: "Private Market, Futures",  status: "Active" },
        { id: 3,  ClientName: 'Zenith Securities', KeyId: 'Broker-Dealer', CreatedOn: "USA", ConnectedServices: "Private Market, Futures",  status: "Active" }
    ]

    return (
        <section>
            <div className="w-full p-3 md:p-6 bg-white min-h-screen ">
                <div className="flex flex-col md:flex-row gap-y-4 md:gap-0 items-center justify-between mb-5">
                    <div>
                        <h1 className="text-xl font-semibold text-gray-800">Market Maker & Institutions</h1>
                        <p className="text-sm text-[#535862] mt-[10px] ">Manage all API keys for Market Maker & Institutions</p>
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-4 py-2 w-fit bg-blue-600 text-white cursor-pointer rounded-lg">+ Add Market Maker</button>
                </div>
      

      
                        <div className="flex gap-4 border-b mb-6">
                            <button
                                onClick={() => setMainTab("Market Maker")}
                                className={`px-4 py-2 ${mainTab === "Market Maker" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500"
                                    }`}
                            >
                                Market Maker
                            </button>

                            <button
                                onClick={() => setMainTab("Institutions")}
                                className={`px-4 py-2 ${mainTab === "Institutions" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500"
                                    }`}
                            >
                                Institutions
                            </button>
                        </div>

                {mainTab === "Market Maker" ? (
                    <main className="mt-8  md:border rounded-2xl ">
                        <div className="md:px-[24px] py-[21px] border-b">
                            <div className="flex items-center gap-2">
                                <h1 className="text-[#181D27] text-lg font-semibold">Market Maker</h1>
                                <button className="flex items-center gap-1 border rounded-lg px-2">
                                    <span>
                                        <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="3" cy="3" r="3" fill="#6172F3" />
                                        </svg>

                                    </span>
                                    240
                                </button>
                            </div>


                            <p className="text-[#535862] text-sm">Keep track of all API Keys on the platform</p>
                        </div>



                        <div className="overflow-x-auto">
                            <table className="min-w-full text-sm">
                                <thead>
                                    <tr className="text-left text-xs text-gray-500 border-y bg-[#FDFDFD] border-gray-100">
                                        <th className="py-3 px-3 whitespace-nowrap">
                                            <div className="flex items-center gap-1 text-[#717680]">
                                               Name
                                                <span>
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 2.5V9.5M6 9.5L9.5 6M6 9.5L2.5 6" stroke="#A4A7AE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>

                                                </span>
                                            </div>
                                        </th>
                                        <th className="py-3 px-3 whitespace-nowrap text-[#717680]">Pairs Supported</th>
                                        <th className="py-3 px-3 whitespace-nowrap">
                                            <div className="flex items-center gap-1 text-[#717680] ">
                                                Spread Tolerance
                                                <span>
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 2.5V9.5M6 9.5L9.5 6M6 9.5L2.5 6" stroke="#A4A7AE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </th>
                                        <th className="py-3 px-3 whitespace-nowrap">
                                            <div className="flex items-center gap-1 text-[#717680]">
                                                 Status
                                                <span>
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 2.5V9.5M6 9.5L9.5 6M6 9.5L2.5 6" stroke="#A4A7AE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </th>

                                        <th className="py-3 px-3 w-36 whitespace-nowrap">
                                            <div className="flex items-center gap-1 text-[#717680]">
                                                Action
                                                <span>
                                                    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.75 6.25L3.25 8.75L5.75 6.25M0.75 3.25L3.25 0.75L5.75 3.25" stroke="#A4A7AE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </span>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ApiData.map((row) => (
                                        <tr key={row.id} className="border-b border-gray-100 ">
                                            <td className="py-4 px-3 whitespace-nowrap">
                                                <div className="flex items-center gap-3">
                                                    <div className="font-medium">{row.ClientName}</div>
                                                </div>
                                            </td>
                                            <td className="py-4 px-3 whitespace-nowrap">
                                                <div className=" w-fit">

                                                    {row.KeyId}
                                             
                                                </div>
                                            </td>
                                            <td className="py-4 px-3 whitespace-nowrap">{row.CreatedOn}</td>
                                            <td className="py-4 px-3 whitespace-nowrap">
                                                <div className={`flex items-center justify-center gap-2 px-2 py-1 text-xs rounded-lg border w-fit `}>
                                                    <span>
                                                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="4" cy="4" r="3" fill="#17B26A" />
                                                        </svg>

                                                    </span>
                                                    {row.status}
                                                </div>
                                            </td>
                                            <td className="py-4 px-3 whitespace-nowrap ">
                                                <div className="inline-flex items-center gap-3">
                                                    <button title="Delist"
                                                        onClick={() => setDeleteApi(row.id)}
                                                        className="p-2 rounded-md hover:bg-gray-100 text-gray-600"><Trash2 className="w-4 h-4" /></button>
                                                    <button title="Edit" className="p-2 rounded-md hover:bg-gray-100 text-gray-600"><Edit3 className="w-4 h-4" /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </main>
                ) : (
                    <main className="mt-8  md:border md:rounded-2xl ">
                        <div className=" md:px-[24px] py-[21px] border-b">
                            <div className="flex items-center gap-2">
                                <h1 className="text-[#181D27] text-lg font-semibold">Institutions</h1>
                                <button className="flex items-center gap-1 border rounded-lg px-2">
                                    <span>
                                        <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="3" cy="3" r="3" fill="#6172F3" />
                                        </svg>

                                    </span>
                                    240
                                </button>
                            </div>


                            <p className="text-[#535862] text-sm">Keep track of all API Keys on the platform</p>
                        </div>

            

                        <div className="overflow-x-auto">
                            <table className="min-w-full text-sm">
                                <thead>
                                    <tr className="text-left text-xs text-gray-500 border-y bg-[#FDFDFD] border-gray-100">
                                        <th className="py-3 px-3 whitespace-nowrap">
                                            <div className="flex items-center gap-1 text-[#717680]">
                                               Institution Name
                                                <span>
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 2.5V9.5M6 9.5L9.5 6M6 9.5L2.5 6" stroke="#A4A7AE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>

                                                </span>
                                            </div>
                                        </th>
                                        <th className="py-3 px-3 whitespace-nowrap text-[#717680]"> Type</th>
                                        <th className="py-3 px-3 whitespace-nowrap">
                                            <div className="flex items-center gap-1 text-[#717680] ">
                                                Country
                                                <span>
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 2.5V9.5M6 9.5L9.5 6M6 9.5L2.5 6" stroke="#A4A7AE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </th>
                                        <th className="py-3 px-3 text-[#717680] whitespace-nowrap">  Connected Services</th>
                                        <th className="py-3 px-3 whitespace-nowrap">
                                            <div className="flex items-center gap-1 text-[#717680]">
                                                Status
                                                <span>
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 2.5V9.5M6 9.5L9.5 6M6 9.5L2.5 6" stroke="#A4A7AE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </th>

                                        <th className="py-3 px-3 w-36 whitespace-nowrap">
                                            <div className="flex items-center gap-1 text-[#717680]">
                                                Action
                                                <span>
                                                    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.75 6.25L3.25 8.75L5.75 6.25M0.75 3.25L3.25 0.75L5.75 3.25" stroke="#A4A7AE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </span>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {InstitutionData.map((row) => (
                                        <tr key={row.id} className="border-b border-gray-100 ">
                                            <td className="py-4 px-3 whitespace-nowrap">
                                                <div className="flex items-center gap-3">
                                                    <div className="font-medium">{row.ClientName}</div>
                                                </div>
                                            </td>
                                            <td className="py-4 px-3 whitespace-nowrap">
                                                <div className="w-fit ">
                 
                                                    {row.KeyId}
                                              
                                                </div>
                                            </td>
                                            
                                            <td className="py-4 px-3 whitespace-nowrap">{row.CreatedOn}</td>
                                             <td className="py-4 px-3 whitespace-nowrap">{row.ConnectedServices}</td>
                                            <td className="py-4 px-3 whitespace-nowrap">
                                                <div className={`flex items-center justify-center gap-2 px-2 py-1 text-xs rounded-lg border w-fit `}>
                                                    <span>
                                                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="4" cy="4" r="3" fill="#17B26A" />
                                                        </svg>

                                                    </span>
                                                    {row.status}
                                                </div>
                                            </td>
                                            <td className="py-4 px-3 whitespace-nowrap ">
                                                <div className="inline-flex items-center gap-3">
                                                    <button title="Delist"
                                                        onClick={() => setDeleteApi(row.id)}
                                                        className="p-2 rounded-md hover:bg-gray-100 text-gray-600"><Trash2 className="w-4 h-4" /></button>
                                                    <button title="Edit" className="p-2 rounded-md hover:bg-gray-100 text-gray-600"><Edit3 className="w-4 h-4" /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </main>
                )}


            </div>

            {
                isModalOpen && (
                    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
                      {
                        mainTab === "Market Maker" ?  <AddMarketMaker setIsOpen={setIsModalOpen}/> :  <AddInstitution setIsOpen={setIsModalOpen}/>
                      }
                    </div>
                )
            }

            {
                DeleteApi && (
                    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
                        {/* <DeleteClientApi id={DeleteApi} setDelete={setDeleteApi}/> */}
                        <DeleteMarketMaker  id={DeleteApi} setDelete={setDeleteApi} tab={mainTab}/>/
                    </div>
                )
            }
        </section>
    );
}

export default MarketMarker;