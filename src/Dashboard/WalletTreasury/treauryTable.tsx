import React from "react";

type Event = {
    id: number;
    timestamp: string;
    transactionId: string;
    type: "Withdrawal" | "Rebalancing";
    amount: string;
    asset: string;
    source: string;
    status: "Pending" | "Complete";
};

const data: Event[] = [
    {
        id: 1,
        timestamp: "Aug 27, 2025 — 10:14 AM",
        transactionId: "#876",
        type: "Withdrawal",
        amount: "₦500,000",
        asset: "NGN",
        source: "User wallet",
        status: "Pending",
    },
    {
        id: 2,
        timestamp: "Aug 27, 2025 — 10:14 AM",
        transactionId: "#876",
        type: "Rebalancing",
        amount: "₦500,000",
        asset: "1.5 BTC",
        source: "Hot → Cold Wallet",
        status: "Complete",
    },
    {
        id: 3,
        timestamp: "Aug 27, 2025 — 10:14 AM",
        transactionId: "#876",
        type: "Withdrawal",
        amount: "₦500,000",
        asset: "NGN",
        source: "User wallet",
        status: "Pending",
    },
    {
        id: 4,
        timestamp: "Aug 27, 2025 — 10:14 AM",
        transactionId: "#876",
        type: "Withdrawal",
        amount: "₦500,000",
        asset: "NGN",
        source: "User wallet",
        status: "Pending",
    },
    {
        id: 5,
        timestamp: "Aug 27, 2025 — 10:14 AM",
        transactionId: "#876",
        type: "Rebalancing",
        amount: "₦500,000",
        asset: "1.5 BTC",
        source: "Hot → Cold Wallet",
        status: "Complete",
    },
];

const StatusBadge = ({ status }: { status: "Pending" | "Complete" }) => {
    return (
        <span
            className={`px-3 py-1 text-xs rounded-full font-medium ${status === "Pending"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-green-100 text-green-700"
                }`}
        >
            {status}
        </span>
    );
};

const TypeBadge = ({ type }: { type: string }) => {
    const styles: Record<string, string> = {
        Withdrawal: "bg-green-100 text-green-600",
        Rebalancing: "bg-blue-100 text-blue-600",
    };

    return (
        <span className={`px-3 py-1 text-xs rounded-full font-medium ${styles[type]}`}>
            {type}
        </span>
    );
};

export default function TreasuryEventsTable() {
    return (
        <div className="w-full p-6 bg-white rounded-2xl shadow-sm border">
           
            <div>
                <h2 className="text-lg font-semibold">Recent Treasury Events Feed</h2>
                <p className="text-sm text-gray-500 mt-1">
                    Track the latest platform-level fund movements, rebalancing actions,
                    and withdrawal events in real time.
                </p>
            </div>

            <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-max">
                    <thead>
                        <tr className="text-left text-xs text-gray-500 border-b">

                            <th className="py-3 px-3 w-10">
                                <input type="checkbox" className="h-4 w-4" />
                            </th>

                            <th className="py-3 px-3">Timestamp</th>
                            <th className="py-3 px-3">Transaction ID</th>
                            <th className="py-3 px-3">Type</th>
                            <th className="py-3 px-3">Amount</th>
                            <th className="py-3 px-3">Assets</th>
                            <th className="py-3 px-3">Source/Destination</th>
                            <th className="py-3 px-3">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((item) => (
                            <tr
                                key={item.id}
                                className="border-b text-sm hover:bg-gray-50 transition"
                            >

                       
                                <td className="py-4 px-3">
                                    <input type="checkbox" className="h-4 w-4" />
                                </td>

                                <td className="py-4 px-3">
                                    {item.timestamp}
                                </td>

                                <td className=" w-fit   text-sm rounded-full font-medium">
                                    {item.transactionId}
                                </td>

                                <td className="py-4 px-3">
                                    <TypeBadge type={item.type} />
                                </td>

                                <td className="py-4 px-3 font-medium">{item.amount}</td>

                                <td className="py-4 px-3 text-blue-600">{item.asset}</td>

                                <td className="py-4 px-3 text-blue-600">{item.source}</td>

                                <td className="py-4 px-3">
                                    <StatusBadge status={item.status} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

            <div className="flex justify-between items-center mt-6 text-sm">
                <button className="px-4 py-2 border rounded-md text-gray-500 bg-gray-50 hover:bg-gray-100">
                    Previous
                </button>

                <div className="flex items-center gap-2">
                    {[1, 2, 3, "...", 8, 9, 10].map((n, i) => (
                        <button
                            key={i}
                            className={`px-3 py-1 rounded-md ${n === 1 ? "bg-[#FAFAFA] " : "bg-transparent"
                                }`}
                        >
                            {n}
                        </button>
                    ))}
                </div>

                <button className="px-4 py-2 border rounded-md text-gray-500 bg-gray-50 hover:bg-gray-100">
                    Next
                </button>
            </div>
        </div>
    );
}
