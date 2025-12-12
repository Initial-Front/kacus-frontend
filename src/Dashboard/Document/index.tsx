import { Search } from "lucide-react";
import { useState } from "react";
import DocumentModal from "./DocumentModal";

 


interface CardDataType {
    src: string;
    HeadText: string;
    description: string;
}



 function Document() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    console.log(isModalOpen);

        const CardData: CardDataType[] = [
        {
            src: "/KaucusIcon.png",
            HeadText: "Privacy Agreement",
            description: "Understand your data rights and how Kaucus safeguards your information in compliance with data protection laws"
        },
       {
            src: "/KaucusIcon.png",
            HeadText: "Risk Disclosure",
            description: "Review the financial and market risks associated with trading on Kaucus, including volatility, leverage, and illiquidity."
        },
             {
            src: "/KaucusIcon.png",
            HeadText: "Preventing Money Laundering",
            description: "See the measures in place to detect and prevent money laundering, and learn your role in maintaining a secure financial ecosystem."
        },
             {
            src: "/KaucusIcon.png",
            HeadText: "Security Instructions",
            description: "Follow recommended security practices, including 2FA, password protection, and device management to ensure account safety."
        },
             {
            src: "/KaucusIcon.png",
            HeadText: "Privacy Agreement",
            description: "Understand your data rights and how Kaucus safeguards your information in compliance with data protection laws"
        },
             {
            src: "/KaucusIcon.png",
            HeadText: "Privacy Agreement",
            description: "Understand your data rights and how Kaucus safeguards your information in compliance with data protection laws"
        },
    ]
    return (
        <section className="min-h-screen p-6 ">
        <div className="w-full ">
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h1 className="text-xl font-semibold text-gray-800">Documents & Content</h1>
                    <p className="text-sm text-gray-500">Manage platform policies, whitepapers, legal disclosures, and investor materials with full version control.</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-4 py-2 bg-blue-600 text-white cursor-pointer rounded-lg">+ Upload Document</button>
            </div>

            <div className="flex items-center justify-between mb-5">
                <button className="border px-4 py-2 rounded-lg">Documents<span className="ml-2 bg-gray-200 px-2 py-1 rounded">0</span></button>

                <div className="flex items-center space-x-3">
                    <div className="relative w-72">
                        <input className="w-full border rounded-lg pl-10 py-2 text-sm outline-none" placeholder="Search" />
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    </div>

                    <button className="flex items-center border px-3 py-2 rounded-lg text-sm">
                        <span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 10H15M2.5 5H17.5M7.5 15H12.5" stroke="#414651" strokeWidth="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </span>
                        Filters
                    </button>
                </div>
            </div>    
        </div>



            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[42px]">
              {
                 CardData.map((card)=> (
                     <div key={card.HeadText} className="border border-[#E9E9E9] rounded-xl h-fit p-4">
                        <div className="h-[40%] flex justify-center items-center p-6 border rounded-xl">
                            <img src={card.src} className="min-h-[100px]  min-w-[100px]" alt={card.HeadText} />
                        </div>
                        <div className="mt-6 space-y-3">
                            <h1 className="text-base text-[#181D27] font-bold">{card.HeadText}</h1>
                            <p className="text-[#535862]">{card.description}</p>
                        </div>
                     </div>
                 ))
              }
            </div>

            {
                isModalOpen && (
                      <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
                        <DocumentModal setIsModal={setIsModalOpen}/>
                      </div>
                )
            }


           </section>

    );
 }
 
 export default Document;