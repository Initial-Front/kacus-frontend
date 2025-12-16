"use client";

import ListingSpotModal from "@/components/ui/ListingModal/listSpot";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type Status = "Active" | "Paused" | "Upcoming";

type PairDetails = {
    id: string;
    name: string;
    symbol: string;
    status: Status;
    isSpot?: boolean;
    tradeVolume24h?: string;
    openInterest?: string;
    activeUsers?: number;
    liquidations?: number;
    highestLeverage?: string;
    initialMargin?: string;
    minLeverage?: string;
    maxLeverage?: string;
    fundingInterval?: string;
    spec: { label: string; value: string }[];
};

const MOCK: PairDetails = {
    id: "btc-ngn",
    name: "Bitcoin",
    symbol: "BTC/NGN",
    status: "Active",
    isSpot: true,
    tradeVolume24h: "₦1.2B",
    openInterest: "₦350M",
    activeUsers: 412,
    liquidations: 9,
    highestLeverage: "00.00",
    initialMargin: "2.5%",
    minLeverage: "2x",
    maxLeverage: "50x",
    fundingInterval: "8 hours",
    spec: [
        { label: "Specifications", value: "value" },
        { label: "Min Order Amount", value: "0.000001" },
        { label: "Max Order Amount", value: "10000" },
        { label: "Listing Date", value: "12 Dec 2025" },
        { label: "Enable Deposits", value: "Yes" },
        { label: "Enable Withdrawals", value: "Yes" },
        { label: "Enable Trading", value: "Yes" },
        { label: "Price Tick Size", value: "0.0002" },
        { label: "Quantity Step Size", value: "10 BTC" },
        { label: "Maker Fee", value: "0.02%" },
        { label: "Taker Fee", value: "0.08%" },
    ],
};




function Pill({ children }: { children: React.ReactNode }) {
    return <span className="inline-flex items-center text-xs  border-2 px-2  h-[20px] py-0.5 rounded-md">{children}</span>;
}


