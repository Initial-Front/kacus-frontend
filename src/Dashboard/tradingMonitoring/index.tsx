import { Button } from "@/components/ui/button";
import { Calendar, SortAscIcon } from "lucide-react";



type Activity = {
    tradeId: string;
    name: string;
    pair: string;
    price: string;
    side: string;
    date: string;
};


function TradingMonitoring() {





    const activities: Activity[] = [
        {
            tradeId: "TRD-001",
            name: "Vincent O.",
            pair: "BTC/NGN",
            price: "₦500,000",
            side: "Buy",
            date: "Jul 29, 2025 · 2:18 PM",
        },
        {
            tradeId: "TRD-002",
            name: "Grace A.",
            pair: "ETH/NGN",
            price: "₦350,000",
            side: "Sell",
            date: "Aug 01, 2025 · 9:22 AM",
        },
        {
            tradeId: "TRD-003",
            name: "Lekan T.",
            pair: "USDT/NGN",
            price: "₦3,000,000",
            side: "Withdrawal",
            date: "Aug 15, 2025 · 5:00 PM",
        },
    ];



    // const statusColorMap: Record<string, string> = {
    //     green: "bg-green-50 text-green-600 border-green-200",
    //     orange: "bg-orange-50 text-orange-600 border-orange-200",
    //     blue: "bg-blue-50 text-blue-600 border-blue-200",
    //     red: "bg-red-50 text-red-600 border-red-200",
    // };
    return (
        <main className="p-3 md:p-[32px]">
            <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-[32px]">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800">
                        Welcome back, Olivia
                    </h1>
                    <p className="text-gray-500 text-sm mt-1">
                        Monitor activity, manage users, and keep the ecosystem thriving.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <Button
                        variant="outline"
                        className="bg-blue-600 h-[40px] p-3 rounded-lg hover:bg-blue-700 text-white"
                    >

                        <span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 10H15" stroke="white" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10 15V5" stroke="white" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>


                        </span>
                        New Trading Pairs
                    </Button>

                </div>
            </header>


            <div className="flex flex-wrap gap-y-2  items-center  w-full justify-between">

                <div className="md:border rounded-lg border-gray-300 ">
                    {[
                        "12 months",
                        "30 days",
                        "7 days",
                        "24 hours",
                    ].map((x) => (
                        <button
                            key={x}
                            className="px-4 py-2 text-sm border  hover:bg-gray-100"
                        >
                            {x}
                        </button>
                    ))}

                </div>

                <Button
                    variant="outline"
                    className="flex items-center gap-2 border-gray-300 mx-3 text-gray-700 ml-auto"
                >
                    <Calendar className="w-4 h-4" /> Select dates
                </Button>

                <Button variant="outline" className="border-gray-300 text-gray-700 flex items-center gap-3">

                    <span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 10H15M2.5 5H17.5M7.5 15H12.5" stroke="#414651" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                    Filters
                </Button>
            </div>



            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[32px]  mx-auto gap-4">
                {[
                    { title: "Total Registered Users", value: "124,600", change: "+100%", positive: true },
                    { title: "KYC Approved", value: "87,200", change: "+100%", positive: true },
                    { title: "Derivatives Volume", value: "₦4.6B", change: "-2%", positive: false },
                    { title: "Private Market Volume", value: "₦1.2B", change: "-2%", positive: false },
                    { title: "Total Trades", value: "15,230", change: "+100%", positive: true },
                    { title: "Total Referral Commissions Paid", value: "₦6.8M", change: "+100%", positive: true },
                ].map((card, i) => (
                    <div
                        key={i}
                        className="p-4 bg-white rounded-lg shadow-sm border-2  flex  flex-col"
                    >

                        <div className="flex justify-between items-center w-full">
                            <span className="text-sm text-gray-600">{card.title}</span>
                            <button>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0003 10.8335C10.4606 10.8335 10.8337 10.4604 10.8337 10.0002C10.8337 9.53993 10.4606 9.16683 10.0003 9.16683C9.54009 9.16683 9.16699 9.53993 9.16699 10.0002C9.16699 10.4604 9.54009 10.8335 10.0003 10.8335Z" stroke="#A4A7AE" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10.0003 5.00016C10.4606 5.00016 10.8337 4.62707 10.8337 4.16683C10.8337 3.70659 10.4606 3.3335 10.0003 3.3335C9.54009 3.3335 9.16699 3.70659 9.16699 4.16683C9.16699 4.62707 9.54009 5.00016 10.0003 5.00016Z" stroke="#A4A7AE" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10.0003 16.6668C10.4606 16.6668 10.8337 16.2937 10.8337 15.8335C10.8337 15.3733 10.4606 15.0002 10.0003 15.0002C9.54009 15.0002 9.16699 15.3733 9.16699 15.8335C9.16699 16.2937 9.54009 16.6668 10.0003 16.6668Z" stroke="#A4A7AE" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </button>
                        </div>


                        <section className="flex  items-center justify-between mt-4">
                            <div className="flex flex-col">

                                <span className="text-2xl font-semibold mt-1">{card.value}</span>
                                <span
                                    className={`text-sm mt-2 ${card.positive ? "text-green-600" : "text-red-600"
                                        }`}
                                >
                                    {card.change} vs last month
                                </span>
                            </div>


                            <div className="flex  items-end justify-center ">
                                {card.positive ? (
                                    <span>
                                        <svg width="114" height="57" viewBox="0 0 114 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_2895_127667" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="1" y="0" width="112" height="56">
                                                <rect width="112" height="56" transform="translate(1)" fill="url(#paint0_linear_2895_127667)" />
                                            </mask>
                                            <g mask="url(#mask0_2895_127667)">
                                                <path opacity="0.1" d="M110.014 9.53469L112.928 16.8212C112.976 16.9393 113 17.0654 113 17.1926V55C113 55.5523 112.552 56 112 56H2.32573C1.66135 56 1.18169 55.3641 1.36421 54.7253L4.4678 43.8627C4.69093 43.0817 5.70279 42.8785 6.21019 43.5127L8.39452 46.2432C8.73193 46.6649 9.34329 46.7425 9.77539 46.4185L12.9431 44.0426C12.981 44.0142 13.0168 43.9832 13.0503 43.9497L16.5996 40.4004C16.848 40.152 17.2085 40.0521 17.5493 40.1373L20.1016 40.7754C20.6086 40.9021 21.1276 40.6172 21.2928 40.1215L24.0924 31.7229C24.392 30.8241 25.6571 30.807 25.9809 31.6973L28.3245 38.1425C28.6047 38.9128 29.6417 39.0375 30.0964 38.3554L32.5103 34.7345C32.7901 34.3149 33.3385 34.1693 33.7896 34.3948L36.064 35.532C36.5739 35.787 37.1935 35.5647 37.425 35.0437L39.8497 29.5881C40.2328 28.7262 41.4867 28.8252 41.7298 29.7366L44.3198 39.4494C44.5571 40.339 45.7688 40.4625 46.1805 39.639L47.9603 36.0794C48.3529 35.2942 49.4945 35.3598 49.7945 36.1849L51.6075 41.1706C51.9649 42.1534 53.4003 41.9976 53.5385 40.9611L56.7326 17.0058C56.842 16.1847 57.8452 15.8452 58.4309 16.4309L59.8294 17.8294C60.3614 18.3614 61.2681 18.1376 61.4914 17.4192L64.5178 7.68412C64.7389 6.97282 65.6322 6.74429 66.1678 7.26202L67.9295 8.96509C68.4404 9.45903 69.2891 9.27734 69.553 8.61751L72.173 2.06757C72.4934 1.26644 73.61 1.21999 73.9959 1.99175L76.8509 7.70186C76.9477 7.89538 77.1046 8.05231 77.2981 8.14907L80.3668 9.68338C80.7462 9.87309 81.204 9.80277 81.509 9.50792L84.2207 6.88649C84.6405 6.48058 85.3175 6.51933 85.6883 6.97051L88.2274 10.06C88.6275 10.5467 89.3725 10.5467 89.7726 10.06L91.6992 7.71583C92.228 7.07239 93.2656 7.31955 93.4476 8.1323L96.3862 21.2583C96.5917 22.1763 97.8358 22.3284 98.2565 21.4871L100.464 17.0717C100.743 16.5137 101.459 16.3446 101.959 16.7189L103.89 18.1675C104.436 18.5771 105.223 18.3313 105.439 17.6838L108.137 9.58985C108.431 8.70609 109.668 8.66976 110.014 9.53469Z" fill="#17B26A" />
                                            </g>
                                            <path d="M113 17L110.014 9.53469C109.668 8.66976 108.431 8.7061 108.137 9.58985L105.439 17.6838C105.223 18.3313 104.436 18.5771 103.89 18.1675L101.959 16.7189C101.459 16.3446 100.743 16.5137 100.464 17.0717L98.2565 21.4871C97.8358 22.3284 96.5917 22.1763 96.3862 21.2583L93.4476 8.1323C93.2656 7.31955 92.228 7.07239 91.6992 7.71583L89.7726 10.06C89.3725 10.5467 88.6275 10.5467 88.2274 10.06L85.6883 6.97051C85.3174 6.51933 84.6405 6.48058 84.2207 6.88649L81.509 9.50792C81.204 9.80277 80.7462 9.87309 80.3668 9.68338L77.2981 8.14907C77.1046 8.05231 76.9477 7.89539 76.8509 7.70186L73.9959 1.99175C73.61 1.21999 72.4934 1.26644 72.173 2.06757L69.553 8.61751C69.2891 9.27734 68.4404 9.45903 67.9295 8.96509L66.1678 7.26202C65.6322 6.74429 64.7389 6.97282 64.5178 7.68412L61.4914 17.4192C61.2681 18.1376 60.3614 18.3614 59.8294 17.8294L58.4309 16.4309C57.8452 15.8452 56.842 16.1847 56.7326 17.0058L53.5385 40.9611C53.4003 41.9976 51.9649 42.1534 51.6075 41.1706L49.7945 36.1849C49.4945 35.3598 48.3529 35.2942 47.9603 36.0794L46.1805 39.639C45.7688 40.4625 44.5571 40.339 44.3198 39.4494L41.7298 29.7366C41.4867 28.8252 40.2328 28.7262 39.8497 29.5881L37.425 35.0437C37.1935 35.5647 36.5739 35.787 36.064 35.532L33.7896 34.3948C33.3385 34.1693 32.7901 34.3149 32.5103 34.7345L30.0964 38.3554C29.6417 39.0375 28.6047 38.9128 28.3245 38.1425L25.9809 31.6973C25.6571 30.807 24.392 30.8241 24.0924 31.7229L21.2928 40.1215C21.1276 40.6172 20.6086 40.9021 20.1016 40.7754L17.5493 40.1373C17.2085 40.0521 16.848 40.152 16.5996 40.4004L13.0503 43.9497C13.0168 43.9832 12.981 44.0142 12.9431 44.0426L9.77539 46.4185C9.34329 46.7425 8.73193 46.6649 8.39452 46.2432L6.21019 43.5127C5.70279 42.8785 4.69093 43.0817 4.4678 43.8627L1 56" stroke="#17B26A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <g opacity="0.2">
                                                <rect x="48.75" y="8" width="17.25" height="17.25" rx="8.625" stroke="#17B26A" stroke-width="2" />
                                            </g>
                                            <rect x="53.125" y="12.375" width="8.5" height="8.5" rx="4.25" fill="white" />
                                            <rect x="53.125" y="12.375" width="8.5" height="8.5" rx="4.25" stroke="#17B26A" stroke-width="2" />
                                            <defs>
                                                <linearGradient id="paint0_linear_2895_127667" x1="56" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
                                                    <stop />
                                                    <stop offset="1" stop-opacity="0" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                    </span>
                                ) : (
                                    <span>
                                        <svg width="114" height="57" viewBox="0 0 114 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_2895_127704" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="1" y="0" width="112" height="56">
                                                <rect width="112" height="56" transform="translate(1)" fill="url(#paint0_linear_2895_127704)" />
                                            </mask>
                                            <g mask="url(#mask0_2895_127704)">
                                                <path opacity="0.1" d="M5.86328 9.58985C5.5687 8.70609 4.3321 8.66976 3.98612 9.53469L1.07152 16.8212C1.02428 16.9393 1 17.0654 1 17.1926V55C1 55.5523 1.44772 56 2 56H111.674C112.339 56 112.818 55.3641 112.636 54.7253L109.532 43.8627C109.309 43.0817 108.297 42.8785 107.79 43.5127L105.605 46.2432C105.268 46.6649 104.657 46.7425 104.225 46.4185L101.057 44.0426C101.019 44.0142 100.983 43.9832 100.95 43.9497L97.4004 40.4004C97.152 40.152 96.7915 40.0521 96.4507 40.1373L93.8984 40.7754C93.3914 40.9021 92.8724 40.6172 92.7072 40.1215L89.9076 31.7229C89.608 30.8241 88.3429 30.807 88.0191 31.6973L85.6755 38.1425C85.3953 38.9128 84.3583 39.0375 83.9036 38.3554L81.4897 34.7345C81.2099 34.3149 80.6615 34.1693 80.2104 34.3948L77.936 35.532C77.4261 35.787 76.8065 35.5647 76.575 35.0437L74.1503 29.5881C73.7672 28.7262 72.5133 28.8252 72.2702 29.7366L69.6802 39.4494C69.4429 40.339 68.2312 40.4625 67.8195 39.639L66.0397 36.0794C65.6471 35.2942 64.5055 35.3598 64.2055 36.1849L62.3925 41.1706C62.0351 42.1534 60.5997 41.9976 60.4615 40.9611L57.2674 17.0058C57.158 16.1847 56.1548 15.8452 55.5691 16.4309L54.1706 17.8294C53.6386 18.3614 52.7319 18.1376 52.5086 17.4192L49.4822 7.68412C49.2611 6.97282 48.3678 6.74429 47.8322 7.26202L46.0705 8.96509C45.5596 9.45903 44.7109 9.27734 44.447 8.61751L41.827 2.06757C41.5066 1.26644 40.39 1.21999 40.0041 1.99175L37.1491 7.70186C37.0523 7.89538 36.8954 8.05231 36.7019 8.14907L33.6332 9.68338C33.2538 9.87309 32.796 9.80277 32.491 9.50792L29.7793 6.88649C29.3595 6.48058 28.6826 6.51933 28.3117 6.97051L25.7726 10.06C25.3725 10.5467 24.6275 10.5467 24.2274 10.06L22.3008 7.71583C21.772 7.07239 20.7344 7.31955 20.5524 8.1323L17.6138 21.2583C17.4083 22.1763 16.1642 22.3284 15.7435 21.4871L13.5359 17.0717C13.2568 16.5137 12.5406 16.3446 12.0414 16.7189L10.1099 18.1675C9.56389 18.5771 8.7771 18.3313 8.56126 17.6838L5.86328 9.58985Z" fill="#F04438" />
                                            </g>
                                            <path d="M1 17L3.98612 9.53469C4.3321 8.66976 5.5687 8.7061 5.86328 9.58985L8.56126 17.6838C8.7771 18.3313 9.56389 18.5771 10.1099 18.1675L12.0414 16.7189C12.5406 16.3446 13.2568 16.5137 13.5359 17.0717L15.7435 21.4871C16.1642 22.3284 17.4083 22.1763 17.6138 21.2583L20.5524 8.1323C20.7344 7.31955 21.772 7.07239 22.3008 7.71583L24.2274 10.06C24.6275 10.5467 25.3725 10.5467 25.7726 10.06L28.3117 6.97051C28.6826 6.51933 29.3595 6.48058 29.7793 6.88649L32.491 9.50792C32.796 9.80277 33.2538 9.87309 33.6332 9.68338L36.7019 8.14907C36.8954 8.05231 37.0523 7.89539 37.1491 7.70186L40.0041 1.99175C40.39 1.21999 41.5066 1.26644 41.827 2.06757L44.447 8.61751C44.7109 9.27734 45.5596 9.45903 46.0705 8.96509L47.8322 7.26202C48.3678 6.74429 49.2611 6.97282 49.4822 7.68412L52.5086 17.4192C52.7319 18.1376 53.6386 18.3614 54.1706 17.8294L55.5691 16.4309C56.1548 15.8452 57.158 16.1847 57.2674 17.0058L60.4615 40.9611C60.5997 41.9976 62.0351 42.1534 62.3925 41.1706L64.2055 36.1849C64.5055 35.3598 65.6471 35.2942 66.0397 36.0794L67.8195 39.639C68.2312 40.4625 69.4429 40.339 69.6802 39.4494L72.2702 29.7366C72.5133 28.8252 73.7672 28.7262 74.1503 29.5881L76.575 35.0437C76.8065 35.5647 77.4261 35.787 77.936 35.532L80.2104 34.3948C80.6615 34.1693 81.2099 34.3149 81.4897 34.7345L83.9036 38.3554C84.3583 39.0375 85.3953 38.9128 85.6755 38.1425L88.0191 31.6973C88.3429 30.807 89.608 30.8241 89.9076 31.7229L92.7072 40.1215C92.8724 40.6172 93.3914 40.9021 93.8984 40.7754L96.4507 40.1373C96.7915 40.0521 97.152 40.152 97.4004 40.4004L100.95 43.9497C100.983 43.9832 101.019 44.0142 101.057 44.0426L104.225 46.4185C104.657 46.7425 105.268 46.6649 105.605 46.2432L107.79 43.5127C108.297 42.8785 109.309 43.0817 109.532 43.8627L113 56" stroke="#F04438" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <g opacity="0.2">
                                                <rect x="48.25" y="8" width="17.25" height="17.25" rx="8.625" stroke="#F04438" stroke-width="2" />
                                            </g>
                                            <rect x="52.625" y="12.375" width="8.5" height="8.5" rx="4.25" fill="white" />
                                            <rect x="52.625" y="12.375" width="8.5" height="8.5" rx="4.25" stroke="#F04438" stroke-width="2" />
                                            <defs>
                                                <linearGradient id="paint0_linear_2895_127704" x1="56" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
                                                    <stop />
                                                    <stop offset="1" stop-opacity="0" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                    </span>
                                )
                                }

                            </div>
                        </section>

                    </div>
                ))}
            </div>



            <div className="w-full bg-white rounded-xl md:border-2 divide-y text-[#111827]  mx-auto mt-12">

                <div className="flex flex-col w-full   justify-between gap-3 ">
                    <div className="px-0 md:px-6 pt-5">
                        <h2 className="text-lg font-semibold flex items-center gap-2">
                            Activity Summary
                            <span className="text-xs border-2  text-blue-700 px-2 flex items-center gap-3 py-0.5 rounded-lg">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="4" cy="4" r="3" fill="#6172F3" />
                                </svg>

                                240
                            </span>
                        </h2>
                        <p className="text-gray-500 text-sm mt-1">
                            Keep track of user activities and their security ratings.
                        </p>
                    </div>



                    <div className="flex flex-col gap-3 w-full border-t-2 px-4 py-3 sm:px-6 md:flex-row md:items-center md:justify-end">


                        <div className="flex items-center gap-2 w-full md:w-80 h-11 px-3 rounded-lg border border-gray-200 bg-white">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z"
                                    stroke="#717680"
                                    strokeWidth="1.66667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                            <input
                                placeholder="Search"
                                className="flex-1 text-sm outline-none bg-transparent"
                            />

                            <button >
                                <span className="ms-auto  md:py-2 px-2"> <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.90101 9.11936C1.55442 9.11936 1.23624 9.03414 0.946467 8.86368C0.656694 8.69039 0.42658 8.46027 0.256126 8.17334C0.0856712 7.88357 0.000443965 7.56539 0.000443965 7.21879C0.000443965 6.86936 0.0856712 6.55118 0.256126 6.26425C0.42658 5.97448 0.656694 5.74294 0.946467 5.56965C1.23624 5.39635 1.55442 5.3097 1.90101 5.3097H2.83851V3.80118H1.90101C1.55442 3.80118 1.23624 3.71595 0.946467 3.5455C0.656694 3.37504 0.42658 3.14635 0.256126 2.85942C0.0856712 2.56965 0.000443965 2.25004 0.000443965 1.90061C0.000443965 1.55118 0.0856712 1.233 0.256126 0.946067C0.42658 0.659135 0.656694 0.430442 0.946467 0.259987C1.23624 0.0866916 1.55442 4.3869e-05 1.90101 4.3869e-05C2.25044 4.3869e-05 2.56863 0.0866916 2.85556 0.259987C3.14533 0.430442 3.37544 0.659135 3.5459 0.946067C3.71919 1.233 3.80584 1.55118 3.80584 1.90061V2.82959H5.31863V1.90061C5.31863 1.55118 5.40385 1.233 5.57431 0.946067C5.74476 0.659135 5.97346 0.430442 6.26039 0.259987C6.55016 0.0866916 6.86976 4.3869e-05 7.21919 4.3869e-05C7.56863 4.3869e-05 7.88681 0.0866916 8.17374 0.259987C8.46067 0.430442 8.68936 0.659135 8.85982 0.946067C9.03027 1.233 9.1155 1.55118 9.1155 1.90061C9.1155 2.25004 9.03027 2.56965 8.85982 2.85942C8.68936 3.14635 8.46067 3.37504 8.17374 3.5455C7.88681 3.71595 7.56863 3.80118 7.21919 3.80118H6.28596V5.3097H7.21919C7.56863 5.3097 7.88681 5.39635 8.17374 5.56965C8.46067 5.74294 8.68936 5.97448 8.85982 6.26425C9.03027 6.55118 9.1155 6.86936 9.1155 7.21879C9.1155 7.56539 9.03027 7.88357 8.85982 8.17334C8.68936 8.46027 8.46067 8.69039 8.17374 8.86368C7.88681 9.03414 7.56863 9.11936 7.21919 9.11936C6.86976 9.11936 6.55016 9.03414 6.26039 8.86368C5.97346 8.69039 5.74476 8.46027 5.57431 8.17334C5.40385 7.88357 5.31863 7.56539 5.31863 7.21879V6.28129H3.80584V7.21879C3.80584 7.56539 3.71919 7.88357 3.5459 8.17334C3.37544 8.46027 3.14533 8.69039 2.85556 8.86368C2.56863 9.03414 2.25044 9.11936 1.90101 9.11936ZM1.90101 8.14777C2.07431 8.14777 2.23056 8.10658 2.36976 8.02419C2.51181 7.94181 2.62544 7.82959 2.71067 7.68754C2.7959 7.5455 2.83851 7.38925 2.83851 7.21879V6.28129H1.90101C1.73056 6.28129 1.57431 6.32391 1.43226 6.40914C1.29022 6.49152 1.17658 6.60374 1.09135 6.74578C1.00897 6.88783 0.967773 7.0455 0.967773 7.21879C0.967773 7.38925 1.00897 7.5455 1.09135 7.68754C1.17658 7.82959 1.29022 7.94181 1.43226 8.02419C1.57431 8.10658 1.73056 8.14777 1.90101 8.14777ZM1.90101 2.82959H2.83851V1.90061C2.83851 1.72732 2.7959 1.57107 2.71067 1.43186C2.62544 1.28982 2.51181 1.1776 2.36976 1.09521C2.23056 1.01283 2.07431 0.971635 1.90101 0.971635C1.73056 0.971635 1.57431 1.01283 1.43226 1.09521C1.29022 1.1776 1.17658 1.28982 1.09135 1.43186C1.00897 1.57107 0.967773 1.72732 0.967773 1.90061C0.967773 2.07391 1.00897 2.23158 1.09135 2.37362C1.17658 2.51283 1.29022 2.62362 1.43226 2.70601C1.57431 2.7884 1.73056 2.82959 1.90101 2.82959ZM6.28596 2.82959H7.21919C7.39249 2.82959 7.54874 2.7884 7.68794 2.70601C7.82715 2.62362 7.93794 2.51283 8.02033 2.37362C8.10556 2.23158 8.14817 2.07391 8.14817 1.90061C8.14817 1.72732 8.10556 1.57107 8.02033 1.43186C7.93794 1.28982 7.82715 1.1776 7.68794 1.09521C7.54874 1.01283 7.39249 0.971635 7.21919 0.971635C7.0459 0.971635 6.88823 1.01283 6.74618 1.09521C6.60414 1.1776 6.49192 1.28982 6.40953 1.43186C6.32715 1.57107 6.28596 1.72732 6.28596 1.90061V2.82959ZM7.21919 8.14777C7.39249 8.14777 7.54874 8.10658 7.68794 8.02419C7.82715 7.94181 7.93794 7.82959 8.02033 7.68754C8.10556 7.5455 8.14817 7.38925 8.14817 7.21879C8.14817 7.0455 8.10556 6.88783 8.02033 6.74578C7.93794 6.60374 7.82715 6.49152 7.68794 6.40914C7.54874 6.32391 7.39249 6.28129 7.21919 6.28129H6.28596V7.21879C6.28596 7.38925 6.32715 7.5455 6.40953 7.68754C6.49192 7.82959 6.60414 7.94181 6.74618 8.02419C6.88823 8.10658 7.0459 8.14777 7.21919 8.14777ZM3.80584 5.3097H5.31863V3.80118H3.80584V5.3097ZM11.4539 8.92334V0.196067H12.7707V4.36368H12.8772L16.5377 0.196067H18.1954L14.6755 4.12504L18.2082 8.92334H16.623L13.8019 5.02419L12.7707 6.20885V8.92334H11.4539Z" fill="#717680" /> </svg> </span>
                            </button>
                        </div>

                        <button className="h-11 px-4 border rounded-lg text-sm flex items-center justify-center gap-2 text-[#414651] w-full md:w-auto">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    d="M5 10H15M2.5 5H17.5M7.5 15H12.5"
                                    stroke="#414651"
                                    strokeWidth="1.66667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            Filters
                        </button>
                    </div>

                </div>

                <div className="w-full overflow-x-auto">
                    <table className="min-w-[900px] w-full border border-gray-200 text-sm">
                        <thead>
                            <tr className="bg-gray-50 text-gray-600 font-medium">
                                <th className="py-3 px-4 text-left">
                                    <div className="flex items-center gap-2">
                                        Trade ID
                                        <SortAscIcon />
                                    </div>
                                </th>

                                <th className="py-3 px-4 text-left">
                                    <div className="flex items-center gap-2">
                                        Name
                                        <SortAscIcon />
                                    </div>
                                </th>

                                <th className="py-3 px-4 text-left whitespace-nowrap">
                                    <div className="flex items-center gap-2">
                                        Pair
                                        <SortAscIcon />
                                    </div>
                                </th>

                                <th className="py-3 px-4 text-left whitespace-nowrap">
                                    Price
                                </th>

                                <th className="py-3 px-4 text-left">
                                    <div className="flex items-center gap-2">
                                        Side
                                        <SortAscIcon />
                                    </div>
                                </th>

                                <th className="py-3 px-4 text-left">
                                    <div className="flex items-center gap-2">
                                        Date
                                        <SortAscIcon />
                                    </div>
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {activities.map((item, i) => (
                                <tr key={i} className="border-t hover:bg-gray-50 transition">
                                    <td className="py-4 px-4 whitespace-nowrap">{item.tradeId}</td>
                                    <td className="py-4 px-4">{item.name}</td>
                                    <td className="py-4 px-4 whitespace-nowrap">{item.pair}</td>
                                    <td className="py-4 px-4 whitespace-nowrap">{item.price}</td>
                                    <td className="py-4 px-4">{item.side}</td>
                                    <td className="py-4 px-4 whitespace-nowrap">{item.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>




                <div className="flex items-center justify-between mt-4 text-sm py-[20px] px-[24px] text-gray-600">
                    <span>Page 1 of 10</span>
                    <div className="flex gap-3">
                        <button className="px-4 py-2 border rounded-lg">Previous</button>
                        <button className="px-4 py-2 border rounded-lg">Next</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default TradingMonitoring;