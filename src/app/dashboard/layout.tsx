"use client";

import Link from 'next/link';
import { LayoutDashboard, Plane, Users, Wallet, Settings, Bell } from 'lucide-react';
import { usePathname } from 'next/navigation';

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
    <div className="flex h-[125vh] bg-[#F8F9FA] text-[#191c1d] font-sans relative overflow-hidden">
      {/* Ambient background from landing page */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJyMjy_PVttFGS5yqT-WyUxHGg-xvAAyfcfcvEMk-115EwWxYivfrx9V6DkVhV-1SFM8Z0bu0W9XBj4zVvzxcWVtCrHjq9-OKNJkNvuA9IxTIOCBZICc48Bh6iBf7H1xxBQLHzBcupGJTVIEnwDfzssIsnXHDpyR-A2DLcuV4cks66kZQSGO-n5-rHJD2-cs2naw-g6bhXy5NpYm37yoyhE8nqNLfqiiEdri72WclvmH4kxuWlp-9o4HmuSCJxPJlGPMy0pSMKTlPf')`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(40px) brightness(1.05)' }} />
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ background: `radial-gradient(circle at 10% 50%, rgba(2, 251, 255, 0.20) 0%, transparent 60%), radial-gradient(circle at 70% 20%, rgba(253, 139, 0, 0.20) 0%, transparent 60%)` }} />

      {/* Sidebar */}
      <aside className="w-[307px] m-5 mr-0 h-[calc(125vh-50px)] rounded-[2rem] bg-white/60 backdrop-blur-2xl border border-white/60 flex flex-col justify-between hidden md:flex relative z-10 shadow-xl overflow-hidden">
        <div>
          <div className="h-28 flex items-center px-10">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-[oklch(0.55_0.24_262.66)] rounded-lg flex items-center justify-center text-white font-bold text-2xl">T</div>
              <div>
                <h1 className="text-2xl font-black tracking-tighter text-[#191c1d] leading-none">TripNest</h1>
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
                  className={`flex items-center gap-3.5 px-5 py-3.5 rounded-xl transition-all ${isActive
                    ? 'bg-[oklch(0.55_0.24_262.66)] text-white font-semibold shadow-[0_4px_20px_rgba(52,152,219,0.25)] hover:scale-105 active:scale-95'
                    : 'text-[#444748] hover:text-[#191c1d] hover:bg-white/50 font-medium hover:scale-[1.02] active:scale-[0.98]'
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
          <div className="bg-white/40 backdrop-blur-md rounded-2xl p-5 border border-white/50 hover:shadow-lg transition-all">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-11 h-11 rounded-xl bg-white/80 border border-white shadow-sm flex items-center justify-center text-[oklch(0.55_0.24_262.66)] font-black text-base shrink-0">S</div>
              <div className="overflow-hidden">
                <p className="text-sm font-black text-[#191c1d] truncate">SAMMIAZAZ</p>
                <p className="text-[12px] text-[oklch(0.55_0.24_262.66)] font-bold uppercase tracking-wider">Free Plan</p>
              </div>
            </div>
            <Link href="/" className="w-full block text-center py-3 bg-white/60 backdrop-blur-xl border border-white/60 text-[#191c1d] rounded-xl text-sm font-bold hover:shadow-md hover:bg-white/80 transition-all">
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
