import { useState, type FC } from "react";
import AddRoleModal from "./AddRoleModal";

interface Role {
    name: string;
    users: number;
    color: string;
    bg: string;
}

const roles: Role[] = [
    {
        name: "Super Admin",
        users: 3,
        color: "text-blue-600",
        bg: "bg-blue-50",
    },
    {
        name: "Moderator",
        users: 4,
        color: "text-orange-600",
        bg: "bg-orange-50",
    },
    {
        name: "Compliance Officer",
        users: 10,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
    },
    {
        name: "KYC Agent",
        users: 3,
        color: "text-green-600",
        bg: "bg-green-50",
    },
    {
        name: "Support Staff",
        users: 9,
        color: "text-pink-600",
        bg: "bg-pink-50",
    },
];

const RoleManagement: FC = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    return (
        <section className="w-full bg-white rounded-xl p-3">
         
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                        Role Management
                    </h2>
                    <p className="text-sm text-[#667085]">
                        Create, assign, and manage roles and permissions for your admin and
                        moderation team.
                    </p>
                </div>

                <button
                    onClick={() => setModalOpen(true)}
                    className="flex items-center gap-2 bg-blue-600 text-white w-fit  px-4 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 10H15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10 15V5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    New Role
                </button>
            </div>

            <hr className="my-[30px]" />

            <div className="overflow-x-auto mt-6 border rounded-xl">
                <div >
                    <div className="px-4 py-3 text-sm font-medium bg-[#FDFDFD] text-gray-500 border-b">
                        <div className="max-w-[555px] grid grid-cols-2 ">
                            <span>Roles</span>
                            <span className="text-right">Users</span>
                        </div>
                    </div>

                    {roles.map((role) => (
                        <div
                            key={role.name}
                            className=" px-4 py-5 items-center border-b last:border-b-0"
                        >
                            <div className="max-w-[595px] grid grid-cols-2 ">
                                <span className="text-sm font-medium text-gray-900">
                                    {role.name}
                                </span>

                                <div className="flex justify-end">
                                    <span
                                        className={`text-xs font-medium px-3 py-1 rounded-full ${role.bg} ${role.color}`}
                                    >
                                        ● {role.users} Users
                                    </span>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            {
                modalOpen && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                      <AddRoleModal onClose={setModalOpen}/>
                    </div>
                )
            }
        </section>
    );
};

export default RoleManagement;
