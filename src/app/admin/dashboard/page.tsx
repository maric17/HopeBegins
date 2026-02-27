'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Users,
  MessageSquare,
  TrendingUp,
  DollarSign,
  ShieldCheck,
  MoreHorizontal,
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import { motion } from 'framer-motion';

const DATA = [
  { name: 'Mon', prayers: 40, donations: 2400 },
  { name: 'Tue', prayers: 30, donations: 1398 },
  { name: 'Wed', prayers: 200, donations: 9800 },
  { name: 'Thu', prayers: 278, donations: 3908 },
  { name: 'Fri', prayers: 189, donations: 4800 },
  { name: 'Sat', prayers: 239, donations: 3800 },
  { name: 'Sun', prayers: 349, donations: 4300 },
];

export default function AdminDashboard() {
  const STATS = [
    {
      label: 'Total Users',
      value: '14,208',
      icon: Users,
      color: 'text-blue-600',
      trend: '+12%',
    },
    {
      label: 'Live Prayers',
      value: '842',
      icon: MessageSquare,
      color: 'text-brand',
      trend: '+5%',
    },
    {
      label: 'Active Carriers',
      value: '456',
      icon: ShieldCheck,
      color: 'text-green-600',
      trend: '+18%',
    },
    {
      label: 'Donations',
      value: '$24,500',
      icon: DollarSign,
      color: 'text-amber-600',
      trend: '+32%',
    },
  ];

  return (
    <div className="p-12 space-y-12 bg-zinc-50/50 dark:bg-zinc-950/50 min-h-screen">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black italic tracking-tighter">
            The Hope Desk
          </h1>
          <p className="text-zinc-500 font-medium">
            System-wide overview and performance analytics.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-zinc-50 transition-all">
            Download Report
          </button>
          <button className="px-6 py-2 bg-brand text-brand-foreground rounded-xl text-xs font-black uppercase tracking-widest hover:bg-brand-hover transition-all">
            System Status: OK
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="border-none shadow-2xl shadow-zinc-200/50 dark:shadow-none transition-all hover:-translate-y-1 bg-white dark:bg-zinc-900">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                  {stat.label}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-black tabular-nums">
                  {stat.value}
                </div>
                <p className="text-[10px] font-bold mt-1 text-green-500 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  {stat.trend} from last month
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <Card className="border-none shadow-2xl bg-white dark:bg-zinc-900 p-6">
          <CardHeader className="px-0 pt-0 pb-8 flex flex-row items-center justify-between">
            <CardTitle className="text-xl font-black italic">
              Prayer Engagement
            </CardTitle>
            <MoreHorizontal className="h-5 w-5 text-zinc-400" />
          </CardHeader>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={DATA}>
                <defs>
                  <linearGradient id="colorPrayers" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--brand)"
                      stopOpacity={0.3}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--brand)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f0f0f0"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fontWeight: 700, fill: '#888' }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fontWeight: 700, fill: '#888' }}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: '20px',
                    border: 'none',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="prayers"
                  stroke="var(--brand)"
                  strokeWidth={4}
                  fillOpacity={1}
                  fill="url(#colorPrayers)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="border-none shadow-2xl bg-white dark:bg-zinc-900 p-6">
          <CardHeader className="px-0 pt-0 pb-8 flex flex-row items-center justify-between">
            <CardTitle className="text-xl font-black italic">
              Revenue Stream
            </CardTitle>
            <MoreHorizontal className="h-5 w-5 text-zinc-400" />
          </CardHeader>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DATA}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f0f0f0"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fontWeight: 700, fill: '#888' }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fontWeight: 700, fill: '#888' }}
                />
                <Tooltip
                  cursor={{ fill: '#f8fafc', radius: 10 }}
                  contentStyle={{
                    borderRadius: '20px',
                    border: 'none',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                  }}
                />
                <Bar
                  dataKey="donations"
                  fill="#10b981"
                  radius={[10, 10, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <div className="bg-brand rounded-[3rem] p-12 text-brand-foreground flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-black italic tracking-tight">
            Need Immediate Assistance?
          </h2>
          <p className="opacity-80 font-medium">
            Contact the technical support team or review active platform alerts.
          </p>
        </div>
        <button className="px-10 py-4 bg-brand-foreground text-brand rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all">
          Open Support Ticket
        </button>
      </div>
    </div>
  );
}