export function Header({ pair }: { pair: PairDetails }) {
    return (
        <div className="shadow-md shadow-[#0A0D120D] border-2  p-3 md:p-[23px] rounded-xl">
            <div className="flex items-center gap-4">

                <div className="flex flex-col md:flex-row  items-center gap-4 flex-1">
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M55.1623 34.7733C51.4227 49.7735 36.23 58.9023 21.2281 55.1617C6.23246 51.4221 -2.89634 36.2284 0.844907 21.2295C4.58287 6.22773 19.7756 -2.90175 34.7729 0.837856C49.7737 4.57746 58.9019 19.7728 55.1619 34.7736L55.1622 34.7733H55.1623Z" fill="#F7931A" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M40.3498 24.0108C40.9071 20.2846 38.0703 18.2816 34.1911 16.9454L35.4495 11.898L32.377 11.1324L31.1519 16.047C30.3442 15.8455 29.5146 15.6557 28.6902 15.4675L29.9241 10.5205L26.8535 9.75488L25.5944 14.8007C24.926 14.6485 24.2694 14.4981 23.6325 14.3396L23.636 14.3237L19.3989 13.2657L18.5816 16.5473C18.5816 16.5473 20.8612 17.0699 20.8131 17.102C22.0573 17.4126 22.2823 18.2362 22.245 18.889L20.8115 24.6392C20.8972 24.661 21.0083 24.6925 21.1309 24.7418L21.0417 24.7195C20.9659 24.7005 20.8871 24.6808 20.8062 24.6614L18.7969 32.7167C18.6448 33.0947 18.2589 33.662 17.389 33.4466C17.4198 33.4912 15.1558 32.8893 15.1558 32.8893L13.6304 36.4063L17.6288 37.4031C18.0666 37.5129 18.4992 37.6256 18.9274 37.7373L18.9276 37.7373C19.2269 37.8154 19.5241 37.8928 19.8194 37.9683L18.5479 43.0737L21.6169 43.8393L22.876 38.7881C23.7145 39.0157 24.5281 39.2257 25.3246 39.4236L24.0698 44.4509L27.1424 45.2165L28.4137 40.1207C33.6531 41.1123 37.5926 40.7125 39.2508 35.9736C40.587 32.1581 39.1843 29.9574 36.4279 28.5223C38.4356 28.0593 39.9477 26.7388 40.3509 24.0112L40.35 24.0105L40.3498 24.0108ZM33.3298 33.8547C32.4586 37.3553 26.9793 35.9081 24.4724 35.2459C24.2468 35.1863 24.0454 35.1331 23.8735 35.0905L25.5607 28.3268C25.7702 28.3791 26.0262 28.4365 26.3162 28.5016L26.3162 28.5016C28.9094 29.0835 34.2224 30.2759 33.3299 33.8547H33.3298ZM26.8364 25.3624C28.9264 25.9202 33.4859 27.137 34.28 23.9555H34.2803C35.0911 20.7015 30.6601 19.7205 28.4959 19.2414C28.2525 19.1875 28.0377 19.1399 27.8623 19.0962L26.3326 25.2305C26.477 25.2665 26.6465 25.3117 26.8364 25.3624Z" fill="white" />
                    </svg>


                    <div className="flex-1">
                        <div className="flex items-center flex-wrap gap-3  max-w-52">
                            <h2 className="text-xl font-semibold text-gray-800">{pair.name}</h2>
                            <span className="text-sm text-gray-500">{pair.symbol}</span>
                            <Pill>{pair.status}</Pill>
                            <p className="text-xs text-blue-600 bg-blue-50 px-2  h-[20px] py-0.5 rounded">Spot</p>
                        </div>

                    </div>
                    <div className="flex items-center gap-3">
                        <button className="px-3 py-2 border rounded-md text-sm font-semibold">Pause Trading</button>
                        <button className="px-3 py-2 border rounded-md text-sm font-semibold">Edit Spot</button>
                        <button className="px-3 py-2 border border-[#FDA29B] bg-[#FFFBFA] rounded-md text-sm text-[#B42318] font-semibold">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}




export function General({ pair }: { pair: PairDetails }) {
    return (
        <div className=" overflow-hidden">
            <div className="p-6">

                <div className="divide-y">
                    {pair.spec.map((s) => (
                        <div key={s.label} className="py-6 flex justify-between text-sm text-[#717680]">
                            <div className=" font-medium md:w-1/2">{s.label}</div>
                            <div className="font-medium md:w-1/2">{s.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function LifecycleInformation({ pair }: { pair: PairDetails }) {
    return (
        <div className=" overflow-hidden">
            <div className="p-6">

                <div className="divide-y">
                    {pair.spec.map((s) => (
                        <div key={s.label} className="py-6 flex justify-between text-sm text-[#717680]">
                            <div className=" font-medium md:w-1/2">{s.label}</div>
                            <div className="font-medium md:w-1/2">{s.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function RiskControls({ pair }: { pair: PairDetails }) {
    return (
        <div className=" overflow-hidden">
            <div className="p-6">

                <div className="divide-y">
                    {pair.spec.map((s) => (
                        <div key={s.label} className="py-6 flex justify-between text-sm text-[#717680]">
                            <div className=" font-medium md:w-1/2">{s.label}</div>
                            <div className="font-medium md:w-1/2">{s.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}



export default function ProductContractDetailsPage() {
    const [activeTab, setActiveTab] = useState<'General' | 'LifecycleInformation' | 'RiskControls'>('General');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    const getWidthClass = () => {
        if (activeTab === 'General') return 'w-16';
        if (activeTab === 'LifecycleInformation') return 'w-32';
        if (activeTab === 'RiskControls') return 'w-20';
        return 'w-16';
    };


    const getTranslateClass = () => {
        switch (activeTab) {
            case "General":
                return "translate-x-0";
            case 'LifecycleInformation':
                return "translate-x-16";
            case "RiskControls":
                return "translate-x-56";
            default:
                return "";
        }
    };

    return (
        <div className="p-3 md:p-6">
            <div className="flex flex-col md:flex-row  items-center justify-between mb-5  ">
                <div>
                    <h1 className="text-xl font-semibold text-gray-800 mb-3">Derivatives Module</h1>
                    <p className="text-sm text-gray-500">Manage tradable assets and trading pairs available for spot (instant) trading</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-4 py-2 bg-blue-600 text-white hidden md:block cursor-pointer rounded-lg">+ New Spot</button>
            </div>

            <button
                onClick={() => navigate(-1)}
                className="text-gray-600 hover:text-gray-800 p-1 mb-8 flex items-center gap-3 -ml-1">
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.57 5.93018L3.5 12.0002L9.57 18.0702" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M20.4999 12H3.66992" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>
                Back
            </button>

            <Header pair={MOCK} />
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1fr] gap-6">
                <div className="flex flex-col">
                    <div className="mt-4">
                        <div className="border-b">
                            <nav className="flex -mb-px space-x-6">
                                <button
                                    onClick={() => setActiveTab('General')}
                                    className={`py-3 text-sm `}
                                >
                                    General
                                </button>

                                <button
                                    onClick={() => setActiveTab('LifecycleInformation')}
                                    className={`py-3 text-sm `}
                                >
                                    Lifecycle Information
                                </button>

                                <button
                                    onClick={() => setActiveTab('RiskControls')}
                                    className={`py-3 text-sm `}
                                >
                                    Risk Controls
                                </button>
                            </nav>
                            <div className={` ${getWidthClass()} h-1 ${getTranslateClass()}   transition-all duration-300 ease-in-out bg-blue-600 border-b-2`}></div>
                    </div>

                    <div className="mt-6">
                        {activeTab === "General" ? (
                            <General pair={MOCK} />
                        ) : activeTab === "LifecycleInformation" ? (
                            <LifecycleInformation pair={MOCK} />
                        ) : (
                            <RiskControls pair={MOCK} />
                        )}

                    </div>
                </div>
            </div>
        </div>


            {
        isModalOpen && (
            <div className="fixed inset-0 top-0 bg-black/50 flex items-center justify-center  z-50">
                <ListingSpotModal
                    onClose={() => setIsModalOpen(false)} />
            </div>
        )
    }
        </div >
    );
}
