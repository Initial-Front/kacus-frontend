

import { useMemo, useState } from "react";
import {
    MoreHorizontal,
    ChevronDown,
    ChevronUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";


type KycStatus = "Verified" | "Pending" | "Rejected" | "Flagged";
type AccountStatus = "Active" | "Frozen" | "Suspended" | "Flagged";

type UserRow = {
    id: string;
    name: string;
    email: string;
    country: string;
    kyc: KycStatus;
    balance: string;
    lastLogin: string;
    accountStatus: AccountStatus;
    totalTrades: number;
    reputation: number;
    avatar?: string | null;
};

const MOCK: UserRow[] = [
    {
        id: "#675",
        name: "Lily-Rose Chedjou",
        email: "lilyrose.chedjou@example.com",
        country: "Nigeria",
        kyc: "Verified",
        balance: "NGN 2,000,000",
        lastLogin: "Jul 30, 2025 · 3:42 PM",
        accountStatus: "Active",
        totalTrades: 100,
        reputation: 88,
    },
    {
        id: "#678",
        name: "Caitlyn King",
        email: "chloe.clark@university.edu",
        country: "India",
        kyc: "Verified",
        balance: "NGN 25,000,000",
        lastLogin: "Oct 7, 2025 · 12:45 PM",
        accountStatus: "Active",
        totalTrades: 111,
        reputation: 63,
    },
    {
        id: "#681",
        name: "Fleur Cook",
        email: "emma.wilson@fastmail.com",
        country: "Egypt",
        kyc: "Pending",
        balance: "NGN 500,000",
        lastLogin: "Aug 5, 2025 · 11:01 AM",
        accountStatus: "Frozen",
        totalTrades: 106,
        reputation: 92,
    },
    {
        id: "#676",
        name: "Marco Kelly",
        email: "jackson_lee@mail.com",
        country: "Germany",
        kyc: "Rejected",
        balance: "NGN 950,000",
        lastLogin: "Sep 29, 2025 · 10:05 AM",
        accountStatus: "Suspended",
        totalTrades: 101,
        reputation: 82,
    },
    {
        id: "#677",
        name: "Lulu Meyers",
        email: "noah.taylor@inbox.io",
        country: "Argentina",
        kyc: "Flagged",
        balance: "NGN 6,100,000",
        lastLogin: "Nov 3, 2025 · 5:59 PM",
        accountStatus: "Frozen",
        totalTrades: 107,
        reputation: 64,
    },
];



function Avatar({ name, src }: { name: string; src?: string | null }) {
    const initials = name
        .split(" ")
        .map((s) => s[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();
    return src ? (
        // if you have image component, replace with <Image />
        <img
            src={src}
            alt={name}
            className="w-9 h-9 rounded-full object-cover"
        />
    ) : (
        <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-sm text-slate-700">
            {initials}
        </div>
    );
}

function StatusBadge({ status }: { status: KycStatus | AccountStatus }) {
    const map: Record<string, string> = {
        Verified: "bg-emerald-50 text-emerald-700",
        Pending: "bg-amber-50 text-amber-700",
        Rejected: "bg-rose-50 text-rose-700",
        Flagged: "bg-rose-50 text-rose-700",
        Active: "bg-emerald-50 text-emerald-700",
        Frozen: "bg-amber-50 text-amber-700",
        Suspended: "bg-rose-50 text-rose-700",
    };
    return (
        <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${map[status] ?? "bg-slate-50 text-slate-700"}`}
        >
            {status}
        </span>
    );
}

function ProgressRing({ value }: { value: number }) {
    // simple circular progress with stroke dashoffset
    const radius = 18;
    const stroke = 4;
    const normalized = Math.max(0, Math.min(100, value));
    const c = 2 * Math.PI * radius;
    const dash = (normalized / 100) * c;
    return (
        <div className="flex items-center space-x-2">
            <svg width="44" height="44" viewBox="0 0 44 44">
                <g transform="translate(22,22)">
                    <circle r={radius} stroke="#edf2f7" strokeWidth={stroke} fill="none" />
                    <circle
                        r={radius}
                        strokeWidth={stroke}
                        strokeLinecap="round"
                        stroke="#10b981"
                        strokeDasharray={`${dash} ${c - dash}`}
                        transform="rotate(-90)"
                        strokeLinejoin="round"
                        fill="none"
                    />
                </g>
            </svg>
            <div className="text-xs font-medium w-8 text-right">{value}%</div>
        </div>
    );
}

/* ---------------------------
   Actions Menu (simple)
   --------------------------- */
function ActionsMenu({ onView }: { onView: () => void }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="relative inline-block text-left">
            <button
                className="p-2 rounded-md hover:bg-slate-100"
                onClick={() => setOpen((v) => !v)}
                aria-label="actions"
            >
                <MoreHorizontal size={18} />
            </button>

            {open && (
                <div
                    className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-md z-30"
                    onMouseLeave={() => setOpen(false)}
                >
                    <button
                        onClick={() => {
                            setOpen(false);
                            onView();
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-slate-50"
                    >
                        View profile
                    </button>
                    <button className="w-full text-left px-4 py-2 hover:bg-slate-50">
                        Freeze/Unfreeze
                    </button>
                    <button className="w-full text-left px-4 py-2 hover:bg-slate-50">
                        Flag
                    </button>
                    <button className="w-full text-left px-4 py-2 hover:bg-slate-50">
                        Send message
                    </button>
                </div>
            )}
        </div>
    );
}


export default function UsersTable() {
    const navigate = useNavigate();
    const [data] = useState<UserRow[]>(MOCK.concat(
    
        MOCK.map((m, i) => ({ ...m, id: `${m.id}-${i + 1}` }))
    ));
    const [page, setPage] = useState(1);
    const perPage = 8;
    const [sort, setSort] = useState<{ col: "name" | "reputation" | null; dir: "asc" | "desc" }>({
        col: null,
        dir: "asc",
    });

    const totalPages = Math.ceil(data.length / perPage);

    const sorted = useMemo(() => {
        if (!sort.col) return data;
        const s = [...data].sort((a, b) => {
            let v = 0;
            if (sort.col === "name") v = a.name.localeCompare(b.name);
            if (sort.col === "reputation") v = a.reputation - b.reputation;
            return sort.dir === "asc" ? v : -v;
        });
        return s;
    }, [data, sort]);

    const pageData = useMemo(() => {
        const start = (page - 1) * perPage;
        return sorted.slice(start, start + perPage);
    }, [sorted, page]);

    function toggleSort(col: "name" | "reputation") {
        if (sort.col === col) {
            setSort({ col, dir: sort.dir === "asc" ? "desc" : "asc" });
        } else {
            setSort({ col, dir: "asc" });
        }
    }

    return (
        <div className="w-full mt-8">
            <div className="bg-white overflow-hidden ">

                <div className="overflow-x-auto no-scrollbar">
                    <table className="min-w-full  table-auto whitespace-nowrap">
                        <thead className="border-b" >
                            <tr className="text-left text-xs font-medium text-slate-600">
                                <th className="px-4 py-3 w-10">
                                    <input type="checkbox" className="h-4 w-4" />
                                </th>
                                <th className="px-4 py-3">
                                    <div className="flex items-center gap-3">
                                        User ID
                                        <span>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.5 7.5L6 10L8.5 7.5M3.5 4.5L6 2L8.5 4.5" stroke="#A4A7AE" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>

                                        </span>
                                    </div>

                                </th>
                                <th className="px-4 py-3">

                                    <div className="flex items-center gap-3">

                                        Name
                                        <span>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.5 7.5L6 10L8.5 7.5M3.5 4.5L6 2L8.5 4.5" stroke="#A4A7AE" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>

                                        </span>
                                    </div>

                                </th>
                                <th className="px-4 py-3">

                                    <div className="flex items-center gap-3">
                                        Email
                                        <span>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.5 7.5L6 10L8.5 7.5M3.5 4.5L6 2L8.5 4.5" stroke="#A4A7AE" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>

                                        </span>
                                    </div>
                                </th>
                                <th className="px-4 py-3 whitespace-nowrap">

                                    <div className="flex items-center gap-3">
                                        Country
                                        <span>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.5 7.5L6 10L8.5 7.5M3.5 4.5L6 2L8.5 4.5" stroke="#A4A7AE" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>

                                        </span>
                                    </div>
                                </th>
                                <th className="px-4 py-3">

                                    <div className="flex items-center gap-3">
                                        KYC Status
                                        <span>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.5 7.5L6 10L8.5 7.5M3.5 4.5L6 2L8.5 4.5" stroke="#A4A7AE" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>

                                        </span>
                                    </div>
                                </th>
                                <th className="px-4 py-3">

                                    <div className="flex items-center gap-3">
                                        Wallet Balance
                                        <span>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.5 7.5L6 10L8.5 7.5M3.5 4.5L6 2L8.5 4.5" stroke="#A4A7AE" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>

                                        </span>
                                    </div>
                                </th>
                                <th className="px-4 py-3">
                                    <div className="flex  items-center gap-3">
                                        Last Login
                                        <span>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.5 7.5L6 10L8.5 7.5M3.5 4.5L6 2L8.5 4.5" stroke="#A4A7AE" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>

                                        </span>
                                    </div>
                                </th>
                                <th className="px-4 py-3">


                                    <div className="flex items-center gap-3">
                                        Account Status
                                        <span>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.5 7.5L6 10L8.5 7.5M3.5 4.5L6 2L8.5 4.5" stroke="#A4A7AE" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>

                                        </span>
                                    </div>
                                </th>
                                <th className="px-4 py-3">

                                    <div className="flex items-center gap-3">
                                        Total Trades
                                        <span>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.5 7.5L6 10L8.5 7.5M3.5 4.5L6 2L8.5 4.5" stroke="#A4A7AE" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>

                                        </span>
                                    </div>
                                </th>
                                <th className="px-4 py-3">
                                    <button
                                        className="flex items-center gap-2"
                                        onClick={() => toggleSort("reputation")}
                                    >
                                        On-Chain Reputation
                                        {sort.col === "reputation" ? (
                                            sort.dir === "asc" ? (
                                                <ChevronUp size={14} />
                                            ) : (
                                                <ChevronDown size={14} />
                                            )
                                        ) : null}
                                    </button>
                                </th>
                                <th className="px-4 py-3 w-16"></th>
                            </tr>
                        </thead>

                        <tbody className="bg-white divide-y">
                            {pageData.map((row) => (
                                <tr key={row.id} 
                                onClick={() => navigate(`/AllUsersDetails/${row.id.replace('#', '')}`)}
                                className="hover:bg-slate-50">
                                    <td className="px-4 py-4">
                                        <input type="checkbox" className="h-4 w-4" />
                                    </td>

                                    <td className="px-4 py-4 text-sm font-medium text-slate-700">
                                        <div className="flex items-center gap-2 bg-[#EFF8FF] py-0.5 px-2 rounded-full text-[#175CD3]">
                                            <span>
                                                <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="3" cy="3" r="3" fill="#2E90FA" />
                                                </svg>
                                            </span>
                                            {row.id}
                                        </div>
                                    </td>

                                    <td className="px-4 py-4">
                                        <div className="flex items-center gap-3">
                                            <Avatar name={row.name} src={row.avatar ?? null} />
                                            <div>
                                                <div className="text-sm font-medium text-slate-800">{row.name}</div>
                                                <div className="text-xs text-slate-500">{row.email}</div>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="px-4 py-4 text-sm text-slate-600">{row.email}</td>

                                    <td className="px-4 py-4 text-sm text-slate-600">{row.country}</td>

                                    <td className="px-4 py-4">
                                        <StatusBadge status={row.kyc} />
                                    </td>

                                    <td className="px-4 py-4 text-sm text-slate-700">{row.balance}</td>

                                    <td className="px-4 py-4 text-sm text-slate-600">{row.lastLogin}</td>

                                    <td className="px-4 py-4">
                                        <StatusBadge status={row.accountStatus} />
                                    </td>

                                    <td className="px-4 py-4">
                                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-50 text-slate-700 text-sm">
                                            {row.totalTrades}
                                        </div>
                                    </td>

                                    <td className="px-4 py-4">
                                        <div className="flex items-center gap-2">
                                            <ProgressRing value={row.reputation} />
                                        </div>
                                    </td>

                                    <td className="px-4 py-4 text-right">
                                        <ActionsMenu onView={() => alert(`View ${row.name}`)} />
                                    </td>
                                </tr>
                            ))}

                            {pageData.length === 0 && (
                                <tr>
                                    <td colSpan={12} className="px-6 py-8 text-center text-slate-500">
                                        No rows
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>


                <div className="px-6 py-3 border-t flex flex-row items-center justify-between gap-3">
                    <button
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={page === 1}
                        className="text-sm md:text-base text-[#A4A7AE] md:border-2 border-[#E9EAEB] rounded-lg flex items-center gap-3 md:py-[8px] md:px-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8332 9.99984H4.1665M4.1665 9.99984L9.99984 15.8332M4.1665 9.99984L9.99984 4.1665" stroke="#414651" strokeWidth="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        Previous
                    </button>



                       <div className="flex items-center gap-2">
                            {Array.from({ length: totalPages }).map((_, i) => {
                                const idx = i + 1;
                                const active = idx === page;
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => setPage(idx)}
                                        className={`px-3 py-2 rounded-md text-sm ${active ? "bg-[#FAFAFA] text-gray-800" : "text-gray-800 bg-transparent"}`}
                                    >
                                        {idx}
                                    </button>
                                );
                            })}
                        </div>

                    <div className="flex items-center gap-2">
                        <button
                             onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                            disabled={page === totalPages}
                            className=" text-sm md:text-base text-[#A4A7AE] md:border-2 border-[#E9EAEB] rounded-lg flex items-center gap-3 md:py-[8px] md:px-3">
                                Next
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16699 9.99984H15.8337M15.8337 9.99984L10.0003 4.1665M15.8337 9.99984L10.0003 15.8332" stroke="#414651" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>


                           
                        </button>
                    </div>
                </div>
            </div>


            {/* <div className="mt-4 sm:hidden">
                <div className="space-y-3">
                    {pageData.map((row) => (
                        <div key={"mobile-" + row.id} className="bg-white border rounded-lg p-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Avatar name={row.name} />
                                    <div>
                                        <div className="text-sm font-medium">{row.name}</div>
                                        <div className="text-xs text-slate-500">{row.email}</div>
                                    </div>
                                </div>
                                <ActionsMenu onView={() => alert(`View ${row.name}`)} />
                            </div>

                            <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-600">
                                <div>
                                    <div className="font-medium">KYC</div>
                                    <StatusBadge status={row.kyc} />
                                </div>
                                <div>
                                    <div className="font-medium">Balance</div>
                                    <div className="mt-1">{row.balance}</div>
                                </div>
                                <div>
                                    <div className="font-medium">Last Login</div>
                                    <div className="mt-1">{row.lastLogin}</div>
                                </div>
                                <div>
                                    <div className="font-medium">Trades</div>
                                    <div className="mt-1">{row.totalTrades}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    );
}
