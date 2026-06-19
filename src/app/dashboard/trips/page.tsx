import Link from 'next/link';
import {
  Search, Bell, Settings, Plus, MapPin, Calendar, ChevronRight, ArrowRight
} from 'lucide-react';

export default function MyTripsPage() {
  return (
    <div className="space-y-12 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-700">

      {/* ================================================== */}
      {/* TOP NAVIGATION */}
      {/* ================================================== */}
      <section className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 pt-8">
        <div>
          <h1 className="text-3xl font-extrabold text-[#191c1d] tracking-tight mb-1">
            My Trips
          </h1>
          <p className="text-slate-500 font-medium text-sm">
            Manage your active, upcoming and historic journeys.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-blue-50 text-[#3498db] px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">1 Active</div>
          <div className="bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">3 Upcoming</div>
        </div>
      </section>

      {/* ================================================== */}
      {/* ACTIVE TRIPS */}
      {/* ================================================== */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 px-1">
          <div className="w-2 h-2 rounded-full bg-[#3498db]"></div>
          <h2 className="text-base font-extrabold text-[#191c1d] tracking-tight">Active Now</h2>
        </div>

        <div className="relative w-full h-[460px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-sm border border-slate-100">
          <img
            src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1600&q=80"
            alt="Monsoon in Kerala"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/10" />

          <div className="absolute bottom-6 left-6 w-[calc(100%-3rem)] md:w-[500px] bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] font-bold text-[#3498db] uppercase tracking-wider">Ongoing Journey</span>
              <div className="text-right">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Budget Spent</p>
                <p className="text-xs font-bold text-[#3498db] tracking-wide">$4,280 / $6,000</p>
              </div>
            </div>

            <h3 className="text-3xl font-black text-[#191c1d] tracking-tight mb-1">Monsoon in Kerala</h3>
            <p className="text-slate-600 text-sm font-medium flex items-center gap-1 mb-8">
              <MapPin size={14} /> Alleppey Backwaters, India
            </p>

            <div>
              <div className="flex justify-between text-[10px] font-bold mb-2 text-slate-500">
                <span className="uppercase tracking-wider text-slate-600">Trip Progress</span>
                <span className="text-slate-600">Day 4 of 7</span>
              </div>
              <div className="h-1.5 w-full bg-slate-300/50 rounded-full overflow-hidden">
                <div className="h-full bg-[#3498db] w-[57%] rounded-full shadow-[0_0_10px_rgba(52,152,219,0.5)]" />
              </div>
            </div>
          </div>

          <button className="absolute bottom-6 right-6 bg-white text-[#191c1d] px-6 py-3.5 rounded-xl font-bold text-sm shadow-lg flex items-center gap-2 hover:bg-slate-50 active:scale-95 transition-all">
            Continue Trip <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* ================================================== */}
      {/* UPCOMING TRIPS */}
      {/* ================================================== */}
      <section className="space-y-6">
        <h2 className="text-xl font-extrabold text-[#191c1d] tracking-tight">Upcoming Trips</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 group cursor-pointer hover:shadow-md transition-shadow flex flex-col">
            <div className="relative h-64 w-full shrink-0">
              <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80" alt="Paris Weekend" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-[#191c1d] shadow-sm">
                In 45 Days
              </div>
              
              <div className="absolute bottom-4 left-5 right-5">
                <h3 className="text-2xl font-black text-white mb-1">Paris Weekend</h3>
                <p className="text-white/80 text-sm font-medium flex items-center gap-1 mb-3">
                  <MapPin size={14} /> Paris, France
                </p>
                <div className="flex gap-2">
                  <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">Romantic</span>
                  <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">City Break</span>
                </div>
              </div>
            </div>
            
            <div className="p-5 mt-auto bg-white">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Dec 5 - Dec 8</span>
                <span className="text-sm font-black text-[#3498db]">₹1,200</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 group cursor-pointer hover:shadow-md transition-shadow flex flex-col">
            <div className="relative h-64 w-full shrink-0">
              <img src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600&q=80" alt="Tokyo Exploration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-[#191c1d] shadow-sm">
                In 2 Months
              </div>
              
              <div className="absolute bottom-4 left-5 right-5">
                <h3 className="text-2xl font-black text-white mb-1">Tokyo Exploration</h3>
                <p className="text-white/80 text-sm font-medium flex items-center gap-1 mb-3">
                  <MapPin size={14} /> Tokyo, Japan
                </p>
                <div className="flex gap-2">
                  <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">Culture</span>
                  <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">Foodie</span>
                </div>
              </div>
            </div>
            
            <div className="p-5 mt-auto bg-white">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Mar 10 - Mar 24</span>
                <span className="text-sm font-black text-[#3498db]">₹3,500</span>
              </div>
            </div>
          </div>

          {/* Add New Trip Card */}
          <div className="rounded-[2rem] border-2 border-dashed border-slate-200 hover:border-[#3498db] hover:bg-blue-50/50 transition-all cursor-pointer flex flex-col items-center justify-center p-8 group min-h-[320px]">
            <div className="w-14 h-14 rounded-full bg-slate-100 group-hover:bg-[#3498db] group-hover:text-white flex items-center justify-center text-slate-400 mb-4 transition-colors">
              <Plus size={24} />
            </div>
            <h3 className="text-lg font-black text-[#191c1d] text-center mb-2">Plan Something New</h3>
            <p className="text-sm text-slate-500 font-medium text-center max-w-[200px]">
              Discover your next adventure and add it to the list.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* COMPLETED TRIPS */}
      {/* ================================================== */}
      <section className="space-y-6">
        <h2 className="text-xl font-extrabold text-[#191c1d] tracking-tight">Completed Trips</h2>

        <div className="space-y-3 max-w-3xl">
          {[
            { id: 'santorini-summer', name: 'Santorini Summer', loc: 'Santorini, Greece', date: 'Aug 2025', img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=200&q=80', members: 3 },
            { id: 'highlands-roadtrip', name: 'Highlands Roadtrip', loc: 'Scotland, UK', date: 'May 2025', img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=200&q=80', members: 2 },
          ].map((trip, i) => (
            <Link key={i} href={`/dashboard/trips/${trip.id}`} className="block">
            <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between group hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 transition-all duration-500">
                  <img src={trip.img} alt={trip.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-[#191c1d]">{trip.name}</h3>
                  <p className="text-xs font-medium text-slate-500">{trip.loc} • {trip.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 pr-2">
                <div className="flex -space-x-2">
                  {[...Array(trip.members)].map((_, idx) => (
                    <div key={idx} className="w-6 h-6 rounded-full border border-white bg-slate-200 flex items-center justify-center text-[8px] font-bold text-slate-600">
                      U
                    </div>
                  ))}
                </div>
                <ChevronRight size={18} className="text-slate-300 group-hover:text-[#3498db] transition-colors" />
              </div>
            </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
