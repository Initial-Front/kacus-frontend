import { useLocation } from "react-router-dom";


function OverView() {
    const location = useLocation();
    const pathLabelMap: Record<string, string> = {
        '/overview': 'Overview',
        '/wallet-monitoring': 'Wallet Monitoring',
        '/fund-movement': 'Fund Movement',
    };

    const label = pathLabelMap[location.pathname] || '';
    return (
        <section className="md:p-6">

            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-xl flex items-center gap-1 font-semibold text-gray-800">
                        Wallet & Treasury
                        <span className="ms-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 12L10 8L6 4" stroke="#D5D7DA" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </span>
                        <span className="text-sm ">
                            {label}
                        </span>

                    </h1>
                    <p className="text-sm text-gray-500 mt-2">
                        Track, review, and control all financial transactions on the platform.
                    </p>
                </div>

                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 text-sm hover:bg-blue-700 transition"
                >

                    <span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66797 14.1667L10.0013 17.5M10.0013 17.5L13.3346 14.1667M10.0013 17.5V10M16.668 13.9524C17.6859 13.1117 18.3346 11.8399 18.3346 10.4167C18.3346 7.88536 16.2826 5.83333 13.7513 5.83333C13.5692 5.83333 13.3989 5.73833 13.3064 5.58145C12.2197 3.73736 10.2133 2.5 7.91797 2.5C4.46619 2.5 1.66797 5.29822 1.66797 8.75C1.66797 10.4718 2.36417 12.0309 3.49043 13.1613" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </span>
                    Export report
                </button>
            </div>

        </section>
    );
}

export default OverView;