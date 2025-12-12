import React, { useState, useMemo } from "react";
import { Search,  Trash2, Edit3, MoreVertical } from "lucide-react";


// Simple button fallback (no external UI library)
const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
    children,
    className = "",
    ...props
}) => (
    <button
        {...props}
        className={`inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium shadow-sm focus:outline-none ${className}`}
    >
        {children}
    </button>
);



type FuturesRow = {
    id: string;
    name: string;
    pair: string;
    leverage: string;
    fundingRate: string | null;
    expiry: string | null;
    status: "Active" | "Paused" | "Upcoming";
};


const sampleFutures: FuturesRow[] = Array.from({ length: 9 }).map((_, i) => ({
    id: `f-${i}`,
    name: `ADA-FUT-2024-09-${30 - i}`,
    pair: i % 2 === 0 ? "ADA/NGN" : "BTC/NGN",
    leverage: "50x",
    fundingRate: i % 3 === 0 ? null : "0.01%",
    expiry: i % 2 === 0 ? "2024-08-09" : null,
    status: i % 4 === 0 ? "Upcoming" : i % 3 === 0 ? "Paused" : "Active",
}));




export const ListingsFutures: React.FC = () => {
    const [query, setQuery] = useState("");
    const [rows, setRows] = useState<FuturesRow[]>(sampleFutures);
    const [selected, setSelected] = useState<Record<string, boolean>>({});

    const filtered = useMemo(() => {
        if (!query) return rows;
        return rows.filter(
            (r) =>
                r.name.toLowerCase().includes(query.toLowerCase()) ||
                r.pair.toLowerCase().includes(query.toLowerCase())
        );
    }, [query, rows]);

    const toggleSelect = (id: string) =>
        setSelected((s) => ({ ...s, [id]: !s[id] }));

    const delist = (id: string) => setRows((prev) => prev.filter((r) => r.id !== id));

    return (
        <div className="w-full">


            <div className="bg-white  rounded-lg p-4">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                        <button className="px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm font-medium">Futures <span className="ml-2 inline-block bg-gray-100 text-gray-600 rounded-full px-2 py-0.5 text-xs">1881</span></button>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex items-center w-full  max-w-56  rounded-md px-3 py-2 border border-gray-100">
                            <Search className="w-4 h-4 text-gray-400" />
                            <input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search"
                                className="ml-2 w-full bg-transparent text-sm focus:outline-none"
                            />
                        </div>

                        <Button className="bg-white border border-gray-100 text-gray-700">
                            <span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 10H15M2.5 5H17.5M7.5 15H12.5" stroke="#414651" strokeWidth="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </span>
                            Filters
                        </Button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead>
                            <tr className="text-left text-xs text-gray-500 border-y border-gray-100">
                                <th className="py-3 px-3 w-10"><input type="checkbox" /></th>
                                <th className="py-3 px-3">Asset Name</th>
                                <th className="py-3 px-3">Pair</th>
                                <th className="py-3 px-3">Leverage</th>
                                <th className="py-3 px-3">Funding Rate</th>
                                <th className="py-3 px-3">Expiry Date</th>
                                <th className="py-3 px-3">Status</th>
                                <th className="py-3 px-3 w-36">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((row) => (
                                <tr key={row.id} className="border-b border-gray-100 hover:bg-gray-50">
                                    <td className="py-4 px-3"><input checked={!!selected[row.id]} onChange={() => toggleSelect(row.id)} type="checkbox" /></td>
                                    <td className="py-4 px-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600">

                                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M39.402 24.8381C36.7309 35.5525 25.8789 42.0731 15.1633 39.4012C4.4521 36.7301 -2.06846 25.8775 0.603853 15.1639C3.27382 4.44838 14.1258 -2.07268 24.8381 0.598468C35.553 3.26961 42.0732 14.1234 39.4017 24.8383L39.4019 24.8381H39.402Z" fill="#F7931A" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M28.8207 17.1515C29.2188 14.49 27.1924 13.0593 24.4216 12.1049L25.3204 8.49955L23.1258 7.95269L22.2507 11.4631C21.6738 11.3192 21.0813 11.1836 20.4924 11.0492L21.3738 7.51561L19.1805 6.96875L18.2811 10.5729C17.8036 10.4642 17.3347 10.3568 16.8797 10.2436L16.8823 10.2322L13.8558 9.47644L13.2719 11.8205C13.2719 11.8205 14.9002 12.1937 14.8659 12.2167C15.7546 12.4385 15.9153 13.0268 15.8886 13.4931L14.8647 17.6004C14.9259 17.616 15.0053 17.6385 15.0929 17.6737L15.0293 17.6578L15.0292 17.6578C14.975 17.6442 14.9187 17.6301 14.8609 17.6163L13.4257 23.37C13.3171 23.64 13.0414 24.0452 12.4201 23.8914C12.4421 23.9232 10.825 23.4933 10.825 23.4933L9.73535 26.0055L12.5914 26.7175C12.9041 26.7959 13.2132 26.8765 13.5191 26.9562L13.5193 26.9563C13.733 27.012 13.9452 27.0673 14.1561 27.1212L13.2479 30.7679L15.44 31.3147L16.3394 27.7068C16.9383 27.8694 17.5194 28.0193 18.0884 28.1607L17.1921 31.7516L19.3868 32.2985L20.2949 28.6587C24.0373 29.3669 26.8512 29.0814 28.0357 25.6964C28.9901 22.9711 27.9882 21.3991 26.0193 20.374C27.4533 20.0433 28.5335 19.1001 28.8215 17.1518L28.8208 17.1513L28.8207 17.1515ZM23.8063 24.1829C23.184 26.6833 19.2702 25.6496 17.4795 25.1766C17.3184 25.1341 17.1745 25.0961 17.0518 25.0656L18.2569 20.2344C18.4066 20.2717 18.5894 20.3128 18.7966 20.3593C20.6488 20.7749 24.4438 21.6266 23.8064 24.1829H23.8063ZM19.1681 18.1171C20.661 18.5155 23.9178 19.3847 24.485 17.1122H24.4852C25.0644 14.7879 21.8993 14.0872 20.3535 13.745C20.1796 13.7065 20.0262 13.6725 19.9009 13.6413L18.8083 18.0229C18.9114 18.0486 19.0325 18.0809 19.1681 18.1171Z" fill="white" />
                                                </svg>

                                            </div>
                                            <div className="font-medium">{row.name}</div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-3"><span className="inline-flex items-center text-xs px-2 py-1 rounded-full bg-violet-50 text-violet-700">{row.pair}</span></td>
                                    <td className="py-4 px-3">{row.leverage}</td>
                                    <td className="py-4 px-3">{row.fundingRate ?? "N/A"}</td>
                                    <td className="py-4 px-3">{row.expiry ?? "N/A"}</td>
                                    <td className="py-4 px-3">
                                        <span className={`inline-flex items-center px-2 py-1 text-xs rounded-full ${row.status === "Active" ? "bg-green-50 text-green-700" : row.status === "Paused" ? "bg-amber-50 text-amber-700" : "bg-sky-50 text-sky-700"}`}>
                                            {row.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-3 text-right">
                                        <div className="inline-flex items-center gap-3">
                                            <button title="Delist" onClick={() => delist(row.id)} className="p-2 rounded-md hover:bg-gray-100 text-gray-600"><Trash2 className="w-4 h-4" /></button>
                                            <button title="Edit" className="p-2 rounded-md hover:bg-gray-100 text-gray-600"><Edit3 className="w-4 h-4" /></button>
                                            <button title="More" className="p-2 rounded-md hover:bg-gray-100 text-gray-600"><MoreVertical className="w-4 h-4" /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};