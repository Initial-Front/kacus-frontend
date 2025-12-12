import { useState } from "react";
import { Search, ChevronLeft, ChevronRight, MoreVertical, Trash2, Edit } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CreateProductContract from "./CreateProductContract";

interface Pair {
    id: number;
    name: string;
    symbol: string;
    minOrder: string;
    feeRate: string;
    expiry: string;
    status: "Active" | "Paused" | "Upcoming";
}

const initialData: Pair[] = [
    {
        id: 1,
        name: "Cardano",

        symbol: "ADA/NGN",
        minOrder: "0.0001",
        feeRate: "0.10%", expiry: "2024-08-09", status: "Active"
    },
    { id: 2, name: "Cardano", symbol: "ADA/NGN", minOrder: "0.01", feeRate: "0.08%", expiry: "2024-08-09", status: "Paused" },
    { id: 3, name: "Bitcoin", symbol: "BTC/NGN", minOrder: "1000", feeRate: "0.12%", expiry: "2024-08-09", status: "Active" },
    { id: 4, name: "Cardano", symbol: "ADA/NGN", minOrder: "0.0001", feeRate: "0.10%", expiry: "2024-08-09", status: "Active" },
    { id: 45, name: "Cardano", symbol: "ADA/NGN", minOrder: "0.01", feeRate: "0.08%", expiry: "2024-08-09", status: "Paused" },
    { id: 6, name: "Bitcoin", symbol: "BTC/NGN", minOrder: "1000", feeRate: "0.12%", expiry: "2024-08-09", status: "Active" },
    { id: 7, name: "Cardano", symbol: "ADA/NGN", minOrder: "0.0001", feeRate: "0.10%", expiry: "2024-08-09", status: "Active" },
    { id: 8, name: "Cardano", symbol: "ADA/NGN", minOrder: "0.01", feeRate: "0.08%", expiry: "2024-08-09", status: "Paused" },
    { id: 9, name: "Bitcoin", symbol: "BTC/NGN", minOrder: "1000", feeRate: "0.12%", expiry: "2024-08-09", status: "Active" },
];

