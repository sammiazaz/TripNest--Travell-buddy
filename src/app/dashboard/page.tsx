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
          <h1 className="text-4xl font-[950] tracking-tight text-[#191c1d] dark:text-white mb-1">
            Hi Sammi <span className="inline-block animate-wave">👋</span>
          </h1>
          <p className="text-[#5c5f60] dark:text-slate-400 font-semibold text-sm">
            Good Morning. Ready for your next adventure?
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Glassmorphic Weather Widget */}
          <div className="flex items-center gap-4 bg-white dark:bg-[#111318] border border-slate-200 dark:border-[#1e2028] px-6 py-2.5 rounded-full shadow-sm mr-2 hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:-translate-y-[2px] transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
              <Sun size={22} className="animate-[spin_20s_linear_infinite]" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-slate-500 font-extrabold leading-none">Delhi, India</p>
              <p className="text-lg font-black text-[#191c1d] dark:text-white leading-none mt-1.5">32°C</p>
            </div>
          </div>

          {/* Glassmorphic Search Button */}
          <button className="w-11 h-11 bg-white dark:bg-[#1e2028] border border-slate-200 dark:border-[#272a35] rounded-full flex items-center justify-center text-slate-600 shadow-sm hover:shadow-md hover:scale-105 hover:bg-slate-50 dark:hover:bg-[#272a35] active:scale-95 transition-all">
            <Search size={18} />
          </button>

          {/* Glassmorphic Notification Button with Pulsing Dot */}
          <button className="w-11 h-11 bg-white dark:bg-[#1e2028] border border-slate-200 dark:border-[#272a35] rounded-full flex items-center justify-center text-slate-600 shadow-sm hover:shadow-md hover:scale-105 hover:bg-slate-50 dark:hover:bg-[#272a35] active:scale-95 transition-all relative">
            <Bell size={18} />
            <span className="absolute top-3.5 right-3.5 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
          </button>

          {/* Glassmorphic Settings Button */}
          <button className="w-11 h-11 bg-white dark:bg-[#1e2028] border border-slate-200 dark:border-[#272a35] rounded-full flex items-center justify-center text-slate-600 shadow-sm hover:shadow-md hover:scale-105 hover:bg-slate-50 dark:hover:bg-[#272a35] active:scale-95 transition-all">
            <Settings size={18} />
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
      <section className="bg-white dark:bg-[#111318] rounded-[2rem] p-6 shadow-sm border border-slate-200 dark:border-[#1e2028] hover:shadow-2xl transition-all">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:divide-x divide-black/5">
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[oklch(0.55_0.24_262.66)] mb-3">
              <PlaneTakeoff size={20} />
            </div>
            <p className="text-2xl font-black text-[#191c1d] dark:text-white">12</p>
            <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Trips</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-3">
              <Camera size={20} />
            </div>
            <p className="text-2xl font-black text-[#191c1d] dark:text-white">1.2k</p>
            <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Photos</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 mb-3">
              <Globe size={20} />
            </div>
            <p className="text-2xl font-black text-[#191c1d] dark:text-white">8</p>
            <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Countries</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 mb-3">
              <Calendar size={20} />
            </div>
            <p className="text-2xl font-black text-[#191c1d] dark:text-white">45</p>
            <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Travel Days</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-600 mb-3">
              <Wallet size={20} />
            </div>
            <p className="text-2xl font-black text-[#191c1d] dark:text-white">$12.4k</p>
            <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Total Spent</p>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* QUICK ACTIONS */}
      {/* ================================================== */}
      <section>
        <div className="flex overflow-x-auto hide-scrollbar gap-4 pb-4 -mx-8 px-8">
          {[
            { icon: Plus, label: 'Create Trip', color: 'bg-[oklch(0.55_0.24_262.66)] text-white border-transparent shadow-md' },
            { icon: CreditCard, label: 'Add Expense', color: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
            { icon: UploadCloud, label: 'Upload Photos', color: 'bg-purple-50 text-purple-600 border-purple-200' },
            { icon: Compass, label: 'Explore Places', color: 'bg-amber-50 text-amber-600 border-amber-200' },
            { icon: Users, label: 'Invite Members', color: 'bg-rose-50 text-rose-600 border-rose-200' },
            { icon: PieChart, label: 'View Settlements', color: 'bg-indigo-50 text-indigo-600 border-indigo-200' },
          ].map((action, i) => (
            <button key={i} className="flex-shrink-0 flex items-center gap-3 px-6 py-4 bg-white dark:bg-[#111318] border border-slate-200 dark:border-[#1e2028] rounded-full shadow-sm hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:-translate-y-[2px] transition-all duration-300 group">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${action.color} group-hover:scale-110 transition-transform`}>
                <action.icon size={18} />
              </div>
              <span className="font-bold text-sm text-[#191c1d] dark:text-white">{action.label}</span>
            </button>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* ================================================== */}
        {/* MEMORIES SECTION */}
        {/* ================================================== */}
        <section className="lg:col-span-8 space-y-6">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-[900] text-[#191c1d] dark:text-white tracking-[-0.01em]">Recent Memories</h2>
              <p className="text-sm text-[#444748] dark:text-slate-400 font-medium mt-1">254 Photos • Last updated 2 hours ago</p>
            </div>
            <button className="text-sm font-bold text-[oklch(0.55_0.24_262.66)] hover:text-[#2980b9] flex items-center gap-1">
              View All <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[400px]">
            {/* Large Photo */}
            <div className="col-span-2 row-span-2 rounded-[2rem] overflow-hidden relative group shadow-sm">
              <img src="https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Memory" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-bold">Taj Mahal at Sunrise</p>
              </div>
            </div>
            {/* Small Photos */}
            <div className="rounded-[1.5rem] overflow-hidden relative group shadow-sm">
              <img src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Memory" />
            </div>
            <div className="rounded-[1.5rem] overflow-hidden relative group shadow-sm">
              <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Memory" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer hover:bg-black/50 transition-colors">
                <span className="text-white font-black text-xl">+250</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* EXPENSE OVERVIEW */}
        {/* ================================================== */}
        <section className="lg:col-span-4 space-y-6">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-[900] text-[#191c1d] dark:text-white tracking-[-0.01em]">Expenses</h2>
          </div>

          <div className="bg-white dark:bg-[#111318] rounded-[2rem] p-8 border border-slate-200 dark:border-[#1e2028] shadow-lg hover:shadow-2xl transition-all h-[400px] flex flex-col">
            <div className="mb-6">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Total Expenses</p>
              <h3 className="text-4xl font-black text-[#191c1d] dark:text-white mt-2">₹42,500</h3>
            </div>

            {/* Mini Chart Mockup */}
            <div className="h-4 w-full rounded-full bg-slate-100 flex overflow-hidden mb-8">
              <div className="h-full bg-rose-500 w-[40%]" />
              <div className="h-full bg-blue-500 w-[25%]" />
              <div className="h-full bg-emerald-500 w-[20%]" />
              <div className="h-full bg-amber-500 w-[15%]" />
            </div>

            <div className="space-y-4 flex-1 overflow-y-auto pr-2 custom-scrollbar">
              {[
                { label: 'Food & Dining', amount: '₹17,000', color: 'bg-rose-500' },
                { label: 'Hotels', amount: '₹10,625', color: 'bg-blue-500' },
                { label: 'Flights & Cabs', amount: '₹8,500', color: 'bg-emerald-500' },
                { label: 'Tickets & Entry', amount: '₹6,375', color: 'bg-amber-500' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${item.color}`} />
                    <span className="font-bold text-sm text-slate-700">{item.label}</span>
                  </div>
                  <span className="font-bold text-sm text-[#191c1d] dark:text-white">{item.amount}</span>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 py-3.5 bg-[oklch(0.55_0.24_262.66)] text-white font-bold text-sm rounded-full shadow-[0_4px_15px_rgba(52,152,219,0.3)] hover:-translate-y-[2px] hover:shadow-[0_10px_25px_rgba(52,152,219,0.4)] transition-all duration-300">
              View Detailed Split
            </button>
          </div>
        </section>
      </div>

      {/* ================================================== */}
      {/* TRAVEL DESTINATIONS */}
      {/* ================================================== */}
      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-[900] text-[#191c1d] dark:text-white tracking-[-0.01em]">Explore Destinations</h2>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50">
              <ChevronRight size={20} className="rotate-180" />
            </button>
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-[#191c1d] dark:text-white hover:bg-slate-50">
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
              <div className="h-80 rounded-[2rem] overflow-hidden relative shadow-sm mb-4">
                <img src={dest.img} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/30 dark:bg-[#111318]/50 rounded-full flex items-center justify-center text-white hover:bg-slate-50 dark:hover:bg-[#272a35] hover:text-rose-500 transition-colors">
                  <Heart size={18} />
                </div>
                <div className="absolute bottom-4 left-4 bg-white dark:bg-[#111318] px-3 py-1.5 rounded-xl text-xs font-bold text-[#191c1d] dark:text-white flex items-center gap-1 shadow-sm">
                  <Star size={12} className="fill-amber-400 text-amber-400" /> {dest.rating}
                </div>
              </div>
              <h3 className="text-lg font-black text-[#191c1d] dark:text-white">{dest.name}</h3>
              <p className="text-sm font-medium text-slate-500 flex items-center gap-1 mt-1">
                <MapPin size={14} /> {dest.loc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* ================================================== */}
        {/* UPCOMING TRIPS */}
        {/* ================================================== */}
        <section className="lg:col-span-7 space-y-6">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-[900] text-[#191c1d] dark:text-white tracking-[-0.01em]">Upcoming Trips</h2>
          </div>

          <div className="space-y-4">
            {[
              { name: 'Goa Weekend', date: 'Oct 12 - 15, 2026', img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&q=80', members: 4, budget: '₹15,000' },
              { name: 'Kashmir Escape', date: 'Dec 01 - 10, 2026', img: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=400&q=80', members: 2, budget: '₹60,000' },
              { name: 'Thailand Tour', date: 'Feb 14 - 24, 2027', img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400&q=80', members: 6, budget: '₹1,20,000' },
            ].map((trip, i) => (
              <div key={i} className="bg-white dark:bg-[#111318] p-4 rounded-[2rem] border border-slate-200 dark:border-[#1e2028] shadow-lg flex items-center gap-6 group hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer">
                <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                  <img src={trip.img} alt={trip.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-black text-[#191c1d] dark:text-white mb-1">{trip.name}</h3>
                  <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {trip.date}</span>
                    <span className="flex items-center gap-1"><Users size={14} /> {trip.members}</span>
                  </div>
                </div>
                <div className="hidden md:block text-right pr-4">
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Budget</p>
                  <p className="font-black text-[#191c1d] dark:text-white">{trip.budget}</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-[oklch(0.55_0.24_262.66)] group-hover:border-[oklch(0.55_0.24_262.66)] group-hover:text-white transition-colors">
                  <ChevronRight size={20} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================================================== */}
        {/* TRIP ACTIVITY */}
        {/* ================================================== */}
        <section className="lg:col-span-5 space-y-6">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-[900] text-[#191c1d] dark:text-white tracking-[-0.01em]">Recent Activity</h2>
          </div>

          <div className="bg-white dark:bg-[#111318] rounded-[2rem] p-8 border border-slate-200 dark:border-[#1e2028] shadow-lg hover:shadow-2xl transition-all">
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-100">
              {[
                { user: 'R', name: 'Rahul', action: 'uploaded 15 photos', time: '2h ago', icon: ImageIcon, color: 'bg-purple-100 text-purple-600' },
                { user: 'A', name: 'Ali', action: 'added Hotel Expense ₹8,000', time: '5h ago', icon: CreditCard, color: 'bg-rose-100 text-rose-600' },
                { user: 'Am', name: 'Aman', action: 'joined the trip', time: '1d ago', icon: Users, color: 'bg-emerald-100 text-emerald-600' },
                { user: 'S', name: 'Sammi', action: 'created itinerary', time: '2d ago', icon: Calendar, color: 'bg-blue-100 text-[oklch(0.55_0.24_262.66)]' },
              ].map((act, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  {/* Marker */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-100 text-slate-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                    <act.icon size={14} />
                  </div>
                  {/* Card */}
                  <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border border-slate-100 bg-slate-50/50 shadow-sm">
                    <div className="flex items-center gap-3 mb-1">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${act.color}`}>
                        {act.user}
                      </div>
                      <p className="text-sm font-bold text-[#191c1d] dark:text-white">{act.name}</p>
                    </div>
                    <p className="text-sm font-medium text-slate-600 mb-2">{act.action}</p>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{act.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* ================================================== */}
        {/* WEATHER & TRAVEL INFO */}
        {/* ================================================== */}
        <section className="space-y-6">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-[900] text-[#191c1d] dark:text-white tracking-[-0.01em]">Kerala Weather</h2>
          </div>

          <div className="bg-gradient-to-br from-[oklch(0.55_0.24_262.66)] to-[#2980b9] rounded-[2rem] p-8 text-white shadow-lg relative overflow-hidden h-[240px] flex flex-col justify-between">
            <CloudSun size={120} className="absolute -top-4 -right-8 text-white/20" />

            <div className="flex justify-between items-start z-10">
              <div>
                <h3 className="text-5xl font-black mb-2">28°C</h3>
                <p className="font-bold text-white/80">Partly Cloudy</p>
              </div>
              <div className="bg-white/30 dark:bg-[#111318]/50 px-4 py-2 rounded-xl text-sm font-bold">
                Today
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 z-10">
              <div className="bg-black/10 rounded-xl p-4">
                <p className="text-[10px] uppercase tracking-wider text-white/60 font-bold mb-1">Rain Probability</p>
                <p className="text-xl font-bold">40%</p>
              </div>
              <div className="bg-black/10 rounded-xl p-4 flex items-center gap-3">
                <AlertCircle className="text-amber-300" size={24} />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/60 font-bold mb-1">Travel Alert</p>
                  <p className="text-sm font-bold">Heavy traffic expected</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* RECOMMENDED FOR YOU */}
        {/* ================================================== */}
        <section className="space-y-6">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-[900] text-[#191c1d] dark:text-white tracking-[-0.01em]">Recommended</h2>
          </div>

          <div className="grid grid-cols-2 gap-4 h-[240px]">
            {[
              { name: 'Manali', img: 'https://images.unsplash.com/photo-1605649487212-4dcb1b600615?w=400&q=80' },
              { name: 'Ladakh', img: 'https://images.unsplash.com/photo-1596783069151-54dfb9ed54cc?w=400&q=80' },
            ].map((rec, i) => (
              <div key={i} className="rounded-[2rem] overflow-hidden relative group shadow-sm">
                <img src={rec.img} alt={rec.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-black">{rec.name}</h3>
                  <button className="mt-2 text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    View Guide <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

    </div>
  );
}
