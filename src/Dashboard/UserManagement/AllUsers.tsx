import { Search } from "lucide-react";
import UsersTable from "./usersTable";



export default function AllUsers() {

  
    // const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    

    return (
        <div className="w-full p-6 bg-white min-h-screen ">
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h1 className="text-xl flex items-center gap-5 font-semibold text-gray-800">
                        User Management
                        <span className="text-sm flex items-center gap-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 12L10 8L6 4" stroke="#D5D7DA" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            All Users
                        </span>
                    </h1>
                    <p className="text-base text-[#535862] mt-3">View, verify, and manage all users across the Kaucus platform</p>
                </div>

            </div>

            <div className="flex items-center justify-between mb-5">
                <button className="border px-4 py-2 rounded-lg">All Users <span className="ml-2 bg-gray-200 px-2 py-1 rounded">0</span></button>

                <div className="flex items-center space-x-3">
                    <div className="relative w-72">
                        <input className="w-full border rounded-lg pl-10 py-2 text-sm" placeholder="Search" />
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    </div>

                    <button className="flex items-center border px-3 py-2 rounded-lg text-sm">
                        <span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 10H15M2.5 5H17.5M7.5 15H12.5" stroke="#414651" strokeWidth="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </span>
                        Filters
                    </button>
                </div>
            </div>

           <UsersTable/>

        </div>
    );
}