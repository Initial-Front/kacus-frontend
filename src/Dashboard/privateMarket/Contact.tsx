


const FileIcon = ({ type }: { type: string }) => {

  const DisplayIcon = () => {
  if (type === "PDF") {
    return (
      <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 4C0 1.79086 1.79086 0 4 0H20L32 12V36C32 38.2091 30.2091 40 28 40H4C1.79086 40 0 38.2091 0 36V4Z" fill="#D92D20" />
        <path opacity="0.3" d="M20 0L32 12H24C21.7909 12 20 10.2091 20 8V0Z" fill="white" />
      </svg>
    );
  }

  if (type === "JPG") {
    return (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z" fill="#7F56D9" />
        <path opacity="0.3" d="M24 0L36 12H28C25.7909 12 24 10.2091 24 8V0Z" fill="white" />
        <text x="11" y="30" fill="white" fontSize="10" fontWeight="600">JPG</text>
      </svg>
    );
  }

  if (type === "MP4") {
    return (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z" fill="#1570EF" />
        <path opacity="0.3" d="M24 0L36 12H28C25.7909 12 24 10.2091 24 8V0Z" fill="white" />
        <text x="10" y="30" fill="white" fontSize="10" fontWeight="600">MP4</text>
      </svg>
    );
  }

  if (type === "FIG") {
    return (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z" fill="#9E77ED" />
        <path opacity="0.3" d="M24 0L36 12H28C25.7909 12 24 10.2091 24 8V0Z" fill="white" />
        <text x="12" y="30" fill="white" fontSize="10" fontWeight="600">FIG</text>
      </svg>
    );
  }

  if (type === "DOCX") {
    return (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z" fill="#2E90FA" />
        <path opacity="0.3" d="M24 0L36 12H28C25.7909 12 24 10.2091 24 8V0Z" fill="white" />
        <text x="8" y="30" fill="white" fontSize="10" fontWeight="600">DOCX</text>
      </svg>
    );
  }

  if (type === "AEP") {
    return (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z" fill="#6941C6" />
        <path opacity="0.3" d="M24 0L36 12H28C25.7909 12 24 10.2091 24 8V0Z" fill="white" />
        <text x="10" y="30" fill="white" fontSize="10" fontWeight="600">AEP</text>
      </svg>
    );
  }

  if (type === "MP3") {
    return (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z" fill="#E31B54" />
        <path opacity="0.3" d="M24 0L36 12H28C25.7909 12 24 10.2091 24 8V0Z" fill="white" />
        <text x="10" y="30" fill="white" fontSize="10" fontWeight="600">MP3</text>
      </svg>
    );
  }

  return null;
};

  
  return (
    <div > {DisplayIcon()}</div>
  );
};


interface FileRowTypes {
  icon: string;
  name: string;
  size: string;
  uploaded: string;
  updated: string;
}

const FileRow = ({ icon, name, size, uploaded, updated }: FileRowTypes) => (
  <tr className="border-b text-sm hover:bg-gray-50 transition">
    <td className="px-4 py-4"><input type="checkbox" className="w-4 h-4" /></td>

    <td className="px-4 py-4 flex items-center gap-3 min-w-[250px]">
      <FileIcon type={icon} />
      <div className="flex flex-col">
        <span className="font-medium text-gray-700">{name}</span>
        <span className="text-gray-400">{size}</span>
      </div>
    </td>

    <td className="px-4 py-4 whitespace-nowrap text-gray-600">{size}</td>
    <td className="px-4 py-4 whitespace-nowrap text-gray-600">{uploaded}</td>
    <td className="px-4 py-4 whitespace-nowrap text-gray-600">{updated}</td>

    <td className="px-4 py-4 whitespace-nowrap flex items-center gap-3">
      <img src="https://i.pravatar.cc/100" alt="avatar" className="w-9 h-9 rounded-full" />
      <div className="flex flex-col leading-tight">
        <span className="font-medium text-gray-700">Olivia Rhye</span>
        <span className="text-gray-400 text-xs">olivia@untitledui.com</span>
      </div>
    </td>

    <td className="px-4 py-4 text-blue-600 cursor-pointer text-sm font-medium">Click to view</td>
  </tr>
);

// MAIN COMPONENT
export default function ContactPersonFiles() {
  const files = [
    { icon: "PDF", name: "Tech requirements.pdf", size: "200 KB", uploaded: "Jan 4, 2025", updated: "Jan 4, 2025" },
    { icon: "JPG", name: "Dashboard screenshot.jpg", size: "720 KB", uploaded: "Jan 4, 2025", updated: "Jan 4, 2025" },
    { icon: "MP4", name: "Dashboard prototype recording.mp4", size: "16 MB", uploaded: "Jan 2, 2025", updated: "Jan 2, 2025" },
    { icon: "FIG", name: "Dashboard prototype FINAL.fig", size: "4.2 MB", uploaded: "Jan 6, 2025", updated: "Jan 6, 2025" },
    { icon: "DOCX", name: "UX Design Guidelines.docx", size: "400 KB", uploaded: "Jan 8, 2025", updated: "Jan 8, 2025" },
    { icon: "AEP", name: "Dashboard interaction.aep", size: "12 MB", uploaded: "Jan 6, 2025", updated: "Jan 6, 2025" },
    { icon: "MP3", name: "Briefing call recording.mp3", size: "18.6 MB", uploaded: "Jan 4, 2025", updated: "Jan 4, 2025" },
  ];

  return (
    <div className="w-full space-y-10 p-6">

      {/* CONTACT PERSON CARD */}
      <div className="border rounded-xl p-6 bg-white shadow-sm">
        <h2 className="text-lg font-semibold mb-6">Contact Person</h2>

        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-gray-500">Representative Name</span>
              <span className="px-3 py-1 mt-1 bg-green-50 text-green-600 rounded-md w-fit">Pomaline Moses</span>
            </div>

            <div className="flex flex-col">
              <span className="text-gray-500">Contact Email</span>
              <span className="px-3 py-1 mt-1 bg-gray-100 text-gray-700 rounded-md w-fit">mosespomaline@gmail.com</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-gray-500">Role / Position</span>
              <span className="px-3 py-1 mt-1 bg-green-50 text-green-600 rounded-md w-fit">CEO</span>
            </div>

            <div className="flex flex-col">
              <span className="text-gray-500">Contact Phone</span>
              <span className="px-3 py-1 mt-1 bg-gray-100 text-gray-700 rounded-md w-fit">08055614583</span>
            </div>
          </div>
        </div>
      </div>

      {/* FILE TABLE */}
      <div className="overflow-x-auto border rounded-xl bg-white shadow-sm">
        <table className="w-full text-left min-w-[900px]">
          <thead>
            <tr className="text-gray-500 text-sm border-b bg-gray-50">
              <th className="px-4 py-4 font-medium"><input type="checkbox" className="w-4 h-4" /></th>
              <th className="px-4 py-4 font-medium">File name</th>
              <th className="px-4 py-4 font-medium">File size</th>
              <th className="px-4 py-4 font-medium">Date uploaded</th>
              <th className="px-4 py-4 font-medium">Last updated</th>
              <th className="px-4 py-4 font-medium">Uploaded by</th>
              <th className="px-4 py-4"></th>
            </tr>
          </thead>

          <tbody>
            {files.map((file, index) => (
              <FileRow key={index} {...file} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
