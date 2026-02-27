'use client';

import { PrayerForm } from './components/PrayerForm';
import { motion } from 'framer-motion';

export default function PrayersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Header Section */}
        <section className="relative pt-20 pb-16 px-6 overflow-hidden">
          {/* Decorative background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-transparent dark:from-emerald-950/20 -z-10" />

          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-zinc-800 dark:text-zinc-100 font-poppins tracking-tight">
              I Need Someone to Pray for Me
            </h1>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
              Every prayer matters. Share what&apos;s on your heart.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PrayerForm />
          </motion.div>
        </section>
      </main>
    </div>
  );
}
