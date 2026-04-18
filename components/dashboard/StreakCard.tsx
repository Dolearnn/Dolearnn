import { Flame } from 'lucide-react';
import type { Streak } from '@/lib/types';

export default function StreakCard({ streak }: { streak: Streak }) {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100 p-5">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
          <Flame className="w-6 h-6 text-orange-500" />
        </div>
        <div>
          <p className="text-xs text-gray-500">Learning streak</p>
          <p className="text-2xl font-bold text-gray-900">
            {streak.current} <span className="text-sm font-medium">week{streak.current === 1 ? '' : 's'}</span>
          </p>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-3">
        Longest: {streak.longest} week{streak.longest === 1 ? '' : 's'} · Don&apos;t break the chain 🔥
      </p>
    </div>
  );
}
