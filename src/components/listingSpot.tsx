import React, { useState, useMemo } from "react";
import { Search,  Trash2, Edit3, MoreVertical } from "lucide-react";



const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
    children,
    className = "",
    ...props
}) => (
    <button
        {...props}
        className={`inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium shadow-sm focus:outline-none ${className}`}
    >
        {children}
    </button>
);

type SpotRow = {
    id: string;
    asset: string;
    pair: string;
    minOrder: string;
    maxOrder: string;
    tickSize: string;
    date: string | null;
    status: "Active" | "Paused" | "Upcoming";
};


const sampleSpot: SpotRow[] = Array.from({ length: 10 }).map((_, i) => ({
    id: `s-${i}`,
    asset: i % 2 === 0 ? "Bitcoin" : "Cardano",
    pair: i % 2 === 0 ? "BTC/NGN" : "ADA/NGN",
    minOrder: "0.0001",
    maxOrder: i % 3 === 0 ? "10" : "100",
    tickSize: "₦0.01",
    date: i % 4 === 0 ? null : "2024-08-09",
    status: i % 4 === 0 ? "Upcoming" : i % 3 === 0 ? "Paused" : "Active",
}));


const ListingsSpot: React.FC = () => {
    const [query, setQuery] = useState("");
    const [rows, setRows] = useState<SpotRow[]>(sampleSpot);
    const [selected, setSelected] = useState<Record<string, boolean>>({});

    const filtered = useMemo(() => {
        if (!query) return rows;
        return rows.filter(
            (r) =>
                r.asset.toLowerCase().includes(query.toLowerCase()) ||
                r.pair.toLowerCase().includes(query.toLowerCase())
        );
    }, [query, rows]);

    const toggleSelect = (id: string) =>
        setSelected((s) => ({ ...s, [id]: !s[id] }));

    const delist = (id: string) => setRows((prev) => prev.filter((r) => r.id !== id));

    return (
        <div className="w-full">


            <div className="bg-white rounded-lg md:p-4">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                        <button className="px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm font-medium">Spot <span className="ml-2 inline-block bg-gray-100 text-gray-600 rounded-full px-2 py-0.5 text-xs">1881</span></button>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex items-center w-full  max-w-56  rounded-md px-3 py-2 border border-gray-100">
                            <Search className="w-4 h-4 text-gray-400" />
                            <input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search"
                                className="ml-2 w-full bg-transparent text-sm focus:outline-none"
                            />
                        </div>

                        <Button className="bg-white border border-gray-100 text-gray-700">
                            <span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 10H15M2.5 5H17.5M7.5 15H12.5" stroke="#414651" strokeWidth="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </span>
                            Filters
                        </Button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead>
                            <tr className="text-left text-xs text-gray-500 border-y border-gray-100">
                                <th className="py-3 px-3 w-10"><input type="checkbox" /></th>
                                <th className="py-3 px-3">Pair</th>
                                <th className="py-3 px-3">Min Order</th>
                                <th className="py-3 px-3">Max Order</th>
                                <th className="py-3 px-3">Tick Size</th>
                                <th className="py-3 px-3">Date</th>
                                <th className="py-3 px-3">Status</th>
                                <th className="py-3 px-3 w-36">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((row) => (
                                <tr key={row.id} className="border-b border-gray-100 hover:bg-gray-50">
                                    <td className="py-4 px-3"><input checked={!!selected[row.id]} onChange={() => toggleSelect(row.id)} type="checkbox" /></td>
                                    <td className="py-4 px-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600">
                                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="20" cy="20" r="20" fill="#EDF0F4" />
                                                    <path d="M13.9776 19.8968C13.9207 20.8852 14.6816 21.7314 15.67 21.7883C15.7055 21.7883 15.7411 21.7883 15.7766 21.7883C16.7721 21.7883 17.5757 20.9847 17.5686 19.9892C17.5686 18.9937 16.765 18.1902 15.7695 18.1973C14.8167 18.1973 14.0274 18.9439 13.9776 19.8968Z" fill="#0033AD" />
                                                    <path d="M7.27912 19.4349C6.95913 19.4135 6.68181 19.6624 6.66759 19.9824C6.65337 20.3024 6.89513 20.5797 7.21512 20.5939C7.53511 20.6153 7.80532 20.3664 7.82665 20.0464C7.84798 19.7264 7.5991 19.4562 7.27912 19.4349Z" fill="#0033AD" />
                                                    <path d="M13.8639 9.47245C14.1484 9.33023 14.2621 8.97469 14.1199 8.69026C13.9777 8.40583 13.6222 8.29206 13.3377 8.43427C13.0533 8.57649 12.9395 8.92492 13.0817 9.20935C13.2239 9.50089 13.5724 9.62178 13.8639 9.47245C13.8639 9.47245 13.8568 9.47245 13.8639 9.47245Z" fill="#0033AD" />
                                                    <path d="M15.684 12.6516C16.1249 12.4311 16.3027 11.8907 16.0822 11.4498C15.8618 11.009 15.3214 10.8312 14.8805 11.0516C14.4396 11.2721 14.2619 11.8125 14.4823 12.2534C14.7027 12.6942 15.2432 12.872 15.684 12.6516Z" fill="#0033AD" />
                                                    <path d="M9.55465 14.8352C9.89597 15.0557 10.3511 14.9632 10.5786 14.6219C10.799 14.2806 10.7066 13.8255 10.3653 13.598C10.024 13.3775 9.56887 13.47 9.34133 13.8113C9.11378 14.1526 9.21333 14.6148 9.55465 14.8352Z" fill="#0033AD" />
                                                    <path d="M10.6426 19.1148C10.1448 19.0863 9.72527 19.4632 9.69682 19.961C9.66838 20.4587 10.0453 20.8783 10.543 20.9067C11.0408 20.9352 11.4603 20.5583 11.4887 20.0605C11.5172 19.5699 11.1403 19.1432 10.6426 19.1148Z" fill="#0033AD" />
                                                    <path d="M9.65364 25.1381C9.29099 25.323 9.14167 25.7638 9.32655 26.1336C9.51143 26.4962 9.9523 26.6456 10.3221 26.4607C10.6847 26.2758 10.834 25.8349 10.6492 25.4652C10.4643 25.1025 10.0163 24.9532 9.65364 25.1381Z" fill="#0033AD" />
                                                    <path d="M13.1383 17.2591C13.6289 17.5791 14.2831 17.444 14.596 16.9533C14.916 16.4627 14.7809 15.8085 14.2902 15.4956C13.7996 15.1756 13.1454 15.3107 12.8325 15.8014C12.5125 16.2849 12.6476 16.9391 13.1383 17.2591Z" fill="#0033AD" />
                                                    <path d="M24.1956 12.5805C24.608 12.8507 25.1698 12.737 25.44 12.3245C25.7102 11.9121 25.5964 11.3504 25.184 11.0802C24.7716 10.8099 24.2098 10.9237 23.9396 11.3361C23.6623 11.7557 23.7761 12.3103 24.1956 12.5805Z" fill="#0033AD" />
                                                    <path d="M26.0307 9.41569C26.3009 9.59346 26.6565 9.51524 26.8342 9.24503C27.012 8.97482 26.9338 8.61928 26.6636 8.44151C26.3934 8.26374 26.0378 8.34196 25.8601 8.60506C25.6894 8.87527 25.7676 9.23792 26.0307 9.41569Z" fill="#0033AD" />
                                                    <path d="M24.331 18.1846C23.3426 18.1277 22.4893 18.8886 22.4395 19.877C22.3826 20.8654 23.1435 21.7187 24.1319 21.7685C24.1674 21.7685 24.203 21.7685 24.2314 21.7685C25.2198 21.7685 26.0234 20.965 26.0234 19.9694C26.0305 19.0237 25.2838 18.2344 24.331 18.1846Z" fill="#0033AD" />
                                                    <path d="M16.2747 17.1308C16.5804 17.7352 17.1991 18.1192 17.8817 18.1192C18.8701 18.1192 19.6736 17.3157 19.6736 16.3202C19.6736 16.0429 19.6096 15.7656 19.4816 15.5096C19.0337 14.6207 17.9528 14.2652 17.0711 14.7132C16.1822 15.1682 15.8267 16.2491 16.2747 17.1308Z" fill="#0033AD" />
                                                    <path d="M30.3466 14.834C30.7092 14.6491 30.8514 14.2011 30.6665 13.8385C30.4817 13.4758 30.0337 13.3336 29.671 13.5185C29.3084 13.7033 29.1662 14.1442 29.3439 14.5069C29.5359 14.8695 29.9768 15.0188 30.3466 14.834Z" fill="#0033AD" />
                                                    <path d="M25.796 15.4027C25.277 15.6658 25.0636 16.2987 25.3267 16.8178C25.5898 17.3368 26.2227 17.5502 26.7418 17.2871C27.2609 17.024 27.4742 16.3911 27.2111 15.872C26.948 15.3529 26.3151 15.1467 25.796 15.4027Z" fill="#0033AD" />
                                                    <path d="M19.9293 9.14611C20.3346 9.16744 20.6831 8.85457 20.7115 8.44925C20.74 8.04394 20.42 7.69551 20.0147 7.66707C19.6093 7.64573 19.2609 7.9515 19.2325 8.35681C19.2111 8.76924 19.524 9.11767 19.9293 9.14611Z" fill="#0033AD" />
                                                    <path d="M19.9226 13.7904C20.5057 13.8259 21.0034 13.3779 21.0319 12.7949C21.0674 12.2118 20.6195 11.714 20.0364 11.6856C19.4533 11.65 18.9555 12.098 18.9271 12.6811C18.8986 13.2642 19.3395 13.7619 19.9226 13.7904Z" fill="#0033AD" />
                                                    <path d="M14.2047 24.5695C14.7238 24.3064 14.9371 23.6735 14.674 23.1544C14.4109 22.6353 13.778 22.422 13.2589 22.6851C12.7398 22.9482 12.5265 23.5811 12.7896 24.1002C13.0527 24.6193 13.6856 24.8326 14.2047 24.5695Z" fill="#0033AD" />
                                                    <path d="M20.6043 15.3321C20.0639 16.1641 20.2914 17.2734 21.1234 17.8138C21.9554 18.3542 23.0646 18.1267 23.6051 17.2947C24.1455 16.4627 23.9179 15.3534 23.086 14.813C22.7944 14.621 22.4531 14.5215 22.1047 14.5215C21.5003 14.5215 20.9385 14.8272 20.6043 15.3321Z" fill="#0033AD" />
                                                    <path d="M23.7268 22.8416C23.2788 21.9527 22.1979 21.5972 21.3162 22.0452C20.4274 22.4932 20.0718 23.574 20.5198 24.4557C20.9678 25.3446 22.0486 25.7001 22.9304 25.2522C23.8121 24.8113 24.1747 23.7447 23.7339 22.8558C23.7339 22.8487 23.7339 22.8487 23.7268 22.8416Z" fill="#0033AD" />
                                                    <path d="M26.8625 22.7144C26.3719 22.3944 25.7177 22.5295 25.4048 23.0201C25.0848 23.5108 25.2199 24.165 25.7105 24.4778C26.2012 24.7978 26.8554 24.6627 27.1683 24.1721C27.4882 23.6885 27.3531 23.0343 26.8625 22.7144Z" fill="#0033AD" />
                                                    <path d="M30.3042 20.0176C30.3326 19.5198 29.9557 19.1003 29.458 19.0718C28.9602 19.0434 28.5407 19.4203 28.5123 19.918C28.4838 20.4158 28.8607 20.8353 29.3584 20.8637C29.8491 20.8922 30.2757 20.5082 30.3042 20.0176Z" fill="#0033AD" />
                                                    <path d="M32.786 19.3782C32.466 19.3569 32.1886 19.6058 32.1744 19.9258C32.1602 20.2457 32.402 20.5231 32.722 20.5373C33.0419 20.5586 33.3122 20.3097 33.3335 19.9898C33.3477 19.6698 33.1059 19.3996 32.786 19.3782Z" fill="#0033AD" />
                                                    <path d="M30.4461 25.139C30.1048 24.9185 29.6497 25.011 29.4222 25.3523C29.2017 25.6936 29.2942 26.1487 29.6355 26.3762C29.9768 26.5967 30.4319 26.5042 30.6595 26.1629C30.887 25.8216 30.7874 25.3594 30.4461 25.139Z" fill="#0033AD" />
                                                    <path d="M13.9628 30.5567C13.6926 30.379 13.3371 30.4572 13.1593 30.7203C12.9815 30.9905 13.0597 31.346 13.3228 31.5238C13.593 31.7016 13.9486 31.6234 14.1263 31.3603C14.3112 31.0972 14.233 30.7345 13.9628 30.5567Z" fill="#0033AD" />
                                                    <path d="M26.1366 30.4997C25.8521 30.6419 25.7383 30.9975 25.8806 31.2819C26.0228 31.5663 26.3783 31.6801 26.6627 31.5379C26.9472 31.3957 27.061 31.0472 26.9187 30.7628C26.7765 30.4713 26.4281 30.3504 26.1366 30.4997C26.1437 30.4997 26.1366 30.4997 26.1366 30.4997Z" fill="#0033AD" />
                                                    <path d="M19.3956 24.6409C19.936 23.809 19.7085 22.6997 18.8765 22.1522C18.0445 21.6117 16.9352 21.8393 16.3877 22.6712C15.8402 23.5032 16.0748 24.6125 16.9068 25.16C17.1983 25.352 17.5397 25.4516 17.8881 25.4516C18.4996 25.4587 19.0614 25.1529 19.3956 24.6409Z" fill="#0033AD" />
                                                    <path d="M15.805 27.3927C15.3926 27.1224 14.8308 27.2362 14.5606 27.6486C14.2904 28.0611 14.4042 28.6228 14.8166 28.893C15.229 29.1632 15.7908 29.0495 16.061 28.637C16.3383 28.2246 16.2246 27.6629 15.805 27.3927Z" fill="#0033AD" />
                                                    <path d="M19.9929 30.8272C19.5876 30.8059 19.2392 31.1187 19.2107 31.5241C19.1823 31.9294 19.5023 32.2778 19.9076 32.3062C20.3129 32.3276 20.6613 32.0218 20.6898 31.6165C20.7111 31.2041 20.3982 30.8556 19.9929 30.8272Z" fill="#0033AD" />
                                                    <path d="M19.9999 26.1836C19.4168 26.1481 18.9191 26.596 18.8907 27.1791C18.8551 27.7622 19.3031 28.26 19.8862 28.2884C20.4692 28.3169 20.967 27.876 20.9954 27.2929C21.031 26.7169 20.583 26.2121 19.9999 26.1836Z" fill="#0033AD" />
                                                    <path d="M24.3165 27.3204C23.8756 27.5479 23.6978 28.0884 23.9254 28.5292C24.1529 28.9701 24.6933 29.1479 25.1342 28.9203C25.5751 28.6999 25.7529 28.1595 25.5324 27.7186C25.3049 27.2777 24.7645 27.0928 24.3165 27.3204Z" fill="#0033AD" />
                                                </svg>

                                            </div>
                                            <div>
                                                <div className="font-medium">{row.asset}</div>
                                                <div className="text-xs text-gray-400">{row.pair}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-3">{row.minOrder}</td>
                                    <td className="py-4 px-3">{row.maxOrder}</td>
                                    <td className="py-4 px-3">{row.tickSize}</td>
                                    <td className="py-4 px-3">{row.date ?? "N/A"}</td>
                                    <td className="py-4 px-3">
                                        <span className={`inline-flex items-center px-2 py-1 text-xs rounded-full ${row.status === "Active" ? "bg-green-50 text-green-700" : row.status === "Paused" ? "bg-amber-50 text-amber-700" : "bg-sky-50 text-sky-700"}`}>
                                            {row.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-3 text-right">
                                        <div className="inline-flex items-center gap-3">
                                            <button title="Delist" onClick={() => delist(row.id)} className="p-2 rounded-md hover:bg-gray-100 text-gray-600"><Trash2 className="w-4 h-4" /></button>
                                            <button title="Edit" className="p-2 rounded-md hover:bg-gray-100 text-gray-600"><Edit3 className="w-4 h-4" /></button>
                                            <button title="More" className="p-2 rounded-md hover:bg-gray-100 text-gray-600"><MoreVertical className="w-4 h-4" /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};



export default ListingsSpot;