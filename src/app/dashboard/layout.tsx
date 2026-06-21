"use client";

import Link from 'next/link';
import { LayoutDashboard, Plane, Users, Wallet, Settings, Bell } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/theme-toggle';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'My Trips', href: '/dashboard/trips', icon: Plane },
    { name: 'Shared Space', href: '#', icon: Users },
    { name: 'Finances', href: '#', icon: Wallet },
    { name: 'Settings', href: '#', icon: Settings },
  ];
  return (
    <div className="flex h-[125vh] bg-[#F8F9FA] dark:bg-[#03050a] text-[#191c1d] dark:text-[#f8f9fa] font-sans relative overflow-hidden transition-colors duration-500" style={{ zoom: 0.8 }}>
      {/* Ambient background gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none dark:opacity-60 transition-opacity duration-500" style={{ background: `radial-gradient(circle at 10% 50%, rgba(166, 144, 124, 0.15) 0%, transparent 60%), radial-gradient(circle at 70% 20%, rgba(3, 96, 184, 0.15) 0%, transparent 60%)` }} />
      {/* Sidebar */}
      <aside className="w-[307px] m-5 mr-0 h-[calc(125vh-50px)] rounded-[2rem] bg-white dark:bg-[#111318] border border-slate-200 dark:border-[#1e2028] flex flex-col justify-between hidden md:flex relative z-10 shadow-sm overflow-hidden transition-colors duration-500">
        <div>
          <div className="h-28 flex items-center px-10">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-[oklch(0.55_0.24_262.66)] rounded-lg flex items-center justify-center text-white font-bold text-2xl">T</div>
              <div>
                <h1 className="text-2xl font-black tracking-tighter text-[#191c1d] dark:text-white leading-none">TripNest</h1>
                <span className="text-[11px] font-bold text-[oklch(0.55_0.24_262.66)] tracking-widest uppercase">Collab Space</span>
              </div>
            </Link>
          </div>

          <nav className="px-6 space-y-2">
            {navItems.map((item) => {
              const isActive = item.href === '/dashboard'
                ? pathname === '/dashboard'
                : item.href !== '#' && pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3.5 px-5 py-3.5 rounded-full transition-all duration-300 ${isActive
                    ? 'bg-[oklch(0.55_0.24_262.66)] text-white font-bold shadow-[0_10px_25px_rgba(52,152,219,0.4)] -translate-y-[2px]'
                    : 'text-[#444748] dark:text-zinc-400 hover:text-[#191c1d] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#1e2028] font-medium hover:-translate-y-[2px] hover:shadow-sm'
                    }`}
                >
                  <item.icon size={22} />
                  <span className="text-base">{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-6">
          <div className="bg-slate-50 dark:bg-[#1a1c23] rounded-2xl p-5 border border-slate-200 dark:border-[#272a35] hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-white dark:bg-[#272a35] border border-slate-200 dark:border-[#3a3f50] shadow-sm flex items-center justify-center text-[oklch(0.55_0.24_262.66)] font-black text-base shrink-0">S</div>
                <div className="overflow-hidden">
                  <p className="text-sm font-black text-[#191c1d] dark:text-white truncate">SAMMIAZAZ</p>
                  <p className="text-[12px] text-[oklch(0.55_0.24_262.66)] font-bold uppercase tracking-wider">Free Plan</p>
                </div>
              </div>
              <ThemeToggle />
            </div>
            <Link href="/" className="w-full block text-center py-3.5 bg-white dark:bg-[#1e2028] border border-slate-200 dark:border-[#272a35] text-[#191c1d] dark:text-white rounded-full text-sm font-bold transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:bg-slate-50 dark:hover:bg-[#272a35]">
              Sign Out
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-[125vh] overflow-hidden relative z-10">
        {/* Scrollable Area */}
        <div className="flex-1 overflow-auto px-6 pb-6 pt-0 lg:px-10 lg:pb-10 lg:pt-0">
          <div className="w-full max-w-[1600px] mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