export default function  ProductContact() {
    const [pairs, setPairs] = useState<Pair[]>(initialData);
    const [page, setPage] = useState(1);
    const pageSize = 5;
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const totalPages = Math.ceil(pairs.length / pageSize);
    const pageData = pairs.slice((page - 1) * pageSize, page * pageSize);
    const navigate = useNavigate();

    const deletePair = (id: number) => {
        setPairs((prev) => prev.filter((p) => p.id !== id));
    };

    return (
        <div className="w-full p-6 bg-white min-h-screen ">
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h1 className="text-xl font-semibold text-gray-800">Derivatives Module</h1>
                    <p className="text-sm text-gray-500">Manage tradable assets and trading pairs available for spot (instant) trading</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-4 py-2 bg-blue-600 text-white cursor-pointer rounded-lg">+ New Contracts</button>
            </div>

            <div className="flex items-center justify-between mb-5">
                <button className="border px-4 py-2 rounded-lg">Product Contract<span className="ml-2 bg-gray-200 px-2 py-1 rounded">{pairs.length}</span></button>

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
                    <div className="flex items-center gap-2">
                        <button className="flex items-center border rounded-full p-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.57 5.93018L3.5 12.0002L9.57 18.0702" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M20.4999 12H3.66992" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>


                        </button>

                        <button>
                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="41" height="41" rx="20.5" fill="white" />
                                <rect x="0.5" y="0.5" width="41" height="41" rx="20.5" stroke="#F2F2F2" />
                                <path d="M23.4297 14.9302L29.4997 21.0002L23.4297 27.0702" stroke="#606060" strokeWidth="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.5 21H29.33" stroke="#606060" strokeWidth="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </button>
                    </div>
                </div>
            </div>

            <table className="w-full text-sm border-collapse mt-8">
                <thead className="text-gray-500 text-xs border-b">
                    <tr>
                        <th className="p-3"><input type="checkbox" /></th>
                        <th className="p-3 text-left ">
                            <div className="flex items-center gap-1">
                                Pair
                                <span>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 7.5L6 10L8.5 7.5M3.5 4.5L6 2L8.5 4.5" stroke="#A4A7AE" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </span>
                            </div>
                        </th>
                        <th className="p-3 text-left ">
                            <div className="flex items-center gap-1">
                                Min Order
                                <span>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 7.5L6 10L8.5 7.5M3.5 4.5L6 2L8.5 4.5" stroke="#A4A7AE" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </span>
                            </div>
                        </th>
                        <th className="p-3 text-left ">
                            <div className="flex items-center gap-1">
                                Fee Rate
                                <span>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 7.5L6 10L8.5 7.5M3.5 4.5L6 2L8.5 4.5" stroke="#A4A7AE" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </span>
                            </div>
                        </th>
                        <th className="p-3 text-left ">
                            <div className="flex items-center gap-1">
                                Expiry Date
                                <span>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 7.5L6 10L8.5 7.5M3.5 4.5L6 2L8.5 4.5" stroke="#A4A7AE" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </span>
                            </div>
                        </th>
                        <th className="p-3 text-left ">
                            <div className="flex items-center gap-1">
                                Status
                                <span>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 7.5L6 10L8.5 7.5M3.5 4.5L6 2L8.5 4.5" stroke="#A4A7AE" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                            </div>

                        </th>
                        <th className="p-3 text-right  ">
                            <div className="flex items-center gap-1">
                                Actions
                                <span>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 7.5L6 10L8.5 7.5M3.5 4.5L6 2L8.5 4.5" stroke="#A4A7AE" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                            </div>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {pageData.map((pair) => (
                        <tr
                            key={pair.id}
                            onClick={() => navigate(`/ProductContact/${pair.id}`)}
                            className="border-b hover:bg-gray-50 cursor-pointer">
                            <td>
                                <div className="flex items-center justify-center">
                                    <input type="checkbox" />
                                </div>
                            </td>
                            <td className="p-3 font-medium flex items-center gap-2">
                                <div>
                                    {pair.symbol === "ADA/NGN" ? (
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="20" cy="20" r="20" fill="#EDF0F4" />
                                            <path d="M13.9776 19.8983C13.9207 20.8867 14.6816 21.7328 15.67 21.7897C15.7055 21.7897 15.7411 21.7897 15.7766 21.7897C16.7721 21.7897 17.5757 20.9862 17.5686 19.9907C17.5686 18.9952 16.765 18.1917 15.7695 18.1988C14.8167 18.1988 14.0274 18.9454 13.9776 19.8983Z" fill="#0033AD" />
                                            <path d="M7.27912 19.4358C6.95913 19.4145 6.68181 19.6634 6.66759 19.9834C6.65337 20.3034 6.89513 20.5807 7.21512 20.5949C7.53511 20.6162 7.80532 20.3674 7.82665 20.0474C7.84798 19.7274 7.5991 19.4572 7.27912 19.4358Z" fill="#0033AD" />
                                            <path d="M13.8639 9.47391C14.1484 9.3317 14.2621 8.97616 14.1199 8.69173C13.9777 8.40729 13.6222 8.29352 13.3377 8.43574C13.0533 8.57795 12.9395 8.92638 13.0817 9.21081C13.2239 9.50236 13.5724 9.62324 13.8639 9.47391C13.8639 9.47391 13.8568 9.47391 13.8639 9.47391Z" fill="#0033AD" />
                                            <path d="M15.684 12.6521C16.1249 12.4316 16.3027 11.8912 16.0822 11.4503C15.8618 11.0095 15.3214 10.8317 14.8805 11.0521C14.4396 11.2726 14.2619 11.813 14.4823 12.2539C14.7027 12.6947 15.2432 12.8725 15.684 12.6521Z" fill="#0033AD" />
                                            <path d="M9.55465 14.8352C9.89597 15.0557 10.3511 14.9632 10.5786 14.6219C10.799 14.2806 10.7066 13.8255 10.3653 13.598C10.024 13.3775 9.56887 13.47 9.34133 13.8113C9.11378 14.1526 9.21333 14.6148 9.55465 14.8352Z" fill="#0033AD" />
                                            <path d="M10.6426 19.1158C10.1448 19.0873 9.72527 19.4642 9.69682 19.962C9.66838 20.4597 10.0453 20.8792 10.543 20.9077C11.0408 20.9361 11.4603 20.5593 11.4887 20.0615C11.5172 19.5709 11.1403 19.1442 10.6426 19.1158Z" fill="#0033AD" />
                                            <path d="M9.65364 25.1386C9.29099 25.3234 9.14167 25.7643 9.32655 26.1341C9.51143 26.4967 9.9523 26.646 10.3221 26.4612C10.6847 26.2763 10.834 25.8354 10.6492 25.4657C10.4643 25.103 10.0163 24.9537 9.65364 25.1386Z" fill="#0033AD" />
                                            <path d="M13.1383 17.2601C13.6289 17.58 14.2831 17.4449 14.596 16.9543C14.916 16.4636 14.7809 15.8095 14.2902 15.4966C13.7996 15.1766 13.1454 15.3117 12.8325 15.8023C12.5125 16.2859 12.6476 16.9401 13.1383 17.2601Z" fill="#0033AD" />
                                            <path d="M24.1956 12.581C24.608 12.8512 25.1698 12.7375 25.44 12.325C25.7102 11.9126 25.5964 11.3509 25.184 11.0806C24.7716 10.8104 24.2098 10.9242 23.9396 11.3366C23.6623 11.7562 23.7761 12.3108 24.1956 12.581Z" fill="#0033AD" />
                                            <path d="M26.0307 9.41666C26.3009 9.59443 26.6565 9.51621 26.8342 9.246C27.012 8.97579 26.9338 8.62025 26.6636 8.44248C26.3934 8.26471 26.0378 8.34293 25.8601 8.60603C25.6894 8.87624 25.7676 9.23889 26.0307 9.41666Z" fill="#0033AD" />
                                            <path d="M24.331 18.1846C23.3426 18.1277 22.4893 18.8886 22.4395 19.877C22.3826 20.8654 23.1435 21.7187 24.1319 21.7685C24.1674 21.7685 24.203 21.7685 24.2314 21.7685C25.2198 21.7685 26.0234 20.965 26.0234 19.9694C26.0305 19.0237 25.2838 18.2344 24.331 18.1846Z" fill="#0033AD" />
                                            <path d="M16.2747 17.1318C16.5804 17.7362 17.1991 18.1202 17.8817 18.1202C18.8701 18.1202 19.6736 17.3167 19.6736 16.3212C19.6736 16.0439 19.6096 15.7665 19.4816 15.5105C19.0337 14.6217 17.9528 14.2662 17.0711 14.7141C16.1822 15.1692 15.8267 16.2501 16.2747 17.1318Z" fill="#0033AD" />
                                            <path d="M30.3466 14.8354C30.7092 14.6505 30.8514 14.2026 30.6665 13.8399C30.4817 13.4773 30.0337 13.335 29.671 13.5199C29.3084 13.7048 29.1662 14.1457 29.3439 14.5083C29.5359 14.871 29.9768 15.0203 30.3466 14.8354Z" fill="#0033AD" />
                                            <path d="M25.796 15.4042C25.277 15.6673 25.0636 16.3001 25.3267 16.8192C25.5898 17.3383 26.2227 17.5516 26.7418 17.2885C27.2609 17.0254 27.4742 16.3926 27.2111 15.8735C26.948 15.3544 26.3151 15.1482 25.796 15.4042Z" fill="#0033AD" />
                                            <path d="M19.9293 9.1466C20.3346 9.16793 20.6831 8.85506 20.7115 8.44974C20.74 8.04443 20.42 7.696 20.0147 7.66756C19.6093 7.64622 19.2609 7.95199 19.2325 8.3573C19.2111 8.76973 19.524 9.11816 19.9293 9.1466Z" fill="#0033AD" />
                                            <path d="M19.9226 13.7899C20.5057 13.8254 21.0034 13.3775 21.0319 12.7944C21.0674 12.2113 20.6195 11.7135 20.0364 11.6851C19.4533 11.6495 18.9555 12.0975 18.9271 12.6806C18.8986 13.2637 19.3395 13.7614 19.9226 13.7899Z" fill="#0033AD" />
                                            <path d="M14.2047 24.57C14.7238 24.3069 14.9371 23.674 14.674 23.1549C14.4109 22.6358 13.778 22.4225 13.2589 22.6856C12.7398 22.9487 12.5265 23.5816 12.7896 24.1007C13.0527 24.6197 13.6856 24.8331 14.2047 24.57Z" fill="#0033AD" />
                                            <path d="M20.6043 15.3331C20.0639 16.1651 20.2914 17.2743 21.1234 17.8148C21.9554 18.3552 23.0646 18.1276 23.6051 17.2957C24.1455 16.4637 23.9179 15.3544 23.086 14.814C22.7944 14.622 22.4531 14.5225 22.1047 14.5225C21.5003 14.5225 20.9385 14.8282 20.6043 15.3331Z" fill="#0033AD" />
                                            <path d="M23.7268 22.8421C23.2788 21.9532 22.1979 21.5977 21.3162 22.0457C20.4274 22.4937 20.0718 23.5745 20.5198 24.4562C20.9678 25.3451 22.0486 25.7006 22.9304 25.2526C23.8121 24.8118 24.1747 23.7452 23.7339 22.8563C23.7339 22.8492 23.7339 22.8492 23.7268 22.8421Z" fill="#0033AD" />
                                            <path d="M26.8625 22.7139C26.3719 22.3939 25.7177 22.529 25.4048 23.0196C25.0848 23.5103 25.2199 24.1645 25.7105 24.4773C26.2012 24.7973 26.8554 24.6622 27.1683 24.1716C27.4882 23.688 27.3531 23.0339 26.8625 22.7139Z" fill="#0033AD" />
                                            <path d="M30.3042 20.019C30.3326 19.5213 29.9557 19.1017 29.458 19.0733C28.9602 19.0448 28.5407 19.4217 28.5123 19.9195C28.4838 20.4172 28.8607 20.8368 29.3584 20.8652C29.8491 20.8936 30.2757 20.5097 30.3042 20.019Z" fill="#0033AD" />
                                            <path d="M32.786 19.3792C32.466 19.3579 32.1886 19.6068 32.1744 19.9267C32.1602 20.2467 32.402 20.524 32.722 20.5383C33.0419 20.5596 33.3122 20.3107 33.3335 19.9907C33.3477 19.6707 33.1059 19.4005 32.786 19.3792Z" fill="#0033AD" />
                                            <path d="M30.4461 25.139C30.1048 24.9185 29.6497 25.011 29.4222 25.3523C29.2017 25.6936 29.2942 26.1487 29.6355 26.3762C29.9768 26.5967 30.4319 26.5042 30.6595 26.1629C30.887 25.8216 30.7874 25.3594 30.4461 25.139Z" fill="#0033AD" />
                                            <path d="M13.9628 30.5572C13.6926 30.3795 13.3371 30.4577 13.1593 30.7208C12.9815 30.991 13.0597 31.3465 13.3228 31.5243C13.593 31.7021 13.9486 31.6238 14.1263 31.3607C14.3112 31.0976 14.233 30.735 13.9628 30.5572Z" fill="#0033AD" />
                                            <path d="M26.1366 30.5002C25.8521 30.6424 25.7383 30.998 25.8806 31.2824C26.0228 31.5668 26.3783 31.6806 26.6627 31.5384C26.9472 31.3962 27.061 31.0477 26.9187 30.7633C26.7765 30.4718 26.4281 30.3509 26.1366 30.5002C26.1437 30.5002 26.1366 30.5002 26.1366 30.5002Z" fill="#0033AD" />
                                            <path d="M19.3956 24.6409C19.936 23.809 19.7085 22.6997 18.8765 22.1522C18.0445 21.6117 16.9352 21.8393 16.3877 22.6712C15.8402 23.5032 16.0748 24.6125 16.9068 25.16C17.1983 25.352 17.5397 25.4516 17.8881 25.4516C18.4996 25.4587 19.0614 25.1529 19.3956 24.6409Z" fill="#0033AD" />
                                            <path d="M15.805 27.3927C15.3926 27.1224 14.8308 27.2362 14.5606 27.6486C14.2904 28.0611 14.4042 28.6228 14.8166 28.893C15.229 29.1632 15.7908 29.0495 16.061 28.637C16.3383 28.2246 16.2246 27.6629 15.805 27.3927Z" fill="#0033AD" />
                                            <path d="M19.9929 30.8272C19.5876 30.8059 19.2392 31.1187 19.2107 31.5241C19.1823 31.9294 19.5023 32.2778 19.9076 32.3062C20.3129 32.3276 20.6613 32.0218 20.6898 31.6165C20.7111 31.2041 20.3982 30.8556 19.9929 30.8272Z" fill="#0033AD" />
                                            <path d="M19.9999 26.1841C19.4168 26.1486 18.9191 26.5965 18.8907 27.1796C18.8551 27.7627 19.3031 28.2605 19.8862 28.2889C20.4692 28.3173 20.967 27.8765 20.9954 27.2934C21.031 26.7174 20.583 26.2126 19.9999 26.1841Z" fill="#0033AD" />
                                            <path d="M24.3165 27.3219C23.8756 27.5494 23.6978 28.0898 23.9254 28.5307C24.1529 28.9716 24.6933 29.1493 25.1342 28.9218C25.5751 28.7013 25.7529 28.1609 25.5324 27.7201C25.3049 27.2792 24.7645 27.0943 24.3165 27.3219Z" fill="#0033AD" />
                                        </svg>

                                    ) : pair.symbol === "BTC/NGN" ? (
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M39.402 24.8381C36.7309 35.5525 25.8789 42.0731 15.1633 39.4012C4.4521 36.7301 -2.06846 25.8775 0.603853 15.1639C3.27382 4.44838 14.1258 -2.07268 24.8381 0.598468C35.553 3.26961 42.0732 14.1234 39.4017 24.8383L39.4019 24.8381H39.402Z" fill="#F7931A" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M28.8207 17.1506C29.2188 14.489 27.1924 13.0583 24.4216 12.1039L25.3204 8.49857L23.1258 7.95171L22.2507 11.4621C21.6738 11.3182 21.0813 11.1826 20.4924 11.0482L21.3738 7.51463L19.1805 6.96777L18.2811 10.5719C17.8036 10.4632 17.3347 10.3558 16.8797 10.2426L16.8823 10.2312L13.8558 9.47547L13.2719 11.8195C13.2719 11.8195 14.9002 12.1928 14.8659 12.2157C15.7546 12.4375 15.9153 13.0258 15.8886 13.4922L14.8647 17.5995C14.9259 17.615 15.0053 17.6375 15.0929 17.6727L15.0291 17.6568C14.975 17.6432 14.9187 17.6291 14.8609 17.6153L13.4257 23.3691C13.3171 23.6391 13.0414 24.0443 12.4201 23.8904C12.4421 23.9223 10.825 23.4923 10.825 23.4923L9.73535 26.0045L12.5914 26.7165C12.904 26.7949 13.2129 26.8754 13.5187 26.9551L13.5191 26.9552L13.5193 26.9553C13.733 27.011 13.9452 27.0663 14.1561 27.1202L13.2479 30.7669L15.44 31.3138L16.3394 27.7058C16.9383 27.8684 17.5194 28.0183 18.0884 28.1597L17.1921 31.7506L19.3868 32.2975L20.2949 28.6577C24.0373 29.3659 26.8512 29.0804 28.0357 25.6954C28.9901 22.9701 27.9882 21.3982 26.0193 20.3731C27.4533 20.0423 28.5335 19.0992 28.8215 17.1509L28.8208 17.1504L28.8207 17.1506ZM23.8063 24.1819C23.184 26.6823 19.2702 25.6486 17.4795 25.1757C17.3184 25.1331 17.1745 25.0951 17.0518 25.0646L18.2569 20.2334C18.4066 20.2708 18.5894 20.3118 18.7966 20.3583C20.6488 20.774 24.4438 21.6256 23.8064 24.1819H23.8063ZM19.1681 18.116C20.661 18.5144 23.9178 19.3836 24.485 17.111H24.4852C25.0644 14.7868 21.8993 14.0861 20.3535 13.7438C20.1796 13.7053 20.0262 13.6714 19.9009 13.6401L18.8083 18.0218C18.9114 18.0475 19.0325 18.0798 19.1681 18.116Z" fill="white" />
                                        </svg>

                                    ) : null}
                                </div>
                                <div>
                                    {pair.name}
                                    <div className="text-gray-500 text-xs">{pair.symbol}</div>
                                </div>
                            </td>
                            <td className="p-3">{pair.minOrder}</td>
                            <td className="p-3">{pair.feeRate}</td>
                            <td className="p-3">{pair.expiry}</td>
                            <td className="p-3"><span className={`px-2 py-1 rounded text-xs ${pair.status === "Active" ? "bg-green-100 text-green-600" : pair.status === "Paused" ? "bg-yellow-100 text-yellow-600" : "bg-blue-100 text-blue-600"}`}>{pair.status}</span></td>
                            <td className="p-3 flex justify-end space-x-3">
                                <button><Edit className="h-4 w-4 text-gray-500" /></button>
                                <button onClick={() => deletePair(pair.id)}><Trash2 className="h-4 w-4 text-red-500" /></button>
                                <button><MoreVertical className="h-4 w-4 text-gray-500" /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-between items-center pt-4">
                <button
                    className="flex items-center text-sm text-gray-500 disabled:opacity-40"
                    disabled={page === 1}
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                >
                    <ChevronLeft className="h-4 w-4 mr-1" /> Previous
                </button>

                <div className="flex space-x-2 text-sm">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                        <button
                            key={num}
                            onClick={() => setPage(num)}
                            className={`px-3 py-1 rounded ${page === num ? "bg-gray-100 text-gray-800" : "bg-transparent text-gray-800"}`}
                        >
                            {num}
                        </button>
                    ))}
                </div>

                <button
                    className="flex items-center text-sm text-gray-500 disabled:opacity-40"
                    disabled={page === totalPages}
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                >
                    Next <ChevronRight className="h-4 w-4 ml-1" />
                </button>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 top-0 bg-black/50 flex items-center justify-center  z-50">
                    <CreateProductContract
                        onClose={() => setIsModalOpen(false)} />
                </div>
            )}
        </div>
    );
}