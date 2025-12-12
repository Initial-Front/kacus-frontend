import { Button } from "@/components/ui/button";
import { Calendar, Search } from "lucide-react";
import { useState } from "react";
import ContactPersonFiles from "./Contact";

interface DetailProps {
  label: string;
  value: string;
  color?: string;
  bg?: string;
}


const Detail = ({ label, value, color, bg }: DetailProps) => (
  <div className="flex flex-col gap-1 text-sm">
    <span className="text-gray-500">{label}</span>
    <span className={`px-3 py-1 rounded-full ${bg} w-fit ${color || "text-gray-700"}`}>{value}</span>
  </div>
);

export default function PrivateDetailPage() {

  const [activeTab, setActiveTab] = useState("Key Metrics");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <div className="w-full min-h-screen bg-white text-gray-800 p-6">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Private Market</h1>
          <p className="text-sm text-gray-500">
            Manage company listings of market trading
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition"
        >
          + New Listing
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-between mb-5 gap-3">
        <button className="border px-4 py-2 rounded-lg text-sm flex items-center">
          Private Market
          <span className="ml-2 bg-gray-200 px-2 py-1 rounded text-xs">100</span>
        </button>

        <div className="flex items-center space-x-3">

          <div className="relative w-72">
            <input
              className="w-full border rounded-lg pl-10 pr-3 py-2 text-sm focus:outline-none"
              placeholder="Search"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>


          <button className="flex items-center border px-3 py-2 rounded-lg text-sm gap-2 hover:bg-gray-50">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 10H15M2.5 5H17.5M7.5 15H12.5" stroke="#414651"
                strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
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

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6 border rounded-2xl md:mt-[32px] md:p-[30px]">
        <div className="flex items-start  gap-3">

          <svg width="35" height="39" viewBox="0 0 35 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2895_133498)">
              <path d="M18.4708 0.0142167C12.4666 -0.221952 6.44844 2.49398 3.112 7.4399C1.73269 9.48366 0.812371 11.8045 0.444244 14.2048C-0.252401 18.7601 -0.312978 24.1216 1.58823 28.4339C3.112 31.8856 5.83334 34.865 9.33288 36.634C16.8958 40.4603 26.7443 38.2281 31.5113 31.5541C33.3683 28.9562 34.4867 25.8951 34.7849 22.775C35.2043 18.3945 35.1623 13.5439 33.1819 9.48366C31.5859 6.2091 28.8879 3.41141 25.4862 1.75596C23.2658 0.675034 20.8683 0.109592 18.4708 0.0142167ZM30.3161 23.0361C30.3161 30.2529 24.5892 36.1026 17.5225 36.1026C10.4559 36.1026 4.73129 30.2529 4.73129 23.0361V15.4651C4.73129 8.25059 10.4582 2.40088 17.5225 2.40088C21.0547 2.40088 24.2537 3.86331 26.5696 6.22726C28.8832 8.59122 30.3161 11.859 30.3161 15.4651V23.0361Z" fill="#FEC20A" />
              <path d="M27.0026 6.22482C24.5748 3.86087 21.2244 2.39844 17.5221 2.39844C13.5729 2.39844 9.76352 4.13791 7.2309 7.09229C5.15727 9.51301 4.31384 12.5605 4.11347 15.6511C3.82223 20.1065 3.5939 25.4907 5.94245 29.4806C7.84833 32.7211 11.1382 35.1055 14.9056 35.8458C15.7677 36.0161 16.6461 36.1001 17.5245 36.1001C21.003 36.1001 24.3931 34.7558 26.8837 32.3896C29.7216 29.6918 30.8306 26.0675 30.9448 22.282C31.1172 16.589 31.4527 10.5599 27.0049 6.22482H27.0026ZM27.154 28.3361C23.1908 32.326 16.6577 32.4282 12.5641 28.5654L8.12792 24.3803C4.03425 20.5176 3.92941 14.1501 7.89259 10.1602C9.91496 8.12325 12.6083 7.0991 15.3041 7.0991C17.9998 7.0991 20.4765 8.03923 22.4802 9.93085L26.9164 14.1183C31.01 17.981 31.1172 24.3462 27.154 28.3361Z" fill="#F79516" />
              <path d="M26.917 14.1208L22.4809 9.93331C20.4772 8.04169 17.891 7.10156 15.3047 7.10156C12.7185 7.10156 9.91565 8.12572 7.89329 10.1627C3.9301 14.1526 4.03495 20.52 8.12861 24.3827L12.5648 28.5679C16.6584 32.4306 23.1915 32.3284 27.1547 28.3386C31.1179 24.3487 31.0107 17.9835 26.917 14.1208ZM23.8579 23.1429L20.6915 25.8633C17.7162 28.4203 13.1752 28.1433 10.5517 25.2411C7.92823 22.3412 8.21481 17.9154 11.1901 15.3584L14.3541 12.6379C17.3318 10.0809 21.8705 10.3602 24.4963 13.2601C25.7008 14.5908 26.2903 16.244 26.2903 17.8881C26.2903 19.8274 25.4678 21.7599 23.8579 23.1429Z" fill="#EB4E1B" />
              <path d="M24.4951 13.262C21.8693 10.3621 17.3306 10.0828 14.3529 12.6398L11.1889 15.3603C8.21361 17.9172 7.92703 22.3431 10.5505 25.243C13.174 28.1452 17.715 28.4222 20.6903 25.8652L23.8567 23.1447C25.4666 21.7618 26.2891 19.8293 26.2891 17.89C26.2891 16.2459 25.6996 14.5927 24.4951 13.262ZM18.852 23.449L15.7858 23.3037C13.3115 23.1879 11.4009 21.1396 11.5198 18.7279C11.6339 16.3844 13.619 14.5655 15.9979 14.5655C16.0701 14.5655 16.1446 14.5655 16.2169 14.57L19.283 14.7131C21.7574 14.8289 23.6679 16.8772 23.5491 19.2911C23.4303 21.7028 21.3264 23.5648 18.852 23.449Z" fill="#D9001B" />
              <path d="M23.5483 19.2881C23.4295 21.6998 21.3255 23.5619 18.8512 23.4461L15.785 23.3007C13.3106 23.1849 11.4001 21.1366 11.5189 18.725C11.6331 16.3815 13.6182 14.5625 15.997 14.5625C16.0693 14.5625 16.1438 14.5625 16.216 14.567L19.2822 14.7101C21.7566 14.8259 23.6671 16.8742 23.5483 19.2881Z" fill="#221E7F" />
            </g>
            <defs>
              <clipPath id="clip0_2895_133498">
                <rect width="35" height="38.5" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <div>
            <h1 className="text-2xl text-[#181D27] font-semibold flex items-center gap-2">OANDO PLC   <span className="text-sm text-gray-500">OANDO</span></h1>
            <p className="text-xs ml-3 px-2 py-1 bg-[#F0F9FF] flex items-center gap-2 w-fit mt-2 text-[#026AA2] border-[#B9E6FE] rounded-md">
              <span>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="4" r="3" fill="#0BA5EC" />
                </svg>

              </span>
              Spot</p>

          </div>
          <p className="text-xs ml-3 flex items-center gap-2 border rounded-md border-[#D5D7DA] px-2 py-1 h-fit ">
            <span>
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="3" fill="#17B26A" />
              </svg>
            </span>
            Active

          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border rounded-md">Pause Trading</button>
          <button className="px-4 py-2 border rounded-md">Edit Company</button>
          <button className="px-4 py-2 bg-[#FFFBFA] text-[#B42318] border border-[#FDA29B] rounded-md">Delete</button>
        </div>
      </div>

      <div className="flex gap-6 border-b mb-[33px] text-sm font-medium">
        {['Key Metrics', 'Company Details', 'Others'].map((tab) => (
          <span
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer pb-2 ${activeTab === tab
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'hover:text-gray-600'
              }`}
          >
            {tab}
          </span>
        ))}
      </div>

      {activeTab === 'Key Metrics' && <KeyMetrics />}
      {activeTab === 'Company Details' && <CompanyDetails />}
      {activeTab === 'Others' && <ContactPersonFiles/> }

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"></div>
      )}
    </div>
  );
}

function KeyMetrics() {


  return (
    <div>

      <div className="flex flex-wrap  items-center  w-full justify-between ">

        <div className="border rounded-lg border-gray-300 ">
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

      {/* CARDS */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[32px]  mx-auto gap-4">
        {[
          { title: "Market Cap", value: "₦9.5B", change: "+100%", positive: true },
          { title: "EPS (TTM)", value: "₦164.88", change: "+100%", positive: true },
          { title: "PE Ratio", value: "₦4.6B", change: "-2%", positive: false },
          { title: "Trailing P/E", value: "₦1.2B", change: "-2%", positive: false },
          { title: "Enterprise Value", value: "15,230", change: "+100%", positive: true },
          { title: "Forward P/E", value: "52.90", change: "-2%", positive: false },
          { title: "Earnings Date", value: "Aug 27, 2025", change: "-2%", positive: false },
          { title: "Volume", value: "₦450K", change: "+100%", positive: true },
        ].map((card, i) => (
          <div
            key={i}
            className="p-4 bg-white rounded-lg shadow-sm border-2  flex  flex-col justify-between"
          >

            <div className="flex justify-between items-center w-full">
              <span className="text-base font-semibold text-[#414651]">{card.title}</span>
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

                <span className="text-3xl font-semibold mt-1">{card.value}</span>
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


        <section>
          <div
            className="p-4 bg-white rounded-lg shadow-sm border-2  flex  flex-col"
          >
            <section className="flex  items-center justify-center  text-center mt-4">
              <div className="flex flex-col items-center justify-center  gap-4 p-4">
                <div>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="#F5FAFF" />
                    <path d="M23.1425 12.5H16.8575C14.1275 12.5 12.5 14.1275 12.5 16.8575V23.135C12.5 25.8725 14.1275 27.5 16.8575 27.5H23.135C25.865 27.5 27.4925 25.8725 27.4925 23.1425V16.8575C27.5 14.1275 25.8725 12.5 23.1425 12.5ZM23.75 23.9375H16.25C15.9425 23.9375 15.6875 23.6825 15.6875 23.375C15.6875 23.0675 15.9425 22.8125 16.25 22.8125H23.75C24.0575 22.8125 24.3125 23.0675 24.3125 23.375C24.3125 23.6825 24.0575 23.9375 23.75 23.9375ZM23.75 20.5625H16.25C15.9425 20.5625 15.6875 20.3075 15.6875 20C15.6875 19.6925 15.9425 19.4375 16.25 19.4375H23.75C24.0575 19.4375 24.3125 19.6925 24.3125 20C24.3125 20.3075 24.0575 20.5625 23.75 20.5625ZM23.75 17.1875H16.25C15.9425 17.1875 15.6875 16.9325 15.6875 16.625C15.6875 16.3175 15.9425 16.0625 16.25 16.0625H23.75C24.0575 16.0625 24.3125 16.3175 24.3125 16.625C24.3125 16.9325 24.0575 17.1875 23.75 17.1875Z" fill="#252B37" />
                  </svg>

                </div>

                <p>
                  Load this card with details
                </p>
              </div>

            </section>

          </div>
        </section>
      </div>
    </div>
  );
}







function CompanyDetails() {
  return (
    <div className="w-full p-6 bg-white space-y-8">
      {/* Company Information */}
      <div className=" rounded-xl border shadow-sm p-6">
        <h2 className="text-lg text-[#344054] font-semibold mb-4">Company Information</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-3 text-sm">
            <Detail label="Company Name" value="Oando PLC" color="text-[#B93815]" bg="bg-[#FEF6EE]" />
            <Detail label="Profit Margin" value="34.32%" color="text-[#C11574]" bg="bg-[#FDF2FA]" />
            <Detail label="Return on Equity (ttm)" value="₦164.88" color="text-[#C11574]" bg="bg-[#FDF2FA]" />
            <Detail label="Net Income Avi to Common (ttm)" value="₦164.88" color="text-[#C11574]" bg="bg-[#FDF2FA]" />
            <Detail label="Total Debt/Equity (mrq)" value="₦164.88" color="text-[#C11574]" bg="bg-[#FDF2FA]" />
            <Detail label="Total Units to Issue" value="200,000,000,000,000" color="text-[#C11574]" bg="bg-[#FDF2FA]" />
            <Detail label="Status" value="Active" color="text-gray-300" bg="bg-transparent" />

            <button className="flex justify-center items-center gap-2 border px-2 py-1 rounded-lg">

              <span>
                <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="3" cy="3" r="3" fill="#17B26A" />
                </svg>

              </span>
              Active
            </button>
          </div>


          <div className="space-y-3 text-sm">
            <Detail label="Company Ticker" value="OANDO" color="text-[#3538CD]" bg="bg-[#EEF4FF]" />
            <Detail label="Return on Assets (ttm)" value="8%" color="text-[#363F72]" bg="bg-[#F8F9FC]" />
            <Detail label="Revenue (ttm)" value="8%" color="text-[#363F72]" bg="bg-[#F8F9FC]" />
            <Detail label="Total Cash (mrq)" value="₦164.88" color="text-[#363F72]" bg="bg-[#F8F9FC]" />
            <Detail label="Levered Free Cash Flow (ttm)" value="₦164.88" color="text-[#067647]" bg="bg-[#ECFDF3]" />
            <Detail label="Funding Rate (%)" value="45.3%" color="text-[#067647]" bg="bg-[#ECFDF3]" />
            <Detail label="Listing Date" value="May 21, 2025" color="text-[#067647]" bg="bg-[#ECFDF3]" />
          </div>
        </div>
      </div>


      {/* Company Socials */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Company Socials</h2>
        <div className="flex gap-3">
          <button className="px-3 py-1 bg-[#FDF2FA] border border-[#FCCEEE] text-[#C11574] rounded-full flex justify-center items-center gap-2 text-sm">
            <span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#C11574" strokeLinecap="round" stroke-linejoin="round" />
                <path d="M4.00078 1.5H4.50078C3.52578 4.42 3.52578 7.58 4.50078 10.5H4.00078" stroke="#C11574" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.5 1.5C8.475 4.42 8.475 7.58 7.5 10.5" stroke="#C11574" strokeLinecap="round" stroke-linejoin="round" />
                <path d="M1.5 8V7.5C4.42 8.475 7.58 8.475 10.5 7.5V8" stroke="#C11574" strokeLinecap="round" stroke-linejoin="round" />
                <path d="M1.5 4.50078C4.42 3.52578 7.58 3.52578 10.5 4.50078" stroke="#C11574" strokeLinecap="round" stroke-linejoin="round" />
              </svg>

            </span>
            Website
          </button>
          <button className="px-3 py-1 bg-[#EFF8FF] border border-[#B2DDFF] text-blue-500 rounded-full flex justify-center items-center gap-2 text-sm">
            <span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 4.65V6.1H8.3C8.4 6.1 8.45 6.2 8.45 6.3L8.25 7.25C8.25 7.3 8.15 7.35 8.1 7.35H7V11H5.5V7.4H4.65C4.55 7.4 4.5 7.35 4.5 7.25V6.3C4.5 6.2 4.55 6.15 4.65 6.15H5.5V4.5C5.5 3.65 6.15 3 7 3H8.35C8.45 3 8.5 3.05 8.5 3.15V4.35C8.5 4.45 8.45 4.5 8.35 4.5H7.15C7.05 4.5 7 4.55 7 4.65Z" stroke="#175CD3" stroke-miterlimit="10" stroke-linecap="round" />
                <path d="M7.5 11H4.5C2 11 1 10 1 7.5V4.5C1 2 2 1 4.5 1H7.5C10 1 11 2 11 4.5V7.5C11 10 10 11 7.5 11Z" stroke="#175CD3" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </span>
            Facebook
          </button>
        </div>
      </div>


      {/* Description */}
      <div className="text-sm space-y-4 border-2 rounded-xl p-4">
        <h2 className="text-lg font-semibold text-[#344054] mb-4">Company Description</h2>
        <p className="text-[#667085]">
          Slack is a cloud-based messaging platform primarily designed for workplace communication and collaboration. It offers features like channels for organized discussions, direct messaging, audio and video calling, and integration with various third-party apps. Slack aims to streamline workflows, improve communication, and enhance productivity for teams of all sizes.
        </p>
        <p className="text-[#667085]">
          Slack is mainly used for workplace communication and collaboration on various tasks and projects. The desktop app includes a sidebar that lets users access the channels they have joined and all the conversations they are part of, open direct messages (DMs), view activities, and see all saved items and reminders.
        </p>
      </div>
    </div>
  );
}



