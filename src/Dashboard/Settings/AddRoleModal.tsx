import { type FC, useState } from "react";
import { X } from "lucide-react";

interface PermissionItem {
  label: string;
  checked: boolean;
}

interface PermissionGroup {
  title: string;
  items: PermissionItem[];
}

interface AddRoleModalProps {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddRoleModal: FC<AddRoleModalProps> = ({  onClose }) => {
  const [roleName, setRoleName] = useState<string>("");

  const [permissions, setPermissions] = useState<PermissionGroup[]>([
    {
      title: "User Management",
      items: [
        { label: "Create Users", checked: true },
        { label: "View Users", checked: true },
        { label: "Suspend Users", checked: true },
        { label: "Flag Users", checked: true },
      ],
    },
    {
      title: "Derivatives",
      items: [
        { label: "Create Derivatives", checked: true },
        { label: "View Derivatives", checked: true },
        { label: "Approve Derivatives", checked: true },
        { label: "Suspend Derivatives", checked: true },
      ],
    },
    {
      title: "Private Market",
      items: [
        { label: "Create Market", checked: true },
        { label: "View Market", checked: true },
        { label: "Suspend Market", checked: false },
        { label: "Flag Market", checked: false },
      ],
    },
    {
      title: "Wallet & Treasury",
      items: [
        { label: "Wallet & Treasury", checked: true },
        { label: "Export", checked: false },
      ],
    },
    {
      title: "KYC/AML Approvals",
      items: [
        { label: "View KYC", checked: true },
        { label: "Approve KYC", checked: true },
      ],
    },
    {
      title: "Reports & Analytics",
      items: [
        { label: "View Reports", checked: true },
        { label: "View Reports", checked: true },
        { label: "Export Data", checked: false },
      ],
    },
  ]);

  const togglePermission = (
    groupIndex: number,
    itemIndex: number
  ): void => {
    setPermissions((prev) =>
      prev.map((group, gIdx) =>
        gIdx === groupIndex
          ? {
              ...group,
              items: group.items.map((item, iIdx) =>
                iIdx === itemIndex
                  ? { ...item, checked: !item.checked }
                  : item
              ),
            }
          : group
      )
    );
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg">
   
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">
            Add New Role
          </h2>
          <button onClick={()=> onClose(false)}>
            <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
          </button>
        </div>

    
        <div className="px-6 py-6 space-y-6 max-h-[75vh] overflow-y-auto">
         
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Role Name
            </label>
            <input
              type="text"
              value={roleName}
              onChange={(e) => setRoleName(e.target.value)}
              placeholder="Enter Role Name"
              className="w-full rounded-lg border border-[#EEEEF2] px-3 py-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-9">
            <h3 className="text-sm md:text-[20px] font-semibold text-[#3C3F44] mb-5">
              Set up Permissions
            </h3>

            {permissions.map((group, groupIndex) => (
              <div
                key={group.title}
                className="grid grid-cols-1 sm:grid-cols-4   gap-x-4"
              >
                <span className="text-sm font-medium text-gray-700">
                  {group.title}
                </span>

                <div className="sm:col-span-3 flex flex-wrap gap-x-6 gap-y-5">
                  {group.items.map((item, itemIndex) => (
                    <label
                      key={item.label}
                      className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={item.checked}
                        onChange={() =>
                          togglePermission(groupIndex, itemIndex)
                        }
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 accent-blue-600  focus:ring-blue-500"
                      />
                      {item.label}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

   
        <div className="flex items-center gap-3 px-6 pt-4 pb-[30px] border-t">
          <button
            onClick={()=> onClose(false)}
            className="px-6 py-[11px]  w-full  md:w-1/2  rounded-lg border text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button className="px-6 py-[11px] w-full  md:w-1/2   rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700">
            Create Role
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRoleModal;
