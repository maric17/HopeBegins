'use client';

import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { userService } from '@/services/userService';
import { notify } from '@/lib/notifications';

const PRESET_AMOUNTS = [100, 500, 1000];

export function useGiveHope() {
  const [selectedAmount, setSelectedAmount] = useState<number>(500);
  const [isCustom, setIsCustom] = useState(false);

  const donationMutation = useMutation({
    mutationFn: () =>
      userService.submitDonation({
        amount: selectedAmount,
        donation_type: 'ONE_TIME',
      }),
    onSuccess: () => {
      notify.success(
        `Thank you for planting a ₱${selectedAmount} Hope Seed! Your generosity changes lives.`
      );
    },
    onError: (error: any) => {
      notify.error(error.message || 'Something went wrong. Please try again.');
    },
  });

  return {
    selectedAmount,
    setSelectedAmount,
    isCustom,
    setIsCustom,
    presetAmounts: PRESET_AMOUNTS,
    handleDonate: donationMutation.mutate,
    isPending: donationMutation.isPending,
    isSuccess: donationMutation.isSuccess,
  };
}
