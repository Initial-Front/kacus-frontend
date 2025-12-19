import { useRef, useState, type ReactNode } from "react";
import { Switch } from "@/components/ui/switch";
import RoleManagement from "./RoleManageMent";
import WithdrawalLimits from "./withdrawLimit";

const tabs = ["My Profile", "Notifications", "Role Management", "Withdrawal Limits"];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("My Profile");

  return (
    <div className="w-full min-h-screen bg-white  ">
      {/* Tabs */}
      <div className="border-b border-gray-200 overflow-x-auto no-scrollbar">
        <nav className="flex gap-6 px-2 md:px-6 text-sm font-medium whitespace-nowrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 relative transition-colors ${
                activeTab === tab
                  ? "text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute left-0 -bottom-px h-[2px] w-full bg-blue-600" />
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="mt-8 px-3 lg:px-8 py-6">
        {activeTab === "My Profile" && <ProfileTab />}
        {activeTab === "Notifications" && <NotificationsTab />}
         {activeTab === "Role Management" && <RoleManagement/>}
         {activeTab === "Withdrawal Limits" && <WithdrawalLimits/>}
      </div>

     
      <div className="flex justify-end mt-6 my-4 px-6">
        <button className="w-full sm:w-auto px-6 py-3 text-base rounded-lg bg-blue-600 text-white">
          Save Changes
        </button>
      </div>
    </div>
  );
}

function ProfileTab() {
  const uploadRef = useRef<HTMLInputElement | null>(null);

  const openFileDialog = () => {
    uploadRef.current?.click();
  };

  return (
    <div className="space-y-8">
      <div className="border-b pb-4">
        <h2 className="text-lg font-semibold text-gray-900">Personal info</h2>
        <p className="text-sm text-gray-500">
          Update your photo and personal details here.
        </p>
      </div>

      {/* Name */}
      <Field label="Name">
        <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
          <input className="input" defaultValue="Olivia" />
          <input className="input" defaultValue="Rhye" />
        </div>
      </Field>

      {/* Email */}
      <Field label="Email address">
        <input
          className="input max-w-xl w-full"
          defaultValue="olivia@dhive.com"
        />
      </Field>

      {/* Photo */}
      <Field label="Your photo" description="This will be displayed on your profile.">
        <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
          <img
            src="https://i.pravatar.cc/100"
            className="w-20 h-20 rounded-full border"
            alt="avatar"
          />

          <div
            onClick={openFileDialog}
            className="flex flex-col items-center justify-center gap-3 border-2 border-dashed rounded-lg p-6 w-full cursor-pointer text-center"
          >
            <p className="text-sm font-medium text-blue-600">
              Click to upload{" "}
              <span className="text-gray-500">or drag and drop</span>
            </p>
            <p className="text-xs text-gray-500">
              SVG, PNG, JPG or GIF (max. 800×400px)
            </p>

            <input ref={uploadRef} type="file" className="hidden" />
          </div>
        </div>
      </Field>

      {/* Role */}
      <Field label="Role">
        <input
          className="input max-w-xl w-full"
          defaultValue="Chief Executive Officer"
        />
      </Field>

      {/* Country */}
      <Field label="Country">
        <select className="input max-w-xl w-full">
          <option>Nigeria</option>
        </select>
      </Field>

      {/* Timezone */}
      <Field label="Timezone">
        <select className="input max-w-xl w-full">
          <option>Pacific Standard Time (PST) UTC−08:00</option>
        </select>
      </Field>
    </div>
  );
}

function NotificationsTab() {
  return (
    <div className="max-w-3xl space-y-6">
      <div className=" px-3 md:p-0">
        <h2 className="text-base font-semibold text-gray-900">Notifications</h2>
        <p className="text-sm text-gray-500">
          We may still send important notifications about your account.
        </p>
      </div>

      <ToggleRow title="Admin Mentions" desc="When another admin tags you." />
      <ToggleRow title="Report Exports" desc="When exports are ready." />
      <ToggleRow title="Reminders" desc="Important updates and reminders." />
      <ToggleRow title="System Errors" desc="System or API error alerts." />
    </div>
  );
}

function Field({
  label,
  description,
  children,
}: {
  label: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 py-4 border-b">
      <div>
        <p className="text-sm font-medium text-gray-700">{label}</p>
        {description && (
          <p className="text-sm text-gray-500">{description}</p>
        )}
      </div>
      <div className="sm:col-span-3">{children}</div>
    </div>
  );
}

function ToggleRow({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-3 md:p-0 border-t  py-4">
      <div>
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>

      <div className="flex flex-col gap-6 ">
        <div className="flex items-center gap-2">
          <Switch />
          <span className="text-sm text-gray-700">Email</span>
        </div>

        <div className="flex items-center gap-2">
          <Switch />
          <span className="text-sm text-gray-700">SMS</span>
        </div>
      </div>
    </div>
  );
}


