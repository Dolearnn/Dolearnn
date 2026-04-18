'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { addChild, updateChild } from '@/lib/store/client';
import type { Child, GradeLevel } from '@/lib/types';

const grades: GradeLevel[] = [
  'Primary',
  'JSS',
  'SSS',
  'College Year 1',
  'College Year 2',
  'College Year 3',
  'College Year 4',
  'Other',
];

const schema = z.object({
  fullName: z.string().min(2, 'Enter your child&apos;s full name'),
  age: z.coerce.number().int().min(5, 'Minimum age 5').max(25, 'Maximum age 25'),
  grade: z.enum([
    'Primary',
    'JSS',
    'SSS',
    'College Year 1',
    'College Year 2',
    'College Year 3',
    'College Year 4',
    'Other',
  ]),
  school: z.string().optional(),
});

type Values = z.infer<typeof schema>;

export default function ChildProfileForm({
  initial,
  mode,
}: {
  initial?: Child;
  mode: 'create' | 'edit';
}) {
  const router = useRouter();
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: initial?.fullName ?? '',
      age: initial?.age ?? 10,
      grade: initial?.grade ?? 'Primary',
      school: initial?.school ?? '',
    },
  });

  const onSubmit = (values: Values) => {
    if (mode === 'create') {
      const child = addChild(values);
      router.push(`/family/children/${child.id}/intake`);
    } else if (initial) {
      updateChild(initial.id, values);
      router.push(`/family/children/${initial.id}`);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Child&apos;s full name</FormLabel>
              <FormControl>
                <Input placeholder="Zara Okafor" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input type="number" min={5} max={25} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="grade"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Grade level</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select grade" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {grades.map((g) => (
                      <SelectItem key={g} value={g}>
                        {g}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="school"
          render={({ field }) => (
            <FormItem>
              <FormLabel>School name (optional)</FormLabel>
              <FormControl>
                <Input placeholder="Bright Future Academy" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-brand hover:bg-brand-600 rounded-full"
        >
          {mode === 'create' ? 'Continue to intake' : 'Save changes'}
        </Button>
      </form>
    </Form>
  );
}
