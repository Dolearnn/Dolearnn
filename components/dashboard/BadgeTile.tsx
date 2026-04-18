import { cn } from '@/lib/utils';
import type { Badge } from '@/lib/types';

export default function BadgeTile({
  badge,
  earned,
}: {
  badge: Badge;
  earned: boolean;
}) {
  return (
    <div
      className={cn(
        'rounded-2xl p-4 text-center border transition',
        earned
          ? 'bg-accent2-50 border-accent2-200'
          : 'bg-gray-50 border-gray-200 opacity-60',
      )}
    >
      <div
        className={cn(
          'w-14 h-14 rounded-full mx-auto flex items-center justify-center text-2xl',
          earned ? 'bg-white' : 'bg-gray-100 grayscale',
        )}
      >
        {badge.icon}
      </div>
      <p
        className={cn(
          'mt-3 text-sm font-semibold',
          earned ? 'text-brand' : 'text-gray-600',
        )}
      >
        {badge.name}
      </p>
      <p className="text-xs text-gray-500 mt-1 leading-snug">
        {badge.description}
      </p>
      {earned && badge.earnedAt && (
        <p className="text-[11px] text-accent2-600 font-medium mt-2">
          Earned {new Date(badge.earnedAt).toLocaleDateString(undefined, {
            day: 'numeric',
            month: 'short',
          })}
        </p>
      )}
    </div>
  );
}
