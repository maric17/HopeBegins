import Link from 'next/link';
import {
  LayoutDashboard,
  ShieldAlert,
  Radio,
  BarChart3,
  MoreVertical,
} from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const MENU_ITEMS = [
    { label: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { label: 'Manage Prayers', href: '/manage-prayers', icon: ShieldAlert },
    { label: 'Manage Hopecasts', href: '/manage-hopecasts', icon: Radio },
    { label: 'Financials', href: '/donations', icon: BarChart3 },
  ];

  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <aside className="w-72 border-r bg-white dark:bg-zinc-900 flex flex-col">
        <div className="p-8">
          <h2 className="text-3xl font-black italic tracking-tighter text-red-600 dark:text-red-400">
            The Desk
          </h2>
          <p className="text-xs font-black uppercase tracking-widest text-zinc-400 mt-1">
            Hope Begins Admin
          </p>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 text-sm font-bold tracking-tight rounded-2xl text-zinc-500 dark:text-zinc-500 hover:bg-red-50 dark:hover:bg-red-900/10 hover:text-red-600 dark:hover:text-red-400 transition-all"
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-6 border-t">
          <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-2xl flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-red-600 flex items-center justify-center text-white font-black">
                A
              </div>
              <div className="text-xs">
                <p className="font-bold text-red-600">Admin User</p>
                <p className="text-zinc-400">Super Admin</p>
              </div>
            </div>
            <MoreVertical className="h-4 w-4 text-red-600" />
          </div>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
