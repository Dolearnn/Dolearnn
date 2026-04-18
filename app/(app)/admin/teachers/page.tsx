'use client';

import { useMemo, useState } from 'react';
import { Plus, Search, Star } from 'lucide-react';
import PageHeader from '@/components/dashboard/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import {
  adminChildren,
  adminSessions,
  adminTeachers,
} from '@/lib/store/admin';
import type { Teacher } from '@/lib/types';

export default function AdminTeachersPage() {
  const teachers = adminTeachers();
  const sessions = adminSessions();
  const children = adminChildren();

  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return teachers;
    return teachers.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.subjects.some((s) => s.toLowerCase().includes(q)),
    );
  }, [teachers, query]);

  const assignedByTeacher = useMemo(() => {
    const map = new Map<string, number>();
    for (const c of children) {
      if (!c.assignedTeacherId) continue;
      map.set(
        c.assignedTeacherId,
        (map.get(c.assignedTeacherId) ?? 0) + 1,
      );
    }
    return map;
  }, [children]);

  const upcomingByTeacher = useMemo(() => {
    const map = new Map<string, number>();
    for (const s of sessions) {
      if (s.status !== 'Upcoming') continue;
      map.set(s.teacherId, (map.get(s.teacherId) ?? 0) + 1);
    }
    return map;
  }, [sessions]);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Teachers"
        description={`Managing ${teachers.length} teachers across the DoLearn roster.`}
        action={
          <Button className="bg-brand hover:bg-brand-600 rounded-full">
            <Plus className="w-4 h-4 mr-2" />
            Invite teacher
          </Button>
        }
      />

      <div className="relative w-full sm:w-80">
        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name or subject"
          className="pl-9 rounded-full"
        />
      </div>

      {filtered.length === 0 ? (
        <div className="bg-white rounded-2xl border border-dashed border-gray-300 p-10 text-center">
          <p className="text-sm text-gray-500">No teachers match that search.</p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 gap-4">
          {filtered.map((t) => (
            <TeacherCard
              key={t.id}
              teacher={t}
              studentCount={assignedByTeacher.get(t.id) ?? 0}
              upcomingCount={upcomingByTeacher.get(t.id) ?? 0}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function TeacherCard({
  teacher,
  studentCount,
  upcomingCount,
}: {
  teacher: Teacher;
  studentCount: number;
  upcomingCount: number;
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 space-y-4">
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center font-semibold shrink-0">
          {teacher.name
            .split(' ')
            .map((p) => p[0])
            .join('')
            .slice(0, 2)}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-gray-900">{teacher.name}</p>
          <p className="text-xs text-gray-500 leading-snug">{teacher.bio}</p>
        </div>
        <div className="text-right shrink-0">
          <p
            className={cn(
              'text-sm font-semibold flex items-center gap-1',
              teacher.rating >= 4.8 ? 'text-accent2-600' : 'text-gray-700',
            )}
          >
            <Star className="w-3 h-3 fill-current" />
            {teacher.rating.toFixed(1)}
          </p>
          <p className="text-[11px] text-gray-500">
            {teacher.totalSessions} total
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {teacher.subjects.map((s) => (
          <span
            key={s}
            className="text-[11px] bg-accent2-50 text-accent2-700 px-2 py-0.5 rounded-full"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2 text-center">
        <Stat label="Students" value={studentCount} />
        <Stat label="Upcoming" value={upcomingCount} />
        <Stat label="Rate" value={`$${teacher.hourlyRate}`} />
      </div>

      <div className="pt-3 border-t border-gray-100 space-y-1">
        <p className="text-[10px] uppercase tracking-wide text-gray-400">
          Qualifications
        </p>
        <p className="text-xs text-gray-700">
          {teacher.qualifications.join(' · ')}
        </p>
      </div>

      <div className="text-[11px] text-gray-400">
        Joined{' '}
        {new Date(teacher.joinedAt).toLocaleDateString(undefined, {
          month: 'short',
          year: 'numeric',
        })}
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="bg-gray-50 rounded-xl p-2">
      <p className="text-[10px] uppercase tracking-wide text-gray-400">
        {label}
      </p>
      <p className="text-sm font-semibold text-gray-900 mt-0.5">{value}</p>
    </div>
  );
}
