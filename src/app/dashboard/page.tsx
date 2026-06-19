import Link from 'next/link';
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
      <section className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 pt-8">
        <div>
          <h1 className="text-3xl font-extrabold text-[#191c1d] tracking-tight mb-1">
            Hi Sammi 👋
          </h1>
          <p className="text-slate-500 font-medium text-sm">
            Good Morning. Ready for your next adventure?
          </p>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-4 bg-[#3498db] px-6 py-3 rounded-full shadow-[0_4px_16px_rgba(52,152,219,0.3)] mr-2 md:mr-4">
            <Sun size={24} className="text-white" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-blue-100 font-bold leading-none">Delhi, India</p>
              <p className="text-base font-black text-white leading-none mt-1">32°C</p>
            </div>
          </div>
          <button className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-[#191c1d] transition-colors">
            <Search size={20} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-[#191c1d] transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-2.5 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-[#F8F9FA]" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-[#191c1d] transition-colors">
            <Settings size={20} />
          </button>
        </div>
      </section>

      {/* ================================================== */}
      {/* FEATURED ACTIVE TRIP */}
      {/* ================================================== */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 px-1">
          <div className="w-2 h-2 rounded-full bg-[#3498db]"></div>
          <h2 className="text-base font-extrabold text-[#191c1d] tracking-tight">Active Now</h2>
        </div>
        <div className="relative w-full h-[460px] rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 group">
          <img
            src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1600&q=80"
            alt="Monsoon in Kerala"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          <div className="absolute inset-0 p-10 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="bg-[#3498db] text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-md flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                ACTIVE TRIP
              </span>
              <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">
                Day 3 of 10
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <h2 className="text-5xl font-black text-white tracking-tight mb-4 drop-shadow-md">Monsoon in Kerala</h2>

                <div className="flex flex-wrap items-center gap-6 text-white/90">
                  <div className="flex items-center gap-2 font-medium">
                    <Calendar size={18} className="text-[#3498db]" />
                    Aug 10 - Aug 20, 2026
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <Users size={18} className="text-[#3498db]" />
                    5 Members
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <Wallet size={18} className="text-[#3498db]" />
                    ₹42,500 Budget
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button className="px-6 py-3.5 bg-white text-[#191c1d] hover:bg-slate-50 font-bold rounded-xl shadow-lg transition-transform active:scale-95 flex items-center gap-2">
                  <MapIcon size={18} />
                  Open Trip
                </button>
                <button className="px-6 py-3.5 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white font-bold rounded-xl shadow-lg transition-transform active:scale-95 flex items-center gap-2">
                  <Calendar size={18} />
                  View Timeline
                </button>
                <button className="px-6 py-3.5 bg-[#3498db] hover:bg-[#2980b9] text-white font-bold rounded-xl shadow-lg transition-transform active:scale-95 flex items-center gap-2">
                  <CreditCard size={18} />
                  Add Expense
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* OVERALL STATS */}
      {/* ================================================== */}
      <section className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:divide-x divide-slate-100">
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#3498db] mb-3">
              <PlaneTakeoff size={20} />
            </div>
            <p className="text-2xl font-black text-[#191c1d]">12</p>
            <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Trips</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-3">
              <Camera size={20} />
            </div>
            <p className="text-2xl font-black text-[#191c1d]">1.2k</p>
            <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Photos</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 mb-3">
              <Globe size={20} />
            </div>
            <p className="text-2xl font-black text-[#191c1d]">8</p>
            <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Countries</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 mb-3">
              <Calendar size={20} />
            </div>
            <p className="text-2xl font-black text-[#191c1d]">45</p>
            <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Travel Days</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-600 mb-3">
              <Wallet size={20} />
            </div>
            <p className="text-2xl font-black text-[#191c1d]">$12.4k</p>
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
            { icon: Plus, label: 'Create Trip', color: 'bg-blue-50 text-[#3498db] border-[#3498db]/20' },
            { icon: CreditCard, label: 'Add Expense', color: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
            { icon: UploadCloud, label: 'Upload Photos', color: 'bg-purple-50 text-purple-600 border-purple-200' },
            { icon: Compass, label: 'Explore Places', color: 'bg-amber-50 text-amber-600 border-amber-200' },
            { icon: Users, label: 'Invite Members', color: 'bg-rose-50 text-rose-600 border-rose-200' },
            { icon: PieChart, label: 'View Settlements', color: 'bg-indigo-50 text-indigo-600 border-indigo-200' },
          ].map((action, i) => (
            <button key={i} className="flex-shrink-0 flex items-center gap-3 px-6 py-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all group">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${action.color} group-hover:scale-110 transition-transform`}>
                <action.icon size={18} />
              </div>
              <span className="font-bold text-sm text-[#191c1d]">{action.label}</span>
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
              <h2 className="text-2xl font-extrabold text-[#191c1d] tracking-tight">Recent Memories</h2>
              <p className="text-sm text-slate-500 font-medium mt-1">254 Photos • Last updated 2 hours ago</p>
            </div>
            <button className="text-sm font-bold text-[#3498db] hover:text-[#2980b9] flex items-center gap-1">
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
            <h2 className="text-2xl font-extrabold text-[#191c1d] tracking-tight">Expenses</h2>
          </div>

          <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm h-[400px] flex flex-col">
            <div className="mb-6">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Total Expenses</p>
              <h3 className="text-4xl font-black text-[#191c1d] mt-2">₹42,500</h3>
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
                  <span className="font-bold text-sm text-[#191c1d]">{item.amount}</span>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 py-3.5 bg-blue-50 text-[#3498db] font-bold text-sm rounded-xl hover:bg-blue-100 transition-colors">
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
          <h2 className="text-2xl font-extrabold text-[#191c1d] tracking-tight">Explore Destinations</h2>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50">
              <ChevronRight size={20} className="rotate-180" />
            </button>
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-[#191c1d] hover:bg-slate-50">
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
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-rose-500 transition-colors">
                  <Heart size={18} />
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-[#191c1d] flex items-center gap-1 shadow-sm">
                  <Star size={12} className="fill-amber-400 text-amber-400" /> {dest.rating}
                </div>
              </div>
              <h3 className="text-lg font-black text-[#191c1d]">{dest.name}</h3>
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
            <h2 className="text-2xl font-extrabold text-[#191c1d] tracking-tight">Upcoming Trips</h2>
          </div>

          <div className="space-y-4">
            {[
              { name: 'Goa Weekend', date: 'Oct 12 - 15, 2026', img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&q=80', members: 4, budget: '₹15,000' },
              { name: 'Kashmir Escape', date: 'Dec 01 - 10, 2026', img: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=400&q=80', members: 2, budget: '₹60,000' },
              { name: 'Thailand Tour', date: 'Feb 14 - 24, 2027', img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400&q=80', members: 6, budget: '₹1,20,000' },
            ].map((trip, i) => (
              <div key={i} className="bg-white p-4 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-6 group hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                  <img src={trip.img} alt={trip.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-black text-[#191c1d] mb-1">{trip.name}</h3>
                  <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {trip.date}</span>
                    <span className="flex items-center gap-1"><Users size={14} /> {trip.members}</span>
                  </div>
                </div>
                <div className="hidden md:block text-right pr-4">
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Budget</p>
                  <p className="font-black text-[#191c1d]">{trip.budget}</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-[#3498db] group-hover:border-[#3498db] group-hover:text-white transition-colors">
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
            <h2 className="text-2xl font-extrabold text-[#191c1d] tracking-tight">Recent Activity</h2>
          </div>

          <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-100">
              {[
                { user: 'R', name: 'Rahul', action: 'uploaded 15 photos', time: '2h ago', icon: ImageIcon, color: 'bg-purple-100 text-purple-600' },
                { user: 'A', name: 'Ali', action: 'added Hotel Expense ₹8,000', time: '5h ago', icon: CreditCard, color: 'bg-rose-100 text-rose-600' },
                { user: 'Am', name: 'Aman', action: 'joined the trip', time: '1d ago', icon: Users, color: 'bg-emerald-100 text-emerald-600' },
                { user: 'S', name: 'Sammi', action: 'created itinerary', time: '2d ago', icon: Calendar, color: 'bg-blue-100 text-[#3498db]' },
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
                      <p className="text-sm font-bold text-[#191c1d]">{act.name}</p>
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
            <h2 className="text-2xl font-extrabold text-[#191c1d] tracking-tight">Kerala Weather</h2>
          </div>

          <div className="bg-gradient-to-br from-[#3498db] to-[#2980b9] rounded-[2rem] p-8 text-white shadow-lg relative overflow-hidden h-[240px] flex flex-col justify-between">
            <CloudSun size={120} className="absolute -top-4 -right-8 text-white/20" />

            <div className="flex justify-between items-start z-10">
              <div>
                <h3 className="text-5xl font-black mb-2">28°C</h3>
                <p className="font-bold text-white/80">Partly Cloudy</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-bold">
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
            <h2 className="text-2xl font-extrabold text-[#191c1d] tracking-tight">Recommended</h2>
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
