import { Sparkles } from 'lucide-react';

export default function ComingSoon({ phase }: { phase: string }) {
  return (
    <div className="bg-white border border-dashed border-gray-300 rounded-2xl p-10 text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent2-100 text-brand mb-3">
        <Sparkles className="w-5 h-5" />
      </div>
      <p className="text-sm text-gray-700 font-medium">Coming in {phase}</p>
      <p className="text-xs text-gray-500 mt-1">
        Phase 0 scaffolding — real UI lands in the next phases.
      </p>
    </div>
  );
}
