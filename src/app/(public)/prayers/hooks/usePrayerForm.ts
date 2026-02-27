'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { prayerSchema } from '@/types/prayer';
import { prayerService } from '@/services/prayerService';

export function usePrayerForm() {
  const queryClient = useQueryClient();

  const form = useForm<any>({
    resolver: zodResolver(prayerSchema),
    defaultValues: {
      title: '',
      email: '',
      content: '',
      category: 'GENERAL',
      isAnonymous: false,
      shareFirstName: true,
      wantsFollowUp: false,
    },
  });

  const mutation = useMutation({
    mutationFn: prayerService.createPrayer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['prayers'] });
      form.reset();
    },
  });

  const onSubmit = (data: any) => {
    mutation.mutate(data);
  };

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
    isSubmitting: mutation.isPending,
  };
}
