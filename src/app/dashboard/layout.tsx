import Link from 'next/link';
import { LayoutDashboard, Plane, Users, Wallet, Settings, Bell } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[#F8F9FA] text-[#191c1d] font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-100 flex flex-col justify-between hidden md:flex">
        <div>
          <div className="h-20 flex items-center px-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#3498db] rounded-lg flex items-center justify-center text-white font-bold text-xl">T</div>
              <div>
                <h1 className="text-xl font-black tracking-tighter text-[#191c1d] leading-none">TripNest</h1>
                <span className="text-[9px] font-bold text-[#3498db] tracking-widest uppercase">Collab Space</span>
              </div>
            </Link>
          </div>
          
          <nav className="px-4 mt-6 space-y-1">
            <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-[#3498db] text-white rounded-xl font-semibold shadow-[0_4px_12px_rgba(52,152,219,0.25)]">
              <LayoutDashboard size={18} />
              <span className="text-sm">Dashboard</span>
            </Link>
            <Link href="/dashboard/trips" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-[#191c1d] hover:bg-slate-50 rounded-xl font-medium transition-colors">
              <Plane size={18} />
              <span className="text-sm">My Trips</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-[#191c1d] hover:bg-slate-50 rounded-xl font-medium transition-colors">
              <Users size={18} />
              <span className="text-sm">Shared Space</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-[#191c1d] hover:bg-slate-50 rounded-xl font-medium transition-colors">
              <Wallet size={18} />
              <span className="text-sm">Finances</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-[#191c1d] hover:bg-slate-50 rounded-xl font-medium transition-colors">
              <Settings size={18} />
              <span className="text-sm">Settings</span>
            </Link>
          </nav>
        </div>

        <div className="p-4">
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">S</div>
              <div>
                <p className="text-xs font-bold text-[#191c1d]">SAMMIAZAZ</p>
                <p className="text-[10px] text-slate-500 font-medium">Free Plan</p>
              </div>
            </div>
            <Link href="/" className="w-full block text-center py-2 bg-white border border-slate-200 text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-50 transition-colors">
              Sign Out
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
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
