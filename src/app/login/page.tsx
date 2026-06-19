import Link from 'next/link';
import { Mail, Lock, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#191c1d] font-sans flex flex-col items-center justify-center relative overflow-hidden">
      {/* Mesh gradient overlay */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 20% 30%, rgba(71,234,237,0.15) 0%, transparent 40%),
                       radial-gradient(circle at 80% 70%, rgba(253,139,0,0.1) 0%, transparent 40%)`,
        }}
      />

      <Link href="/" className="absolute top-8 left-8 text-2xl font-black tracking-tighter text-[#191c1d] hover:text-[oklch(0.55_0.24_262.66)] transition-colors z-10">
        TripNest
      </Link>

      <div className="z-10 w-full max-w-md p-8">
        <div className="bg-white/60 backdrop-blur-xl border border-white/50 p-10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] text-center relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-[oklch(0.55_0.24_262.66)]/20 rounded-full blur-2xl" />
          
          <h1 className="text-3xl font-extrabold mb-2 tracking-tight">Welcome back</h1>
          <p className="text-slate-500 mb-8 font-medium">Please enter your details to sign in.</p>

          <form className="space-y-4 text-left">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5 ml-1">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail size={18} className="text-slate-400" />
                </div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-11 pr-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.24_262.66)]/50 focus:border-[oklch(0.55_0.24_262.66)] transition-all placeholder:text-slate-400 text-sm font-medium"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5 ml-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock size={18} className="text-slate-400" />
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.24_262.66)]/50 focus:border-[oklch(0.55_0.24_262.66)] transition-all placeholder:text-slate-400 text-sm font-medium"
                />
              </div>
              <div className="flex justify-end mt-2">
                <Link href="#" className="text-xs font-bold text-[oklch(0.55_0.24_262.66)] hover:text-[#2980b9] transition-colors">
                  Forgot password?
                </Link>
              </div>
            </div>

            <Link
              href="/dashboard"
              className="w-full py-3.5 mt-6 bg-[oklch(0.55_0.24_262.66)] text-white font-bold text-sm rounded-xl hover:bg-[#2980b9] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(52,152,219,0.3)]"
            >
              Sign In
              <ArrowRight size={18} />
            </Link>
          </form>

          <p className="mt-8 text-sm text-slate-500 font-medium">
            Don't have an account?{' '}
            <Link href="/signup" className="font-bold text-[#191c1d] hover:text-[oklch(0.55_0.24_262.66)] transition-colors">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
