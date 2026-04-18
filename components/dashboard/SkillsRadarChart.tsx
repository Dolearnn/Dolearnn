'use client';

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';

export default function SkillsRadarChart({
  data,
}: {
  data: { subject: string; level: number }[];
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5">
      <p className="text-xs text-gray-500">Skills Radar</p>
      <p className="font-semibold text-gray-900 mb-4">
        Strength across subjects
      </p>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data} outerRadius="75%">
            <PolarGrid stroke="#E5E7EB" />
            <PolarAngleAxis
              dataKey="subject"
              tick={{ fill: '#4B5563', fontSize: 11 }}
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 10]}
              tick={{ fill: '#9CA3AF', fontSize: 10 }}
              axisLine={false}
            />
            <Radar
              name="Level"
              dataKey="level"
              stroke="#044272"
              fill="#54CD98"
              fillOpacity={0.5}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
