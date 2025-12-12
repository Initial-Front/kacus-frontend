

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
    FlagType: string;
    FlagsTriggered: string;
    RiskScore: string;
    kyc: KycStatus;
    LastTransaction: string;
    WalletBalance: string;
    OnChainReputationScore: string;
    Status: string;
    avatar?: string | null;
};

const MOCK: UserRow[] = [
    {
        id: "#675",
        name: "Lily-Rose Chedjou",
        email: "lilyrose.chedjou@example.com",
        FlagType: "KYC Fraud",
        FlagsTriggered: "Fake ID document detected",
        RiskScore: "63",
        kyc: "Verified",
        LastTransaction: "Oct 7, 2025 · 12:45 PM",
        WalletBalance: "NGN 2,000,000",
        OnChainReputationScore: "100",
        Status: "Cleared"
    },
    {
        id: "#678",
        name: "Caitlyn King",
        email: "chloe.clark@university.edu",
        FlagType: "KYC Fraud",
        FlagsTriggered: "Fake ID document detected",
        RiskScore: "63",
        kyc: "Verified",
        LastTransaction: "Oct 7, 2025 · 12:45 PM",
        WalletBalance: "NGN 2,000,000",
        OnChainReputationScore: "100",
        Status: "Cleared"
    },
    {
        id: "#681",
        name: "Fleur Cook",
        email: "emma.wilson@fastmail.com",
        FlagType: "KYC Fraud",
        FlagsTriggered: "Fake ID document detected",
        RiskScore: "63",
        kyc: "Verified",
        LastTransaction: "Oct 7, 2025 · 12:45 PM",
        WalletBalance: "NGN 2,000,000",
        OnChainReputationScore: "100",
        Status: "Cleared"
    },
    {
        id: "#676",
        name: "Marco Kelly",
        email: "jackson_lee@mail.com",
        FlagType: "KYC Fraud",
        FlagsTriggered: "Fake ID document detected",
        RiskScore: "63",
        kyc: "Verified",
        LastTransaction: "Oct 7, 2025 · 12:45 PM",
        WalletBalance: "NGN 2,000,000",
        OnChainReputationScore: "100",
        Status: "Cleared"
    },
    {
        id: "#677",
        name: "Lulu Meyers",
        email: "noah.taylor@inbox.io",
        FlagType: "KYC Fraud",
        FlagsTriggered: "Fake ID document detected",
        RiskScore: "63",
        kyc: "Verified",
        LastTransaction: "Oct 7, 2025 · 12:45 PM",
        WalletBalance: "NGN 2,000,000",
        OnChainReputationScore: "100",
        Status: "Cleared"
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

function ProgressRing({
    progress,
    size = 44,
    strokeWidth = 4,
}: {
    progress: number;
    size?: number;
    strokeWidth?: number;
}) {
    const radius = size / 2 - strokeWidth;
    const normalized = Math.max(0, Math.min(100, progress));
    const c = 2 * Math.PI * radius;
    const dash = (normalized / 100) * c;

    return (
        <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                <g transform={`translate(${size / 2},${size / 2})`}>
                    {/* Background circle */}
                    <circle
                        r={radius}
                        stroke="#edf2f7"
                        strokeWidth={strokeWidth}
                        fill="none"
                    />

                    <circle
                        r={radius}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        stroke="#10b981"
                        strokeDasharray={`${dash} ${c - dash}`}
                        transform="rotate(-90)"
                        fill="none"
                    />
                </g>
            </svg>


            <span className="absolute text-[10px] font-semibold text-gray-700">
                {progress}%
            </span>
        </div>
    );
}




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



export default function FlaggedUsersTable() {
    const [data] = useState<UserRow[]>(MOCK.concat(
        MOCK.map((m, i) => ({ ...m, id: `${m.id}-${i + 1}` }))
    ));
    const [page, setPage] = useState(1);
    const perPage = 8;
    const [sort, setSort] = useState<{
        col: "name" | "OnChainReputationScore" | null
        dir: "asc" | "desc"
    }>({
        col: null,
        dir: "asc",
    });

    const totalPages = Math.ceil(data.length / perPage);

    const sorted = useMemo(() => {
        if (!sort.col) return data;
        const s = [...data].sort((a, b) => {
            let v = 0;
            if (sort.col === "name") v = a.name.localeCompare(b.name);
            if (sort.col === "OnChainReputationScore") {
                v = Number(a.OnChainReputationScore) - Number(b.OnChainReputationScore);
            }

            return sort.dir === "asc" ? v : -v;
        });
        return s;
    }, [data, sort]);

    const pageData = useMemo(() => {
        const start = (page - 1) * perPage;
        return sorted.slice(start, start + perPage);
    }, [sorted, page]);

    function toggleSort(col: "name" | "OnChainReputationScore") {
        if (sort.col === col) {
            setSort({ col, dir: sort.dir === "asc" ? "desc" : "asc" });
        } else {
            setSort({ col, dir: "asc" });
        }
    }
  const navigate = useNavigate();
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
                                        Flag Type
                                        <span>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.5 7.5L6 10L8.5 7.5M3.5 4.5L6 2L8.5 4.5" stroke="#A4A7AE" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>

                                        </span>
                                    </div>
                                </th>
                                <th className="px-4 py-3">

                                    <div className="flex items-center gap-3">
                                        Flags Triggered
                                        <span>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.5 7.5L6 10L8.5 7.5M3.5 4.5L6 2L8.5 4.5" stroke="#A4A7AE" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>

                                        </span>
                                    </div>
                                </th>
                                <th className="px-4 py-3">

                                    <div className="flex items-center gap-3">
                                        Risk Score
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
                                        Last Transaction
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
                                    <button
                                        className="flex items-center gap-2"
                                        onClick={() => toggleSort("name")}
                                    >
                                        On-Chain Reputation
                                        {sort.col === "name" ? (
                                            sort.dir === "asc" ? (
                                                <ChevronUp size={14} />
                                            ) : (
                                                <ChevronDown size={14} />
                                            )
                                        ) : null}
                                    </button>
                                </th>
                                <th className="px-4 py-3 w-16">
                                    <div className="flex items-center gap-3">

                                        Status

                                        <span>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.5 7.5L6 10L8.5 7.5M3.5 4.5L6 2L8.5 4.5" stroke="#A4A7AE" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>

                                        </span>
                                    </div>
                                </th>
                                <th className="px-4 py-3 w-16"> </th>
                            </tr>
                        </thead>

                        <tbody className="bg-white divide-y cursor-pointer">
                            {pageData.map((row) => (
                                <tr 
                                onClick={()=> navigate(`/FlaggedUsersDetails?id=${row.id}`)}
                                key={row.id} 
                                className="border-b cursor-pointer text-sm">

                                    {/* Checkbox */}
                                    <td className="p-3">
                                        <input type="checkbox" className="h-4 w-4" />
                                    </td>

                                    {/* User ID */}
                                    <td className="p-3">{row.id}</td>

                                    {/* Name */}
                                    <td className="p-3">{row.name}</td>

                                    {/* Email */}
                                    <td className="p-3">{row.email}</td>

                                    {/* Flag Type */}
                                    <td className="p-3">{row.FlagType}</td>

                                    {/* Flags Triggered */}
                                    <td className="p-3">{row.FlagsTriggered}</td>

                                    {/* Risk Score */}
                                    <td className="p-3 flex items-center justify-center gap-2">
                                        <ProgressRing progress={Number(row.RiskScore)} size={38} strokeWidth={4} />
                                    </td>

                                    {/* Last Login */}
                                    <td className="p-3">{row.LastTransaction}</td>

                                    {/* KYC Status */}
                                    <td className="p-3">
                                        <StatusBadge status={row.kyc} />
                                    </td>

                                    {/* Last Transaction */}
                                    <td className="p-3">{row.LastTransaction}</td>

                                    {/* Wallet Balance */}
                                    <td className="p-3">{row.WalletBalance}</td>

                                    {/* On-Chain Reputation */}
                                    <td className="p-3 flex items-center justify-center gap-2">
                                        <ProgressRing progress={Number(row.OnChainReputationScore)} size={38} strokeWidth={4} />
                                    </td>

                                    {/* Status */}
                                    <td className="p-3">
                                        <StatusBadge status={row.Status as "Verified" | "Pending" | "Rejected" | "Flagged" | "Active" | "Frozen" | "Suspended"} />
                                    </td>

                                    {/* Actions */}
                                    <td className="p-3">
                                        <ActionsMenu onView={() => alert(`View ${row.name}`)} />
                                    </td>

                                </tr>
                            ))}

                            {pageData.length === 0 && (
                                <tr>
                                    <td colSpan={14} className="px-6 py-8 text-center text-slate-500">
                                        No rows
                                    </td>
                                </tr>
                            )}
                        </tbody>

                    </table>
                </div>


                <div className="px-6 py-3 border-t flex flex-col md:flex-row items-center justify-between gap-3">
                    <button
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={page === 1}
                        className="text-base text-[#A4A7AE] border-2 border-[#E9EAEB] rounded-lg flex items-center gap-3 py-[8px] px-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8332 9.99984H4.1665M4.1665 9.99984L9.99984 15.8332M4.1665 9.99984L9.99984 4.1665" stroke="#A4A7AE" strokeWidth="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        Previous
                    </button>



                    <div className="hidden sm:flex items-center gap-2">
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
                            className="text-base text-[#A4A7AE] border-2 border-[#E9EAEB] rounded-lg flex items-center gap-3 py-[8px] px-3">
                            Next
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16699 9.99984H15.8337M15.8337 9.99984L10.0003 4.1665M15.8337 9.99984L10.0003 15.8332" stroke="#414651" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>



                        </button>
                    </div>
                </div>
            </div>


            <div className="mt-4 sm:hidden">
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
                                    <div className="mt-1">{row.WalletBalance}</div>
                                </div>
                                <div>
                                    <div className="font-medium">Last Login</div>
                                    <div className="mt-1">{row.LastTransaction}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
