import React, { useState } from "react";
import { X } from "lucide-react";

export default function AddAdminModal({setAddNewAdmin}: {setAddNewAdmin: (open: boolean) => void}) {

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    role: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", form);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="w-full max-w-xl rounded-xl bg-white p-3 md:p-6 shadow-xl">
   
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Add New Admin</h2>
          <button
            className="p-1 hover:bg-gray-100 rounded-full"
            onClick={() => setAddNewAdmin(false)}
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="space-y-8">
        
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input
                name="firstName"
                type="text"
                placeholder="Enter First Name"
                value={form.firstName}
                onChange={handleChange}
                className="h-11 w-full rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>  

              <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                placeholder="Enter Last Name"
                className="h-11 w-full rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>         
             </div>

          
          </div>

   
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="h-11 w-full rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col my-6">
            <label className="text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="h-11 w-full rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Role */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Role</label>
            <select
              className="h-11 w-full rounded-md border border-gray-300 px-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Select Role</option>
              <option>Super Admin</option>
              <option>Admin</option>
            </select>
          </div>

                 {/* Footer */}
        <div className="flex items-center  gap-3 mt-8">
          <button
            onClick={() =>  setAddNewAdmin(false)}
            className="h-11 px-6 rounded-md border md:w-1/2 border-gray-300 text-gray-700 text-sm hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="h-11 px-6 rounded-md md:w-1/2 bg-blue-600 text-white text-sm hover:bg-blue-700"
          >
            Add Admin
          </button>
        </div>
        </div>

 
    </div>
  )
  
} 
