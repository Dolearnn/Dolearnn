'use client';

import { useMemo } from 'react';
import { ArrowDownRight, ArrowUpRight, TrendingUp, Wallet } from 'lucide-react';
import PageHeader from '@/components/dashboard/PageHeader';
import StatTile from '@/components/dashboard/StatTile';
import {
  adminParents,
  adminPayments,
  adminPayouts,
} from '@/lib/store/admin';
import type { Payment } from '@/lib/types';

export default function AdminPaymentsPage() {
  const payments = adminPayments();
  const payouts = adminPayouts();
  const parents = adminParents();

  const revenue = payments.reduce((sum, p) => sum + p.amount, 0);
  const paidOut = payouts.reduce((sum, p) => sum + p.amount, 0);
  const margin = revenue - paidOut;
  const marginPct = revenue > 0 ? Math.round((margin / revenue) * 100) : 0;

  const combined = useMemo(() => {
    type Row =
      | { kind: 'in'; date: string; amount: number; label: string; sub: string }
      | { kind: 'out'; date: string; amount: number; label: string; sub: string };
    const rows: Row[] = [];
    for (const p of payments) {
      const parent = parents.find((pa) => pa.id === p.parentId);
      rows.push({
        kind: 'in',
        date: p.createdAt,
        amount: p.amount,
        label: `${p.plan} · ${parent?.name ?? 'Parent'}`,
        sub: `${p.gateway} · ${p.sessionsUsed}/${p.sessionsIncluded} used`,
      });
    }
    for (const p of payouts) {
      rows.push({
        kind: 'out',
        date: p.date,
        amount: p.amount,
        label: `Payout via ${p.method}`,
        sub: 'Teacher earnings',
      });
    }
    return rows.sort((a, b) => b.date.localeCompare(a.date));
  }, [payments, payouts, parents]);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Payments"
        description="Revenue, teacher payouts and active plans."
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatTile
          icon={Wallet}
          label="Revenue"
          value={`$${revenue}`}
          sub="all-time family spend"
          accent
        />
        <StatTile
          icon={ArrowUpRight}
          label="Paid to teachers"
          value={`$${paidOut}`}
          sub={`${payouts.length} payouts`}
        />
        <StatTile
          icon={TrendingUp}
          label="Gross margin"
          value={`$${margin}`}
          sub={`${marginPct}% retained`}
        />
        <StatTile
          icon={ArrowDownRight}
          label="Active plans"
          value={payments.filter((p) => p.sessionsUsed < p.sessionsIncluded).length}
        />
      </div>

      <section>
        <h2 className="text-sm font-semibold text-gray-700 mb-3">
          Active plans
        </h2>
        {payments.length === 0 ? (
          <p className="text-xs text-gray-500">No plans yet.</p>
        ) : (
          <div className="grid lg:grid-cols-2 gap-3">
            {payments.map((p) => (
              <PlanRow
                key={p.id}
                payment={p}
                parentName={
                  parents.find((pa) => pa.id === p.parentId)?.name ?? 'Parent'
                }
              />
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="text-sm font-semibold text-gray-700 mb-3">Ledger</h2>
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
              <tr>
                <th className="text-left px-4 py-3 font-medium">Date</th>
                <th className="text-left px-4 py-3 font-medium">Type</th>
                <th className="text-left px-4 py-3 font-medium">Description</th>
                <th className="text-right px-4 py-3 font-medium">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {combined.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 whitespace-nowrap">
                    {new Date(row.date).toLocaleDateString(undefined, {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={
                        row.kind === 'in'
                          ? 'text-[11px] font-medium px-2 py-0.5 rounded-full bg-accent2-50 text-accent2-700'
                          : 'text-[11px] font-medium px-2 py-0.5 rounded-full bg-brand/10 text-brand'
                      }
                    >
                      {row.kind === 'in' ? 'Revenue' : 'Payout'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    <p className="font-medium text-gray-900">{row.label}</p>
                    <p className="text-xs text-gray-500">{row.sub}</p>
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-gray-900 whitespace-nowrap">
                    {row.kind === 'in' ? '+' : '−'}${row.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function PlanRow({
  payment,
  parentName,
}: {
  payment: Payment;
  parentName: string;
}) {
  const percent = (payment.sessionsUsed / payment.sessionsIncluded) * 100;
  const remaining = payment.sessionsIncluded - payment.sessionsUsed;
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-4">
      <div className="flex items-start justify-between gap-2 mb-2">
        <div>
          <p className="font-semibold text-gray-900 text-sm">{payment.plan}</p>
          <p className="text-xs text-gray-500">
            {parentName} · via {payment.gateway}
          </p>
        </div>
        <p className="text-sm font-semibold text-gray-900">${payment.amount}</p>
      </div>
      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-accent2-500"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="text-[11px] text-gray-500 mt-2">
        {payment.sessionsUsed}/{payment.sessionsIncluded} used · {remaining}{' '}
        remaining
      </p>
    </div>
  );
}

