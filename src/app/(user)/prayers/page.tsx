'use client';

import { PrayerForm } from '@/features/prayers/components/PrayerForm';
import { PrayerList } from '@/features/prayers/components/PrayerList';
import { motion } from 'framer-motion';

export default function PrayersPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 space-y-24">
      <motion.section
        className="text-center space-y-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-black italic tracking-tighter text-blue-600 dark:text-blue-400">
          Share a Prayer
        </h1>
        <p className="text-xl text-zinc-500 font-medium max-w-2xl mx-auto leading-relaxed">
          Join our global community in lifting each other up. Your voice
          matters, and your prayers make a difference.
        </p>
      </motion.section>

      <motion.section
        className="space-y-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">
            New Request
          </h2>
          <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
        </div>
        <PrayerForm />
      </motion.section>

      <motion.section
        className="space-y-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">
            Community Prayers
          </h2>
          <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
        </div>
        <PrayerList />
      </motion.section>
    </div>
  );
}
