'use client';

import { useEffect, useMemo, useState } from 'react';
import { CalendarX2 } from 'lucide-react';
import ChildSwitcher from '@/components/dashboard/ChildSwitcher';
import FeedbackCard from '@/components/dashboard/FeedbackCard';
import PageHeader from '@/components/dashboard/PageHeader';
import SessionRow from '@/components/dashboard/SessionRow';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  familyChildren,
  familySessionsForChild,
} from '@/lib/store/family';
import type { Child, Session, SessionStatus } from '@/lib/types';

const TAB_ORDER: SessionStatus[] = ['Upcoming', 'Completed', 'Cancelled'];

export default function FamilySessionsPage() {
  const [children, setChildren] = useState<Child[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const list = familyChildren();
    setChildren(list);
    setActiveId(list[0]?.id ?? null);
  }, []);

  const active = useMemo(
    () => children.find((c) => c.id === activeId) ?? children[0],
    [children, activeId],
  );

  const sessions: Session[] = useMemo(
    () => (active ? familySessionsForChild(active.id) : []),
    [active],
  );

  const grouped = useMemo(() => {
    const bucket: Record<SessionStatus, Session[]> = {
      Upcoming: [],
      Completed: [],
      Cancelled: [],
    };
    for (const s of sessions) bucket[s.status].push(s);
    bucket.Upcoming.sort((a, b) => a.startsAt.localeCompare(b.startsAt));
    bucket.Completed.sort((a, b) => b.startsAt.localeCompare(a.startsAt));
    bucket.Cancelled.sort((a, b) => b.startsAt.localeCompare(a.startsAt));
    return bucket;
  }, [sessions]);

  if (!active) {
    return <p className="text-sm text-gray-400">Loading…</p>;
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Sessions"
        description="Every lesson for your family — past, present and upcoming."
      />

      <ChildSwitcher
        children={children}
        activeId={active.id}
        onChange={setActiveId}
      />

      <Tabs defaultValue="Upcoming" className="space-y-4">
        <TabsList className="bg-white border border-gray-200 rounded-full p-1 w-fit">
          {TAB_ORDER.map((status) => (
            <TabsTrigger
              key={status}
              value={status}
              className="rounded-full px-4 text-sm data-[state=active]:bg-brand data-[state=active]:text-white"
            >
              {status}
              <span className="ml-2 text-xs opacity-70">
                {grouped[status].length}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="Upcoming" className="space-y-3">
          {grouped.Upcoming.length === 0 ? (
            <EmptyState
              title="Nothing scheduled"
              hint="New sessions will appear here once booked."
            />
          ) : (
            grouped.Upcoming.map((s) => <SessionRow key={s.id} session={s} />)
          )}
        </TabsContent>

        <TabsContent value="Completed" className="space-y-4">
          {grouped.Completed.length === 0 ? (
            <EmptyState
              title="No completed sessions yet"
              hint="Feedback from teachers will appear here after each session."
            />
          ) : (
            grouped.Completed.map((s) => (
              <div key={s.id} className="space-y-3">
                <SessionRow session={s} />
                <FeedbackCard session={s} />
              </div>
            ))
          )}
        </TabsContent>

        <TabsContent value="Cancelled" className="space-y-3">
          {grouped.Cancelled.length === 0 ? (
            <EmptyState
              title="No cancellations"
              hint="Any cancelled sessions will appear here."
            />
          ) : (
            grouped.Cancelled.map((s) => <SessionRow key={s.id} session={s} />)
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

function EmptyState({ title, hint }: { title: string; hint: string }) {
  return (
    <div className="bg-white border border-dashed border-gray-300 rounded-2xl p-10 text-center">
      <CalendarX2 className="w-6 h-6 text-gray-400 mx-auto mb-2" />
      <p className="text-sm font-semibold text-gray-700">{title}</p>
      <p className="text-xs text-gray-500 mt-1">{hint}</p>
    </div>
  );
}
