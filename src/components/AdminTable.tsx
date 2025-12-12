
import React, { useMemo, useState } from "react";
import {
    Search,
    Plus,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import ActionMenu from "./ActionMenu";
import EditForm from "./EditFormAdmin";
import AddAdminModal from "./AddNewAdmin";

type Admin = {
    id: number;
    name: string;
    handle: string;
    avatar?: string;
    created: string;
    lastLogin: string;
    role: "Super Admin" | "Admin" | "Moderator";
};

const MOCK_ADMINS: Admin[] = [
    { id: 1, name: "Lily-Rose Chedjou", handle: "@lilyrose", avatar: "", created: "15 Apr 2020", lastLogin: "10 seconds ago", role: "Super Admin" },
    { id: 2, name: "Caitlyn King", handle: "@caitlynk", avatar: "", created: "10 Jan 2020", lastLogin: "6 hours ago", role: "Super Admin" },
    { id: 3, name: "Fleur Cook", handle: "@fleur_cook", avatar: "", created: "4 May 2020", lastLogin: "6 minute ago", role: "Super Admin" },
    { id: 4, name: "Marco Kelly", handle: "@marcokelly", avatar: "", created: "1 Jun 2020", lastLogin: "1 minute ago", role: "Super Admin" },
    { id: 5, name: "Lulu Meyers", handle: "@lulu_meyers", avatar: "", created: "8 Aug 2020", lastLogin: "1 hour ago", role: "Super Admin" },
    { id: 6, name: "Mikey Lawrence", handle: "@mikeylawrence", avatar: "", created: "4 May 2020", lastLogin: "30 seconds ago", role: "Super Admin" },
    { id: 7, name: "Freya Browning", handle: "@freya_b", avatar: "", created: "9 Aug 2020", lastLogin: "10 seconds ago", role: "Super Admin" },
    { id: 8, name: "Lily-Rose Chedjou", handle: "@lilyrose", avatar: "", created: "2 Mar 2020", lastLogin: "8 hours ago", role: "Super Admin" },
    { id: 9, name: "Caitlyn King", handle: "@caitlynk", avatar: "", created: "11 Feb 2020", lastLogin: "20 seconds ago", role: "Super Admin" },
    { id: 10, name: "Fleur Cook", handle: "@fleur_cook", avatar: "", created: "4 May 2020", lastLogin: "3 hours ago", role: "Super Admin" },
    // add more to demo pagination
    { id: 11, name: "Extra Admin 1", handle: "@extra1", avatar: "", created: "7 Jul 2020", lastLogin: "2 days ago", role: "Admin" },
    { id: 12, name: "Extra Admin 2", handle: "@extra2", avatar: "", created: "12 Jul 2020", lastLogin: "3 days ago", role: "Moderator" },
    { id: 13, name: "Extra Admin 3", handle: "@extra3", avatar: "", created: "20 Jul 2020", lastLogin: "6 days ago", role: "Admin" },
    { id: 14, name: "Extra Admin 4", handle: "@extra4", avatar: "", created: "25 Jul 2020", lastLogin: "1 week ago", role: "Moderator" },
];



type ModalProps = {
    open: boolean;
    onClose: () => void;
    title?: string;
    children?: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({ open, onClose, title, children }) => {
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/30" onClick={onClose}></div>
            <div className="relative bg-white rounded-xl shadow-lg w-full max-w-xl mx-auto p-6">
                {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
                {children}
            </div>
        </div>
    );
};


type ConfirmProps = {
    open: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    title?: string;
    children?: React.ReactNode;
};

export const Confirm: React.FC<ConfirmProps> = ({
    open,
    onCancel,
    onConfirm,
    title,
    children,
}) => {
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/30" onClick={onCancel}></div>
            <div className="relative bg-white rounded-xl shadow-lg w-full max-w-sm mx-auto p-6">
                {title && <h3 className="text-base font-medium mb-3">{title}</h3>}
                <div className="mb-4 text-sm text-gray-600">{children}</div>

                <div className="flex justify-end gap-2">
                    <button
                        onClick={onCancel}
                        className="px-3 py-2 rounded-md border text-sm"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-3 py-2 rounded-md bg-red-600 text-white text-sm"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};


const Avatar: React.FC<{ name: string; src?: string }> = ({ name, src }) => {
    const initials = name
        .split(" ")
        .map((p) => p[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

    return src ? (
        <img src={src} alt={name} className="w-10 h-10 rounded-full object-cover" />
    ) : (
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-700">
            {initials}
        </div>
    );
};

const RoleBadge: React.FC<{ role: Admin["role"] }> = ({ role }) => {
    const base = "inline-flex items-center px-2 py-0.5 text-xs rounded-full";
    if (role === "Super Admin") return <div className={`${base} flex items-center gap-2 bg-blue-50 text-blue-700`}>
        <span>
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="3" cy="3" r="3" fill="#2E90FA" />
            </svg>

        </span>
        {role}
    </div>;
    if (role === "Admin") return <div className={`${base} flex items-center gap-2 bg-green-50 text-green-700`}>
        <span>
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="3" cy="3" r="3" fill="#2E90FA" />
            </svg>

        </span>
        {role}</div>;
    return <div className={`${base} flex items-center gap-2 bg-indigo-50 text-indigo-700`}>
        <span>
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="3" cy="3" r="3" fill="#2E90FA" />
            </svg>

        </span>
        {role}</div>;
};


export default function AdministratorsTable() {

    const [query, setQuery] = useState("");
    const [roleFilter, setRoleFilter] = useState<string>("All");
    const [AddNewAdmin, setAddNewAdmin] = useState<boolean>(false)
    const [selected, setSelected] = useState<Admin | null>(null);
    const [editing, setEditing] = useState<Admin | null>(null);
    const [deleting, setDeleting] = useState<Admin | null>(null);
    console.log("selected", selected);

    const [page, setPage] = useState(1);
    const perPage = 10;


    const [data, setData] = useState<Admin[]>(MOCK_ADMINS);


    const filtered = useMemo(() => {
        let list = data;
        if (roleFilter !== "All") list = list.filter((r) => r.role === roleFilter);
        if (query.trim()) {
            const q = query.toLowerCase();
            list = list.filter((r) => r.name.toLowerCase().includes(q) || r.handle.toLowerCase().includes(q));
        }
        return list;
    }, [data, query, roleFilter]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
    const pageItems = filtered.slice((page - 1) * perPage, page * perPage);


    const onEditSave = (updated: Admin) => {
        setData((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
        setEditing(null);
    };

    const onDeleteConfirm = (id: number) => {
        setData((prev) => prev.filter((p) => p.id !== id));
        setDeleting(null);
    };


    React.useEffect(() => {
        setPage(1);
    }, [query, roleFilter]);


    return (
        <div className="p-6 bg-white rounded-lg w-full shadow-sm">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-900">Administrators</h2>
                    <p className="text-sm text-gray-500">Manage all administrators of the platform</p>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() =>  setAddNewAdmin(true)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-650"
                        aria-label="Add new admin"
                    >
                        <Plus size={16} /> Add New Admin
                    </button>
                </div>
            </div>


            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
                <div className="flex items-center gap-2 w-full md:w-1/2">
                    <div className="relative flex-1">
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search User"
                            className="w-full border rounded-lg px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"><Search size={16} /></span>
                    </div>

                    <div className="w-44">
                        <select
                            value={roleFilter}
                            onChange={(e) => setRoleFilter(e.target.value)}
                            className="w-full border rounded-lg px-3 py-2 text-sm"
                        >
                            <option value="All">Admin Role</option>
                            <option value="Super Admin">Super Admin</option>
                            <option value="Admin">Admin</option>
                            <option value="Moderator">Moderator</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto no-scrollbar">
                <table className={`w-full text-left no-scrollbar ${pageItems.length === 0 ? 'hidden' : 'table'}`} style={{ borderSpacing: "0 12px" }}>
                    <thead >
                        <tr>
                            <th className="px-4 py-2 text-xs font-semibold text-gray-500 ">No</th>
                            <th className="px-4 py-2 text-xs font-semibold text-gray-500 ">Name</th>
                            <th className="px-4 py-2 text-xs font-semibold text-gray-500">
                                <div className="flex items-center gap-2">
                                    Created
                                    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.75 6.25L3.25 8.75L5.75 6.25M0.75 3.25L3.25 0.75L5.75 3.25" stroke="#A4A7AE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </th>

                            <th className="px-4 py-2 text-xs font-semibold text-gray-500">
                                <div className="flex items-center gap-2">
                                    Last Login
                                    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.75 6.25L3.25 8.75L5.75 6.25M0.75 3.25L3.25 0.75L5.75 3.25" stroke="#A4A7AE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </th>

                            <th className="px-4 py-2 text-xs font-semibold text-gray-500">
                                <div className="flex items-center gap-2">
                                    Admin Role
                                    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.75 6.25L3.25 8.75L5.75 6.25M0.75 3.25L3.25 0.75L5.75 3.25" stroke="#A4A7AE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </th>

                            <th className="px-4 py-2 text-xs font-semibold text-gray-500">
                                <div className="flex items-center gap-2">
                                    Action
                                    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.75 6.25L3.25 8.75L5.75 6.25M0.75 3.25L3.25 0.75L5.75 3.25" stroke="#A4A7AE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </th>

                        </tr>
                    </thead>

                    <tbody>

                        {pageItems.map((admin, idx) => (
                            <tr
                                key={admin.id}
                                onClick={() => setSelected(admin)}
                                className="bg-white hover:shadow-sm transition-shadow cursor-pointer"
                                style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.03)" }}
                            >
                                <td className="px-4 py-4 align-middle text-sm text-gray-500 w-12">{(page - 1) * perPage + idx + 1}</td>

                                <td className="px-4 py-4 align-middle">
                                    <div className="flex items-center gap-3">
                                        <Avatar name={admin.name} src={admin.avatar} />
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">{admin.name}</div>
                                            <div className="text-xs text-gray-400">{admin.handle}</div>
                                        </div>
                                    </div>
                                </td>

                                <td className="px-4 py-4 align-middle text-sm text-gray-500 w-36">{admin.created}</td>

                                <td className="px-4 py-4 align-middle text-sm text-gray-500 w-40">{admin.lastLogin}</td>

                                <td className="px-4 py-4 align-middle w-36">
                                    <div className="flex items-center">

                                        <RoleBadge role={admin.role} />
                                    </div>

                                </td>

                                <td className="px-4 py-4 align-middle w-20">

                                    <div className="relative inline-block text-left">
                                        <ActionMenu
                                            onEdit={() => setEditing(admin)}
                                            onDelete={() => setDeleting(admin)}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                       

                    </tbody>
                </table>
            </div>


            <div className={`mt-6 flex items-center justify-between gap-4 w-full  no-scrollbar ${pageItems.length === 0 ? 'hidden' : 'block'}`} >
                <div className="text-sm text-gray-500">Showing {(page - 1) * perPage + 1} - {Math.min(page * perPage, filtered.length)} of {filtered.length}</div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        className="p-2 border rounded-md"
                        disabled={page === 1}
                        aria-label="Previous"
                    >
                        <ChevronLeft size={16} />
                    </button>

                    <div className="hidden sm:flex items-center gap-2">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setPage(i + 1)}
                                className={`px-3 py-1 rounded-md text-sm ${page === i + 1 ? "bg-gray-100 font-semibold" : "text-gray-600"}`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                        className="p-2 border rounded-md"
                        disabled={page === totalPages}
                        aria-label="Next"
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>


            {pageItems.length === 0 && (
                <div className="flex flex-col gap-2 items-center  min-h-[80vh] justify-center">
                    <img src="/Empty State Content.png" alt="" />
                    <p>No data found.</p>

                    <button className="bg-[#1570EF] text-white rounded-lg h-[40px] flex items-center gap-2 px-3 py-3">
                        <span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 10H15" stroke="white" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10 15V5" stroke="white" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            `</svg>

                        </span>
                        Add New Admin
                    </button>
                </div>
            )}



            
                {AddNewAdmin && (
                 <AddAdminModal setAddNewAdmin={setAddNewAdmin} />   
                )}
      

             <Modal open={!!editing} onClose={() => setEditing(null)} title={editing ? `Edit ${editing.name}` : "New Admin"}>
                {editing && (
                    <EditForm
                        admin={editing}
                        onCancel={() => setEditing(null)}
                        onSave={(u) => onEditSave(u)}
                    />
                )}
            </Modal>


            <Confirm
                open={!!deleting}
                onCancel={() => setDeleting(null)}
                onConfirm={() => deleting && onDeleteConfirm(deleting.id)}
                title="Delete Administrator"
            >
                Are you sure you want to delete <strong>{deleting?.name}</strong>? This action cannot be undone.
            </Confirm>
        </div>
    );
}


