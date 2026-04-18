import Link from 'next/link';
import { Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { teacherChild } from '@/lib/store/teacher';
import type { Session } from '@/lib/types';

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleString(undefined, {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function StudentSessionRow({ session }: { session: Session }) {
  const child = teacherChild(session.childId);
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-4 flex flex-col sm:flex-row sm:items-center gap-4">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-medium text-accent2-600 bg-accent2-50 px-2 py-0.5 rounded-full">
            {session.subject}
          </span>
          <StatusBadge status={session.status} />
        </div>
        <p className="font-semibold text-gray-900">
          {child?.fullName ?? 'Student'}
        </p>
        <p className="text-xs text-gray-500 mt-1">
          {formatDate(session.startsAt)} · {session.durationMins} min
        </p>
      </div>
      <div className="flex items-center gap-2">
        {session.status === 'Upcoming' && (
          <Link href={session.meetLink} target="_blank" rel="noreferrer">
            <Button className="bg-brand hover:bg-brand-600 rounded-full">
              <Video className="w-4 h-4 mr-2" />
              Start
            </Button>
          </Link>
        )}
        {session.status === 'Completed' && !session.noteId && (
          <Link href="/teacher/notes">
            <Button variant="outline" className="rounded-full">
              Add notes
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: Session['status'] }) {
  const styles: Record<Session['status'], string> = {
    Upcoming: 'bg-brand/10 text-brand',
    Completed: 'bg-gray-100 text-gray-600',
    Cancelled: 'bg-red-50 text-red-600',
  };
  return (
    <span
      className={cn(
        'text-[11px] font-medium px-2 py-0.5 rounded-full',
        styles[status],
      )}
    >
      {status}
    </span>
  );
}
