'use client';

import { useMemo } from 'react';
import NotificationList from '@/components/dashboard/NotificationList';
import { teacherMe, teacherNotifications } from '@/lib/store/teacher';

export default function TeacherNotificationsPage() {
  const teacher = teacherMe();
  const initial = useMemo(() => teacherNotifications(teacher.id), [teacher.id]);

  return (
    <NotificationList
      initialItems={initial}
      emptyDescription="Student deactivation alerts and schedule updates will appear here."
    />
  );
}
