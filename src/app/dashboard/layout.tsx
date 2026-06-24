"use client";

import Link from 'next/link';
import { LayoutDashboard, Plane, Users, Compass, Settings, Bell } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/theme-toggle';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'My Trips', href: '/dashboard/trips', icon: Plane },
    { name: 'Community', href: '#', icon: Users },
    { name: 'Explore', href: '#', icon: Compass },
    { name: 'Settings', href: '#', icon: Settings },
  ];
  return (
    <div className="flex h-[125vh] bg-[#F8F9FA] dark:bg-[#0A0A0A] text-slate-900 dark:text-white font-sans relative overflow-hidden transition-colors duration-500" style={{ zoom: 0.8 }}>
      {/* Ambient background gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none dark:opacity-40 transition-opacity duration-500" style={{ background: `radial-gradient(circle at 10% 50%, rgba(37, 99, 235, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 20%, rgba(37, 99, 235, 0.08) 0%, transparent 50%)` }} />
      {/* Sidebar / Bottom Nav */}
      <aside className="fixed bottom-0 left-0 right-0 h-20 bg-white/95 dark:bg-[#111111]/95 backdrop-blur-xl border-t border-slate-200 dark:border-white/10 z-50 flex flex-row items-center justify-around px-2 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] md:w-[307px] md:m-5 md:mr-0 md:h-[calc(125vh-50px)] md:rounded-[24px] md:bg-white md:dark:bg-[#111111] md:border md:flex-col md:justify-between md:relative md:z-10 md:shadow-premium md:overflow-hidden md:transition-colors md:duration-500">
        <div className="flex w-full md:block">
          <div className="hidden md:flex h-28 items-center px-10">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-blue-600 rounded-[12px] flex items-center justify-center text-white font-bold text-2xl shadow-sm">T</div>
              <div>
                <h1 className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white leading-none">TripNest</h1>
                <span className="text-[11px] font-bold text-blue-600 tracking-widest uppercase">Collab Space</span>
              </div>
            </Link>
          </div>

          <nav className="flex flex-row w-full justify-around items-center px-2 py-2 md:flex-col md:px-6 md:space-y-2 md:py-0">
            {navItems.map((item) => {
              const isActive = item.href === '/dashboard'
                ? pathname === '/dashboard'
                : item.href !== '#' && pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex flex-col md:flex-row items-center justify-center md:justify-start md:w-full gap-1.5 md:gap-3.5 p-2 md:px-5 md:py-3.5 rounded-[16px] transition-all duration-300 ${isActive
                    ? 'text-blue-600 md:bg-blue-600 md:text-white font-bold md:shadow-[0_10px_25px_rgba(37,99,235,0.4)] md:-translate-y-[2px]'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white md:hover:bg-slate-50 md:dark:hover:bg-white/5 font-bold md:hover:-translate-y-[2px] md:hover:shadow-sm'
                    }`}
                >
                  <item.icon size={24} className="md:w-[22px] md:h-[22px]" />
                  <span className="text-[10px] md:text-base whitespace-nowrap">{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-6 hidden md:block">
          <div className="bg-slate-50 dark:bg-white/5 rounded-[20px] p-5 border border-slate-200 dark:border-white/10 hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-[14px] bg-white dark:bg-[#111111] border border-slate-200 dark:border-white/10 shadow-sm flex items-center justify-center text-blue-600 font-bold text-base shrink-0">S</div>
                <div className="overflow-hidden">
                  <p className="text-sm font-bold text-slate-900 dark:text-white truncate">SAMMIAZAZ</p>
                  <p className="text-[12px] text-blue-600 font-bold uppercase tracking-wider">Free Plan</p>
                </div>
              </div>
              <ThemeToggle />
            </div>
            <Link href="/" className="w-full flex items-center justify-center py-3.5 bg-white dark:bg-[#111111] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-[14px] text-sm font-bold transition-all duration-300 hover:-translate-y-[2px] hover:shadow-premium hover:bg-slate-50 dark:hover:bg-white/5">
              Sign Out
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-[125vh] overflow-hidden relative z-10 pb-20 md:pb-0">
        {/* Mobile Top Header */}
        <div className="md:hidden flex items-center justify-between p-6 pb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-[10px] flex items-center justify-center text-white font-bold text-lg shadow-sm">T</div>
            <h1 className="text-xl font-black tracking-tighter text-slate-900 dark:text-white leading-none">TripNest</h1>
          </div>
          <ThemeToggle />
        </div>

        {/* Scrollable Area */}
        <div className="flex-1 overflow-auto px-4 md:px-6 pb-6 pt-0 lg:px-10 lg:pb-10 lg:pt-0">
          <div className="w-full max-w-[1600px] mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
