import type { FC, } from "react";
import { useState } from "react";

const WithdrawalLimits: FC = () => {
    const [enabled, setEnabled] = useState<boolean>(true);
    const [autoFlag, setAutoFlag] = useState<boolean>(false);

  return (
    <section className="w-full bg-white rounded-xl space-y-6">
     
      <div className="px-3 md:px-0">
        <h2 className="text-lg font-semibold text-gray-900">
          Withdrawal Limits
        </h2>
        <p className="text-sm text-gray-500">
          Define the minimum and maximum withdrawal amounts
        </p>
      </div>


      <div className="rounded-lg border overflow-hidden">

        <div className="px-4 py-4 border-b bg-[#FDFDFD]">
          <div className="max-w-3xl flex items-center justify-between">
            <span className="text-sm font-medium text-gray-900">Roles</span>
            <span className="text-sm text-[#717680]">Users</span>
          </div>
        </div>

        <div className="px-4 py-4 border-b">
          <div className="max-w-3xl flex items-center justify-between">

            <span className="text-sm font-medium text-gray-900">
              Enable Withdrawal Limits
            </span>

            <button
              type="button"
              onClick={() => setEnabled((prev) => !prev)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                enabled ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${
                  enabled ? "translate-x-5" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

      
        <div className=" px-4 py-4 border-b">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between max-w-3xl gap-3">

           
          <span className="text-sm font-medium text-gray-900">
            Min Withdrawal
          </span>

          <input
            type="text"
            defaultValue="₦2000.00"
            className="w-full sm:w-56 rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
         </div>

      
        <div className=" px-4 py-4 border-b">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between max-w-3xl gap-3 ">      
          <span className="text-sm font-medium text-gray-900">
            Max Withdrawal Attempts / Day
          </span>

          <input
            type="text"
            defaultValue="₦2000.00"
            className="w-full sm:w-56 rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
         </div>

  
        <div className="flex items-center justify-between px-4 py-4 max-w-3xl">
          <span className="text-sm font-medium text-gray-900">
            Auto-flag Withdrawals Exceeding Max
          </span>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setAutoFlag((prev) => !prev)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                autoFlag ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${
                  autoFlag ? "translate-x-5" : "translate-x-1"
                }`}
              />
            </button>

            <p className="text-sm text-[#414651]">
              {autoFlag ? "Enabled" : "Disabled"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WithdrawalLimits;