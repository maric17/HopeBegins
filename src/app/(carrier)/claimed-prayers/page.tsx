'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Heart,
  Clock,
  MessageCircle,
  MoreVertical,
  CheckCircle2,
} from 'lucide-react';
import { motion } from 'framer-motion';

const CLAIMED_PRAYERS = [
  {
    id: '1',
    user: 'Anon-452',
    title: 'Health Recovery',
    content:
      'Praying for complete restoration and strength during this medical journey.',
    category: 'HEALTH',
    claimedAt: '2 hours ago',
    status: 'ACTIVE',
  },
  {
    id: '2',
    user: 'Sarah J.',
    title: 'New Job Provision',
    content:
      'Standing in faith for the perfect door to open and for peace during the transition.',
    category: 'FINANCE',
    claimedAt: '1 day ago',
    status: 'COMPLETED',
  },
];

export default function ClaimedPrayersPage() {
  return (
    <div className="p-12 space-y-12 bg-zinc-50/50 dark:bg-zinc-950/50 min-h-screen">
      <header>
        <h1 className="text-4xl font-black italic tracking-tighter">
          Your Prayer Mantle
        </h1>
        <p className="text-zinc-500 font-medium">
          You are currently carrying these souls in your daily prayers.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8">
        {CLAIMED_PRAYERS.map((prayer, idx) => (
          <motion.div
            key={prayer.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="border-none shadow-2xl bg-white dark:bg-zinc-900 overflow-hidden">
              <div
                className={`h-2 ${prayer.status === 'ACTIVE' ? 'bg-blue-600' : 'bg-green-500'}`}
              />
              <CardHeader className="flex flex-row items-start justify-between p-8 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <Badge
                      className={`${
                        prayer.status === 'ACTIVE'
                          ? 'bg-blue-50 text-blue-600'
                          : 'bg-green-50 text-green-600'
                      } border-none font-black text-[10px] tracking-widest uppercase`}
                    >
                      {prayer.status}
                    </Badge>
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Claimed {prayer.claimedAt}
                    </span>
                  </div>
                  <CardTitle className="text-2xl font-black italic tracking-tight pt-2">
                    {prayer.title}
                  </CardTitle>
                  <p className="text-sm font-bold text-zinc-500">
                    Carrier Note: {prayer.user}
                  </p>
                </div>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </CardHeader>
              <CardContent className="px-8 pb-8 space-y-6">
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                  {prayer.content}
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl h-12 px-8 font-black uppercase tracking-widest text-xs shadow-xl shadow-blue-100 dark:shadow-none">
                    <Heart className="mr-2 h-4 w-4" />
                    Send Encouragement
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-2xl h-12 px-8 font-black uppercase tracking-widest text-xs border-zinc-200"
                  >
                    <MessageCircle className="mr-2 h-4 w-4 text-zinc-400" />
                    Open Chat
                  </Button>
                  {prayer.status === 'ACTIVE' && (
                    <Button
                      variant="ghost"
                      className="rounded-2xl h-12 px-8 font-black uppercase tracking-widest text-xs text-green-600 hover:bg-green-50 transition-colors"
                    >
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Mark as Answered
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {CLAIMED_PRAYERS.length === 0 && (
        <Card className="border-dashed border-2 border-zinc-200 dark:border-zinc-800 bg-transparent text-center p-20">
          <p className="text-zinc-400 font-bold uppercase tracking-[0.2em]">
            No Claimed Prayers
          </p>
          <Button className="mt-6 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full h-12 px-10 font-bold">
            Find Someone to Support
          </Button>
        </Card>
      )}
    </div>
  );
}
