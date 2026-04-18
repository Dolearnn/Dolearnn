'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import PageHeader from '@/components/dashboard/PageHeader';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import {
  adminChildById,
  adminSessions,
  adminTeacherById,
} from '@/lib/store/admin';
import type { Session, SessionStatus } from '@/lib/types';

const TAB_ORDER: ('All' | SessionStatus)[] = [
  'All',
  'Upcoming',
  'Completed',
  'Cancelled',
];

export default function AdminSessionsPage() {
  const sessions = adminSessions();
  const [query, setQuery] = useState('');

  const sorted = useMemo(
    () => [...sessions].sort((a, b) => b.startsAt.localeCompare(a.startsAt)),
    [sessions],
  );

  const filter = (status: (typeof TAB_ORDER)[number]) => {
    const q = query.trim().toLowerCase();
    return sorted.filter((s) => {
      if (status !== 'All' && s.status !== status) return false;
      if (!q) return true;
      const child = adminChildById(s.childId);
      const teacher = adminTeacherById(s.teacherId);
      return (
        s.subject.toLowerCase().includes(q) ||
        (child?.fullName ?? '').toLowerCase().includes(q) ||
        (teacher?.name ?? '').toLowerCase().includes(q)
      );
    });
  };

  const counts = useMemo(
    () => ({
      All: sessions.length,
      Upcoming: sessions.filter((s) => s.status === 'Upcoming').length,
      Completed: sessions.filter((s) => s.status === 'Completed').length,
      Cancelled: sessions.filter((s) => s.status === 'Cancelled').length,
    }),
    [sessions],
  );

  return (
    <div className="space-y-6">
      <PageHeader
        title="Sessions"
        description="Every session across the platform, at a glance."
      />

      <div className="relative w-full sm:w-80">
        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search subject, student or teacher"
          className="pl-9 rounded-full"
        />
      </div>

      <Tabs defaultValue="All" className="space-y-4">
        <TabsList className="bg-white border border-gray-200 rounded-full p-1 w-fit">
          {TAB_ORDER.map((t) => (
            <TabsTrigger
              key={t}
              value={t}
              className="rounded-full px-4 text-sm data-[state=active]:bg-brand data-[state=active]:text-white"
            >
              {t}
              <span className="ml-2 text-xs opacity-70">{counts[t]}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {TAB_ORDER.map((t) => {
          const rows = filter(t);
          return (
            <TabsContent key={t} value={t}>
              {rows.length === 0 ? (
                <div className="bg-white rounded-2xl border border-dashed border-gray-300 p-10 text-center">
                  <p className="text-sm text-gray-500">
                    No sessions match this filter.
                  </p>
                </div>
              ) : (
                <SessionTable rows={rows} />
              )}
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}

function SessionTable({ rows }: { rows: Session[] }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm min-w-[720px]">
          <thead className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
            <tr>
              <th className="text-left px-4 py-3 font-medium">When</th>
              <th className="text-left px-4 py-3 font-medium">Student</th>
              <th className="text-left px-4 py-3 font-medium">Teacher</th>
              <th className="text-left px-4 py-3 font-medium">Subject</th>
              <th className="text-right px-4 py-3 font-medium">Duration</th>
              <th className="text-right px-4 py-3 font-medium">Amount</th>
              <th className="text-right px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {rows.map((s) => {
              const child = adminChildById(s.childId);
              const teacher = adminTeacherById(s.teacherId);
              return (
                <tr key={s.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 whitespace-nowrap">
                    {new Date(s.startsAt).toLocaleString(undefined, {
                      day: 'numeric',
                      month: 'short',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    {child?.fullName ?? '—'}
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    {teacher?.name ?? '—'}
                  </td>
                  <td className="px-4 py-3 text-gray-700">{s.subject}</td>
                  <td className="px-4 py-3 text-right text-gray-500">
                    {s.durationMins} min
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-gray-900">
                    ${s.amount}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <StatusBadge status={s.status} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: SessionStatus }) {
  const styles: Record<SessionStatus, string> = {
    Upcoming: 'bg-brand/10 text-brand',
    Completed: 'bg-accent2-50 text-accent2-700',
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
