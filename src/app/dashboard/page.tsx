import Link from 'next/link';
import HeroCarousel from './components/HeroCarousel';
import {
  Calendar, Clock, Users, Wallet, Send, Image as ImageIcon,
  Map as MapIcon, UploadCloud, Plus, Plane, MapPin, Heart,
  ArrowRight, MessageSquare, CloudSun, AlertCircle, TrendingUp,
  PieChart, Navigation, Camera, CreditCard, ChevronRight, CheckCircle2,
  Compass, Star, Globe, PlaneTakeoff, Sun, Search, Bell, Settings
} from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="space-y-12 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-700">

      {/* ================================================== */}
      {/* TOP SECTION */}
      {/* ================================================== */}
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pt-8 relative z-10">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
            Hi Sammi <span className="inline-block animate-wave">👋</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">
            Good Morning. Ready for your next adventure?
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Weather Widget */}
          <div className="flex items-center gap-4 bg-white dark:bg-[#111111] border border-slate-100 dark:border-white/10 px-5 py-2.5 rounded-full shadow-sm mr-2 hover:shadow-premium transition-all duration-300 cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center text-amber-500">
              <Sun size={20} className="animate-[spin_20s_linear_infinite]" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold leading-none">Delhi, India</p>
              <p className="text-sm font-bold text-slate-900 dark:text-white leading-none mt-1">32°C</p>
            </div>
          </div>

          {/* Search Button */}
          <button className="w-11 h-11 bg-white dark:bg-[#111111] border border-slate-100 dark:border-white/10 rounded-full flex items-center justify-center text-slate-500 shadow-sm hover:shadow-premium hover:text-slate-900 dark:hover:text-white transition-all">
            <Search size={18} strokeWidth={2.5} />
          </button>

          {/* Notification Button */}
          <button className="w-11 h-11 bg-white dark:bg-[#111111] border border-slate-100 dark:border-white/10 rounded-full flex items-center justify-center text-slate-500 shadow-sm hover:shadow-premium hover:text-slate-900 dark:hover:text-white transition-all relative">
            <Bell size={18} strokeWidth={2.5} />
            <span className="absolute top-3 right-3 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
          </button>

          {/* Settings Button */}
          <button className="w-11 h-11 bg-white dark:bg-[#111111] border border-slate-100 dark:border-white/10 rounded-full flex items-center justify-center text-slate-500 shadow-sm hover:shadow-premium hover:text-slate-900 dark:hover:text-white transition-all">
            <Settings size={18} strokeWidth={2.5} />
          </button>
        </div>
      </section>

      {/* ================================================== */}
      {/* FEATURED ACTIVE TRIP */}
      {/* ================================================== */}
      <HeroCarousel />

      {/* ================================================== */}
      {/* OVERALL STATS */}
      {/* ================================================== */}
      <section className="bg-white dark:bg-[#111111] rounded-[24px] p-6 shadow-premium border border-slate-100 dark:border-white/10 transition-all">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:divide-x divide-slate-100 dark:divide-white/5">
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 mb-3">
              <PlaneTakeoff size={20} strokeWidth={2.5} />
            </div>
            <p className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">12</p>
            <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mt-1">Trips</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-3">
              <Camera size={20} strokeWidth={2.5} />
            </div>
            <p className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">1.2k</p>
            <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mt-1">Photos</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="w-12 h-12 rounded-full bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center text-purple-600 mb-3">
              <Globe size={20} strokeWidth={2.5} />
            </div>
            <p className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">8</p>
            <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mt-1">Countries</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="w-12 h-12 rounded-full bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center text-amber-600 mb-3">
              <Calendar size={20} strokeWidth={2.5} />
            </div>
            <p className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">45</p>
            <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mt-1">Travel Days</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="w-12 h-12 rounded-full bg-rose-50 dark:bg-rose-500/10 flex items-center justify-center text-rose-600 mb-3">
              <Wallet size={20} strokeWidth={2.5} />
            </div>
            <p className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">$12.4k</p>
            <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mt-1">Total Spent</p>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 3-COLUMN DASHBOARD METRICS */}
      {/* ================================================== */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* COLUMN 1: Upcoming Trips */}
        <div className="bg-white dark:bg-[#111111] rounded-[24px] p-6 shadow-premium border border-slate-100 dark:border-white/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Upcoming Trips</h3>
            <Link href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">View All</Link>
          </div>
          <div className="space-y-4">
            {[
              { name: 'Swiss Alps Adventure', date: '15 - 22 Sep 2025', members: 2, daysLeft: 15, img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=400&q=80' },
              { name: 'Bali Getaway', date: '10 - 18 Oct 2025', members: 3, daysLeft: 40, img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80' }
            ].map((trip, i) => (
              <div key={i} className="flex items-center gap-4 bg-slate-50/50 dark:bg-white/[0.02] p-3 rounded-[16px] border border-slate-100 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/[0.04] transition-colors cursor-pointer group">
                <img src={trip.img} className="w-[72px] h-[72px] rounded-[12px] object-cover group-hover:scale-105 transition-transform" alt={trip.name} />
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">{trip.name}</h4>
                  <p className="text-[11px] text-slate-500 font-semibold flex items-center gap-1.5"><Calendar size={12} className="text-slate-400" /> {trip.date}</p>
                  <p className="text-[11px] text-slate-500 font-semibold flex items-center gap-1.5 mt-1"><Users size={12} className="text-slate-400" /> {trip.members} Members</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-blue-50 dark:bg-blue-500/10 text-blue-600 px-3 py-2 rounded-[12px] min-w-[60px]">
                  <span className="text-lg font-black leading-none">{trip.daysLeft}</span>
                  <span className="text-[8px] font-bold uppercase tracking-wider mt-1.5 text-blue-500 text-center">Days Left</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COLUMN 2: Recent Activity */}
        <div className="bg-white dark:bg-[#111111] rounded-[24px] p-6 shadow-premium border border-slate-100 dark:border-white/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recent Activity</h3>
          </div>
          <div className="space-y-0 divide-y divide-slate-100 dark:divide-white/5">
            <div className="flex items-center justify-between py-4 group cursor-pointer">
              <div className="flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&q=80" className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-white/10" alt="Rahul" />
                <div>
                  <p className="text-sm text-slate-700 dark:text-slate-300"><span className="font-bold text-slate-900 dark:text-white">Rahul</span> uploaded 24 photos from Santorini</p>
                  <p className="text-[11px] text-slate-400 font-semibold mt-1">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <img src="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=100&q=80" className="w-8 h-8 rounded-[8px] object-cover" alt="Thumb" />
                <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=100&q=80" className="w-8 h-8 rounded-[8px] object-cover" alt="Thumb" />
              </div>
            </div>

            <div className="flex items-center justify-between py-4 group cursor-pointer">
              <div className="flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-white/10" alt="Ananya" />
                <div>
                  <p className="text-sm text-slate-700 dark:text-slate-300"><span className="font-bold text-slate-900 dark:text-white">Ananya</span> created a new trip to Iceland</p>
                  <p className="text-[11px] text-slate-400 font-semibold mt-1">5 hours ago</p>
                </div>
              </div>
              <ChevronRight size={16} className="text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
            </div>

            <div className="flex items-center justify-between py-4 group cursor-pointer">
              <div className="flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-white/10" alt="You" />
                <div>
                  <p className="text-sm text-slate-700 dark:text-slate-300"><span className="font-bold text-slate-900 dark:text-white">You</span> added expenses for Bali Getaway</p>
                  <p className="text-[11px] text-slate-400 font-semibold mt-1">1 day ago</p>
                </div>
              </div>
              <ChevronRight size={16} className="text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
            </div>
          </div>
        </div>

        {/* COLUMN 3: Quick Actions */}
        <div className="bg-white dark:bg-[#111111] rounded-[24px] p-6 shadow-premium border border-slate-100 dark:border-white/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Quick Actions</h3>
          </div>
          <div className="grid grid-cols-2 gap-4 h-[calc(100%-3rem)]">
            <button className="flex items-center justify-center gap-3 p-4 rounded-[16px] bg-blue-50/80 hover:bg-blue-100/80 dark:bg-blue-500/10 dark:hover:bg-blue-500/20 transition-all border border-blue-100/50 dark:border-blue-500/20 group">
              <Plane className="text-blue-600" size={20} strokeWidth={2.5} />
              <span className="text-sm font-bold text-slate-900 dark:text-white">Plan a Trip</span>
            </button>
            <button className="flex items-center justify-center gap-3 p-4 rounded-[16px] bg-emerald-50/80 hover:bg-emerald-100/80 dark:bg-emerald-500/10 dark:hover:bg-emerald-500/20 transition-all border border-emerald-100/50 dark:border-emerald-500/20 group">
              <Wallet className="text-emerald-600" size={20} strokeWidth={2.5} />
              <span className="text-sm font-bold text-slate-900 dark:text-white">Add Expense</span>
            </button>
            <button className="flex items-center justify-center gap-3 p-4 rounded-[16px] bg-purple-50/80 hover:bg-purple-100/80 dark:bg-purple-500/10 dark:hover:bg-purple-500/20 transition-all border border-purple-100/50 dark:border-purple-500/20 group">
              <Users className="text-purple-600" size={20} strokeWidth={2.5} />
              <span className="text-sm font-bold text-slate-900 dark:text-white">Invite Friends</span>
            </button>
            <button className="flex items-center justify-center gap-3 p-4 rounded-[16px] bg-amber-50/80 hover:bg-amber-100/80 dark:bg-amber-500/10 dark:hover:bg-amber-500/20 transition-all border border-amber-100/50 dark:border-amber-500/20 group">
              <ImageIcon className="text-amber-600" size={20} strokeWidth={2.5} />
              <span className="text-sm font-bold text-slate-900 dark:text-white">Add Photos</span>
            </button>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
        {/* ================================================== */}
        {/* MEMORIES SECTION */}
        {/* ================================================== */}
        <section className="lg:col-span-8 space-y-6">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Recent Memories</h2>
              <p className="text-sm text-slate-500 font-medium mt-1">254 Photos • Last updated 2 hours ago</p>
            </div>
            <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors">
              View All <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[400px]">
            {/* Large Photo */}
            <div className="col-span-2 row-span-2 rounded-[24px] overflow-hidden relative group shadow-premium border border-slate-100 dark:border-white/10">
              <img src="https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Memory" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white font-bold text-lg">Taj Mahal at Sunrise</p>
              </div>
            </div>
            {/* Small Photos */}
            <div className="rounded-[24px] overflow-hidden relative group shadow-premium border border-slate-100 dark:border-white/10">
              <img src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Memory" />
            </div>
            <div className="rounded-[24px] overflow-hidden relative group shadow-premium border border-slate-100 dark:border-white/10">
              <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Memory" />
              <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center cursor-pointer hover:bg-slate-900/50 transition-colors backdrop-blur-[2px]">
                <span className="text-white font-bold text-xl">+250</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* EXPENSE OVERVIEW */}
        {/* ================================================== */}
        <section className="lg:col-span-4 space-y-6">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Expenses</h2>
              <p className="text-sm text-slate-500 font-medium mt-1">Total budget: ₹1,50,000</p>
            </div>
            <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors">
              View Report <ArrowRight size={16} />
            </button>
          </div>

          <div className="bg-white dark:bg-[#111111] rounded-[24px] p-8 border border-slate-100 dark:border-white/10 shadow-premium hover:shadow-premium-hover transition-all duration-300 h-[400px] flex flex-col">
            <div className="mb-6">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1.5">Total Expenses</p>
              <h3 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">₹42,500</h3>
            </div>

            {/* Mini Chart Mockup */}
            <div className="h-3 w-full rounded-full bg-slate-100 dark:bg-white/5 flex overflow-hidden mb-8">
              <div className="h-full bg-rose-500 w-[40%]" />
              <div className="h-full bg-blue-500 w-[25%]" />
              <div className="h-full bg-emerald-500 w-[20%]" />
              <div className="h-full bg-amber-500 w-[15%]" />
            </div>

            <div className="space-y-5 flex-1 overflow-y-auto pr-2 custom-scrollbar">
              {[
                { label: 'Food & Dining', amount: '₹17,000', color: 'bg-rose-500' },
                { label: 'Hotels', amount: '₹10,625', color: 'bg-blue-500' },
                { label: 'Flights & Cabs', amount: '₹8,500', color: 'bg-emerald-500' },
                { label: 'Tickets & Entry', amount: '₹6,375', color: 'bg-amber-500' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                    <span className="font-semibold text-sm text-slate-600 dark:text-slate-300">{item.label}</span>
                  </div>
                  <span className="font-bold text-sm text-slate-900 dark:text-white">{item.amount}</span>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 py-3.5 bg-slate-50 hover:bg-slate-100 dark:bg-white/5 dark:hover:bg-white/10 text-slate-900 dark:text-white font-semibold text-sm rounded-full transition-colors border border-slate-200 dark:border-white/10">
              View Detailed Split
            </button>
          </div>
        </section>
      </div>

      {/* ================================================== */}
      {/* TRAVEL DESTINATIONS */}
      {/* ================================================== */}
      <section className="space-y-6 mt-4">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Explore Destinations</h2>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
              <ChevronRight size={20} className="rotate-180" />
            </button>
            <button className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="flex overflow-x-auto hide-scrollbar gap-6 pb-8 -mx-8 px-8">
          {[
            { name: 'Kashmir', img: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=600&q=80', rating: '4.9', loc: 'India' },
            { name: 'Goa', img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80', rating: '4.7', loc: 'India' },
            { name: 'Kerala', img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80', rating: '4.8', loc: 'India' },
            { name: 'Thailand', img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&q=80', rating: '4.9', loc: 'Asia' },
            { name: 'Bali', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80', rating: '4.8', loc: 'Indonesia' },
          ].map((dest, i) => (
            <div key={i} className="flex-shrink-0 w-64 group cursor-pointer">
              <div className="h-80 rounded-[24px] overflow-hidden relative shadow-premium border border-slate-100 dark:border-white/10 mb-4">
                <img src={dest.img} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/30 dark:bg-slate-900/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-rose-500 transition-colors">
                  <Heart size={18} strokeWidth={2.5} />
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1.5 rounded-[12px] text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5 shadow-sm">
                  <Star size={12} className="fill-amber-400 text-amber-400" /> {dest.rating}
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{dest.name}</h3>
              <p className="text-sm font-medium text-slate-500 flex items-center gap-1.5">
                <MapPin size={14} className="text-slate-400" /> {dest.loc}
              </p>
            </div>
          ))}
        </div>
      </section>



    </div>
  );
}
