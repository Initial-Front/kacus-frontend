import { useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";




interface UserCardType {
    name: string;
    amount: string;
}

interface LoadCardTypes {
    icon: ReactNode;
    name: string
}


export default function UserDetailsPage() {
    const [tab, setTab] = useState("overview");
    const navigate = useNavigate();

    const tabs = [
        { id: "overview", label: "Overview" },
        { id: "profile", label: "Profile" },
        { id: "activity", label: "Activity" },
    ];

    const UserCard: UserCardType[] = [
        { name: "Total Wallet Balance", amount: "₦1,845,000" },
        { name: "Available Balance", amount: "₦1,845,000" },
        { name: "Locked Balance (Margin)", amount: "₦1,845,000" },
        { name: "Wallet Currencies", amount: "NGN · USDT · BTC · ETH · EGAX" },
        { name: "Open Positions", amount: "00.00" },
        { name: "Total Trades Executed", amount: "58 trades" },
        { name: "Average Trade Size", amount: "₦1,845,000" },
        { name: "Total Trading Volume", amount: "₦1,845,000" },
        { name: "Max Leverage Used", amount: "40x" },

    ]

    const LoadCardDetails: LoadCardTypes[] = [
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="#F5F8FF" />
                    <path d="M23.1425 12.5H16.8575C14.1275 12.5 12.5 14.1275 12.5 16.8575V23.135C12.5 25.8725 14.1275 27.5 16.8575 27.5H23.135C25.865 27.5 27.4925 25.8725 27.4925 23.1425V16.8575C27.5 14.1275 25.8725 12.5 23.1425 12.5ZM23.75 23.9375H16.25C15.9425 23.9375 15.6875 23.6825 15.6875 23.375C15.6875 23.0675 15.9425 22.8125 16.25 22.8125H23.75C24.0575 22.8125 24.3125 23.0675 24.3125 23.375C24.3125 23.6825 24.0575 23.9375 23.75 23.9375ZM23.75 20.5625H16.25C15.9425 20.5625 15.6875 20.3075 15.6875 20C15.6875 19.6925 15.9425 19.4375 16.25 19.4375H23.75C24.0575 19.4375 24.3125 19.6925 24.3125 20C24.3125 20.3075 24.0575 20.5625 23.75 20.5625ZM23.75 17.1875H16.25C15.9425 17.1875 15.6875 16.9325 15.6875 16.625C15.6875 16.3175 15.9425 16.0625 16.25 16.0625H23.75C24.0575 16.0625 24.3125 16.3175 24.3125 16.625C24.3125 16.9325 24.0575 17.1875 23.75 17.1875Z" fill="#25272C" />
                </svg>
            ),

            name: "Load this card with details"
        },

        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="#F5F8FF" />
                    <path d="M23.1425 12.5H16.8575C14.1275 12.5 12.5 14.1275 12.5 16.8575V23.135C12.5 25.8725 14.1275 27.5 16.8575 27.5H23.135C25.865 27.5 27.4925 25.8725 27.4925 23.1425V16.8575C27.5 14.1275 25.8725 12.5 23.1425 12.5ZM23.75 23.9375H16.25C15.9425 23.9375 15.6875 23.6825 15.6875 23.375C15.6875 23.0675 15.9425 22.8125 16.25 22.8125H23.75C24.0575 22.8125 24.3125 23.0675 24.3125 23.375C24.3125 23.6825 24.0575 23.9375 23.75 23.9375ZM23.75 20.5625H16.25C15.9425 20.5625 15.6875 20.3075 15.6875 20C15.6875 19.6925 15.9425 19.4375 16.25 19.4375H23.75C24.0575 19.4375 24.3125 19.6925 24.3125 20C24.3125 20.3075 24.0575 20.5625 23.75 20.5625ZM23.75 17.1875H16.25C15.9425 17.1875 15.6875 16.9325 15.6875 16.625C15.6875 16.3175 15.9425 16.0625 16.25 16.0625H23.75C24.0575 16.0625 24.3125 16.3175 24.3125 16.625C24.3125 16.9325 24.0575 17.1875 23.75 17.1875Z" fill="#25272C" />
                </svg>
            ),

            name: "Load this card with details"
        },

        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="#F5F8FF" />
                    <path d="M23.1425 12.5H16.8575C14.1275 12.5 12.5 14.1275 12.5 16.8575V23.135C12.5 25.8725 14.1275 27.5 16.8575 27.5H23.135C25.865 27.5 27.4925 25.8725 27.4925 23.1425V16.8575C27.5 14.1275 25.8725 12.5 23.1425 12.5ZM23.75 23.9375H16.25C15.9425 23.9375 15.6875 23.6825 15.6875 23.375C15.6875 23.0675 15.9425 22.8125 16.25 22.8125H23.75C24.0575 22.8125 24.3125 23.0675 24.3125 23.375C24.3125 23.6825 24.0575 23.9375 23.75 23.9375ZM23.75 20.5625H16.25C15.9425 20.5625 15.6875 20.3075 15.6875 20C15.6875 19.6925 15.9425 19.4375 16.25 19.4375H23.75C24.0575 19.4375 24.3125 19.6925 24.3125 20C24.3125 20.3075 24.0575 20.5625 23.75 20.5625ZM23.75 17.1875H16.25C15.9425 17.1875 15.6875 16.9325 15.6875 16.625C15.6875 16.3175 15.9425 16.0625 16.25 16.0625H23.75C24.0575 16.0625 24.3125 16.3175 24.3125 16.625C24.3125 16.9325 24.0575 17.1875 23.75 17.1875Z" fill="#25272C" />
                </svg>
            ),

            name: "Load this card with details"
        },
    ]

    const activities = [

        {
            details: "IP: 102.89.241.19 · Lagos, Nigeria",
            date: "Jul 29, 2025 · 2:18 PM",
            status: "Successful",
            statusColor: "green",
        },
        {
            type: "Trade Executed",
            details: "20x Long · BTC/NGN · ₦500,000 Position",
            date: "Aug 01, 2025 · 9:22 AM",
            status: "Confirmed",
            statusColor: "green",
        },
        {
            type: "Withdrawal",
            details: "₦3,000,000 · USDT · Wallet: 0x4a5...c9A2",
            date: "Aug 15, 2025 · 5:00 PM",
            status: "Pending Review",
            statusColor: "orange",
        },
        {
            type: "Referral Signup",
            details: "Referred user: Grace A. (KCS-001122)",
            date: "Jul 29, 2025 · 2:18 PM",
            status: "Successful",
            statusColor: "green",
        },
        {
            type: "KYC Verification",
            details: "Tier 2 Approved via Veriff",
            date: "Oct 21, 2025 · 3:45 PM",
            status: "Approved",
            statusColor: "blue",
        },
        {
            type: "Password Change",
            details: "Updated via dashboard",
            date: "Sep 05, 2025 · 11:10 AM",
            status: "Successful",
            statusColor: "green",
        },
    ];


    const statusColorMap: Record<string, string> = {
        green: "bg-green-50 text-green-600 border-green-200",
        orange: "bg-orange-50 text-orange-600 border-orange-200",
        blue: "bg-blue-50 text-blue-600 border-blue-200",
        red: "bg-red-50 text-red-600 border-red-200",
    };

    return (
        <div className="w-full py-4 md:py-[32px] ">

            <div className=" px-3 md:px-[32px] justify-between mb-5">
                <div>
                    <h1 className="text-xl font-sans font-bold flex items-center gap-5  text-gray-800">
                        User Management
                        <div className="text-sm flex items-center gap-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 12L10 8L6 4" stroke="#D5D7DA" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            All Users
                        </div>
                    </h1>
                    <p className="text-base text-[#535862] mt-3">View, verify, and manage all users across the Kaucus platform</p>
                </div>
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-4 text-base  py-[27px]">
                    <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.57 5.93018L3.5 12.0002L9.57 18.0702" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M20.4999 12H3.66992" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                    Back
                </button>
            </div>



            <div className="bg-white rounded-xl mx-4 md:mx-8 border-2 p-3 md:p-6 mb-6">
                <div className="flex flex-col md:flex-row items-center justify-between ">
                    <div className="flex flex-col md:flex-row items-center mb-3 md:mb-0 gap-4">
                        <img
                            src="https://i.pravatar.cc/100"
                            className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                            <h2 className="text-xl font-semibold">Marco Kelly</h2>
                            <p className="text-gray-500 text-sm">marco@marcokelly.co</p>
                        </div>
                        <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md ml-3">Active</span>
                    </div>

                    <div className="flex gap-3">
                        <Button variant="outline">Suspend User</Button>
                        <Button variant="outline">Flag User</Button>
                    </div>
                </div>


            </div>


            {/* Tabs */}
            <div className="flex gap-6 border-b-2 mb-[32px] px-8 mt-6">
                {tabs.map((t) => (
                    <button
                        key={t.id}
                        onClick={() => setTab(t.id)}
                        className={`pb-3 text-sm font-medium ${tab === t.id
                            ? "text-blue-600 border-b-2 border-blue-600"
                            : "text-gray-500"
                            }`}
                    >
                        {t.label}
                    </button>
                ))}
            </div>

            <main className="px-2 md:px-8">

                {tab === "overview" && (
                    <section>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {UserCard.map((cardItem, idx) => (
                                <div key={idx} className="bg-white p-5 flex flex-col gap-5  justify-between border-2 rounded-xl h-32">
                                    <div className="flex justify-between items-center">
                                        <h1 className="text-[#414651] font-semibold">{cardItem.name}</h1>

                                        <button>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.99984 10.833C10.4601 10.833 10.8332 10.4599 10.8332 9.99967C10.8332 9.53944 10.4601 9.16634 9.99984 9.16634C9.5396 9.16634 9.1665 9.53944 9.1665 9.99967C9.1665 10.4599 9.5396 10.833 9.99984 10.833Z" stroke="#A4A7AE" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M9.99984 4.99967C10.4601 4.99967 10.8332 4.62658 10.8332 4.16634C10.8332 3.7061 10.4601 3.33301 9.99984 3.33301C9.5396 3.33301 9.1665 3.7061 9.1665 4.16634C9.1665 4.62658 9.5396 4.99967 9.99984 4.99967Z" stroke="#A4A7AE" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M9.99984 16.6663C10.4601 16.6663 10.8332 16.2932 10.8332 15.833C10.8332 15.3728 10.4601 14.9997 9.99984 14.9997C9.5396 14.9997 9.1665 15.3728 9.1665 15.833C9.1665 16.2932 9.5396 16.6663 9.99984 16.6663Z" stroke="#A4A7AE" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>

                                        </button>
                                    </div>

                                    <div>
                                        <h1 className="text-xl text-[#414651] font-semibold">{cardItem.amount}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                            {LoadCardDetails.map((cardItem, idx) => (
                                <div key={idx} className="bg-white p-5 flex flex-col gap-5  items-center text-center justify-between border-2 rounded-xl h-32">
                                    <div>
                                        <h1 className="text-[#414651] font-semibold">{cardItem.icon}</h1>
                                    </div>

                                    <div>
                                        <h1 className="text-base md:text-xl text-[#414651] font-semibold">{cardItem.name}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </section>
                )}

                {tab === "profile" && (

                    <section className="flex flex-col gap-8">
                        <div className="bg-white p-6 rounded-xl border">
                            <h3 className="font-semibold mb-4">Personal Information</h3>

                            <div className="flex flex-col md:flex-row md:items-center w-full">
                                <div className="flex flex-col gap-5 lg:w-1/2">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-sm text-gray-500">First Name</p>
                                        <p className="font-medium">Marco</p>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <p className="text-sm text-gray-500">Email</p>
                                        <p className="font-medium">marco@marcokelly.co</p>
                                    </div>

                                    <div className="flex flex-col gap-2 w-fit">
                                        <p className="text-sm text-gray-500">Joined Date</p>
                                        <p className="font-medium text-sm text-[#414651] border-2 rounded-lg flex justify-center gap-2  items-center px-2 py-1 ">
                                            <span>
                                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="4" cy="4" r="3" fill="#17B26A" />
                                                </svg>
                                            </span>
                                            July 30 - 2025
                                        </p>
                                    </div>
                                </div>




                                <div className="flex flex-col gap-5 lg:w-1/2">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-sm text-gray-500">Last Name</p>
                                        <p className="font-medium">Kelly</p>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <p className="text-sm text-gray-500">Country of Residence</p>

                                        <p className="font-medium text-sm text-[#414651] border-2 rounded-lg flex justify-center gap-2  items-center px-2 py-1 ">
                                            <span>
                                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="4" cy="4" r="3" fill="#17B26A" />
                                                </svg>
                                            </span>
                                            Nigeria
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 w-fit">
                                    <p className="text-sm text-gray-500">User ID</p>
                                    <p className="font-medium text-sm text-[#414651] border-2 rounded-lg flex justify-center gap-2  items-center px-2 py-1 ">
                                        <span>
                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="4" cy="4" r="3" fill="#17B26A" />
                                            </svg>
                                        </span>
                                        KCS-00913
                                    </p>
                                </div>
                            </div>
                        </div>





                        <div className="bg-white p-6 rounded-xl border">
                            <h3 className="font-semibold mb-4">KYC Details</h3>

                            <div className="flex flex-col md:flex-row md:items-center w-full">
                                <div className="flex flex-col gap-5 lg:w-1/2">
                                    <div className="flex flex-col gap-3">
                                        <p className="text-sm text-gray-500">KYC Status</p>
                                        <p className="font-medium text-sm bg-[#ECFDF3] text-[#067647] rounded-full border  border-[#ABEFC6] w-fit flex justify-center gap-3  items-center px-2 py-1 ">
                                            <span>
                                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="4" cy="4" r="3" fill="#17B26A" />
                                                </svg>
                                            </span>
                                            Verified
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <p className="text-sm text-gray-500">BVN</p>
                                        <p className="font-medium text-sm bg-[#FEF6EE] text-[#B93815] rounded-full border  border-[#F9DBAF] w-fit flex justify-center gap-3  items-center px-2 py-1 ">
                                            <span>
                                                <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="3" cy="3" r="3" fill="#EF6820" />
                                                </svg>
                                            </span>
                                            25465768451
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-3 w-fit">
                                        <p className="text-sm text-gray-500">Date of KYC Approval</p>
                                        <p className="font-medium text-sm text-[#414651] border-2 rounded-lg flex justify-center gap-2  items-center px-2 py-1 ">
                                            <span>
                                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="4" cy="4" r="3" fill="#17B26A" />
                                                </svg>
                                            </span>
                                            July 30 - 2025
                                        </p>
                                    </div>
                                </div>




                                <div className="flex flex-col gap-5 lg:w-1/2">
                                    <div className="flex flex-col gap-3">
                                        <p className="text-sm text-gray-500">NIN</p>
                                        <p className="font-medium text-sm bg-[#EFF8FF] text-[#175CD3] rounded-full border  border-[#B2DDFF] w-fit flex justify-center gap-3  items-center px-2 py-1 ">
                                            <span>
                                                <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="3" cy="3" r="3" fill="#EF6820" />
                                                </svg>
                                            </span>
                                            25465768451
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-3 w-fit">
                                        <p className="text-sm text-gray-500">Country of Residence</p>

                                        <p className="font-medium text-sm text-[#414651] border-2 rounded-lg flex justify-center gap-2  items-center px-2 py-1 ">
                                            <span>
                                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="4" cy="4" r="3" fill="#17B26A" />
                                                </svg>
                                            </span>
                                            Nigeria
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-3 w-fit">
                                        <p className="text-sm text-gray-500">Two-Factor Auth</p>
                                        <p className="font-medium text-sm bg-[#ECFDF3] text-[#067647] rounded-full border  border-[#ABEFC6] w-fit flex justify-center gap-3  items-center px-2 py-1 ">
                                            <span>
                                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="4" cy="4" r="3" fill="#17B26A" />
                                                </svg>
                                            </span>
                                            Enabled
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                )}

                {tab === "activity" && (
                    <div className="w-full bg-white rounded-xl border-2 divide-y text-[#111827] mx-auto">
                    
                        <div className="flex flex-col w-full justify-between gap-3">
                            <div className="px-2 py-5 md:px-6">
                                <h2 className="text-lg font-semibold flex items-center gap-2">
                                    Activity Summary
                                    <span className="text-xs border-2 text-blue-700 px-2 flex items-center gap-1 py-0.5 rounded-lg">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                        240
                                    </span>
                                </h2>
                                <p className="text-gray-500 text-sm mt-1">
                                    Keep track of user activities and their security ratings.
                                </p>
                            </div>

                     
                            <div className="flex flex-wrap items-center gap-3 w-full justify-end border-t-2 px-4 py-3 sm:px-6">
                                <div className="flex gap-2 items-center w-full sm:w-80 h-11 px-3 rounded-lg border border-gray-200">
                                    <span className="text-gray-400">
                                  
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z"
                                                stroke="#717680"
                                                strokeWidth="1.66667"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                    <input
                                        placeholder="Search"
                                        className="border-0 text-sm focus:outline-none flex-1"
                                    />
                                    <span className="ms-auto border rounded-lg py-2 px-2">
                                       
                                        <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="..." fill="#717680" />
                                        </svg>
                                    </span>
                                </div>

                                <button className="h-11 px-4 border rounded-lg text-sm flex items-center gap-2 text-[#414651]">
                                    <span>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M5 10H15M2.5 5H17.5M7.5 15H12.5"
                                                stroke="#414651"
                                                strokeWidth="1.66667"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                    Filters
                                </button>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm min-w-[600px] sm:min-w-full">
                                <thead>
                                    <tr className="bg-gray-50 text-gray-600 font-medium">
                                        <th className="py-3 px-4 text-left">Activity Type</th>
                                        <th className="py-3 px-4 text-left">Details</th>
                                        <th className="py-3 px-4 text-left whitespace-nowrap">Date & Time</th>
                                        <th className="py-3 px-4 text-left">Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {activities.map((item, i) => (
                                        <tr key={i} className="border-t">
                                            <td className="py-4 px-4">{item.type}</td>
                                            <td className="py-4 px-4 text-gray-700">{item.details}</td>
                                            <td className="py-4 px-4">
                                                <div className="flex items-center gap-2 rounded-lg border-2 w-fit py-0.5 px-1 text-gray-700">
                                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                                    {item.date}
                                                </div>
                                            </td>
                                            <td className="py-4 px-4">
                                                <span
                                                    className={`px-3 py-1 rounded-full border text-xs font-medium ${statusColorMap[item.statusColor]}`}
                                                >
                                                    {item.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-between mt-4 text-sm py-5 px-4 sm:px-6 text-gray-600 gap-3 sm:gap-0">
                            <span>Page 1 of 10</span>
                            <div className="flex gap-2">
                                <button className="px-4 py-2 border rounded-lg">Previous</button>
                                <button className="px-4 py-2 border rounded-lg">Next</button>
                            </div>
                        </div>
                    </div>

                )}

            </main>

        </div>
    );
}