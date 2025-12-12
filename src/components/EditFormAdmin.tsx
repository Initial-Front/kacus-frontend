import { useState } from 'react';

type Admin = {
  id: number;
  name: string;
  handle: string;
  avatar?: string; 
  created: string; 
  lastLogin: string; 
  role: "Super Admin" | "Admin" | "Moderator";
};


export default function EditForm({ admin, onCancel, onSave }: { admin: Admin; onCancel: () => void; onSave: (updatedAdmin: Admin) => void }) {
  const [form, setForm] = useState<Admin>({ ...admin });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(form);
      }}
      className="space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <label className="flex flex-col text-sm">
          <span className="text-xs text-gray-500 mb-1">Full name</span>
          <input className="border rounded-md px-3 py-2 text-sm" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </label>

        <label className="flex flex-col text-sm">
          <span className="text-xs text-gray-500 mb-1">Handle</span>
          <input className="border rounded-md px-3 py-2 text-sm" value={form.handle} onChange={(e) => setForm({ ...form, handle: e.target.value })} />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <label className="flex flex-col text-sm">
          <span className="text-xs text-gray-500 mb-1">Role</span>
          <select className="border rounded-md px-3 py-2 text-sm" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value as Admin["role"] })}>
            <option value="Super Admin">Super Admin</option>
            <option value="Admin">Admin</option>
            <option value="Moderator">Moderator</option>
          </select>
        </label>

        <label className="flex flex-col text-sm">
          <span className="text-xs text-gray-500 mb-1">Created</span>
          <input className="border rounded-md px-3 py-2 text-sm" value={form.created} onChange={(e) => setForm({ ...form, created: e.target.value })} />
        </label>
      </div>

      <div className="flex justify-end gap-2">
        <button type="button" onClick={onCancel} className="px-4 py-2 rounded-md border">Cancel</button>
        <button type="submit" className="px-4 py-2 rounded-md bg-blue-600 text-white">Save</button>
      </div>
    </form>
  );
}