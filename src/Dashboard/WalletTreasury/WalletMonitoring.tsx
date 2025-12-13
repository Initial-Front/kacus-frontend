import React from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

type Wallet = {
    walletId: string;
    name: string;
    asset: string;
    balance: string;

    role: string;
    ngnEquivalent?: string;
    derivativesRole?: string;
    lastTransaction?: string;
    status?: "Active" | "Near Margin Cap";
    custody?: "Ledger Vault" | "Multi-sig (Internal)";

};

const wallets: Wallet[] = [
    {
        walletId: "#KAL2048",
        name: "Lily-Rose Chedjou",
        asset: "MULTI",

        role: "Collateral (User Margin)",
        balance: "1.4M USDT",

        ngnEquivalent: "₦1.65B",
        derivativesRole: "User margin collateral",
        lastTransaction: "Aug 27, 2025 – 10:14 AM",
        status: "Near Margin Cap",
        custody: "Multi-sig (Internal)",

    },
];

export default function WalletMonitoring() {
    return (
        <div className="w-full p-6">

                 <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-xl flex items-center gap-1 font-semibold text-gray-800">
                        Wallet & Treasury
                        <span className="ms-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 12L10 8L6 4" stroke="#D5D7DA" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </span>
                        <span className="text-sm ">
                           Wallet Monitoring
                        </span>

                    </h1>
                    <p className="text-sm text-gray-500 mt-2">
                        Track, review, and control all financial transactions on the platform.
                    </p>
                </div>

                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 text-sm hover:bg-blue-700 transition"
                >

                    <span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66797 14.1667L10.0013 17.5M10.0013 17.5L13.3346 14.1667M10.0013 17.5V10M16.668 13.9524C17.6859 13.1117 18.3346 11.8399 18.3346 10.4167C18.3346 7.88536 16.2826 5.83333 13.7513 5.83333C13.5692 5.83333 13.3989 5.73833 13.3064 5.58145C12.2197 3.73736 10.2133 2.5 7.91797 2.5C4.46619 2.5 1.66797 5.29822 1.66797 8.75C1.66797 10.4718 2.36417 12.0309 3.49043 13.1613" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </span>
                    Export report
                </button>
            </div>
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                <div className="text-sm font-semibold">
                    Users Wallet List <span className="text-gray-400 ml-1">2392</span>
                </div>

                <div className="flex items-center gap-2">
                    <div className="relative">
                        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                            placeholder="Search"
                            className="pl-9 pr-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-300"
                        />
                    </div>
                    <button className="p-2 border rounded-lg">
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button className="p-2 border rounded-lg">
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>


            <div className="hidden md:block overflow-x-auto no-scrollbar ">
                <table className="w-full text-sm border-separate border-spacing-x-8 border-spacing-y-4">
                    <thead className="text-gray-500 border-b">
                        <tr>
                            <th className="text-left whitespace-nowrap ">Wallet ID</th>
                            <th className="text-left  whitespace-nowrap">Wallet Name</th>
                            <th className="text-left  whitespace-nowrap">Asset</th>
                            <th className="text-left  whitespace-nowrap">Summary</th>
                            <th className="text-left  whitespace-nowrap">Role</th>
                            <th className="text-left  whitespace-nowrap">Balance</th>
                            <th className="text-left  whitespace-nowrap">NGN Equivalent</th>
                            <th className="text-left  whitespace-nowrap">Derivatives Role</th>
                            <th className="text-left  whitespace-nowrap">Last Transaction</th>
                            <th className="text-left  whitespace-nowrap">Status</th>
                            <th className="text-left  whitespace-nowrap">Custody Method</th>
                            
                        </tr>
                    </thead>

                    <tbody>
                        {wallets.map((w, i) => (
                            <tr key={i} className="border-b bg-gray-50">
                                <td className="py-3 px-4 whitespace-nowrap">{w.walletId}</td>
                                <td className="py-3 px-4 font-medium whitespace-nowrap">{w.name}</td>
                                <td className="py-3 px-4 font-medium whitespace-nowrap">{w.asset}</td>
                                <td className="py-3 px-4 whitespace-nowrap">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.65 14.65C11.75 14.75 11.8667 14.8 12 14.8C12.1333 14.8 12.25 14.75 12.35 14.65L15.15 11.85C15.3167 11.6833 15.3583 11.5 15.275 11.3C15.1917 11.1 15.0333 11 14.8 11L9.2 11C8.96667 11 8.80833 11.1 8.725 11.3C8.64167 11.5 8.68333 11.6833 8.85 11.85L11.65 14.65ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6867 5.825 19.9743 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26333 14.6833 2.00067 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31333 6.88333 4.02567 5.825 4.925 4.925C5.825 4.025 6.88333 3.31267 8.1 2.788C9.31667 2.26333 10.6167 2.00067 12 2C13.3833 2 14.6833 2.26267 15.9 2.788C17.1167 3.31333 18.175 4.02567 19.075 4.925C19.975 5.825 20.6877 6.88333 21.213 8.1C21.7383 9.31667 22.0007 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6867 17.1167 19.9743 18.175 19.075 19.075C18.175 19.975 17.1167 20.6877 15.9 21.213C14.6833 21.7383 13.3833 22.0007 12 22ZM12 20C14.2167 20 16.1043 19.221 17.663 17.663C19.2217 16.105 20.0007 14.2173 20 12C20 9.78333 19.221 7.89567 17.663 6.337C16.105 4.77833 14.2173 3.99933 12 4C9.78333 4 7.89567 4.779 6.337 6.337C4.77833 7.895 3.99933 9.78267 4 12C4 14.2167 4.779 16.1043 6.337 17.663C7.895 19.2217 9.78267 20.0007 12 20Z" fill="#717986" />
                                    </svg>
                                </td>
                                <td className="py-3 px-4">{w.role}</td>
                                <td className="py-3 px-4 font-medium">{w.balance}</td>
                                <td className="py-3 px-4">{w.ngnEquivalent}</td>
                                <td className="py-3 px-4">{w.derivativesRole}</td>
                                <td className="py-3 px-4">{w.lastTransaction}</td>
                                <td className="py-3 px-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${w.status === "Active" ? "bg-green-50 text-green-600" : "bg-orange-50 text-orange-600"}`}>
                                        {w.status}
                                    </span>
                                </td>
                                <td className="py-3 px-4">
                                    <span className="px-2 py-1 rounded-full bg-blue-50 text-blue-600 text-xs">{w.custody}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>




            {/* Mobile Cards */}
            <div className="md:hidden space-y-3">
                {wallets.map((w, i) => (
                    <div
                        key={i}
                        className="border rounded-lg p-3 flex flex-col gap-2"
                    >
                        <div className="flex justify-between text-xs text-gray-500">
                            <span>{w.walletId}</span>
                            <span className="font-semibold text-gray-900">{w.balance}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gray-200" />
                            <div>
                                <div className="text-sm font-medium">{w.name}</div>
                                <div className="text-xs text-gray-500">{w.derivativesRole}</div>
                            </div>
                        </div>

                        <span className="w-fit px-2 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium">
                            {w.asset}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
