'use client';

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/dashboard/PageHeader';
import ChildProfileForm from '@/components/forms/ChildProfileForm';
import { getChildById } from '@/lib/store/client';
import type { Child } from '@/lib/types';

export default function ChildDetailPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const [child, setChild] = useState<Child | null | undefined>(undefined);

  useEffect(() => {
    setChild(getChildById(params.id) ?? null);
  }, [params.id]);

  if (child === undefined) {
    return <p className="text-sm text-gray-400">Loading…</p>;
  }
  if (child === null) {
    return (
      <div>
        <p className="text-sm text-gray-700">Child not found.</p>
        <Button
          onClick={() => router.push('/family/children')}
          className="mt-4"
          variant="outline"
        >
          Back to children
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl space-y-6">
      <PageHeader
        title={child.fullName}
        description={`Age ${child.age} · ${child.grade}${child.school ? ` · ${child.school}` : ''}`}
        action={
          <Link href={`/family/children/${child.id}/intake`}>
            <Button variant="outline" className="rounded-full">
              {child.intake ? 'Update intake' : 'Fill intake'}
            </Button>
          </Link>
        }
      />

      <section className="bg-white rounded-2xl border border-gray-200 p-6">
        <h2 className="text-sm font-semibold text-gray-700 mb-4">
          Profile details
        </h2>
        <ChildProfileForm mode="edit" initial={child} />
      </section>

      <section className="bg-white rounded-2xl border border-gray-200 p-6">
        <h2 className="text-sm font-semibold text-gray-700 mb-4">
          Intake summary
        </h2>
        {child.intake ? (
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <Row label="Subject" value={child.intake.subject} />
            <Row label="Goal" value={child.intake.learningGoal} />
            <Row label="Level" value={child.intake.currentLevel} />
            <Row label="Time" value={child.intake.preferredTime} />
            <Row
              label="Days"
              value={child.intake.preferredDays.join(', ')}
            />
            <Row
              label="Sessions / week"
              value={String(child.intake.sessionsPerWeek)}
            />
            <Row label="Budget" value={child.intake.budget} />
            <Row
              label="Teacher gender"
              value={child.intake.teacherGenderPref}
            />
          </dl>
        ) : (
          <p className="text-sm text-gray-500">
            No intake submitted yet.{' '}
            <Link
              href={`/family/children/${child.id}/intake`}
              className="text-brand font-medium"
            >
              Fill it now
            </Link>
            .
          </p>
        )}
      </section>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs text-gray-500">{label}</dt>
      <dd className="text-sm text-gray-900 font-medium">{value}</dd>
    </div>
  );
}
