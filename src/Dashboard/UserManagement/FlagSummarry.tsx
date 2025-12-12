import React from "react";

export default function FlagSummary() {
  const data = {
    flagType: "AML Risk",
    flaggedOn: "Jul 28, 2025 · 7:12 PM",
    flagStatus: "Under Review",
    sanctionMatch: "No",
    linkedAccounts: "3 other accounts sharing same IP/device",
    notes:
      "Unusual withdrawal behavior post KYC approval. Pending compliance review.",
    flagsTriggered: [
      "Large USDT deposit from flagged wallet",
      "Rapid withdrawal after deposit",
    ],
    flaggedBy: "System (Automated)",
    riskScore: 85,
    countryOfConcern: "India (High‑risk activity pattern)",
    lastReviewedBy: "John A. (Compliance Officer)",
    actionTaken: "Account Frozen on Jul 28, 2025",
  };

  return (
    <div className="w-full  mt-6 p-4 border-2 rounded-xl text-[#111827]">
      <h2 className="text-lg font-semibold mb-6">Flag Summary Table</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-sm">
        {/* Left Column */}
        <div className="space-y-4">
          <div>
            <p className="font-medium mb-1">Flag Type</p>
            <span className="px-3 py-1  rounded-full border flex items-center gap-2 w-fit mt-2  text-sm text-[#414651] ">
             <span className="text-red-600">
                ●
            </span> 
             {data.flagType}
            </span>
          </div>

          <div>
            <p className="font-medium mb-1">Flagged On</p>
            <span className="px-3 py-1 rounded-full border text-xs w-fit flex items-center gap-2 text-[#414651] ">
             <span className="text-red-600">
                ●
            </span> 
              {data.flaggedOn}
            </span>
          </div>

          <div>
            <p className="font-medium mb-1">Flag Status</p>
            <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full border text-xs inline-block">
              ● {data.flagStatus}
            </span>
          </div>
          <div>
            <p className="font-medium mb-1">Sanction/PEP Match</p>
            <span className="px-3 py-1 bg-gray-50 rounded-full border text-xs inline-block">
              ● {data.sanctionMatch}
            </span>
          </div>

          <div>
            <p className="font-medium mb-1">Linked Accounts</p>
            <p className="text-gray-700">{data.linkedAccounts}</p>
          </div>

          <div>
            <p className="font-medium mb-1">Notes</p>
            <p className="text-gray-700 leading-relaxed">{data.notes}</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div>
            <p className="font-medium mb-1">Flags Triggered</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              {data.flagsTriggered.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-medium mb-1">Flagged By</p>
            <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full border text-xs inline-block">
              ● {data.flaggedBy}
            </span>
          </div>

          <div>
            <p className="font-medium mb-1">Risk Score</p>
            <div className="w-12 h-12 rounded-full border-2 border-red-500 flex items-center justify-center text-red-600 font-semibold">
              {data.riskScore}%
            </div>
          </div>

          <div>
            <p className="font-medium mb-1">Country of Concern</p>
            <p className="text-gray-700">{data.countryOfConcern}</p>
          </div>

          <div>
            <p className="font-medium mb-1">Last Reviewed By</p>
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full border text-xs inline-block">
              ● {data.lastReviewedBy}
            </span>
          </div>

          <div>
            <p className="font-medium mb-1">Action Taken</p>
            <span className="px-3 py-1 bg-red-50 text-red-600 rounded-full border text-xs inline-block">
              ● {data.actionTaken}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
