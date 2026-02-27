'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  DollarSign,
  TrendingUp,
  Users,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import { motion } from 'framer-motion';

const DONATION_DATA = [
  { name: 'Jan', amount: 4000 },
  { name: 'Feb', amount: 3000 },
  { name: 'Mar', amount: 6000 },
  { name: 'Apr', amount: 8000 },
  { name: 'May', amount: 5000 },
  { name: 'Jun', amount: 9000 },
  { name: 'Jul', amount: 12000 },
];

export default function DonationsPage() {
  const STATS = [
    {
      label: 'Total Revenue',
      value: '$84,200',
      icon: DollarSign,
      color: 'text-green-600',
      trend: '+15.2%',
      isPositive: true,
    },
    {
      label: 'Average Donation',
      value: '$45.00',
      icon: TrendingUp,
      color: 'text-blue-600',
      trend: '+2.4%',
      isPositive: true,
    },
    {
      label: 'Recurring Donors',
      value: '1,204',
      icon: Users,
      color: 'text-purple-600',
      trend: '-1.2%',
      isPositive: false,
    },
    {
      label: 'Monthly Goal',
      value: '84%',
      icon: Calendar,
      color: 'text-amber-600',
      trend: '+4.5%',
      isPositive: true,
    },
  ];

  return (
    <div className="p-12 space-y-12 bg-zinc-50/50 dark:bg-zinc-950/50 min-h-screen">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black italic tracking-tighter">
            Financial Oversight
          </h1>
          <p className="text-zinc-500 font-medium">
            Track donations, campaign performance, and financial goals.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-zinc-50 transition-all shadow-sm">
            Export CSV
          </button>
          <button className="px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-xl">
            New Campaign
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
            <Card className="border-none shadow-2xl shadow-zinc-200/50 dark:shadow-none bg-white dark:bg-zinc-900">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                  {stat.label}
                </CardTitle>
                <div
                  className={`p-2 rounded-lg bg-zinc-50 dark:bg-zinc-800 ${stat.color}`}
                >
                  <stat.icon className="h-4 w-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-black tabular-nums">
                  {stat.value}
                </div>
                <div
                  className={`flex items-center gap-1 text-[10px] font-bold mt-2 ${stat.isPositive ? 'text-green-500' : 'text-red-500'}`}
                >
                  {stat.isPositive ? (
                    <ArrowUpRight className="h-3 w-3" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3" />
                  )}
                  {stat.trend}{' '}
                  <span className="text-zinc-400">vs last month</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <Card className="lg:col-span-2 border-none shadow-2xl bg-white dark:bg-zinc-900 p-8">
          <CardHeader className="px-0 pt-0 pb-10 flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-xl font-black italic">
                Revenue Over Time
              </CardTitle>
              <p className="text-sm text-zinc-500 font-medium">
                Monthly donation statistics for the current fiscal year.
              </p>
            </div>
            <select className="bg-zinc-50 dark:bg-zinc-800 border-none rounded-xl px-4 py-2 text-xs font-bold">
              <option>Year 2026</option>
              <option>Year 2025</option>
            </select>
          </CardHeader>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={DONATION_DATA}>
                <defs>
                  <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f1f5f9"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fontWeight: 700, fill: '#64748b' }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fontWeight: 700, fill: '#64748b' }}
                  dx={-10}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: '24px',
                    border: 'none',
                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)',
                    padding: '16px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="amount"
                  stroke="#10b981"
                  strokeWidth={4}
                  fillOpacity={1}
                  fill="url(#colorAmount)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="border-none shadow-2xl bg-white dark:bg-zinc-900 p-8 flex flex-col">
          <CardHeader className="px-0 pt-0 pb-10">
            <CardTitle className="text-xl font-black italic">
              Recent Transactions
            </CardTitle>
            <p className="text-sm text-zinc-500 font-medium">
              Monitor live donation activity.
            </p>
          </CardHeader>
          <div className="flex-1 space-y-6">
            {[
              {
                name: 'Michael Chen',
                amount: '+$50.00',
                time: '2 mins ago',
                initial: 'M',
                color: 'bg-blue-100 text-blue-600',
              },
              {
                name: 'Anonymous',
                amount: '+$1,200.00',
                time: '14 mins ago',
                initial: 'A',
                color: 'bg-zinc-100 text-zinc-600',
              },
              {
                name: 'Emma Watson',
                amount: '+$25.00',
                time: '1 hour ago',
                initial: 'E',
                color: 'bg-purple-100 text-purple-600',
              },
              {
                name: 'David Miller',
                amount: '+$100.00',
                time: '3 hours ago',
                initial: 'D',
                color: 'bg-green-100 text-green-600',
              },
            ].map((tx, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className={`h-10 w-10 rounded-full flex items-center justify-center font-black text-xs ${tx.color}`}
                  >
                    {tx.initial}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{tx.name}</p>
                    <p className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest">
                      {tx.time}
                    </p>
                  </div>
                </div>
                <div className="text-sm font-black text-green-600">
                  {tx.amount}
                </div>
              </div>
            ))}
          </div>
          <Button
            variant="ghost"
            className="w-full mt-8 rounded-2xl h-12 text-xs font-black uppercase tracking-widest hover:bg-zinc-50"
          >
            View All Activity
          </Button>
        </Card>
      </div>
    </div>
  );
}
