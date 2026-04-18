'use client';

import { useMemo } from 'react';
import { Clock, DollarSign, TrendingUp, Wallet } from 'lucide-react';
import PageHeader from '@/components/dashboard/PageHeader';
import StatTile from '@/components/dashboard/StatTile';
import { cn } from '@/lib/utils';
import {
  teacherEarnings,
  teacherPayouts,
} from '@/lib/store/teacher';

export default function TeacherEarningsPage() {
  const earnings = teacherEarnings();
  const payouts = teacherPayouts();

  const totals = useMemo(() => {
    const paid = earnings
      .filter((e) => e.status === 'Paid')
      .reduce((sum, e) => sum + e.amount, 0);
    const pending = earnings
      .filter((e) => e.status === 'Pending')
      .reduce((sum, e) => sum + e.amount, 0);
    const payoutTotal = payouts.reduce((sum, p) => sum + p.amount, 0);
    const perSession = earnings.length
      ? Math.round(
          earnings.reduce((sum, e) => sum + e.amount, 0) / earnings.length,
        )
      : 0;
    return { paid, pending, payoutTotal, perSession };
  }, [earnings, payouts]);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Earnings"
        description="Your payouts and upcoming balance."
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatTile
          icon={Wallet}
          label="Lifetime payouts"
          value={`$${totals.payoutTotal}`}
          sub={`${payouts.length} transfer${payouts.length === 1 ? '' : 's'}`}
          accent
        />
        <StatTile
          icon={DollarSign}
          label="Paid this cycle"
          value={`$${totals.paid}`}
        />
        <StatTile
          icon={Clock}
          label="Pending"
          value={`$${totals.pending}`}
          sub={totals.pending > 0 ? 'settles next payout' : 'all cleared'}
        />
        <StatTile
          icon={TrendingUp}
          label="Avg per session"
          value={`$${totals.perSession}`}
        />
      </div>

      <section>
        <h2 className="text-sm font-semibold text-gray-700 mb-3">
          Session earnings
        </h2>
        {earnings.length === 0 ? (
          <div className="bg-white rounded-2xl border border-dashed border-gray-300 p-10 text-center">
            <p className="text-sm text-gray-500">
              No session earnings yet — teach your first session to get paid.
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
                <tr>
                  <th className="text-left px-4 py-3 font-medium">Date</th>
                  <th className="text-left px-4 py-3 font-medium">Student</th>
                  <th className="text-left px-4 py-3 font-medium">Subject</th>
                  <th className="text-right px-4 py-3 font-medium">Duration</th>
                  <th className="text-right px-4 py-3 font-medium">Amount</th>
                  <th className="text-right px-4 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {earnings.map((e) => (
                  <tr key={e.sessionId} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-700">
                      {new Date(e.date).toLocaleDateString(undefined, {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </td>
                    <td className="px-4 py-3 text-gray-700">{e.studentName}</td>
                    <td className="px-4 py-3 text-gray-700">{e.subject}</td>
                    <td className="px-4 py-3 text-right text-gray-500">
                      {e.durationMins} min
                    </td>
                    <td className="px-4 py-3 text-right font-semibold text-gray-900">
                      ${e.amount}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span
                        className={cn(
                          'text-[11px] font-medium px-2 py-0.5 rounded-full',
                          e.status === 'Paid'
                            ? 'bg-accent2-50 text-accent2-700'
                            : 'bg-amber-50 text-amber-700',
                        )}
                      >
                        {e.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section>
        <h2 className="text-sm font-semibold text-gray-700 mb-3">Payouts</h2>
        {payouts.length === 0 ? (
          <p className="text-xs text-gray-500">No payouts yet.</p>
        ) : (
          <div className="space-y-2">
            {payouts.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-2xl border border-gray-200 p-4 flex items-center justify-between"
              >
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    Payout via {p.method}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(p.date).toLocaleDateString(undefined, {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </p>
                </div>
                <p className="font-semibold text-gray-900">${p.amount}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
