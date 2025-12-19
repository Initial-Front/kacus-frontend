import React, { useRef, useState } from "react";
import { MoreVertical, Pencil, Trash2, Search, ArrowLeft, ArrowRight, Bold, Italic, Heading, Quote, Link2, List, ListOrdered, Image as ImageIcon, } from "lucide-react";

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
    const Fileref = useRef<HTMLInputElement | null>(null);


  const openFileDialog = ()=> {
      if (!Fileref.current) return;
     Fileref.current.click()
  }
   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
      const file = e.target.files?.[0];
       if (!file) return;
   }

    return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-[24px] flex items-center gap-1 font-bold text-gray-800">
                        Messaging
                        <span className="ms-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 12L10 8L6 4" stroke="#D5D7DA" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </span>
                        <span className="text-sm font-normal ">
                            Messaging
                        </span>

                    </h1>
                    <p className="text-sm max-w-2xl text-wrap text-gray-500 mt-2">
                        Manage announcements, push notifications, compliance alerts, and knowledge base content for all user.
                    </p>
                </div>

                <button
                    className="px-4 py-3 bg-blue-600 text-white rounded-lg flex items-center gap-2 text-sm hover:bg-blue-700 transition"
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

            <div className="w-full flex items-center justify-between gap-4  my-10 border-gray-200 bg-white py-3">

                <div className="flex items-center bg-[#FAFAFA]">
                    <button
                        onClick={() => setTabs("AllMessage")}
                        className={`flex items-center gap-2 ${tabs === "AllMessage" ? 'rounded-lg border border-[#D5D7DA] bg-white' : ''}  transition-all duration-300 px-3 py-[10px] text-sm font-medium text-gray-900`}>
                        All Messages
                        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">0</span>
                    </button>


                    <button
                        onClick={() => setTabs("ScheduleMessage")}
                        className={`flex items-center gap-2  ${tabs === "ScheduleMessage" ? 'rounded-lg border border-[#D5D7DA] bg-white' : ''} transition-all duration-300 px-3 py-[10px] text-sm font-medium text-gray-500`}>
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

            {
                tabs === "AllMessage" ? (
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
                ) : (
                    <div className="w-full rounded-xl bg-white p-6">

                        <div className="mb-5">
                            <label className="mb-2 block text-sm font-medium text-gray-900">
                                Message Title
                            </label>
                            <input
                                type="text"
                                placeholder="Message title"
                                className="h-11 w-full rounded-lg border border-gray-200 px-4 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-5">
                            <label className="mb-2 block text-sm font-medium text-gray-900">
                                Send As
                            </label>
                            <select className="h-11 w-full rounded-lg border border-gray-200 px-4 text-sm text-gray-500 focus:outline-none">
                                <option>Select an option</option>
                            </select>
                        </div>
                        <div className="mb-5">
                            <label className="mb-2 block text-sm font-medium text-gray-900">
                                Target Audience
                            </label>
                            <select className="h-11 w-full rounded-lg border border-gray-200 px-4 text-sm text-gray-500 focus:outline-none">
                                <option>Select an option</option>
                            </select>
                        </div>



                        <div className="mb-6">
                            <label className="mb-2 block text-sm font-medium text-gray-900">
                                Add Media <span className="text-gray-400">(optional)</span>
                            </label>


                            <div 
                            onClick={openFileDialog}
                            className="flex h-28 w-[200px] bg-[#F5F5F5] cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 text-gray-400 hover:bg-gray-50">
                                <span>
                                    <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.4" d="M35.75 12.6912V25.5125C35.75 25.4963 35.7337 25.48 35.7175 25.4637C35.6525 25.3662 35.5712 25.2688 35.49 25.1875C35.4737 25.1713 35.4575 25.1388 35.4412 25.1225C34.125 23.66 32.1912 22.75 30.0625 22.75C28.015 22.75 26.1463 23.595 24.8138 24.96C23.53 26.2762 22.75 28.08 22.75 30.0625C22.75 31.4275 23.14 32.7275 23.8062 33.8325C24.1637 34.4338 24.6188 34.9862 25.1388 35.4412C25.1713 35.4575 25.1875 35.4738 25.2037 35.49C25.285 35.5713 25.3662 35.6362 25.4637 35.7175C25.4637 35.7175 25.4637 35.7175 25.48 35.7175C25.4962 35.7337 25.5125 35.75 25.5288 35.75H12.6912C6.77625 35.75 3.25 32.2238 3.25 26.3088V12.6912C3.25 11.8625 3.31501 11.0662 3.46126 10.335C4.29001 5.86623 7.58876 3.26625 12.6263 3.25H26.3737C31.4112 3.26625 34.71 5.86623 35.5387 10.335C35.685 11.0662 35.75 11.8625 35.75 12.6912Z" fill="#292D32" />
                                        <path d="M35.75 12.6912V12.7725H3.25V12.6912C3.25 11.8625 3.31501 11.0662 3.46126 10.335H12.6263V3.25H15.0638V10.335H23.9362V3.25H26.3737V10.335H35.5387C35.685 11.0662 35.75 11.8625 35.75 12.6912Z" fill="#292D32" />
                                        <path d="M35.75 25.5125C35.75 25.4963 35.7337 25.48 35.7175 25.4637C35.6525 25.3662 35.5712 25.2688 35.49 25.1875C35.4737 25.1713 35.4575 25.1388 35.4412 25.1225C34.125 23.66 32.1912 22.75 30.0625 22.75C28.015 22.75 26.1463 23.595 24.8138 24.96C23.53 26.2762 22.75 28.08 22.75 30.0625C22.75 31.4275 23.14 32.7275 23.8062 33.8325C24.1637 34.4338 24.6188 34.9862 25.1388 35.4412C25.1713 35.4575 25.1875 35.4738 25.2037 35.49C25.285 35.5713 25.3662 35.6362 25.4637 35.7175C25.4637 35.7175 25.4637 35.7175 25.48 35.7175C25.4962 35.7337 25.5125 35.75 25.5288 35.75C26.7475 36.7737 28.3237 37.375 30.0625 37.375C32.7275 37.375 35.0513 35.945 36.3188 33.8325C36.6925 33.1988 36.985 32.5 37.1637 31.7687C37.31 31.2162 37.375 30.6475 37.375 30.0625C37.375 28.34 36.7737 26.7475 35.75 25.5125ZM32.7925 31.2487H31.2812V32.825C31.2812 33.4913 30.7287 34.0438 30.0625 34.0438C29.3963 34.0438 28.8438 33.4913 28.8438 32.825V31.2487H27.3325C26.6663 31.2487 26.1138 30.6962 26.1138 30.03C26.1138 29.3637 26.6663 28.8112 27.3325 28.8112H28.8438V27.365C28.8438 26.6988 29.3963 26.1463 30.0625 26.1463C30.7287 26.1463 31.2812 26.6988 31.2812 27.365V28.8112H32.7925C33.4587 28.8112 34.0112 29.3637 34.0112 30.03C34.0112 30.6962 33.475 31.2487 32.7925 31.2487Z" fill="#292D32" />
                                    </svg>
                                </span>
                                <span className="mt-2 text-xs">Upload</span>
                                <input type="file" className="hidden" onChange={handleFileChange} ref={Fileref} />
                            </div>
                        </div>


                        <div className="mb-8">
                            <label className="mb-2 block text-sm font-medium text-gray-900">
                                Message Body
                            </label>


                            <div className="rounded-lg border border-gray-200">
                                <div className="flex items-center gap-4 border-b border-gray-200 px-4 py-2 text-gray-500">
                                    <Bold size={14} />
                                    <Italic size={14} />
                                    <Heading size={14} />
                                    <Quote size={14} />
                                    <Link2 size={14} />
                                    <List size={14} />
                                    <ListOrdered size={14} />
                                    <ImageIcon size={14} />
                                </div>

                                <textarea
                                    placeholder="Rich text support, links, bold, etc."
                                    className="h-40 w-full resize-none rounded-b-lg px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none"
                                />
                            </div>
                        </div>



                        <div className="flex flex-col md:flex-row items-center  gap-2">
                            <button className="h-[50px] w-full max-w-[300px] rounded-lg border border-gray-300 px-6 text-sm font-medium text-gray-700">
                                Schedule for Later
                            </button>

                            <button className="h-[50px] w-full max-w-[300px] rounded-lg bg-blue-600 px-10 text-sm font-medium text-white hover:bg-blue-700">
                                Send Now
                            </button>
                        </div>
                    </div>
                )
            }



        </div>
    );
}
