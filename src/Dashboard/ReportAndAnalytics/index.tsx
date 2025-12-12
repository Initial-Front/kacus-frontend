import { Button } from "@/components/ui/button";
import  { useState } from "react";
import Trading from "./trading";
import User from "./usersKyc";
import Revenue from "./Revenue";

type TabKey = "trading" | "users" | "revenue";



export default function TradingAnalytics() {
  const [tab, setTab] = useState<TabKey>("trading");
  const tabs: TabKey[] = ["trading", "users", "revenue"];


  return (
    <div className=" min-h-screen">
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between  p-6 mb-[2px]">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Reports & Analytics
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Monitor platform-wide performance and export detailed operational data for internal, financial, and regulatory use.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="bg-blue-600 h-[40px] p-3 rounded-lg hover:bg-blue-700 text-white"
          >
            <span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10H15" stroke="white" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10 15V5" stroke="white" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            New Trading Pairs
          </Button>

        </div>
      </header>
      <div className="w-full mx-auto">

        {/* NAVIGATION */}
        <div className="flex items-center border-b-2 justify-between mb-6 px-7">
          <nav className="flex gap-6 text-sm text-gray-500">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t as TabKey)}
                className={`pb-2 ${tab === t ? "text-blue-600 border-b-2 border-blue-600" : "hover:text-gray-700"
                  }  font-semibold font-sans`}
              >
                {t === "trading" ? "Trading" : t === "users" ? "User & KYC" : "Revenue"}
              </button>
            ))}
          </nav>
        </div>

        {
           tab === "trading" ? (
                <Trading tabs={tab}/>
           ) : tab === "users" ? (
               <User tabs={tab}/>
           )  : (
             <Revenue/>
           ) 
       }

       

      </div>
    </div>
  );
}
