'use client';

import { useMemo } from 'react';
import NotificationList from '@/components/dashboard/NotificationList';
import { adminNotifications } from '@/lib/store/admin';

export default function AdminNotificationsPage() {
  const initial = useMemo(() => adminNotifications(), []);

  return (
    <NotificationList
      initialItems={initial}
      emptyDescription="Student deactivation alerts and operational updates will appear here."
    />
  );
}
