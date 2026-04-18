import { Check, Star, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

const milestones = [
  { at: 1, label: 'First session', icon: Star },
  { at: 5, label: 'Math Star', icon: Star },
  { at: 10, label: 'Committed', icon: Trophy },
  { at: 20, label: 'DoLearn Champion', icon: Trophy },
];

export default function JourneyMap({
  sessionsCompleted,
}: {
  sessionsCompleted: number;
}) {
  const total = milestones[milestones.length - 1].at;
  const percent = Math.min(100, (sessionsCompleted / total) * 100);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-xs text-gray-500">Learning Journey</p>
          <p className="font-semibold text-gray-900">
            {sessionsCompleted} of {total} milestones
          </p>
        </div>
      </div>
      <div className="relative pb-8">
        <div className="absolute left-4 right-4 top-5 h-1 bg-gray-100 rounded-full" />
        <div
          className="absolute left-4 top-5 h-1 bg-accent2-500 rounded-full transition-all"
          style={{ width: `calc((100% - 32px) * ${percent / 100})` }}
        />
        <ol className="relative flex justify-between items-start">
          {milestones.map((m) => {
            const reached = sessionsCompleted >= m.at;
            const Icon = reached ? Check : m.icon;
            return (
              <li key={m.at} className="flex flex-col items-center w-20 text-center">
                <div
                  className={cn(
                    'w-10 h-10 rounded-full flex items-center justify-center border-2 bg-white z-10',
                    reached
                      ? 'border-accent2-500 text-accent2-500'
                      : 'border-gray-200 text-gray-400',
                  )}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <p className={cn(
                  'mt-2 text-xs font-medium leading-tight',
                  reached ? 'text-brand' : 'text-gray-400',
                )}>
                  {m.label}
                </p>
                <p className="text-[10px] text-gray-400">Session {m.at}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
