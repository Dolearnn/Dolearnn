import Link from 'next/link';
import LoginForm from '@/components/forms/LoginForm';

export default function LoginPage() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
      <h1 className="text-2xl font-bold text-brand mb-1">Welcome back</h1>
      <p className="text-sm text-gray-600 mb-6">
        Log in to manage your child&apos;s learning journey.
      </p>
      <LoginForm />
      <p className="mt-6 text-sm text-gray-600">
        No account?{' '}
        <Link href="/register" className="text-brand font-semibold">
          Register
        </Link>
      </p>
    </div>
  );
}
