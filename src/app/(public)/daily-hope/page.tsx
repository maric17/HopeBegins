'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { dailyHopeService } from '@/services/dailyHopeService';

const formSchema = z.object({
  firstName: z.string().min(2, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
});

type FormValues = z.infer<typeof formSchema>;

const DAYS_PREVIEW = [
  { day: 1, title: 'The Seed of Hope' },
  { day: 2, title: 'Roots of Faith' },
  { day: 3, title: 'Light in Darkness' },
];

export default function DailyHopePage() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      await dailyHopeService.subscribe({
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
      });
      toast.success('Welcome to your 21-day Hope Journey!');
      reset();
    } catch (error: any) {
      toast.error(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfdfa]">
      {/* Header Section */}
      <section className="bg-brand-muted/40 pt-32 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#6b634d] font-poppins tracking-tight"
          >
            I Need Daily Hope
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto font-medium"
          >
            For the next 21 days, you&apos;ll receive a Daily Hope Drop to
            remind you that hope is real.
          </motion.p>
        </div>
      </section>

      {/* Subscription Card Section */}
      <section className="px-6 pb-32 -mt-12">
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] rounded-[2.5rem] overflow-hidden bg-white">
            <CardContent className="p-8 md:p-16 space-y-16">
              {/* Day Preview Containers */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {DAYS_PREVIEW.map((item, index) => (
                  <motion.div
                    key={item.day}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="bg-[#f4f7ed]/60 p-8 rounded-3xl text-center space-y-3 border border-brand/5 group hover:bg-[#f4f7ed] transition-colors duration-300"
                  >
                    <span className="text-[11px] font-bold tracking-[0.25em] text-[#b4c392] uppercase">
                      Day {item.day}
                    </span>
                    <h3 className="text-[#6b634d] font-bold text-xl leading-snug">
                      {item.title}
                    </h3>
                  </motion.div>
                ))}
              </div>

              {/* Subtext */}
              <p className="text-center text-zinc-400 font-medium italic">
                ...and 18 more days of encouragement, scripture, and reflection.
              </p>

              {/* Form Section */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-10 max-w-2xl mx-auto"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label
                      htmlFor="firstName"
                      className="text-[#6b634d] font-bold text-base ml-1"
                    >
                      First Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="Your first name"
                      className="bg-[#fcfdfa] border-zinc-200 focus:border-brand/40 h-14 rounded-2xl px-6 text-lg transition-all"
                      {...register('firstName')}
                    />
                    {errors.firstName && (
                      <p className="text-sm text-destructive mt-2 ml-1">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-3">
                    <Label
                      htmlFor="lastName"
                      className="text-[#6b634d] font-bold text-base ml-1"
                    >
                      Last Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Your last name"
                      className="bg-[#fcfdfa] border-zinc-200 focus:border-brand/40 h-14 rounded-2xl px-6 text-lg transition-all"
                      {...register('lastName')}
                    />
                    {errors.lastName && (
                      <p className="text-sm text-destructive mt-2 ml-1">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="email"
                    className="text-[#6b634d] font-bold text-base ml-1"
                  >
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-[#fcfdfa] border-zinc-200 focus:border-brand/40 h-14 rounded-2xl px-6 text-lg transition-all"
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-2 ml-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#b4c392] hover:bg-[#a3b281] text-white font-bold h-16 rounded-[1.25rem] text-xl transition-all duration-300 shadow-[0_12px_24px_-8px_rgba(180,195,146,0.4)] active:scale-[0.98]"
                >
                  {isSubmitting
                    ? 'Joining Journey...'
                    : 'Start My Hope Journey'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
