import { Search } from "lucide-react";
import UsersTable from "./usersTable";



export default function AllUsers() {


    // const [isModalOpen, setIsModalOpen] = useState<boolean>(false)


    return (
        <div className="w-full min-h-screen bg-white p-4 sm:p-6">
          
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-5">
                <div>
                    <h1 className="flex flex-wrap items-center gap-3 text-xl font-semibold text-gray-800">
                        User Management

                        <span className="flex items-center gap-2 text-sm text-gray-500">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6 12L10 8L6 4"
                                    stroke="#D5D7DA"
                                />
                            </svg>
                            All Users
                        </span>
                    </h1>

                    <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[#535862]">
                        View, verify, and manage all users across the Kaucus platform
                    </p>
                </div>
            </div>

          
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-5">
                <button className="w-fit rounded-lg border px-4 py-2 text-sm">
                    All Users
                    <span className="ml-2 rounded bg-gray-200 px-2 py-0.5 text-xs">
                        0
                    </span>
                </button>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                 
                    <div className="relative w-full sm:w-72">
                        <input
                            className="w-full rounded-lg border py-2 pl-10 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Search"
                        />
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    </div>

                    <button className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 10H15M2.5 5H17.5M7.5 15H12.5"
                                stroke="#414651"
                                strokeWidth="1.66667"
                            />
                        </svg>
                        Filters
                    </button>
                </div>
            </div>

          
            <UsersTable />
        </div>

    );
}