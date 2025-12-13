import React from "react";
import { ChevronDown, ArrowLeft, ArrowRight, Search } from "lucide-react";

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

            <div className="w-full space-y-6 md:mt-[88px]">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div className="inline-flex min-w-[210px] items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-[10px] text-sm font-medium text-gray-900 shadow-sm">
                        <span>Users Wallet List</span>
                        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-700">
                            2392
                        </span>
                    </div>



                    <div className="flex items-center gap-[88px]">
                        <div className="relative w-full sm:w-72">
                            <Search
                                size={16}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            />
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-9 pr-12 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded border border-gray-200 px-1.5 py-0.5 text-[10px] font-semibold text-gray-500">
                                ⌘K
                            </span>
                        </div>


                        <div className="flex items-center gap-2">
                            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm hover:bg-gray-50">
                                <ArrowLeft size={16} />
                            </button>
                            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm hover:bg-gray-50">
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>



                <div className="flex flex-wrap items-center gap-3">
                    {/* Sort */}
                    <button className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                        <span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 6L9.33333 6.00008" stroke="#A4A4A4" stroke-width="1.5" stroke-linejoin="round" />
                                <path d="M2 10H6.66667" stroke="#A4A4A4" stroke-width="1.5" stroke-linejoin="round" />
                                <path d="M2 2H12.6667" stroke="#A4A4A4" stroke-width="1.5" stroke-linejoin="round" />
                                <path d="M12 14V6M12 14L10 12M12 14L14 12" stroke="#A4A4A4" stroke-width="1.5" />
                            </svg>

                        </span>
                        <p> <span className="text-[#A4A7AE] font-medium">Sort: </span>assets</p>
                        <ChevronDown size={16} />
                    </button>


                    <button className="inline-flex min-w-[265px] items-center justify-between gap-3 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                        <div className="flex justify-center items-center gap-2">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.332 18.9577H6.66536C4.1487 18.9577 2.70703 17.516 2.70703 14.9993V6.87435C2.70703 4.24935 4.04036 2.91602 6.66536 2.91602C7.00703 2.91602 7.29036 3.19935 7.29036 3.54102C7.29036 3.87435 7.4237 4.19101 7.65703 4.42435C7.89037 4.65768 8.20703 4.79102 8.54036 4.79102H11.457C12.1487 4.79102 12.707 4.23268 12.707 3.54102C12.707 3.19935 12.9904 2.91602 13.332 2.91602C15.957 2.91602 17.2904 4.24935 17.2904 6.87435V14.9993C17.2904 17.516 15.8487 18.9577 13.332 18.9577ZM6.12368 4.18269C4.80701 4.29102 3.95703 4.88268 3.95703 6.87435V14.9993C3.95703 16.8493 4.81536 17.7077 6.66536 17.7077H13.332C15.182 17.7077 16.0404 16.8493 16.0404 14.9993V6.87435C16.0404 4.88268 15.1904 4.29935 13.8737 4.18269C13.5904 5.24935 12.6154 6.04102 11.457 6.04102H8.54036C7.8737 6.04102 7.2487 5.78268 6.7737 5.30768C6.45704 4.99101 6.24034 4.60769 6.12368 4.18269Z" fill="#25272C" />
                                <path d="M11.4596 6.04102H8.54297C7.8763 6.04102 7.25131 5.78268 6.77631 5.30768C6.30131 4.83268 6.04297 4.20768 6.04297 3.54102C6.04297 2.16602 7.16797 1.04102 8.54297 1.04102H11.4596C12.1263 1.04102 12.7513 1.29935 13.2263 1.77435C13.7013 2.24935 13.9596 2.87435 13.9596 3.54102C13.9596 4.91602 12.8346 6.04102 11.4596 6.04102ZM8.54297 2.29102C7.8513 2.29102 7.29297 2.84935 7.29297 3.54102C7.29297 3.87435 7.4263 4.19101 7.65964 4.42435C7.89297 4.65768 8.20964 4.79102 8.54297 4.79102H11.4596C12.1513 4.79102 12.7096 4.23268 12.7096 3.54102C12.7096 3.20768 12.5763 2.89102 12.343 2.65768C12.1096 2.42435 11.793 2.29102 11.4596 2.29102H8.54297Z" fill="#25272C" />
                                <path d="M10.0013 11.459H6.66797C6.3263 11.459 6.04297 11.1757 6.04297 10.834C6.04297 10.4923 6.3263 10.209 6.66797 10.209H10.0013C10.343 10.209 10.6263 10.4923 10.6263 10.834C10.6263 11.1757 10.343 11.459 10.0013 11.459Z" fill="#25272C" />
                                <path d="M13.3346 14.791H6.66797C6.3263 14.791 6.04297 14.5077 6.04297 14.166C6.04297 13.8243 6.3263 13.541 6.66797 13.541H13.3346C13.6763 13.541 13.9596 13.8243 13.9596 14.166C13.9596 14.5077 13.6763 14.791 13.3346 14.791Z" fill="#25272C" />
                            </svg>
                            <span>Wallet ID</span>
                        </div>
                      
                        <ChevronDown size={16} />
                    </button>


                    {/* Wallet Range */}
                    <button className="inline-flex min-w-[265px] items-center justify-between gap-3 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                          <div className="flex justify-center items-center gap-2">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.332 18.9577H6.66536C4.1487 18.9577 2.70703 17.516 2.70703 14.9993V6.87435C2.70703 4.24935 4.04036 2.91602 6.66536 2.91602C7.00703 2.91602 7.29036 3.19935 7.29036 3.54102C7.29036 3.87435 7.4237 4.19101 7.65703 4.42435C7.89037 4.65768 8.20703 4.79102 8.54036 4.79102H11.457C12.1487 4.79102 12.707 4.23268 12.707 3.54102C12.707 3.19935 12.9904 2.91602 13.332 2.91602C15.957 2.91602 17.2904 4.24935 17.2904 6.87435V14.9993C17.2904 17.516 15.8487 18.9577 13.332 18.9577ZM6.12368 4.18269C4.80701 4.29102 3.95703 4.88268 3.95703 6.87435V14.9993C3.95703 16.8493 4.81536 17.7077 6.66536 17.7077H13.332C15.182 17.7077 16.0404 16.8493 16.0404 14.9993V6.87435C16.0404 4.88268 15.1904 4.29935 13.8737 4.18269C13.5904 5.24935 12.6154 6.04102 11.457 6.04102H8.54036C7.8737 6.04102 7.2487 5.78268 6.7737 5.30768C6.45704 4.99101 6.24034 4.60769 6.12368 4.18269Z" fill="#25272C" />
                                <path d="M11.4596 6.04102H8.54297C7.8763 6.04102 7.25131 5.78268 6.77631 5.30768C6.30131 4.83268 6.04297 4.20768 6.04297 3.54102C6.04297 2.16602 7.16797 1.04102 8.54297 1.04102H11.4596C12.1263 1.04102 12.7513 1.29935 13.2263 1.77435C13.7013 2.24935 13.9596 2.87435 13.9596 3.54102C13.9596 4.91602 12.8346 6.04102 11.4596 6.04102ZM8.54297 2.29102C7.8513 2.29102 7.29297 2.84935 7.29297 3.54102C7.29297 3.87435 7.4263 4.19101 7.65964 4.42435C7.89297 4.65768 8.20964 4.79102 8.54297 4.79102H11.4596C12.1513 4.79102 12.7096 4.23268 12.7096 3.54102C12.7096 3.20768 12.5763 2.89102 12.343 2.65768C12.1096 2.42435 11.793 2.29102 11.4596 2.29102H8.54297Z" fill="#25272C" />
                                <path d="M10.0013 11.459H6.66797C6.3263 11.459 6.04297 11.1757 6.04297 10.834C6.04297 10.4923 6.3263 10.209 6.66797 10.209H10.0013C10.343 10.209 10.6263 10.4923 10.6263 10.834C10.6263 11.1757 10.343 11.459 10.0013 11.459Z" fill="#25272C" />
                                <path d="M13.3346 14.791H6.66797C6.3263 14.791 6.04297 14.5077 6.04297 14.166C6.04297 13.8243 6.3263 13.541 6.66797 13.541H13.3346C13.6763 13.541 13.9596 13.8243 13.9596 14.166C13.9596 14.5077 13.6763 14.791 13.3346 14.791Z" fill="#25272C" />
                            </svg>
                            <span>Wallet Range</span>
                        </div>
                        <ChevronDown size={16} />
                    </button>


                    {/* USD Range */}
                    <button className="inline-flex min-w-[170px] items-center justify-between gap-3 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                         <div className="flex justify-center items-center gap-2">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.332 18.9577H6.66536C4.1487 18.9577 2.70703 17.516 2.70703 14.9993V6.87435C2.70703 4.24935 4.04036 2.91602 6.66536 2.91602C7.00703 2.91602 7.29036 3.19935 7.29036 3.54102C7.29036 3.87435 7.4237 4.19101 7.65703 4.42435C7.89037 4.65768 8.20703 4.79102 8.54036 4.79102H11.457C12.1487 4.79102 12.707 4.23268 12.707 3.54102C12.707 3.19935 12.9904 2.91602 13.332 2.91602C15.957 2.91602 17.2904 4.24935 17.2904 6.87435V14.9993C17.2904 17.516 15.8487 18.9577 13.332 18.9577ZM6.12368 4.18269C4.80701 4.29102 3.95703 4.88268 3.95703 6.87435V14.9993C3.95703 16.8493 4.81536 17.7077 6.66536 17.7077H13.332C15.182 17.7077 16.0404 16.8493 16.0404 14.9993V6.87435C16.0404 4.88268 15.1904 4.29935 13.8737 4.18269C13.5904 5.24935 12.6154 6.04102 11.457 6.04102H8.54036C7.8737 6.04102 7.2487 5.78268 6.7737 5.30768C6.45704 4.99101 6.24034 4.60769 6.12368 4.18269Z" fill="#25272C" />
                                <path d="M11.4596 6.04102H8.54297C7.8763 6.04102 7.25131 5.78268 6.77631 5.30768C6.30131 4.83268 6.04297 4.20768 6.04297 3.54102C6.04297 2.16602 7.16797 1.04102 8.54297 1.04102H11.4596C12.1263 1.04102 12.7513 1.29935 13.2263 1.77435C13.7013 2.24935 13.9596 2.87435 13.9596 3.54102C13.9596 4.91602 12.8346 6.04102 11.4596 6.04102ZM8.54297 2.29102C7.8513 2.29102 7.29297 2.84935 7.29297 3.54102C7.29297 3.87435 7.4263 4.19101 7.65964 4.42435C7.89297 4.65768 8.20964 4.79102 8.54297 4.79102H11.4596C12.1513 4.79102 12.7096 4.23268 12.7096 3.54102C12.7096 3.20768 12.5763 2.89102 12.343 2.65768C12.1096 2.42435 11.793 2.29102 11.4596 2.29102H8.54297Z" fill="#25272C" />
                                <path d="M10.0013 11.459H6.66797C6.3263 11.459 6.04297 11.1757 6.04297 10.834C6.04297 10.4923 6.3263 10.209 6.66797 10.209H10.0013C10.343 10.209 10.6263 10.4923 10.6263 10.834C10.6263 11.1757 10.343 11.459 10.0013 11.459Z" fill="#25272C" />
                                <path d="M13.3346 14.791H6.66797C6.3263 14.791 6.04297 14.5077 6.04297 14.166C6.04297 13.8243 6.3263 13.541 6.66797 13.541H13.3346C13.6763 13.541 13.9596 13.8243 13.9596 14.166C13.9596 14.5077 13.6763 14.791 13.3346 14.791Z" fill="#25272C" />
                            </svg>
                             <span>USDD range</span>
                        </div>
                        <ChevronDown size={16} />
                    </button>
                </div>
            </div>


            <div className="hidden md:block overflow-x-auto no-scrollbar ">
                <table className="w-full text-sm table-fixed border-collapse">
                    <thead className="text-gray-500 border-b">
                        <tr>
                            <th className="w-[200px] text-left px-4 py-3 whitespace-nowrap">Wallet ID</th>
                            <th className="w-[200px] text-left px-4 py-3 whitespace-nowrap">Wallet Name</th>
                            <th className="w-[200px] text-left px-4 py-3 whitespace-nowrap">Asset</th>
                            <th className="w-[200px] text-left px-4 py-3 whitespace-nowrap">Summary</th>
                            <th className="w-[200px] text-left px-4 py-3 whitespace-nowrap">Role</th>
                            <th className="w-[200px] text-left px-4 py-3 whitespace-nowrap">Balance</th>
                            <th className="w-[200px] text-left px-4 py-3 whitespace-nowrap">NGN Equivalent</th>
                            <th className="w-[200px] text-left px-4 py-3 whitespace-nowrap">Derivatives Role</th>
                            <th className="w-[200px] text-left px-4 py-3 whitespace-nowrap">Last Transaction</th>
                            <th className="w-[200px] text-left px-4 py-3 whitespace-nowrap">Status</th>
                            <th className="w-[200px] text-left px-4 py-3 whitespace-nowrap">Custody Method</th>
                        </tr>
                    </thead>

                    <tbody>
                        {wallets.map((w, i) => (
                            <tr key={i} className="border-b  py-5">
                                <td className="text-left py-7 px-4  rounded-full w-[200px] whitespace-nowrap">
                                    <div className=" text-[#175CD3] bg-[#C7D7FE] flex justify-center items-center gap-2 border border-[#C7D7FE]  px-2 py-1 rounded-full w-fit">
                                        <span>
                                            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="3" cy="3" r="3" fill="#6172F3" />
                                            </svg>

                                        </span>
                                        {w.walletId}
                                    </div>
                                </td>
                                <td className="w-[200px] text-left py-7 px-4  whitespace-nowrap">{w.name}</td>
                                <td className="text-left py-5 px-4  rounded-full w-[200px] whitespace-nowrap">
                                    <div className=" text-[#175CD3] bg-[#C7D7FE] flex justify-center items-center gap-2 border border-[#C7D7FE]  px-2 py-1 rounded-full w-fit">
                                        <span>
                                            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="3" cy="3" r="3" fill="#6172F3" />
                                            </svg>

                                        </span>
                                        {w.asset}
                                    </div>
                                </td>
                                <td className="w-[200px] text-left py-5 px-4  whitespace-nowrap">
                                    <div>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.35 7.35C10.25 7.25 10.1333 7.2 10 7.2C9.86667 7.2 9.75 7.25 9.65 7.35L6.85 10.15C6.68333 10.3167 6.64167 10.5 6.725 10.7C6.80833 10.9 6.96667 11 7.2 11L12.8 11C13.0333 11 13.1917 10.9 13.275 10.7C13.3583 10.5 13.3167 10.3167 13.15 10.15L10.35 7.35ZM10 -8.74228e-07C11.3833 -7.53293e-07 12.6833 0.262666 13.9 0.788C15.1167 1.31333 16.175 2.02566 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7367 7.31667 19.9993 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6867 15.1167 17.9743 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7367 11.3833 19.9993 10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6867 3.825 17.9743 2.925 17.075C2.025 16.175 1.31233 15.1167 0.787001 13.9C0.261668 12.6833 -0.000666819 11.3833 8.74228e-07 10C9.95163e-07 8.61667 0.262668 7.31667 0.788001 6.1C1.31333 4.88333 2.02567 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.786999C7.31667 0.261666 8.61667 -0.000668567 10 -8.74228e-07ZM10 2C7.78333 2 5.89567 2.779 4.337 4.337C2.77833 5.895 1.99933 7.78267 2 10C2 12.2167 2.779 14.1043 4.337 15.663C5.895 17.2217 7.78267 18.0007 10 18C12.2167 18 14.1043 17.221 15.663 15.663C17.2217 14.105 18.0007 12.2173 18 10C18 7.78333 17.221 5.89567 15.663 4.337C14.105 2.77833 12.2173 1.99933 10 2Z" fill="#717986" />
                                        </svg>
                                    </div>
                                </td>
                                <td className="w-[200px] text-left py-5 px-4 whitespace-nowrap">{w.role}</td>
                                <td className="text-left py-5 px-4  rounded-full w-[200px] whitespace-nowrap">
                                    <div className="   border   px-2 py-1 rounded-full w-fit">
                                        {w.balance}
                                    </div>
                                </td>
                                <td className="text-left py-5 px-4  rounded-full w-[200px] whitespace-nowrap">
                                    <div className="   border   px-2 py-1 rounded-full w-fit">
                                        {w.ngnEquivalent}
                                    </div>
                                </td>
                                <td className="w-[200px] text-left py-5 px-4  whitespace-nowrap">{w.derivativesRole}</td>
                                <td className="w-[200px] text-left py-5 px-4  whitespace-nowrap">{w.lastTransaction}</td>
                                <td className="w-[200px] text-left py-5 px-4  whitespace-nowrap">
                                    <div className="px-2 py-1 rounded-full flex justify-center items-center gap-2 border border-[#FEDF89] text-[#B54708] bg-[#FFFAEB] text-xs font-medium">
                                        <span>
                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="4" cy="4" r="3" fill="#F79009" />
                                            </svg>
                                        </span>
                                        {w.status}
                                    </div>
                                </td>
                                <td className="text-left py-5 px-4  rounded-full w-[200px] whitespace-nowrap">
                                    <div className=" text-[#175CD3] bg-[#C7D7FE] flex justify-center items-center gap-2 border border-[#C7D7FE]  px-2 py-1 rounded-full w-fit">
                                        <span>
                                            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="3" cy="3" r="3" fill="#6172F3" />
                                            </svg>

                                        </span>
                                        {w.custody}
                                    </div>
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
