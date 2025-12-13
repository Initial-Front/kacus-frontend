import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
    Legend,
    PieChart,
    Pie,
    Cell,
} from "recharts";


export default function OverviewCharts() {
    const barData = [
        { month: "Jan", a: 300, b: 250, c: 150 },
        { month: "Feb", a: 350, b: 300, c: 200 },
        { month: "Mar", a: 280, b: 260, c: 180 },
        { month: "Apr", a: 290, b: 240, c: 170 },
        { month: "May", a: 310, b: 270, c: 160 },
        { month: "Jun", a: 330, b: 290, c: 200 },
        { month: "Jul", a: 300, b: 280, c: 190 },
        { month: "Aug", a: 310, b: 300, c: 210 },
        { month: "Sep", a: 320, b: 310, c: 220 },
        { month: "Oct", a: 340, b: 330, c: 230 },
        { month: "Nov", a: 330, b: 320, c: 210 },
        { month: "Dec", a: 360, b: 340, c: 230 },
    ];

    const lineData = [
        { month: "Jan", idle: 650, used: 350 },
        { month: "Feb", idle: 640, used: 360 },
        { month: "Mar", idle: 660, used: 370 },
        { month: "Apr", idle: 670, used: 380 },
        { month: "May", idle: 680, used: 390 },
        { month: "Jun", idle: 700, used: 400 },
        { month: "Jul", idle: 690, used: 410 },
        { month: "Aug", idle: 720, used: 420 },
        { month: "Sep", idle: 710, used: 430 },
        { month: "Oct", idle: 730, used: 440 },
        { month: "Nov", idle: 740, used: 450 },
        { month: "Dec", idle: 760, used: 460 },
    ];

    const data = [
        { name: "Group A", value: 400 },
        { name: "Group B", value: 300 },
        { name: "Group C", value: 300 },
        { name: "Group D", value: 200 },
    ];
    const COLORS = ["#1E40AF", "#3B82F6", "#1E40AF"];

    return (
        <div className="w-full  space-y-10 ">

            <div className=" bg-white rounded-2xl shadow-sm mt-[32px] border-2">

                <div className=" md:px-[24px] md:py-[20px] border-b-2">
                    <h2 className="text-lg font-semibold mb-1">Wallet Balances & Risk Segments</h2>
                    <p className="text-[#535862] text-sm ">
                        Track how funds are segmented to support leveraged trading, liquidations, and system security.
                    </p>
                </div>


                <div className="flex gap-6  py-20">
                    <div className="h-72 w-full md:max-w-[65%]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={barData} barSize={40} barCategoryGap="10%">
                                <CartesianGrid strokeDasharray="1 1" stroke="#E5E7EB" />
                                <XAxis dataKey="month" axisLine={false}
                                    tickLine={false} stroke="#6B7280" />
                                <YAxis stroke="#6B7280" axisLine={false}
                                    tickLine={false} />
                                <Tooltip />


                                <Bar dataKey="a" stackId="stack" fill="#60A5FA" />
                                <Bar dataKey="b" stackId="stack" fill="#3B82F6" />
                                <Bar dataKey="c" stackId="stack" fill="#1E40AF" radius={[6, 6, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>

                    </div>

                    <div className="flex items-start gap-4 pr-10 w-full md:max-w-[38%]">
                        <div className="w-[100px] h-[100px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={data}
                                        dataKey="value"
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={30} // smaller
                                        outerRadius={45} // must be <= 50 (half of 100)
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                        </div>



                        <ul className="mt-4 space-y-1 text-sm">
                            <li className="flex items-center gap-2"><span className="w-3 h-3 bg-blue-200 rounded-full"></span> Marginal Collateral</li>
                            <li className="flex items-center gap-2"><span className="w-3 h-3 bg-blue-400 rounded-full"></span> Cold Wallet Reserve</li>
                            <li className="flex items-center gap-2"><span className="w-3 h-3 bg-blue-500 rounded-full"></span> System Liquidity (Funding/Insurance)</li>
                            <li className="flex items-center gap-2"><span className="w-3 h-3 bg-blue-300 rounded-full"></span> Operational Hot Wallet</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-sm border">
                <h2 className="text-lg font-semibold mb-1">Margin & Collateral Usage Chart</h2>
                <p className="text-gray-500 text-sm mb-6">
                    Monitor the utilization of deposited margins and available collaterals
                </p>

                <div className="w-full h-72">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={lineData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" axisLine={false}
                                    tickLine={false}  />
                            <YAxis axisLine={false}
                                    tickLine={false}  />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="idle" strokeWidth={2} />
                            <Line type="monotone" dataKey="used" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
