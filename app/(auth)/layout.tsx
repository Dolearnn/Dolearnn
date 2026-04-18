import Link from 'next/link';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col bg-accent2-50">
      <header className="w-full px-6 py-4">
        <Link href="/" className="text-brand font-bold text-xl">
          DoLearn
        </Link>
      </header>
      <div className="flex-1 flex items-center justify-center px-6 pb-12">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </main>
  );
}
