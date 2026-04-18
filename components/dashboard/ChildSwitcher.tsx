'use client';

import { cn } from '@/lib/utils';
import type { Child } from '@/lib/types';

export default function ChildSwitcher({
  children,
  activeId,
  onChange,
}: {
  children: Child[];
  activeId: string;
  onChange: (id: string) => void;
}) {
  if (children.length <= 1) return null;
  return (
    <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full p-1 w-fit">
      {children.map((c) => (
        <button
          key={c.id}
          onClick={() => onChange(c.id)}
          className={cn(
            'px-4 py-1.5 rounded-full text-sm transition',
            activeId === c.id
              ? 'bg-brand text-white'
              : 'text-gray-600 hover:text-gray-900',
          )}
        >
          {c.fullName.split(' ')[0]}
        </button>
      ))}
    </div>
  );
}
