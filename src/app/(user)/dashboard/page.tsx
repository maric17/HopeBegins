'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Heart, Share2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function UserDashboard() {
  const STATS = [
    {
      label: 'Your Prayers',
      value: '12',
      icon: MessageCircle,
      color: 'text-blue-500',
    },
    {
      label: 'Prayers Received',
      value: '48',
      icon: Heart,
      color: 'text-red-500',
    },
    {
      label: 'Shared Hope',
      value: '156',
      icon: Share2,
      color: 'text-green-500',
    },
    {
      label: 'Daily Streak',
      value: '7 days',
      icon: Sparkles,
      color: 'text-amber-500',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <div className="p-10 space-y-10">
      <motion.header
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-black italic tracking-tighter text-zinc-900 dark:text-zinc-50">
          Welcome back, User!
        </h1>
        <p className="text-zinc-500 mt-2 font-medium">
          Here is what&apos;s happening in your hope journey today.
        </p>
      </motion.header>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {STATS.map((stat) => (
          <motion.div key={stat.label} variants={item}>
            <Card className="border-none shadow-2xl shadow-zinc-200/50 dark:shadow-none bg-white dark:bg-zinc-900 transition-all hover:scale-[1.02] cursor-default">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  {stat.label}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-black tracking-tight">
                  {stat.value}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="border-none shadow-2xl bg-white dark:bg-zinc-900 h-full overflow-hidden">
            <CardHeader className="pb-4 border-b border-zinc-100 dark:border-zinc-800">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-blue-500" />
                Daily Hope
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8 flex flex-col justify-center items-center text-center px-12 pb-12">
              <div className="relative">
                <span className="absolute -top-8 -left-8 text-8xl text-blue-100 dark:text-blue-900/20 font-serif">
                  &ldquo;
                </span>
                <p className="text-2xl font-medium italic text-zinc-800 dark:text-zinc-200 leading-relaxed">
                  Hope is being able to see that there is light despite all of
                  the darkness.
                </p>
                <span className="absolute -bottom-12 -right-8 text-8xl text-blue-100 dark:text-blue-900/20 font-serif">
                  &rdquo;
                </span>
              </div>
              <footer className="mt-12 text-sm font-black uppercase tracking-widest text-blue-600 dark:text-blue-400">
                — Desmond Tutu
              </footer>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="border-none shadow-2xl bg-white dark:bg-zinc-900 h-full">
            <CardHeader className="pb-4 border-b border-zinc-100 dark:border-zinc-800">
              <CardTitle className="text-xl font-bold">
                Upcoming Hopecasts
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              {[
                {
                  title: 'Finding Peace',
                  time: 'Today at 8:00 PM',
                  color: 'bg-amber-100 text-amber-600',
                },
                {
                  title: 'Morning Gratitude',
                  time: 'Tomorrow at 7:00 AM',
                  color: 'bg-purple-100 text-purple-600',
                },
                {
                  title: 'Community Prayer',
                  time: 'Sat at 10:00 AM',
                  color: 'bg-blue-100 text-blue-600',
                },
              ].map((cast, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-2xl cursor-pointer transition-all group"
                >
                  <div
                    className={`h-12 w-12 ${cast.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                      {cast.title}
                    </p>
                    <p className="text-xs text-zinc-500 font-medium">
                      {cast.time}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
