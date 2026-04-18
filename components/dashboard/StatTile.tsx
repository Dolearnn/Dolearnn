import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function StatTile({
  icon: Icon,
  label,
  value,
  sub,
  accent,
}: {
  icon: LucideIcon;
  label: string;
  value: string | number;
  sub?: string;
  accent?: boolean;
}) {
  return (
    <div
      className={cn(
        'rounded-2xl p-4 border',
        accent
          ? 'bg-brand text-white border-brand'
          : 'bg-white border-gray-200',
      )}
    >
      <div className="flex items-center justify-between mb-3">
        <span
          className={cn(
            'text-xs font-medium',
            accent ? 'text-white/80' : 'text-gray-500',
          )}
        >
          {label}
        </span>
        <div
          className={cn(
            'w-8 h-8 rounded-lg flex items-center justify-center',
            accent ? 'bg-white/15 text-white' : 'bg-accent2-100 text-brand',
          )}
        >
          <Icon className="w-4 h-4" />
        </div>
      </div>
      <p className="text-2xl font-bold">{value}</p>
      {sub && (
        <p
          className={cn(
            'text-xs mt-1',
            accent ? 'text-white/70' : 'text-gray-500',
          )}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
