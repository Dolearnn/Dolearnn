'use client';

import { useMemo } from 'react';
import { BookOpen, Flame, Target, Users } from 'lucide-react';
import PageHeader from '@/components/dashboard/PageHeader';
import { cn } from '@/lib/utils';
import { teacherSessions, teacherStudents } from '@/lib/store/teacher';
import type { Child, Session } from '@/lib/types';

export default function TeacherStudentsPage() {
  const students = teacherStudents();
  const sessions = teacherSessions();

  const byStudent = useMemo(() => {
    const map = new Map<string, Session[]>();
    for (const s of sessions) {
      const arr = map.get(s.childId) ?? [];
      arr.push(s);
      map.set(s.childId, arr);
    }
    return map;
  }, [sessions]);

  if (students.length === 0) {
    return (
      <div className="space-y-6">
        <PageHeader
          title="My students"
          description="Students you're currently assigned to."
        />
        <div className="bg-white rounded-2xl border border-dashed border-gray-300 p-10 text-center">
          <Users className="w-6 h-6 text-gray-400 mx-auto mb-2" />
          <p className="text-sm font-semibold text-gray-700">
            No students yet
          </p>
          <p className="text-xs text-gray-500 mt-1">
            New matches from the admin team will show up here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="My students"
        description={`You're currently assigned to ${students.length} student${students.length === 1 ? '' : 's'}.`}
      />
      <div className="grid lg:grid-cols-2 gap-4">
        {students.map((s) => (
          <StudentCard
            key={s.id}
            student={s}
            sessions={byStudent.get(s.id) ?? []}
          />
        ))}
      </div>
    </div>
  );
}

function StudentCard({
  student,
  sessions,
}: {
  student: Child;
  sessions: Session[];
}) {
  const completed = sessions.filter((s) => s.status === 'Completed').length;
  const upcoming = sessions
    .filter((s) => s.status === 'Upcoming')
    .sort((a, b) => a.startsAt.localeCompare(b.startsAt))[0];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center font-semibold">
          {student.fullName
            .split(' ')
            .map((p) => p[0])
            .join('')
            .slice(0, 2)}
        </div>
        <div>
          <p className="font-semibold text-gray-900">{student.fullName}</p>
          <p className="text-xs text-gray-500">
            {student.grade} · Age {student.age}
            {student.school ? ` · ${student.school}` : ''}
          </p>
        </div>
      </div>

      {student.goal && (
        <div className="bg-gray-50 rounded-xl p-3 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-4 h-4 text-brand" />
            <p className="text-xs font-semibold text-gray-700">
              {student.goal.title}
            </p>
          </div>
          <div className="h-1.5 bg-white rounded-full overflow-hidden">
            <div
              className="h-full bg-accent2-500"
              style={{ width: `${student.goal.progress}%` }}
            />
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 gap-2 text-center">
        <Stat icon={BookOpen} label="Sessions" value={completed} />
        <Stat
          icon={Flame}
          label="Streak"
          value={`${student.streak.current}w`}
        />
        <Stat label="Badges" value={student.badges.length} />
      </div>

      {student.intake && (
        <div className="mt-4 pt-4 border-t border-gray-100 space-y-2 text-xs">
          <Row label="Focus" value={student.intake.subject} />
          <Row label="Goal" value={student.intake.learningGoal} />
          <Row label="Level" value={student.intake.currentLevel} />
          {student.intake.specialNotes && (
            <Row label="Notes" value={student.intake.specialNotes} />
          )}
        </div>
      )}

      {upcoming && (
        <div
          className={cn(
            'mt-4 pt-4 border-t border-gray-100 text-xs text-gray-600',
          )}
        >
          Next session:{' '}
          <span className="font-medium text-gray-900">
            {new Date(upcoming.startsAt).toLocaleString(undefined, {
              weekday: 'short',
              day: 'numeric',
              month: 'short',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </span>{' '}
          · {upcoming.subject}
        </div>
      )}
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon?: React.ComponentType<{ className?: string }>;
  label: string;
  value: number | string;
}) {
  return (
    <div className="bg-gray-50 rounded-xl p-3">
      <div className="flex items-center justify-center gap-1 text-gray-500 mb-1">
        {Icon && <Icon className="w-3 h-3" />}
        <p className="text-[10px] uppercase tracking-wide">{label}</p>
      </div>
      <p className="text-base font-semibold text-gray-900">{value}</p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2">
      <span className="text-gray-400 uppercase tracking-wide text-[10px] w-14 shrink-0 pt-0.5">
        {label}
      </span>
      <span className="text-gray-700">{value}</span>
    </div>
  );
}
