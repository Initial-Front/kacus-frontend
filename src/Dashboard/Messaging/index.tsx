import React, { useState } from "react";
import { MoreVertical, Pencil, Trash2 , Search, ArrowLeft, ArrowRight,} from "lucide-react";

const rows = [
    {
        id: "#MEG-001",
        title: "New Token Trading Policy",
        type: "Email",
        date: "May 27, 2025 - 10:14 AM",
        sender: "Super Admin",
        status: "Sent",
    },
    {
        id: "#MEG-002",
        title: "API Access Improvements",
        type: "Notification",
        date: "May 27, 2025 - 10:14 AM",
        sender: "Moderator",
        status: "Sent",
    },
];

const typeStyles: Record<string, string> = {
    Email: "bg-blue-50 text-blue-600",
    Notification: "bg-green-50 text-green-600",
    Both: "bg-orange-50 text-orange-600",
};

const statusStyles: Record<string, string> = {
    Sent: "bg-green-50 text-green-600",
    Schedule: "bg-orange-50 text-orange-600",
};
export default function Message() {
    const [openEditRowId, setOpenEditRowId] = useState<string | number | null>(null);
    const [tabs, setTabs] = useState<string>("AllMessage");
    return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-xl flex items-center gap-1 font-semibold text-gray-800">
                        Messaging
                        <span className="ms-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 12L10 8L6 4" stroke="#D5D7DA" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </span>
                        <span className="text-sm ">
                            Messaging
                        </span>

                    </h1>
                    <p className="text-sm text-gray-500 mt-2">
                        Manage announcements, push notifications, compliance alerts, and knowledge base content for all user.
                    </p>
                </div>

                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 text-sm hover:bg-blue-700 transition"
                >

                    <span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 10H15" stroke="white" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                            <path d="M10 15V5" stroke="white" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                        </svg>


                    </span>
                    New Message
                </button>
            </div>

            <div className="w-full flex items-center justify-between gap-4  my-10 border-gray-200 bg-white px-4 py-3">
                {/* Left Tabs */}
                <div className="flex items-center bg-[#FAFAFA]">
                    <button 
                    onClick={()=> setTabs("AllMessage")}
                    className={`flex items-center gap-2 ${tabs === "AllMessage" ? 'rounded-xl border border-[#D5D7DA] bg-white' : ''}  transition-all duration-500 px-3 py-[10px] text-sm font-medium text-gray-900`}>
                        All Messages
                        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">0</span>
                    </button>


                    <button 
                    onClick={()=> setTabs("ScheduleMessage")}
                    className={`flex items-center gap-2  ${tabs === "ScheduleMessage" ? 'rounded-xl border border-[#D5D7DA] bg-white' : ''} transition-all duration-500 px-3 py-[10px] text-sm font-medium text-gray-500`}>
                        Schedule Messages
                        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">0</span>
                    </button>
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

            <div className="w-full overflow-x-auto rounded-xl border border-gray-100 bg-white">
                <table className="min-w-[1100px] w-full text-sm">
                    <thead className="bg-gray-50 text-gray-500">
                        <tr className="border-b">
                            <th className="px-4 py-3"><input type="checkbox" /></th>
                            <th className="px-4 py-3 text-left">Message ID</th>
                            <th className="px-4 py-3 text-left">Message Title</th>
                            <th className="px-4 py-3 text-left">Message Type</th>
                            <th className="px-4 py-3 text-left">Date Sent</th>
                            <th className="px-4 py-3 text-left">Sent By</th>
                            <th className="px-4 py-3 text-left">Status</th>
                            <th className="px-4 py-3 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {rows.map((row) => (
                            <tr key={row.id} className="hover:bg-gray-50">
                                <td className="px-4 py-4"><input type="checkbox" /></td>
                                <td className="px-4 py-4">
                                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                                        {row.id}
                                    </span>
                                </td>
                                <td className="px-4 py-4 font-medium text-gray-900">{row.title}</td>
                                <td className="px-4 py-4">
                                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${typeStyles[row.type]}`}>
                                        {row.type}
                                    </span>
                                </td>
                                <td className="px-4 py-4 text-gray-600">{row.date}</td>
                                <td className="px-4 py-4">
                                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                                        {row.sender}
                                    </span>
                                </td>
                                <td className="px-4 py-4">
                                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[row.status]}`}>
                                        {row.status}
                                    </span>
                                </td>
                                <td className="px-4 py-4 flex items-center gap-3 text-gray-500">
                                    {openEditRowId === row.id && (
                                        <div className="flex items-center gap-2">
                                            <Pencil size={16} className="cursor-pointer" />
                                            <Trash2 size={16} className="cursor-pointer" />
                                        </div>
                                    )}

                                    <MoreVertical
                                        size={16}
                                        className="cursor-pointer"
                                        onClick={() =>
                                            setOpenEditRowId(prev => (prev === row.id ? null : row.id))
                                        }
                                    />
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex items-center justify-between px-4 py-3 text-sm text-gray-500">
                    <button className="rounded-md border px-3 py-1">Previous</button>
                    <div className="flex items-center gap-2">
                        <span className="rounded-md bg-gray-100 px-3 py-1">1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>...</span>
                        <span>10</span>
                    </div>
                    <button className="rounded-md border px-3 py-1">Next</button>
                </div>
            </div>
        </div>
    );
}
