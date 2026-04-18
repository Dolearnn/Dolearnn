'use client';

import type { Child, IntakeForm, Parent } from '@/lib/types';

const KEYS = {
  parent: 'dolearn.parent',
  children: 'dolearn.children',
} as const;

function read<T>(key: string): T | null {
  if (typeof window === 'undefined') return null;
  const raw = window.localStorage.getItem(key);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

function write<T>(key: string, value: T) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

function remove(key: string) {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(key);
}

function id(prefix: string) {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}`;
}

export function getParent(): Parent | null {
  return read<Parent>(KEYS.parent);
}

export function saveParent(input: {
  name: string;
  email: string;
  whatsapp: string;
}): Parent {
  const parent: Parent = {
    id: id('p'),
    name: input.name,
    email: input.email,
    whatsapp: input.whatsapp,
    createdAt: new Date().toISOString(),
    childrenIds: [],
  };
  write(KEYS.parent, parent);
  return parent;
}

export function clearSession() {
  remove(KEYS.parent);
  remove(KEYS.children);
}

export function getChildren(): Child[] {
  return read<Child[]>(KEYS.children) ?? [];
}

export function getChildById(childId: string): Child | undefined {
  return getChildren().find((c) => c.id === childId);
}

export function addChild(
  input: Pick<Child, 'fullName' | 'age' | 'grade' | 'school'>,
): Child {
  const parent = getParent();
  if (!parent) throw new Error('No parent session');
  const child: Child = {
    id: id('c'),
    parentId: parent.id,
    fullName: input.fullName,
    age: input.age,
    grade: input.grade,
    school: input.school,
    streak: { current: 0, longest: 0, lastActiveAt: new Date().toISOString() },
    badges: [],
  };
  const next = [...getChildren(), child];
  write(KEYS.children, next);
  write(KEYS.parent, { ...parent, childrenIds: next.map((c) => c.id) });
  return child;
}

export function updateChild(childId: string, patch: Partial<Child>): Child | null {
  const list = getChildren();
  const idx = list.findIndex((c) => c.id === childId);
  if (idx === -1) return null;
  const updated: Child = { ...list[idx], ...patch };
  list[idx] = updated;
  write(KEYS.children, list);
  return updated;
}

export function saveIntake(childId: string, intake: IntakeForm): Child | null {
  return updateChild(childId, { intake });
}
