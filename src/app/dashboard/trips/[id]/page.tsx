'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MapPin, Calendar, Users, Camera, Plus, Upload, UserPlus,
  ChevronLeft, CheckCircle2, ArrowRight, Utensils, Car, Ticket,
  Navigation, Star
} from 'lucide-react';

const trip = {
  name: 'Santorini Summer',
  location: 'Santorini, Greece',
  dates: 'Aug 12 – Aug 22',
  status: 'COMPLETED',
  coverImg: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1600&q=80',
  budget: 85000,
  progress: 10,
  totalDays: 10,
  members: [
    { name: 'Sammi J.', role: 'Organizer', paid: 32500, status: 'PAID', avatar: 'S', color: 'bg-blue-100 text-blue-600' },
    { name: 'Ali Raza', role: 'Member', paid: 12000, status: 'NEEDS TO PAY', avatar: 'A', color: 'bg-emerald-100 text-emerald-600' },
    { name: 'Priya K.', role: 'Member', paid: 40500, status: 'OVERPAID', avatar: 'P', color: 'bg-purple-100 text-purple-600' },
  ],
  itinerary: [
    { day: 1, title: 'Arrival & Hotel Check-In', desc: 'Transfer to Canaves Oia Suites', photos: 34, done: true },
    { day: 2, title: 'Oia Sunset Walk', desc: 'Blue Dome Churches & Windmills', photos: 48, done: true },
    { day: 3, title: 'Perissa Black Beach', desc: 'Beachside relaxation & seafood', photos: 17, done: false },
  ],
  expenses: [
    { label: 'Food', iconKey: 'Food', color: 'text-orange-500', bg: 'bg-orange-50', total: 24500, expected: 20000, pct: 76 },
    { label: 'Cab', iconKey: 'Cab', color: 'text-blue-500', bg: 'bg-blue-50', total: 12000, expected: 9000, pct: 55 },
    { label: 'Tickets', iconKey: 'Tickets', color: 'text-green-500', bg: 'bg-green-50', total: 48500, expected: 42125, pct: 92 },
  ],
  settlements: [
    { from: 'Ali Raza', fromColor: 'bg-emerald-100 text-emerald-700', fromAvatar: 'A', to: 'Sammi J.', toColor: 'bg-blue-100 text-blue-700', toAvatar: 'S', amount: 20500 },
    { from: 'Sammi J.', fromColor: 'bg-blue-100 text-blue-700', fromAvatar: 'S', to: 'Priya K.', toColor: 'bg-purple-100 text-purple-700', toAvatar: 'P', amount: 8400 },
  ],
  gallery: [
    { img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac542?w=400&q=80', author: 'Sammi' },
    { img: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=400&q=80', author: 'Ali' },
    { img: 'https://images.unsplash.com/photo-1601581975053-7c36a93e4c7c?w=400&q=80', author: 'Priya' },
    { img: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=400&q=80', author: 'Sammi' },
    { img: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=400&q=80', author: 'Sammi' },
  ],
  places: [
    { name: 'Oia Village', status: 'VISITED' },
    { name: 'Caldera View Walk', status: 'VISITED' },
    { name: 'Akrotiri Ruins', status: 'PLANNED' },
  ],
};

const statusStyle: Record<string, string> = {
  'PAID': 'bg-green-100 text-green-700',
  'NEEDS TO PAY': 'bg-red-100 text-red-600',
  'OVERPAID': 'bg-blue-100 text-blue-700',
};

const expenseIconMap: Record<string, React.ElementType> = {
  Food: Utensils,
  Cab: Car,
  Tickets: Ticket,
};

export default function TripDetailPage() {
  const [galleryFilter, setGalleryFilter] = useState('All');

  const filteredGallery = galleryFilter === 'All'
    ? trip.gallery
    : trip.gallery.filter(p => p.author === galleryFilter);

  return (
    <div className="space-y-8 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-700 pt-8">

      {/* Back button */}
      <Link href="/dashboard/trips" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[#191c1d] transition-colors">
        <ChevronLeft size={18} /> Back to My Trips
      </Link>

      {/* ─── TOP GRID ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Cover Photo */}
        <div className="lg:col-span-7 relative h-[320px] rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 group">
          <img
            src={trip.coverImg}
            alt={trip.name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Status badge */}
          <div className="absolute top-5 left-5 flex items-center gap-2">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 size={12} /> Completed
            </span>
            <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold border border-white/30">
              {trip.dates}
            </span>
          </div>

          {/* Trip info overlay */}
          <div className="absolute bottom-5 left-6">
            <h1 className="text-3xl font-black text-white tracking-tight">{trip.name}</h1>
            <p className="text-white/80 text-sm font-medium flex items-center gap-1.5 mt-1">
              <MapPin size={14} /> {trip.location}
            </p>
          </div>
        </div>

        {/* Trip Overview Panel */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <h2 className="text-lg font-extrabold text-[#191c1d]">Trip Overview</h2>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/50 backdrop-blur-md border border-white/60 rounded-2xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Total Budget</p>
              <p className="text-xl font-black text-[oklch(0.55_0.24_262.66)]">₹{trip.budget.toLocaleString()}</p>
            </div>
            <div className="bg-white/50 backdrop-blur-md border border-white/60 rounded-2xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Trip Progress</p>
              <p className="text-xl font-black text-[#191c1d]">Day {trip.progress}/{trip.totalDays}</p>
            </div>
            <div className="bg-white/50 backdrop-blur-md border border-white/60 rounded-2xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Members</p>
              <p className="text-xl font-black text-[#191c1d]">{trip.members.length} Active</p>
            </div>
            <div className="bg-white/50 backdrop-blur-md border border-white/60 rounded-2xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Media</p>
              <p className="text-xl font-black text-[#191c1d]">{trip.gallery.length * 28} Photos</p>
            </div>
          </div>

          {/* Action Buttons */}
          <button className="w-full flex items-center justify-center gap-2 bg-[oklch(0.55_0.24_262.66)] text-white py-3.5 rounded-2xl font-bold text-sm shadow-[0_4px_16px_rgba(52,152,219,0.3)] hover:bg-[#2980b9] active:scale-95 transition-all">
            <Plus size={18} /> Add Expense
          </button>
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-[#191c1d] py-3 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-colors">
              <Upload size={16} /> Upload
            </button>
            <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-[#191c1d] py-3 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-colors">
              <UserPlus size={16} /> Invite
            </button>
          </div>
        </div>
      </div>

      {/* ─── MEMBERS ─── */}
      <section className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-extrabold text-[#191c1d]">Trip Members</h2>
          <button className="text-xs font-bold text-[oklch(0.55_0.24_262.66)] hover:underline">View All</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {trip.members.map((m, i) => (
            <div key={i} className="border border-slate-100 rounded-2xl p-4 bg-slate-50/50">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm ${m.color}`}>
                  {m.avatar}
                </div>
                <div>
                  <p className="font-bold text-[#191c1d] text-sm">{m.name}</p>
                  <p className="text-[10px] text-slate-500 font-medium">{m.role}</p>
                </div>
              </div>
              <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Paid</p>
              <p className="text-lg font-black text-[#191c1d]">₹{m.paid.toLocaleString()}</p>
              <span className={`mt-2 inline-block px-2.5 py-0.5 rounded-lg text-[9px] font-bold uppercase tracking-wider ${statusStyle[m.status]}`}>
                {m.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ITINERARY + EXPENSES GRID ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Itinerary */}
        <section className="lg:col-span-5 bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm">
          <h2 className="text-lg font-extrabold text-[#191c1d] mb-5">Itinerary</h2>
          <div className="space-y-4">
            {trip.itinerary.map((day, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-sm shrink-0 ${day.done ? 'bg-[oklch(0.55_0.24_262.66)] text-white' : 'bg-slate-100 text-slate-400'}`}>
                    {day.day}
                  </div>
                  {i < trip.itinerary.length - 1 && (
                    <div className={`w-0.5 flex-1 mt-2 ${day.done ? 'bg-[oklch(0.55_0.24_262.66)]/30' : 'bg-slate-100'}`} style={{ minHeight: '24px' }} />
                  )}
                </div>
                <div className="pb-4">
                  <p className="font-bold text-[#191c1d] text-sm">DAY {day.day}</p>
                  <p className="font-extrabold text-[#191c1d]">{day.title}</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">{day.desc}</p>
                  <div className="flex items-center gap-1 mt-2 text-[10px] text-slate-400 font-bold">
                    <Camera size={12} /> {day.photos} Photos
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Expenses + Settlement */}
        <div className="lg:col-span-7 flex flex-col gap-6">

          {/* Expense Breakdown */}
          <section className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm">
            <div className="grid grid-cols-3 gap-4">
              {trip.expenses.map((exp, i) => {
                const Icon = expenseIconMap[exp.iconKey];
                return (
                  <div key={i} className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${exp.bg}`}>
                        <Icon size={16} className={exp.color} />
                      </div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{exp.label}</span>
                    </div>
                    <p className="text-xl font-black text-[#191c1d]">₹{exp.total.toLocaleString()}</p>
                    <div>
                      <div className="flex justify-between text-[9px] font-bold text-slate-400 mb-1 uppercase tracking-wider">
                        <span>Expected Share</span>
                        <span>₹{exp.expected.toLocaleString()}</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${exp.color.replace('text-', 'bg-')}`}
                          style={{ width: `${exp.pct}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Settlement Summary */}
          <section className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-orange-100 rounded-lg flex items-center justify-center">
                <ArrowRight size={14} className="text-orange-500" />
              </div>
              <h2 className="text-base font-extrabold text-[#191c1d]">Settlement Summary</h2>
            </div>
            <div className="space-y-3">
              {trip.settlements.map((s, i) => (
                <div key={i} className="flex items-center gap-3 bg-slate-50 rounded-2xl px-4 py-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black ${s.fromColor}`}>{s.fromAvatar}</div>
                  <span className="text-xs font-bold text-slate-500">{s.from}</span>
                  <ArrowRight size={14} className="text-slate-300 shrink-0" />
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black ${s.toColor}`}>{s.toAvatar}</div>
                  <span className="text-xs font-bold text-slate-500">{s.to}</span>
                  <span className="ml-auto text-sm font-black text-[oklch(0.55_0.24_262.66)]">₹{s.amount.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* ─── GALLERY + VISITED PLACES GRID ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Photo Gallery */}
        <section className="lg:col-span-7 bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-extrabold text-[#191c1d]">Photo Gallery</h2>
            <div className="flex items-center gap-2">
              {['All', 'Sammi', 'Ali'].map(f => (
                <button
                  key={f}
                  onClick={() => setGalleryFilter(f)}
                  className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors ${galleryFilter === f ? 'bg-[oklch(0.55_0.24_262.66)] text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                >
                  {f} {f === 'All' ? `(${trip.gallery.length * 28})` : f === 'Sammi' ? '(42)' : '(16)'}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {filteredGallery.slice(0, 6).map((p, i) => (
              <div key={i} className={`rounded-2xl overflow-hidden group cursor-pointer ${i === 0 ? 'col-span-2 row-span-2 h-52' : 'h-24'}`}>
                <img src={p.img} alt="Gallery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </section>

        {/* Visited Places */}
        <section className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm">
            <h2 className="text-lg font-extrabold text-[#191c1d] mb-4">Visited Places</h2>

            {/* Map placeholder */}
            <div className="relative h-36 rounded-2xl overflow-hidden mb-4 bg-[#d0e8f5]">
              <img
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80"
                alt="Map"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-[oklch(0.55_0.24_262.66)] rounded-full flex items-center justify-center shadow-lg">
                  <MapPin size={16} className="text-white" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              {trip.places.map((place, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                  <div className="flex items-center gap-2">
                    <Navigation size={14} className="text-slate-400" />
                    <span className="text-sm font-bold text-[#191c1d]">{place.name}</span>
                  </div>
                  <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${place.status === 'VISITED' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>
                    {place.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Best Moments card */}
          <div className="relative h-44 rounded-[2rem] overflow-hidden group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80"
              alt="Best Moments"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-5 right-5">
              <div className="flex items-center gap-1 mb-1">
                <Star size={12} className="text-yellow-400 fill-yellow-400" />
                <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-wider">Best Moments</span>
              </div>
              <p className="text-white text-sm font-bold leading-snug">"The sunset at Oia was absolutely magical..."</p>
              <div className="flex -space-x-1.5 mt-2">
                {trip.members.map((m, i) => (
                  <div key={i} className={`w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-black ${m.color}`}>
                    {m.avatar}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}
