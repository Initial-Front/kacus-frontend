import { useState } from 'react';
import { MoreVertical, Edit2, Trash2 } from 'lucide-react';

export default function ActionMenu({ onEdit, onDelete }: { onEdit: () => void; onDelete: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={(e) => { e.stopPropagation(); setOpen((v) => !v); }} className="p-2 rounded-md hover:bg-gray-100">
        <MoreVertical size={16} />
      </button>

      {open && (
        <div onClick={(e) => e.stopPropagation()} className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg border">
          <button
            onClick={() => { setOpen(false); onEdit(); }}
            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center gap-2"
          >
            <Edit2 size={14} /> Edit Administrator
          </button>
          <button
            onClick={() => { setOpen(false); onDelete(); }}
            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center gap-2"
          >
            <Trash2 size={14} /> Delete Administrator
          </button>
        </div>
      )}
    </div>
  );
}