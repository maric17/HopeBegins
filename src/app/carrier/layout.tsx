import Link from 'next/link';
import {
  LayoutDashboard,
  Users,
  Inbox,
  Settings,
  ShieldCheck,
} from 'lucide-react';

export default function CarrierLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const MENU_ITEMS = [
    { label: 'Carrier Hub', href: '/carrier/dashboard', icon: LayoutDashboard },
    { label: 'Open Prayers', href: '/carrier/dashboard', icon: Inbox },
    {
      label: 'Claimed Prayers',
      href: '/carrier/claimed-prayers',
      icon: ShieldCheck,
    },
    { label: 'Community', href: '#', icon: Users },
  ];

  return (
    <div className="flex min-h-screen bg-white dark:bg-black">
      <aside className="w-72 border-r border-zinc-100 dark:border-zinc-900 flex flex-col">
        <div className="p-8">
          <h2 className="text-3xl font-black italic tracking-tighter text-blue-600 dark:text-blue-400">
            Portal
          </h2>
          <p className="text-xs font-black uppercase tracking-widest text-zinc-400 mt-1">
            Prayer Carriers
          </p>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 text-sm font-bold tracking-tight rounded-2xl text-zinc-500 dark:text-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-8 border-t border-zinc-50 dark:border-zinc-900">
          <Link
            href="#"
            className="flex items-center gap-3 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            <Settings className="h-5 w-5" />
            <span className="text-xs font-bold uppercase tracking-widest">
              Carrier Settings
            </span>
          </Link>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto bg-zinc-50/50 dark:bg-zinc-950/50">
        {children}
      </main>
    </div>
  );
}
