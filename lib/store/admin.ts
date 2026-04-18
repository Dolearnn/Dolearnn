'use client';

import {
  children as mockChildren,
  parent as mockParent,
  payments as mockPayments,
  payouts as mockPayouts,
  sessions as mockSessions,
  teachers as mockTeachers,
} from '@/lib/mock';
import type {
  Child,
  Parent,
  Payment,
  Payout,
  Session,
  Teacher,
} from '@/lib/types';

export function adminParents(): Parent[] {
  return [mockParent];
}

export function adminChildren(): Child[] {
  return mockChildren;
}

export function adminTeachers(): Teacher[] {
  return mockTeachers;
}

export function adminSessions(): Session[] {
  return mockSessions;
}

export function adminPayments(): Payment[] {
  return mockPayments;
}

export function adminPayouts(): Payout[] {
  return mockPayouts;
}

export function adminPendingIntakes(): Child[] {
  return mockChildren.filter((c) => !!c.intake && !c.assignedTeacherId);
}

export function adminChildWithIntake(): Child[] {
  return mockChildren.filter((c) => !!c.intake);
}

export function adminTeacherById(id: string): Teacher | undefined {
  return mockTeachers.find((t) => t.id === id);
}

export function adminChildById(id: string): Child | undefined {
  return mockChildren.find((c) => c.id === id);
}

export function adminParentForChild(childId: string): Parent | undefined {
  const child = adminChildById(childId);
  if (!child) return undefined;
  return mockParent.id === child.parentId ? mockParent : undefined;
}

export function adminTeachersForSubject(subject: string): Teacher[] {
  const normalized = subject.toLowerCase();
  return mockTeachers.filter((t) =>
    t.subjects.some((s) => s.toLowerCase().includes(normalized)),
  );
}
