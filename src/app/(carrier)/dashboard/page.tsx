import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Heart, MessageCircle, TrendingUp } from 'lucide-react';

export default function CarrierDashboard() {
  const STATS = [
    {
      label: 'Active Support',
      value: '42',
      icon: ShieldCheck,
      color: 'text-blue-500',
    },
    {
      label: 'Prayers Claimed',
      value: '128',
      icon: Heart,
      color: 'text-red-500',
    },
    {
      label: 'Success Stories',
      value: '15',
      icon: TrendingUp,
      color: 'text-green-500',
    },
    {
      label: 'Pending Requests',
      value: '24',
      icon: MessageCircle,
      color: 'text-zinc-400',
    },
  ];

  return (
    <div className="p-12 space-y-12">
      <header>
        <h1 className="text-4xl font-black italic tracking-tighter">
          Carrier Command Hub
        </h1>
        <p className="text-zinc-500 font-medium">
          You are currently standing in the gap for 42 souls.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map((stat) => (
          <Card
            key={stat.label}
            className="border-none shadow-2xl shadow-zinc-200/50 dark:shadow-none transition-all hover:-translate-y-1"
          >
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
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-bold italic">Urgent Prayer Requests</h2>
        <div className="space-y-4">
          {[
            {
              user: 'Anon-452',
              title: 'Critical Health Issue',
              time: '2m ago',
            },
            {
              user: 'Sarah J.',
              title: 'Job Loss - Family Crisis',
              time: '14m ago',
            },
            {
              user: 'Anon-918',
              title: 'Depression/Anxiety Support',
              time: '1h ago',
            },
          ].map((req, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-6 bg-white dark:bg-zinc-900 rounded-3xl shadow-xl shadow-zinc-100/50 dark:shadow-none border border-zinc-100 dark:border-zinc-800 hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-center gap-6">
                <div className="h-12 w-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center font-black text-xs">
                  {req.user[0]}
                </div>
                <div>
                  <p className="font-black italic tracking-tight text-lg">
                    {req.title}
                  </p>
                  <p className="text-sm text-zinc-500 font-medium">
                    {req.user} • {req.time}
                  </p>
                </div>
              </div>
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-black uppercase tracking-widest rounded-full transition-all">
                Claim Prayer
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
