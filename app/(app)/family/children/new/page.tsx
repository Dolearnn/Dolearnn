import PageHeader from '@/components/dashboard/PageHeader';
import ChildProfileForm from '@/components/forms/ChildProfileForm';

export default function NewChildPage() {
  return (
    <div className="max-w-2xl">
      <PageHeader
        title="Add a child"
        description="Basic details first — you&apos;ll fill the intake form next."
      />
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <ChildProfileForm mode="create" />
      </div>
    </div>
  );
}
