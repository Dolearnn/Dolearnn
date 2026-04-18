import Link from 'next/link';
import RegisterForm from '@/components/forms/RegisterForm';

export default function RegisterPage() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
      <h1 className="text-2xl font-bold text-brand mb-1">Create your account</h1>
      <p className="text-sm text-gray-600 mb-6">
        Sign up as a parent — we&apos;ll pair your child with the right teacher.
      </p>
      <RegisterForm />
      <p className="mt-6 text-sm text-gray-600">
        Have an account?{' '}
        <Link href="/login" className="text-brand font-semibold">
          Log in
        </Link>
      </p>
    </div>
  );
}
