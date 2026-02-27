import Link from 'next/link';
import {
  LayoutDashboard,
  MessageCircle,
  Radio,
  Calendar,
  Sparkles,
} from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const MENU_ITEMS = [
    { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { label: 'Prayers', href: '/prayers', icon: MessageCircle },
    { label: 'Hopecasts', href: '/hopecasts', icon: Radio },
    { label: 'Daily Hope', href: '/daily-hope', icon: Calendar },
    { label: 'Hope AI', href: '/hope-ai', icon: Sparkles },
  ];

  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <aside className="w-72 border-r bg-white dark:bg-zinc-900 flex flex-col">
        <div className="p-8">
          <h2 className="text-3xl font-black italic tracking-tighter text-blue-600 dark:text-blue-400">
            HopeBegins
          </h2>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-6 border-t">
          <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-xl flex items-center gap-3 italic">
            <div className="h-10 w-10 rounded-full bg-blue-500" />
            <div className="text-xs">
              <p className="font-bold">User Name</p>
              <p className="text-zinc-500">Free Member</p>
            </div>
          </div>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
