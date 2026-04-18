'use client';

import {
  children as mockChildren,
  earnings as mockEarnings,
  payouts as mockPayouts,
  sessionNotes as mockSessionNotes,
  sessions as mockSessions,
  teachers as mockTeachers,
} from '@/lib/mock';
import type {
  Child,
  EarningEntry,
  Payout,
  Session,
  SessionNote,
  Teacher,
} from '@/lib/types';

export function teacherMe(): Teacher {
  return mockTeachers[0];
}

export function teacherSessions(teacherId?: string): Session[] {
  const id = teacherId ?? teacherMe().id;
  return mockSessions.filter((s) => s.teacherId === id);
}

export function teacherStudents(teacherId?: string): Child[] {
  const id = teacherId ?? teacherMe().id;
  const sessionChildIds = new Set(
    mockSessions.filter((s) => s.teacherId === id).map((s) => s.childId),
  );
  const assigned = mockChildren.filter(
    (c) => c.assignedTeacherId === id || sessionChildIds.has(c.id),
  );
  return assigned;
}

export function teacherChild(childId: string): Child | undefined {
  return mockChildren.find((c) => c.id === childId);
}

export function teacherNotes(teacherId?: string): SessionNote[] {
  const sessionIds = new Set(teacherSessions(teacherId).map((s) => s.id));
  return mockSessionNotes.filter((n) => sessionIds.has(n.sessionId));
}

export function teacherEarnings(): EarningEntry[] {
  return mockEarnings;
}

export function teacherPayouts(): Payout[] {
  return mockPayouts;
}
