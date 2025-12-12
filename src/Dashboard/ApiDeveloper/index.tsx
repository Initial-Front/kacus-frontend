import { useState, } from "react";
import { Trash2, Edit3, } from "lucide-react";
import CreateKey from "./CreateNewKey";
import DeleteClientApi from "./DeleteApi";




interface ApiDataTypes {
    id: number;
    ClientName: string;
    KeyId: string;
    CreatedOn: string;
    status: string;
}

// const delist = (id: string) => setRows((prev) => prev.filter((r) => r.id !== id));
function ApiDev() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [DeleteApi, setDeleteApi] = useState<number | null>(null)
    const [copied, setCopied] = useState<number | null>(null)
    console.log(isModalOpen)


   


    const ApiData: ApiDataTypes[] = [
        { id: 1, ClientName: 'QuantumTrader', KeyId: 'qtk_789...12fd', CreatedOn: "9 Mar 2024 10:41 AM", status: "Active" },
        { id: 2, ClientName: 'QuantumTrader', KeyId: 'qtk_789...12fd', CreatedOn: "9 Mar 2024 10:41 AM", status: "Active" },
        { id: 3, ClientName: 'QuantumTrader', KeyId: 'qtk_789...12fd', CreatedOn: "9 Mar 2024 10:41 AM", status: "Active" },
    ]

     const handleCopied = (Apid : number)=> {
       const GetKeyCard = ApiData.find((item)=> item.id !== Apid)
       console.log(GetKeyCard, 'GetKeyCard');  
       if (!GetKeyCard) return;
       navigator.clipboard.writeText(GetKeyCard.KeyId)
        setCopied(Apid); 
        setTimeout(() => {
            setCopied(null)  
        }, 2000);
       
    }
    return (
        <section>
            <div className="w-full p-6 bg-white min-h-screen ">
                <div className="flex items-center justify-between mb-5">
                    <div>
                        <h1 className="text-xl font-semibold text-gray-800">API & Developer</h1>
                        <p className="text-sm text-[#535862] mt-[10px] ">Manage API keys, usage logs, permissions, and integration tools for institutional traders, partners, and internal services.</p>
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-4 py-2 bg-blue-600 text-white cursor-pointer rounded-lg">+ Create API Key</button>
                </div>


                <main className="mt-8  border rounded-2xl ">
                    <div className="px-[24px] py-[21px] border-b">
                        <div className="flex items-center gap-2">
                            <h1 className="text-[#181D27] text-lg font-semibold">Secret API Keys</h1>
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
                                    <th className="py-3 px-3">
                                        <div className="flex items-center gap-1 text-[#717680]">
                                            Client Name
                                            <span>
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6 2.5V9.5M6 9.5L9.5 6M6 9.5L2.5 6" stroke="#A4A7AE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>

                                            </span>
                                        </div>
                                    </th>
                                    <th className="py-3 px-3 text-[#717680]">Key ID</th>
                                    <th className="py-3 px-3">
                                        <div className="flex items-center gap-1 text-[#717680] ">
                                            Created On
                                            <span>
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6 2.5V9.5M6 9.5L9.5 6M6 9.5L2.5 6" stroke="#A4A7AE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                        </div>
                                    </th>
                                    <th className="py-3 px-3">
                                        <div className="flex items-center gap-1 text-[#717680]">
                                            Status
                                            <span>
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6 2.5V9.5M6 9.5L9.5 6M6 9.5L2.5 6" stroke="#A4A7AE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                        </div>
                                    </th>

                                    <th className="py-3 px-3 w-36">
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
                                        <td className="py-4 px-3">
                                            <div className="flex items-center gap-3">
                                                <div className="font-medium">{row.ClientName}</div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-3">
                                            <div className="flex items-center justify-center gap-2 px-3 py-1 w-fit rounded-xl bg-[#EEF4FF] text-[#3538CD]">
                                                <span>
                                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="4" cy="4" r="3" fill="#6172F3" />
                                                    </svg>

                                                </span>
                                                {row.KeyId}
                                                <button
                                                className=" transition-all duration-1000"
                                                 onClick={()=> handleCopied(row.id)}
                                                >
                                                    {
                                                        copied  === row.id ? 'copied' : (
                                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10.6663 8.60065V11.4007C10.6663 13.734 9.73301 14.6673 7.39967 14.6673H4.59967C2.26634 14.6673 1.33301 13.734 1.33301 11.4007V8.60065C1.33301 6.26732 2.26634 5.33398 4.59967 5.33398H7.39967C9.73301 5.33398 10.6663 6.26732 10.6663 8.60065Z" stroke="#3538CD" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M14.6663 4.60065V7.40065C14.6663 9.73398 13.733 10.6673 11.3997 10.6673H10.6663V8.60065C10.6663 6.26732 9.73301 5.33398 7.39967 5.33398H5.33301V4.60065C5.33301 2.26732 6.26634 1.33398 8.59967 1.33398H11.3997C13.733 1.33398 14.6663 2.26732 14.6663 4.60065Z" stroke="#3538CD" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>

                                                        )
                                                    }
                                                </button>
                                            </div>
                                        </td>
                                        <td className="py-4 px-3">{row.CreatedOn}</td>
                                        <td className="py-4 px-3">
                                            <div className={`flex items-center justify-center gap-2 px-2 py-1 text-xs rounded-lg border w-fit `}>
                                                <span>
                                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="4" cy="4" r="3" fill="#17B26A" />
                                                    </svg>

                                                </span>
                                                {row.status}
                                            </div>
                                        </td>
                                        <td className="py-4 px-3 ">
                                            <div className="inline-flex items-center gap-3">
                                                <button title="Delist"
                                                onClick={()=> setDeleteApi(row.id)}
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

            </div>

               {
                isModalOpen && (
                      <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
                        <CreateKey setIsModal={setIsModalOpen}/>
                      </div>
                )
            }

              {
                DeleteApi && (
                      <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
                        <DeleteClientApi id={DeleteApi} setDelete={setDeleteApi}/>
                      </div>
                )
            }
        </section>
    );
}
    
export default ApiDev;