import { cn } from '@/lib/utils';
import { familySessionNote, familyTeacher } from '@/lib/store/family';
import type { Session } from '@/lib/types';

export default function FeedbackCard({ session }: { session: Session }) {
  const note = familySessionNote(session.noteId);
  const teacher = familyTeacher(session.teacherId);
  if (!note) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-4">
        <p className="text-xs text-gray-500">
          Feedback pending — teacher submits notes after the session.
        </p>
      </div>
    );
  }
  const perfColor =
    note.performance === 'Excellent'
      ? 'bg-accent2-100 text-accent2-700'
      : note.performance === 'Good'
      ? 'bg-brand/10 text-brand'
      : 'bg-amber-50 text-amber-700';
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5">
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-sm font-semibold text-gray-900">{teacher.name}</p>
          <p className="text-xs text-gray-500">
            {session.subject} ·{' '}
            {new Date(session.startsAt).toLocaleDateString(undefined, {
              day: 'numeric',
              month: 'short',
            })}
          </p>
        </div>
        <span
          className={cn(
            'text-xs font-semibold px-2 py-1 rounded-full',
            perfColor,
          )}
        >
          {note.performance}
        </span>
      </div>
      <div className="space-y-2 text-sm">
        <Row label="Covered" value={note.covered} />
        <Row label="Focus next" value={note.focusNext} />
        {note.concerns && <Row label="Concerns" value={note.concerns} />}
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-wide text-gray-400">
        {label}
      </p>
      <p className="text-gray-700">{value}</p>
    </div>
  );
}
