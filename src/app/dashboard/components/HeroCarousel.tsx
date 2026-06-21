"use client";

import React, { useState, useEffect } from 'react';
import { Calendar, Users, Wallet, Map as MapIcon, CreditCard, Image as ImageIcon } from 'lucide-react';

const trips = [
  {
    id: 1,
    title: 'Monsoon in Kerala',
    status: 'ACTIVE TRIP',
    progress: 'Day 3 of 10',
    date: 'Aug 10 - Aug 20, 2026',
    members: '5 Members',
    budget: '₹42,500 Budget',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1600&q=80',
    pulseColor: 'bg-white',
    badgeColor: 'bg-[oklch(0.55_0.24_262.66)]',
    isCompleted: false,
  },
  {
    id: 2,
    title: 'Santorini Summer',
    status: 'COMPLETED',
    progress: 'Finished',
    date: 'Aug 2025',
    members: '3 Members',
    budget: '₹1,20,000 Budget',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1600&q=80',
    pulseColor: 'hidden',
    badgeColor: 'bg-slate-600',
    isCompleted: true,
  },
  {
    id: 3,
    title: 'Highlands Roadtrip',
    status: 'COMPLETED',
    progress: 'Finished',
    date: 'May 2025',
    members: '2 Members',
    budget: '₹80,000 Budget',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&q=80',
    pulseColor: 'hidden',
    badgeColor: 'bg-slate-600',
    isCompleted: true,
  }
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % trips.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[oklch(0.55_0.24_262.66)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[oklch(0.55_0.24_262.66)]"></span>
          </span>
          <h2 className="text-base font-extrabold text-[#191c1d] dark:text-white tracking-tight">Featured Trips</h2>
        </div>
        {/* Navigation Dots */}
        <div className="flex gap-2 relative z-40">
          {trips.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${currentIndex === i ? 'w-8 bg-[oklch(0.55_0.24_262.66)]' : 'w-2 bg-slate-300 hover:bg-slate-400'}`}
            />
          ))}
        </div>
      </div>

      <div className="relative w-full h-[460px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
        <div 
          className="flex w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {trips.map((trip, index) => {
            const isActive = index === currentIndex;

            return (
              <div
                key={trip.id}
                className="min-w-full h-full relative"
              >
              <img
                src={trip.image}
                alt={trip.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

              <div className="absolute inset-0 p-10 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className={`${trip.badgeColor} text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-md flex items-center gap-2`}>
                    <span className={`w-2 h-2 rounded-full ${trip.pulseColor} ${!trip.isCompleted ? 'animate-pulse' : ''}`} />
                    {trip.status}
                  </span>
                  <div className="bg-black/50 border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">
                    {trip.progress}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                  <div>
                    <h2 className="text-5xl font-black text-white tracking-tight mb-4 drop-shadow-md">{trip.title}</h2>

                    <div className="flex flex-wrap items-center gap-6 text-white/90">
                      <div className="flex items-center gap-2 font-medium">
                        <Calendar size={18} className="text-[oklch(0.55_0.24_262.66)]" />
                        {trip.date}
                      </div>
                      <div className="flex items-center gap-2 font-medium">
                        <Users size={18} className="text-[oklch(0.55_0.24_262.66)]" />
                        {trip.members}
                      </div>
                      <div className="flex items-center gap-2 font-medium">
                        <Wallet size={18} className="text-[oklch(0.55_0.24_262.66)]" />
                        {trip.budget}
                      </div>
                    </div>
                  </div>

                  {isActive && (
                    <div className="flex flex-wrap items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
                      {!trip.isCompleted ? (
                        <>
                          <button className="px-6 py-3.5 bg-white text-[#191c1d] hover:bg-slate-50 font-bold rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                            <MapIcon size={18} />
                            Open Trip
                          </button>
                          <button className="px-6 py-3.5 bg-black/50 hover:bg-black/70 border border-white/20 text-white font-bold rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                            <Calendar size={18} />
                            View Timeline
                          </button>
                          <button className="px-6 py-3.5 bg-[oklch(0.55_0.24_262.66)] hover:bg-[#2980b9] text-white font-bold rounded-xl shadow-[0_4px_20px_rgba(52,152,219,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                            <CreditCard size={18} />
                            Add Expense
                          </button>
                        </>
                      ) : (
                        <>
                          <button className="px-6 py-3.5 bg-white text-[#191c1d] hover:bg-slate-50 font-bold rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                            <ImageIcon size={18} />
                            View Memories
                          </button>
                          <button className="px-6 py-3.5 bg-black/50 hover:bg-black/70 border border-white/20 text-white font-bold rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                            <Wallet size={18} />
                            Expense Summary
                          </button>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
