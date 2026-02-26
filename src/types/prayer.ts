import { z } from 'zod';

export const prayerSchema = z.object({
  id: z.string().uuid().optional(),
  title: z.string().min(5, 'Title must be at least 5 characters'),
  content: z.string().min(10, 'Content must be at least 10 characters'),
  category: z.enum(['GENERAL', 'HEALTH', 'FINANCE', 'RELATIONSHIP', 'OTHER']),
  isAnonymous: z.boolean().default(false),
  userId: z.string().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

export type Prayer = z.infer<typeof prayerSchema>;

export const prayerResponseSchema = z.object({
  id: z.string().uuid(),
  prayerId: z.string().uuid(),
  content: z.string(),
  userId: z.string(),
  createdAt: z.string(),
});

export type PrayerResponse = z.infer<typeof prayerResponseSchema>;
