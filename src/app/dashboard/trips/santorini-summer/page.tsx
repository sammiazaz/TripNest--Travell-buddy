'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  ChevronLeft, Share2, MoreHorizontal, Plus, Users, Wallet,
  Image as ImageIcon, MapPin, Calendar, Clock, ArrowRight,
  CheckCircle2, X, Edit2, AlertCircle, TrendingUp, Info, Check,
  Trash2, FileText, Download, UploadCloud, PlusCircle
} from 'lucide-react';

// Types
type Tab = 'overview' | 'expenses' | 'gallery' | 'members' | 'timeline' | 'notes';

interface Member {
  id: string;
  name: string;
  avatar: string;
  color: string;
  role: string;
}

interface Expense {
  id: string;
  title: string;
  category: string;
  amount: number;
  date: string;
  time: string;
  location: string;
  emoji: string;
  createdBy: string;
  notes?: string;
  // How much each member paid for this specific expense
  paidBy: Record<string, number>;
}

interface TimelineDay {
  day: number;
  title: string;
  desc: string;
  photos: number;
  done: boolean;
  time?: string;
}

interface TravelNote {
  id: string;
  title: string;
  category: string; // 'Packing' | 'Info' | 'Documents' | 'Emergency'
  content: string[];
}

interface GalleryImage {
  id: string;
  img: string;
  author: string;
  album: string;
}

// Initial Data
const INITIAL_MEMBERS: Member[] = [
  { id: 'm1', name: 'Sammi Azaz', avatar: 'S', color: 'bg-blue-500 text-white', role: 'Organizer' },
  { id: 'm2', name: 'Rahul Kumar', avatar: 'R', color: 'bg-emerald-500 text-white', role: 'Co-Organizer' },
  { id: 'm3', name: 'Ali Khan', avatar: 'A', color: 'bg-purple-500 text-white', role: 'Member' },
  { id: 'm4', name: 'Aman Verma', avatar: 'Am', color: 'bg-orange-500 text-white', role: 'Member' },
  { id: 'm5', name: 'Faizan Shaikh', avatar: 'F', color: 'bg-pink-500 text-white', role: 'Member' },
];

const INITIAL_EXPENSES: Expense[] = [
  {
    id: 'e1',
    title: 'Dinner at BBQ Nation',
    category: 'Food',
    amount: 5000,
    date: '2025-08-14',
    time: '08:30 PM',
    location: 'Fira, Santorini',
    emoji: '🍖',
    createdBy: 'Sammi Azaz',
    notes: 'Dinner celebrating arrival!',
    paidBy: { m1: 1200, m2: 800, m3: 1500, m4: 500, m5: 1000 }
  },
  {
    id: 'e2',
    title: 'Hotel Blue Pearl Suites',
    category: 'Hotel',
    amount: 7000,
    date: '2025-08-13',
    time: '12:00 PM',
    location: 'Oia, Santorini',
    emoji: '🏨',
    createdBy: 'Ali Khan',
    notes: 'Advance booking amount paid',
    paidBy: { m1: 1000, m2: 1000, m3: 3000, m4: 1000, m5: 1000 }
  },
  {
    id: 'e3',
    title: 'Cab to Red Beach',
    category: 'Cab',
    amount: 2000,
    date: '2025-08-15',
    time: '10:00 AM',
    location: 'Akrotiri, Santorini',
    emoji: '🚕',
    createdBy: 'Rahul Kumar',
    paidBy: { m1: 400, m2: 1200, m3: 400, m4: 0, m5: 0 }
  },
  {
    id: 'e4',
    title: 'Sunset Boat Tour Tickets',
    category: 'Tickets',
    amount: 3000,
    date: '2025-08-16',
    time: '04:30 PM',
    location: 'Ammoudi Bay',
    emoji: '⛵',
    createdBy: 'Faizan Shaikh',
    paidBy: { m1: 600, m2: 600, m3: 600, m4: 600, m5: 600 }
  },
  {
    id: 'e5',
    title: 'Local Souvenirs & Hats',
    category: 'Misc',
    amount: 1500,
    date: '2025-08-17',
    time: '11:15 AM',
    location: 'Oia Market',
    emoji: '🎩',
    createdBy: 'Aman Verma',
    paidBy: { m1: 300, m2: 300, m3: 0, m4: 900, m5: 0 }
  }
];

const INITIAL_GALLERY: GalleryImage[] = [
  { id: 'g1', img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac542?w=500&q=80', author: 'Sammi Azaz', album: 'Sunsets' },
  { id: 'g2', img: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=500&q=80', author: 'Ali Khan', album: 'Beaches' },
  { id: 'g3', img: 'https://images.unsplash.com/photo-1601581975053-7c36a93e4c7c?w=500&q=80', author: 'Rahul Kumar', album: 'Boat Tour' },
  { id: 'g4', img: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=500&q=80', author: 'Sammi Azaz', album: 'Sunsets' },
  { id: 'g5', img: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=500&q=80', author: 'Aman Verma', album: 'Food & Dining' },
  { id: 'g6', img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&q=80', author: 'Faizan Shaikh', album: 'Beaches' },
];

const INITIAL_TIMELINE: TimelineDay[] = [
  { day: 1, title: 'Arrival & Hotel Check-In', desc: 'Transfer to Blue Pearl Suites in Oia. Rest and dinner at BBQ Nation.', photos: 12, done: true, time: 'Aug 12' },
  { day: 2, title: 'Oia Sunset Walk', desc: 'Walk around the Blue Dome Churches, check out the sunset, explore local cafes.', photos: 24, done: true, time: 'Aug 13' },
  { day: 3, title: 'Red Beach & Akrotiri Ruins', desc: 'Took a cab to Red Beach. Explored archaeological sites and had beachside seafood.', photos: 15, done: true, time: 'Aug 14' },
  { day: 4, title: 'Caldera Sunset Boat Tour', desc: 'Premium catamaran tour around the volcano with dinner and drinks onboard.', photos: 32, done: false, time: 'Aug 15' },
  { day: 5, title: 'Departure back to Athens', desc: 'Check-out, buy souvenirs, and board afternoon flight.', photos: 8, done: false, time: 'Aug 16' },
];

const INITIAL_NOTES: TravelNote[] = [
  {
    id: 'n1',
    title: 'Packing Checklist 🎒',
    category: 'Packing',
    content: ['Sunscreen SPF 50+', 'Greek adapters (Type C/F)', 'Comfortable walking shoes', 'Sunglasses & beach hat', 'Swimwear']
  },
  {
    id: 'n2',
    title: 'Hotel Info 🏨',
    category: 'Info',
    content: ['Blue Pearl Suites, Oia', 'Reservation ID: BPS-998231', 'Check-in: 2:00 PM, Check-out: 11:00 AM', 'Contact: +30 22860 12345']
  },
  {
    id: 'n3',
    title: 'Emergency Contacts 🚨',
    category: 'Emergency',
    content: ['Tourist Police (Fira): 112 / +30 22860 22649', 'Santorini Hospital (Fira): +30 22863 60300', 'Embassy Support: +30 210 721 2951']
  }
];

const CATEGORY_EMOJIS: Record<string, string> = {
  Food: '🍖',
  Hotel: '🏨',
  Cab: '🚕',
  Tickets: '⛵',
  Shopping: '🛍️',
  Activities: '🏄',
  Misc: '🎩',
};

const CATEGORY_COLORS: Record<string, string> = {
  Food: '#2563EB',
  Hotel: '#2ecc71',
  Cab: '#f39c12',
  Tickets: '#9b59b6',
  Shopping: '#e74c3c',
  Activities: '#1abc9c',
  Misc: '#95a5a6',
};

export default function SantoriniTripPage() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  // Stateful Data
  const [expenses, setExpenses] = useState<Expense[]>(INITIAL_EXPENSES);
  const [members, setMembers] = useState<Member[]>(INITIAL_MEMBERS);
  const [gallery, setGallery] = useState<GalleryImage[]>(INITIAL_GALLERY);
  const [timeline, setTimeline] = useState<TimelineDay[]>(INITIAL_TIMELINE);
  const [notes, setNotes] = useState<TravelNote[]>(INITIAL_NOTES);

  // Modal / Drawer states
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState<Expense | null>(null);
  const [showDetailDrawer, setShowDetailDrawer] = useState(false);
  const [showContributionModal, setShowContributionModal] = useState<Expense | null>(null);

  // Filter States
  const [galleryFilter, setGalleryFilter] = useState('All');
  const [noteFilter, setNoteFilter] = useState('All');

  // Form States for Add Expense
  const [newExpTitle, setNewExpTitle] = useState('');
  const [newExpCategory, setNewExpCategory] = useState('Food');
  const [newExpAmount, setNewExpAmount] = useState('');
  const [newExpNotes, setNewExpNotes] = useState('');

  // Form State for Note
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteCategory, setNewNoteCategory] = useState('Packing');
  const [newNoteContent, setNewNoteContent] = useState('');
  const [showAddNote, setShowAddNote] = useState(false);

  // Form State for Contribution Edit
  const [tempPayments, setTempPayments] = useState<Record<string, string>>({});

  // ─── CALCULATIONS & SPLITWISE SYSTEM ENGINE ───

  // Calculate overall totals
  const totalExpense = useMemo(() => {
    return expenses.reduce((sum, e) => sum + e.amount, 0);
  }, [expenses]);

  // Compute how much each member paid and owes across ALL expenses
  const memberFinances = useMemo(() => {
    const paidMap: Record<string, number> = {};
    const shareMap: Record<string, number> = {};

    members.forEach(m => {
      paidMap[m.id] = 0;
      shareMap[m.id] = 0;
    });

    expenses.forEach(exp => {
      const numMembers = members.length;
      const sharePerPerson = exp.amount / numMembers;

      members.forEach(m => {
        const paid = exp.paidBy[m.id] || 0;
        paidMap[m.id] += paid;
        shareMap[m.id] += sharePerPerson;
      });
    });

    return members.map(m => {
      const totalPaid = paidMap[m.id];
      const totalShare = shareMap[m.id];
      const balance = totalPaid - totalShare;
      return {
        ...m,
        totalPaid,
        totalShare,
        balance,
      };
    });
  }, [expenses, members]);

  // Find Sammi's current balance
  const sammiBalance = useMemo(() => {
    const sammi = memberFinances.find(m => m.name === 'Sammi Azaz');
    return sammi ? sammi.balance : 0;
  }, [memberFinances]);

  // Settlement Engine: Debt Simplification algorithm
  const settlementSuggestions = useMemo(() => {
    // 1. Get net balances
    const balances = memberFinances.map(f => ({
      id: f.id,
      name: f.name,
      avatar: f.avatar,
      color: f.color,
      balance: f.balance
    }));

    const debtors = balances.filter(b => b.balance < -0.01).sort((a, b) => a.balance - b.balance);
    const creditors = balances.filter(b => b.balance > 0.01).sort((a, b) => b.balance - a.balance);

    const suggestions: Array<{
      id: string;
      from: typeof balances[0];
      to: typeof balances[0];
      amount: number;
      status: 'pending' | 'settled';
    }> = [];

    let i = 0; // debtor index
    let j = 0; // creditor index

    // Deep copy balances to work with
    const dBal = debtors.map(d => ({ ...d }));
    const cBal = creditors.map(c => ({ ...c }));

    while (i < dBal.length && j < cBal.length) {
      const debtor = dBal[i];
      const creditor = cBal[j];

      const debtAmount = Math.abs(debtor.balance);
      const creditAmount = creditor.balance;

      const settledVal = Math.min(debtAmount, creditAmount);

      suggestions.push({
        id: `s-${debtor.id}-${creditor.id}-${settledVal.toFixed(0)}`,
        from: debtor,
        to: creditor,
        amount: Math.round(settledVal),
        status: 'pending'
      });

      debtor.balance += settledVal;
      creditor.balance -= settledVal;

      if (Math.abs(debtor.balance) < 0.01) {
        i++;
      }
      if (Math.abs(creditor.balance) < 0.01) {
        j++;
      }
    }

    return suggestions;
  }, [memberFinances]);

  // Expense by category breakdown
  const categoryBreakdown = useMemo(() => {
    const totals: Record<string, number> = {};
    expenses.forEach(e => {
      totals[e.category] = (totals[e.category] || 0) + e.amount;
    });

    const list = Object.keys(totals).map(cat => ({
      label: cat,
      amount: totals[cat],
      pct: totalExpense > 0 ? Math.round((totals[cat] / totalExpense) * 100) : 0,
      color: CATEGORY_COLORS[cat] || '#7f8c8d'
    }));

    return list.sort((a, b) => b.amount - a.amount);
  }, [expenses, totalExpense]);

  // ─── ACTION HANDLERS ───

  // Add a new expense
  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    const amt = parseFloat(newExpAmount);
    if (!amt || isNaN(amt) || !newExpTitle.trim()) return;

    // Auto split equally among all members
    const splitAmt = amt / members.length;
    const initialPaid: Record<string, number> = {};

    // By default, Sammi pays the total amount and splits equally
    members.forEach((m, idx) => {
      initialPaid[m.id] = idx === 0 ? amt : 0; // Organizer pays
    });

    const newExpense: Expense = {
      id: `e-${Date.now()}`,
      title: newExpTitle,
      category: newExpCategory,
      amount: amt,
      date: new Date().toISOString().split('T')[0],
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      location: 'Santorini, Greece',
      emoji: CATEGORY_EMOJIS[newExpCategory] || '🛍️',
      createdBy: 'Sammi Azaz',
      notes: newExpNotes,
      paidBy: initialPaid
    };

    setExpenses([newExpense, ...expenses]);

    // Reset Form
    setNewExpTitle('');
    setNewExpCategory('Food');
    setNewExpAmount('');
    setNewExpNotes('');
    setShowAddExpense(false);
  };

  // Open and initialize Contribution Modal
  const openContributionModal = (expense: Expense) => {
    const payments: Record<string, string> = {};
    members.forEach(m => {
      payments[m.id] = (expense.paidBy[m.id] || 0).toString();
    });
    setTempPayments(payments);
    setShowContributionModal(expense);
  };

  // Save member payments contribution
  const handleSaveContribution = () => {
    if (!showContributionModal) return;

    const updatedPaid: Record<string, number> = {};
    let totalPaidInInput = 0;

    members.forEach(m => {
      const val = parseFloat(tempPayments[m.id]) || 0;
      updatedPaid[m.id] = val;
      totalPaidInInput += val;
    });

    // Update expense amount to match total paid if edited, or adjust to fit
    const updatedExpenses = expenses.map(exp => {
      if (exp.id === showContributionModal.id) {
        return {
          ...exp,
          amount: totalPaidInInput, // Update total expense amount to equal sum of contributions
          paidBy: updatedPaid
        };
      }
      return exp;
    });

    setExpenses(updatedExpenses);
    setShowContributionModal(null);

    // Also update selected expense if detail drawer is open
    if (selectedExpense && selectedExpense.id === showContributionModal.id) {
      const currentUpdated = updatedExpenses.find(e => e.id === showContributionModal.id);
      if (currentUpdated) {
        setSelectedExpense(currentUpdated);
      }
    }
  };

  // Settle a balance / suggestion directly
  const handleSettleSuggestion = (fromId: string, toId: string, amount: number) => {
    // To settle, we add a mock settlement expense
    const fromMember = members.find(m => m.id === fromId);
    const toMember = members.find(m => m.id === toId);
    if (!fromMember || !toMember) return;

    const paidByObj: Record<string, number> = {};
    members.forEach(m => {
      paidByObj[m.id] = m.id === fromId ? amount : 0; // Debtor pays
    });

    const settlementExpense: Expense = {
      id: `settle-${Date.now()}`,
      title: `Settlement: ${fromMember.name} to ${toMember.name}`,
      category: 'Misc',
      amount: amount,
      date: new Date().toISOString().split('T')[0],
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      location: 'Santorini, Greece',
      emoji: '🤝',
      createdBy: fromMember.name,
      notes: `Settle debt directly to ${toMember.name}`,
      // Special split: only debtor and creditor are involved in the share calculation
      // But to simplify in equal splits: Debtor paid the amount, and Creditor receives it.
      // We can model this as debtor paid X, creditor spent X.
      paidBy: {
        [fromId]: amount,
        [toId]: 0
      }
    };

    // Modifying paidBy and shares so it doesn't affect others:
    // Actually, a perfect mock payment is: From paid amount, To has a negative contribution or shares it.
    // In our simplified system, we can just update the paid amount directly.
    setExpenses([...expenses, settlementExpense]);
  };

  // Add Note
  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteTitle.trim() || !newNoteContent.trim()) return;

    const contentLines = newNoteContent.split('\n').filter(l => l.trim() !== '');
    const newNote: TravelNote = {
      id: `n-${Date.now()}`,
      title: newNoteTitle,
      category: newNoteCategory,
      content: contentLines
    };

    setNotes([...notes, newNote]);
    setNewNoteTitle('');
    setNewNoteContent('');
    setShowAddNote(false);
  };

  // Mock upload photo
  const handleUploadPhoto = () => {
    const urls = [
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=500&q=80',
      'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=500&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&q=80',
    ];
    const randomUrl = urls[Math.floor(Math.random() * urls.length)];
    const newPic: GalleryImage = {
      id: `g-${Date.now()}`,
      img: randomUrl,
      author: 'Sammi Azaz',
      album: 'Sunsets'
    };
    setGallery([newPic, ...gallery]);
  };

  // SVG Custom Donut Component
  const DonutChart = () => {
    const total = categoryBreakdown.reduce((s, c) => s + c.amount, 0);
    let cumulative = 0;
    const r = 68, cx = 88, cy = 88, strokeW = 18;
    const circumference = 2 * Math.PI * r;

    return (
      <div className="flex flex-col sm:flex-row items-center gap-8">
        <div className="relative shrink-0 w-44 h-44">
          <svg width="176" height="176" viewBox="0 0 176 176">
            <circle cx={cx} cy={cy} r={r} fill="none" stroke="#f1f5f9" className="dark:stroke-white/5" strokeWidth={strokeW} />
            {categoryBreakdown.map((cat, i) => {
              const dash = (cat.amount / total) * circumference;
              const gap = circumference - dash;
              const rotation = (cumulative / total) * 360 - 90;
              cumulative += cat.amount;
              return (
                <circle key={i} cx={cx} cy={cy} r={r} fill="none"
                  stroke={cat.color} strokeWidth={strokeW}
                  strokeDasharray={`${dash} ${gap}`} strokeLinecap="butt"
                  transform={`rotate(${rotation} ${cx} ${cy})`}
                />
              );
            })}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <p className="text-xl font-bold text-slate-900 dark:text-white">₹{total.toLocaleString()}</p>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Total spent</p>
          </div>
        </div>
        <div className="space-y-3 flex-1 w-full min-w-0">
          {categoryBreakdown.map((cat, i) => (
            <div key={i} className="flex items-center justify-between gap-4 border-b border-slate-50 dark:border-white/10 pb-1.5 last:border-0 last:pb-0">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-3 h-3 rounded-full shrink-0" style={{ background: cat.color }} />
                <span className="text-xs font-bold text-slate-600 dark:text-slate-300 truncate">{cat.label}</span>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-xs font-bold text-slate-900 dark:text-white">₹{cat.amount.toLocaleString()}</span>
                <span className="text-[10px] font-bold text-slate-400 w-7 text-right">{cat.pct}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const tabs: { key: Tab; label: string }[] = [
    { key: 'overview', label: 'Overview' },
    { key: 'expenses', label: 'Expenses' },
    { key: 'gallery', label: 'Gallery' },
    { key: 'members', label: 'Members' },
    { key: 'timeline', label: 'Timeline' },
    { key: 'notes', label: 'Notes' },
  ];

  return (
    <div className="space-y-8 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-700 pt-6">

      {/* Back button */}
      <div className="flex items-center justify-between">
        <Link href="/dashboard/trips" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
          <ChevronLeft size={18} /> Back to My Trips
        </Link>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 bg-white dark:bg-[#111111] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 px-3 py-1.5 rounded-xl text-xs font-semibold hover:bg-slate-50 dark:hover:bg-white/5 shadow-sm transition-colors">
            <Share2 size={13} /> Share
          </button>
          <button className="p-1.5 bg-white dark:bg-[#111111] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 shadow-sm transition-colors">
            <MoreHorizontal size={16} />
          </button>
        </div>
      </div>

      {/* ── COVER HERO CARD (Full width) ── */}
      <div className="relative w-full h-[460px] rounded-[24px] overflow-hidden shadow-premium border border-slate-100 dark:border-white/10 group">
        <img
          src="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1600&q=80"
          alt="Santorini Summer"
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

        <div className="absolute inset-0 p-10 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-md flex items-center gap-2">
              ✈️ Summer Getaway
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h1 className="text-5xl font-bold text-white tracking-tight mb-4 drop-shadow-md">Santorini Summer</h1>
              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center gap-2 font-medium">
                  <Calendar size={18} className="text-blue-500" />
                  Aug 12 – Aug 22, 2025
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <Users size={18} className="text-blue-500" />
                  {members.length} Members
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <MapPin size={18} className="text-blue-500" />
                  Greece
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2 bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20 shadow-lg">
                {members.map((m, i) => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-slate-900 flex items-center justify-center text-xs font-bold ${m.color}`}>
                    {m.avatar}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── TAB BAR ── */}
      <div className="bg-white dark:bg-[#111111] rounded-2xl p-2 border border-slate-100 dark:border-white/10 shadow-premium flex items-center gap-1.5 overflow-x-auto scrollbar-none">
        {tabs.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-5 py-2.5 rounded-[12px] text-xs font-bold whitespace-nowrap transition-all uppercase tracking-wider ${activeTab === key
                ? 'bg-blue-600 text-white shadow-md scale-[1.02]'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5 hover:scale-[1.02] active:scale-[0.98]'
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* ─── TAB CONTENTS ─── */}

      {/* 1. OVERVIEW TAB */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Stats, Breakdown, Quick Actions */}
          <div className="lg:col-span-8 space-y-6">

            {/* Trip Overview Panel */}
            <div className="bg-white dark:bg-[#111111] rounded-[24px] p-6 border border-slate-100 dark:border-white/10 shadow-premium hover:shadow-premium-hover transition-all space-y-6">
              <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Trip Overview</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl p-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                  <p className="text-[9px] uppercase tracking-wider text-slate-500 font-bold mb-1">Total Expense</p>
                  <p className="text-lg font-bold text-blue-600">₹{totalExpense.toLocaleString()}</p>
                </div>
                <div className="bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl p-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                  <p className="text-[9px] uppercase tracking-wider text-slate-500 font-bold mb-1">Photos</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">{gallery.length}</p>
                </div>
                <div className="bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl p-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                  <p className="text-[9px] uppercase tracking-wider text-slate-500 font-bold mb-1">Places Visited</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">{timeline.filter(t => t.done).length}/{timeline.length}</p>
                </div>
                <div className="bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl p-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                  <p className="text-[9px] uppercase tracking-wider text-slate-500 font-bold mb-1">Settlements</p>
                  <p className="text-lg font-bold text-orange-500">{settlementSuggestions.length}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setNewExpCategory('Food');
                    setShowAddExpense(true);
                  }}
                  className="flex-1 bg-blue-600 text-white py-3.5 rounded-xl font-bold text-xs shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-1.5"
                >
                  <Plus size={14} /> Add Expense
                </button>
                <button
                  onClick={handleUploadPhoto}
                  className="flex-1 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 py-3.5 rounded-xl font-bold text-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-1.5"
                >
                  <UploadCloud size={14} /> Upload Photos
                </button>
              </div>
            </div>

            {/* Recent Memories & Photo Grid */}
            <div className="bg-white dark:bg-[#111111] rounded-[24px] p-6 border border-slate-100 dark:border-white/10 shadow-premium hover:shadow-premium-hover transition-all">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-bold text-slate-900 dark:text-white">Recent Memories</h2>
                <button onClick={() => setActiveTab('gallery')} className="text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline">View Gallery</button>
              </div>
              <div className="grid grid-cols-4 gap-3 h-44">
                {gallery.slice(0, 3).map((item, idx) => (
                  <div key={item.id} className={`rounded-2xl overflow-hidden relative group cursor-pointer ${idx === 0 ? 'col-span-2' : 'col-span-1'} border border-slate-100 dark:border-white/10 shadow-sm`}>
                    <img src={item.img} alt="Memories" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-slate-900/20 hover:bg-slate-900/10 transition-colors" />
                  </div>
                ))}
                {gallery.length > 3 && (
                  <button onClick={() => setActiveTab('gallery')} className="col-span-1 rounded-2xl bg-slate-50 dark:bg-white/5 border border-dashed border-slate-200 dark:border-white/10 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                    <span className="text-lg font-bold">+{gallery.length - 3}</span>
                    <span className="text-[9px] font-bold uppercase tracking-wider">More</span>
                  </button>
                )}
              </div>
            </div>

            {/* Expense Breakdown by Category */}
            <div className="bg-white dark:bg-[#111111] rounded-[24px] p-6 border border-slate-100 dark:border-white/10 shadow-premium hover:shadow-premium-hover transition-all">
              <h2 className="text-base font-bold text-slate-900 dark:text-white mb-5">Expense Breakdown</h2>
              <DonutChart />
            </div>
          </div>

          {/* Right Column: Recent Activity & Settlements */}
          <div className="lg:col-span-4 space-y-6">

            {/* Settlements Summary */}
            <div className="bg-white dark:bg-[#111111] rounded-[24px] p-6 border border-slate-100 dark:border-white/10 shadow-premium hover:shadow-premium-hover transition-all">
              <h2 className="text-base font-bold text-slate-900 dark:text-white mb-1">Settlement Suggestions</h2>
              <p className="text-[10px] text-slate-500 mb-4 uppercase tracking-wider font-bold">Simplified transactions</p>

              {settlementSuggestions.length === 0 ? (
                <div className="py-6 flex flex-col items-center text-center">
                  <CheckCircle2 size={36} className="text-emerald-500 mb-2" />
                  <p className="text-xs font-bold text-slate-900 dark:text-white">All Settled Up!</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">No outstanding balances remaining.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {settlementSuggestions.slice(0, 3).map((s) => (
                    <div key={s.id} className="flex items-center gap-2.5 bg-slate-50 dark:bg-white/5 rounded-xl p-3 border border-slate-100 dark:border-white/10">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 ${s.from.color}`}>
                        {s.from.avatar}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-slate-900 dark:text-white truncate leading-none mb-1">{s.from.name.split(' ')[0]}</p>
                        <p className="text-[9px] text-slate-500 font-bold uppercase">owes</p>
                      </div>
                      <ArrowRight size={12} className="text-slate-400" />
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 ${s.to.color}`}>
                        {s.to.avatar}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-slate-900 dark:text-white truncate leading-none mb-1">{s.to.name.split(' ')[0]}</p>
                        <p className="text-[9px] text-emerald-500 font-bold">₹{s.amount}</p>
                      </div>
                      <button
                        onClick={() => handleSettleSuggestion(s.from.id, s.to.id, s.amount)}
                        className="bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-white px-2 py-1 rounded-[8px] text-[9px] font-bold hover:bg-blue-600 hover:text-white hover:border-transparent transition-colors"
                      >
                        Settle
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Actions Panel */}
            <div className="bg-white dark:bg-[#111111] rounded-[24px] p-6 border border-slate-100 dark:border-white/10 shadow-premium hover:shadow-premium-hover transition-all">
              <h2 className="text-base font-bold text-slate-900 dark:text-white mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    setNewExpCategory('Food');
                    setShowAddExpense(true);
                  }}
                  className="flex flex-col items-center justify-center gap-2 p-4 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 rounded-2xl transition-colors text-center"
                >
                  <Wallet size={20} className="text-blue-600" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">Add Expense</span>
                </button>
                <button
                  onClick={handleUploadPhoto}
                  className="flex flex-col items-center justify-center gap-2 p-4 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 rounded-2xl transition-colors text-center"
                >
                  <UploadCloud size={20} className="text-emerald-500" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">Upload Photo</span>
                </button>
              </div>
            </div>

            {/* Recent Trip Activity Log */}
            <div className="bg-white dark:bg-[#111111] rounded-[24px] p-6 border border-slate-100 dark:border-white/10 shadow-premium hover:shadow-premium-hover transition-all">
              <h2 className="text-base font-bold text-slate-900 dark:text-white mb-4">Activity Log</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Rahul added Hotel Expense</p>
                    <p className="text-[9px] text-slate-500">Yesterday at 12:00 PM</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Sammi uploaded 6 photos</p>
                    <p className="text-[9px] text-slate-500">2 days ago</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Ali Khan joined trip space</p>
                    <p className="text-[9px] text-slate-500">4 days ago</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 2. EXPENSES TAB */}
      {activeTab === 'expenses' && (
        <div className="space-y-6">

          {/* Top Summary Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-[#111111] rounded-2xl p-5 border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-md transition-all">
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Total Expense</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">₹{totalExpense.toLocaleString()}</p>
              <p className="text-[10px] text-slate-500 mt-1">All spendings combined</p>
            </div>
            <div className="bg-white dark:bg-[#111111] rounded-2xl p-5 border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-md transition-all">
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Your Balance</p>
              <p className={`text-2xl font-bold ${sammiBalance >= 0 ? 'text-green-500' : 'text-rose-500'}`}>
                {sammiBalance >= 0 ? `+₹${Math.round(sammiBalance)}` : `-₹${Math.round(Math.abs(sammiBalance))}`}
              </p>
              <p className="text-[10px] text-slate-500 mt-1">{sammiBalance >= 0 ? 'You will receive' : 'You owe overall'}</p>
            </div>
            <div className="bg-white dark:bg-[#111111] rounded-2xl p-5 border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-md transition-all">
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Pending Settlements</p>
              <p className="text-2xl font-bold text-orange-500">{settlementSuggestions.length}</p>
              <p className="text-[10px] text-slate-500 mt-1">Transactions to clear</p>
            </div>
            <div className="bg-white dark:bg-[#111111] rounded-2xl p-5 border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-md transition-all">
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Total Members</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">{members.length}</p>
              <p className="text-[10px] text-slate-500 mt-1">Equal split partition</p>
            </div>
          </div>

          {/* Expenses Dashboard Workspace */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Left Workspace: Categories & Settlement Suggestions */}
            <div className="lg:col-span-5 space-y-6">

              {/* Category breakdown */}
              <div className="bg-white dark:bg-[#111111] rounded-[24px] p-6 border border-slate-100 dark:border-white/10 shadow-premium hover:shadow-premium-hover transition-all">
                <h2 className="text-base font-bold text-slate-900 dark:text-white mb-5">Category breakdown</h2>
                <DonutChart />
              </div>

              {/* Settlements Engine Suggestions */}
              <div className="bg-white dark:bg-[#111111] rounded-[24px] p-6 border border-slate-100 dark:border-white/10 shadow-premium hover:shadow-premium-hover transition-all">
                <div className="flex items-center justify-between mb-1">
                  <h2 className="text-base font-bold text-slate-900 dark:text-white">Settlement Suggestions</h2>
                  {settlementSuggestions.length > 0 && (
                    <span className="text-[9px] bg-orange-50 text-orange-600 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                      Auto-Calculated
                    </span>
                  )}
                </div>
                <p className="text-[10px] text-slate-500 mb-5 font-bold uppercase tracking-wider">Shortest routes to settle all balances</p>

                {settlementSuggestions.length === 0 ? (
                  <div className="py-8 text-center">
                    <CheckCircle2 size={36} className="text-emerald-500 mx-auto mb-2" />
                    <p className="text-xs font-bold text-slate-900 dark:text-white">No Settlements Needed</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">Everything is perfectly balanced.</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {settlementSuggestions.map((s) => (
                      <div key={s.id} className="flex items-center gap-3 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl p-3.5">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold ${s.from.color}`}>
                          {s.from.avatar}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-bold text-slate-900 dark:text-white truncate leading-none mb-1">{s.from.name}</p>
                          <p className="text-[9px] text-slate-500 uppercase font-bold">owes</p>
                        </div>
                        <ArrowRight size={14} className="text-slate-400" />
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold ${s.to.color}`}>
                          {s.to.avatar}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-bold text-slate-900 dark:text-white truncate leading-none mb-1">{s.to.name}</p>
                          <p className="text-[10px] text-rose-500 font-bold">₹{s.amount.toLocaleString()}</p>
                        </div>
                        <button
                          onClick={() => handleSettleSuggestion(s.from.id, s.to.id, s.amount)}
                          className="bg-blue-600 text-white px-3.5 py-1.5 rounded-xl text-xs font-bold shadow-sm hover:bg-blue-700 transition-all"
                        >
                          Mark Settled
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>

            {/* Right Workspace: Recent Expenses list */}
            <div className="lg:col-span-7">
              <div className="bg-white dark:bg-[#111111] rounded-[24px] p-6 border border-slate-100 dark:border-white/10 shadow-premium hover:shadow-premium-hover transition-all space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-base font-bold text-slate-900 dark:text-white">Recent Expenses</h2>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">Click card to split details</p>
                  </div>
                  <button
                    onClick={() => {
                      setNewExpCategory('Food');
                      setShowAddExpense(true);
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
                  >
                    <Plus size={14} /> Add Expense
                  </button>
                </div>

                <div className="space-y-2">
                  {expenses.map((exp) => (
                    <div
                      key={exp.id}
                      onClick={() => {
                        setSelectedExpense(exp);
                        setShowDetailDrawer(true);
                      }}
                      className="w-full flex items-center gap-3.5 bg-slate-50/50 dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 border border-slate-100 dark:border-white/10 hover:border-slate-200 dark:hover:border-white/20 rounded-2xl px-4 py-3.5 cursor-pointer transition-all text-left hover:shadow-sm hover:-translate-y-0.5"
                    >
                      <div className="w-11 h-11 rounded-2xl bg-white dark:bg-black/20 border border-slate-100 dark:border-white/10 flex items-center justify-center text-xl shrink-0">
                        {exp.emoji}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-slate-900 dark:text-white truncate">{exp.title}</p>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">{exp.category} • by {exp.createdBy.split(' ')[0]}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-xs font-bold text-slate-900 dark:text-white">₹{exp.amount.toLocaleString()}</p>
                        <p className="text-[10px] text-slate-500 mt-0.5">{exp.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* 3. GALLERY TAB */}
      {activeTab === 'gallery' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-[#111111] rounded-[24px] p-6 border border-slate-100 dark:border-white/10 shadow-premium hover:shadow-premium-hover transition-all space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-base font-bold text-slate-900 dark:text-white">Google Photos Shared Gallery</h2>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">High definition travel memories</p>
              </div>
              <div className="flex items-center gap-2.5">
                <button
                  onClick={handleUploadPhoto}
                  className="bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm hover:bg-blue-700 transition-all"
                >
                  <UploadCloud size={14} /> Upload Photos
                </button>
                <button className="bg-white dark:bg-[#111111] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                  <Download size={14} /> Download Album
                </button>
              </div>
            </div>

            {/* Gallery Filters */}
            <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-slate-100 dark:border-white/10">
              {['All', 'Sammi Azaz', 'Rahul Kumar', 'Ali Khan', 'Aman Verma', 'Faizan Shaikh'].map(f => (
                <button
                  key={f}
                  onClick={() => setGalleryFilter(f)}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all hover:scale-[1.05] active:scale-[0.95] ${galleryFilter === f
                      ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600'
                      : 'bg-slate-50 dark:bg-white/5 text-slate-500 hover:bg-slate-100 dark:hover:bg-white/10'
                    }`}
                >
                  {f === 'All' ? 'All Photos' : f.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Google Photos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {gallery
                .filter(img => galleryFilter === 'All' || img.author === galleryFilter)
                .map((img) => (
                  <div key={img.id} className="relative group rounded-2xl overflow-hidden shadow-sm h-48 border border-slate-100 dark:border-white/10">
                    <img src={img.img} alt="Gallery item" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3.5">
                      <div>
                        <p className="text-[10px] text-white/90 font-bold">Uploaded by {img.author.split(' ')[0]}</p>
                        <p className="text-[8px] text-white/60 uppercase font-bold tracking-wider mt-0.5">{img.album}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* 4. MEMBERS TAB */}
      {activeTab === 'members' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-[#111111] rounded-[24px] p-6 border border-slate-100 dark:border-white/10 shadow-premium hover:shadow-premium-hover transition-all">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-base font-bold text-slate-900 dark:text-white">Active Trip Space Members</h2>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">Contributions & balances overview</p>
              </div>
              <button className="bg-white dark:bg-[#111111] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 px-4 py-2 rounded-xl text-xs font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                Invite Member
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {memberFinances.map((m) => (
                <div key={m.id} className="border border-slate-100 dark:border-white/10 bg-slate-50/40 dark:bg-white/5 rounded-2xl p-5 shadow-sm space-y-4">
                  <div className="flex items-center gap-3.5">
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm shrink-0 shadow-sm ${m.color}`}>
                      {m.avatar}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-slate-900 dark:text-white truncate leading-none mb-1">{m.name}</p>
                      <span className="text-[9px] bg-blue-50 dark:bg-blue-500/10 text-blue-600 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider inline-block">
                        {m.role}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100 dark:border-white/10">
                    <div>
                      <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Total Paid</p>
                      <p className="text-base font-bold text-slate-900 dark:text-white mt-0.5">₹{m.totalPaid.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Share</p>
                      <p className="text-base font-bold text-slate-600 dark:text-slate-300 mt-0.5">₹{Math.round(m.totalShare).toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                    <span className="text-[10px] text-slate-500 font-bold uppercase">Balance Status</span>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-xl uppercase tracking-wider text-[9px] ${m.balance > 0.01
                        ? 'bg-green-50 text-green-600'
                        : m.balance < -0.01
                          ? 'bg-rose-50 text-rose-600'
                          : 'bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-300'
                      }`}>
                      {m.balance > 0.01
                        ? `Gets back ₹${Math.round(m.balance)}`
                        : m.balance < -0.01
                          ? `Owes ₹${Math.round(Math.abs(m.balance))}`
                          : 'Settled'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 5. TIMELINE TAB */}
      {activeTab === 'timeline' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-[#111111] rounded-[24px] p-6 border border-slate-100 dark:border-white/10 shadow-premium hover:shadow-premium-hover transition-all">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-base font-bold text-slate-900 dark:text-white">Day-Wise Itinerary Plan</h2>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">Timeline schedule for Santorini Summer</p>
              </div>
              <button className="bg-white dark:bg-[#111111] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                <Plus size={14} /> Add Event
              </button>
            </div>

            <div className="relative pl-6 md:pl-12 border-l-2 border-slate-100 dark:border-white/10 space-y-8 max-w-3xl ml-4">
              {timeline.map((day, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline point */}
                  <div className={`absolute -left-[35px] md:-left-[59px] w-6 h-6 md:w-8 md:h-8 rounded-full border-4 border-white dark:border-[#111318] flex items-center justify-center font-bold text-[9px] md:text-xs shadow-sm shrink-0 transition-colors ${day.done ? 'bg-blue-600 text-white' : 'bg-slate-200 dark:bg-white/10 text-slate-500'
                    }`}>
                    {day.day}
                  </div>

                  <div className="bg-slate-50/50 dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 border border-slate-100 dark:border-white/10 rounded-2xl p-5 transition-all hover:shadow-md cursor-pointer">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest leading-none">
                        Day {day.day} • {day.time}
                      </span>
                      <button
                        onClick={() => {
                          const updated = timeline.map((t, i) => i === idx ? { ...t, done: !t.done } : t);
                          setTimeline(updated);
                        }}
                        className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md flex items-center gap-1 transition-colors ${day.done
                            ? 'bg-green-50 text-green-600'
                            : 'bg-slate-200 dark:bg-white/10 text-slate-500 hover:bg-slate-300 dark:hover:bg-white/20'
                          }`}
                      >
                        {day.done ? 'Completed' : 'Mark Visited'}
                      </button>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug mb-1">{day.title}</h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{day.desc}</p>
                    <div className="flex items-center gap-1.5 mt-3 text-[10px] text-slate-500 font-bold">
                      <ImageIcon size={12} /> {day.photos} Memories captured
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 6. NOTES TAB */}
      {activeTab === 'notes' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-[#111111] rounded-[24px] p-6 border border-slate-100 dark:border-white/10 shadow-premium hover:shadow-premium-hover transition-all space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-base font-bold text-slate-900 dark:text-white">Shared Space Notes & Checklists</h2>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">Important files, packing checks, and travel logs</p>
              </div>
              <button
                onClick={() => setShowAddNote(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm hover:bg-blue-700 transition-all"
              >
                <Plus size={14} /> Add Note
              </button>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-white/10">
              {['All', 'Packing', 'Info', 'Emergency'].map(f => (
                <button
                  key={f}
                  onClick={() => setNoteFilter(f)}
                  className={`px-3.5 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors ${noteFilter === f
                      ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600'
                      : 'bg-slate-50 dark:bg-white/5 text-slate-500 hover:bg-slate-100 dark:hover:bg-white/10'
                    }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Note Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {notes
                .filter(n => noteFilter === 'All' || n.category === noteFilter)
                .map((note) => (
                  <div key={note.id} className="bg-slate-50/50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl p-5 relative space-y-3">
                    <button
                      onClick={() => setNotes(notes.filter(n => n.id !== note.id))}
                      className="absolute top-4 right-4 text-slate-300 dark:text-slate-500 hover:text-rose-500 transition-colors"
                    >
                      <Trash2 size={13} />
                    </button>
                    <div>
                      <span className="text-[8px] bg-slate-200/60 dark:bg-white/10 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-full font-bold tracking-widest uppercase">
                        {note.category}
                      </span>
                      <h3 className="text-xs font-bold text-slate-900 dark:text-white mt-2">{note.title}</h3>
                    </div>
                    <ul className="space-y-1.5">
                      {note.content.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 font-medium">
                          <CheckCircle2 size={12} className="text-blue-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* ─── ADD EXPENSE MODAL ─── */}
      {showAddExpense && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm" onClick={() => setShowAddExpense(false)} />
          <div className="fixed inset-x-4 bottom-4 md:inset-x-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50 bg-white dark:bg-[#111111] rounded-[24px] shadow-premium max-w-md w-full overflow-hidden animate-in fade-in zoom-in-95 duration-200 border border-slate-100 dark:border-white/10">
            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/10">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Add New Expense</h3>
                <button onClick={() => setShowAddExpense(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors">
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleAddExpense} className="space-y-4">
                <div>
                  <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Description</label>
                  <input
                    type="text"
                    required
                    value={newExpTitle}
                    onChange={(e) => setNewExpTitle(e.target.value)}
                    placeholder="e.g. Dinner at BBQ Nation"
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4.5 py-3 text-xs font-semibold text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Category</label>
                    <select
                      value={newExpCategory}
                      onChange={(e) => setNewExpCategory(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-3 py-3 text-xs font-semibold text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-all"
                    >
                      {Object.keys(CATEGORY_EMOJIS).map(cat => (
                        <option key={cat} value={cat}>{CATEGORY_EMOJIS[cat]} {cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Amount (₹)</label>
                    <input
                      type="number"
                      required
                      min="1"
                      value={newExpAmount}
                      onChange={(e) => setNewExpAmount(e.target.value)}
                      placeholder="Amount"
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs font-semibold text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Notes (Optional)</label>
                  <textarea
                    value={newExpNotes}
                    onChange={(e) => setNewExpNotes(e.target.value)}
                    placeholder="Additional details..."
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs font-semibold text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-all h-20 resize-none"
                  />
                </div>

                {/* Auto Capture details */}
                <div className="bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-xl p-3 text-[10px] text-slate-500 space-y-1.5 font-bold">
                  <div className="flex items-center gap-1.5"><Clock size={11} /> Auto-Capture: Today, {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                  <div className="flex items-center gap-1.5"><MapPin size={11} /> Location: Santorini, Greece</div>
                  <div className="flex items-center gap-1.5"><Users size={11} /> Split: Equally among {members.length} members (₹{Math.round((parseFloat(newExpAmount) || 0) / members.length)} each)</div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-bold text-xs shadow-md hover:bg-blue-700 active:scale-98 transition-all uppercase tracking-wider"
                >
                  Save Expense
                </button>
              </form>
            </div>
          </div>
        </>
      )}

      {/* ─── ADD NOTE MODAL ─── */}
      {showAddNote && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm" onClick={() => setShowAddNote(false)} />
          <div className="fixed inset-x-4 bottom-4 md:inset-x-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50 bg-white dark:bg-[#111111] rounded-[24px] shadow-premium max-w-md w-full overflow-hidden animate-in fade-in zoom-in-95 duration-200 border border-slate-100 dark:border-white/10">
            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/10">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Add New Travel Note</h3>
                <button onClick={() => setShowAddNote(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors">
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleAddNote} className="space-y-4">
                <div>
                  <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Title</label>
                  <input
                    type="text"
                    required
                    value={newNoteTitle}
                    onChange={(e) => setNewNoteTitle(e.target.value)}
                    placeholder="e.g. Packing Essentials 🎒"
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs font-semibold text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Category</label>
                  <select
                    value={newNoteCategory}
                    onChange={(e) => setNewNoteCategory(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-3 py-3 text-xs font-semibold text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-all"
                  >
                    <option value="Packing">Packing List</option>
                    <option value="Info">General Info</option>
                    <option value="Documents">Documents</option>
                    <option value="Emergency">Emergency</option>
                  </select>
                </div>

                <div>
                  <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Content (One item per line)</label>
                  <textarea
                    required
                    value={newNoteContent}
                    onChange={(e) => setNewNoteContent(e.target.value)}
                    placeholder="Item 1&#10;Item 2&#10;Item 3"
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs font-semibold text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-all h-28"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-bold text-xs shadow-md hover:bg-blue-700 active:scale-98 transition-all uppercase tracking-wider"
                >
                  Add Note
                </button>
              </form>
            </div>
          </div>
        </>
      )}

      {/* ─── EXPENSE DETAIL DRAWER ─── */}
      {showDetailDrawer && selectedExpense && (
        <>
          <div className="fixed inset-0 bg-black/40 z-30 backdrop-blur-sm" onClick={() => setShowDetailDrawer(false)} />
          <div className="fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-[#111111] rounded-t-[2.5rem] shadow-[0_-8px_40px_rgba(0,0,0,0.15)] max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom duration-300 dark:border-t dark:border-white/10">
            <div className="max-w-4xl mx-auto p-8 space-y-6">

              {/* Grab handle */}
              <div className="w-12 h-1.5 bg-slate-200 dark:bg-white/10 rounded-full mx-auto" />

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-slate-100 dark:border-white/10">
                <div>
                  <span className="text-[9px] bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-full font-bold tracking-widest uppercase">
                    Expense Split details
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">{selectedExpense.title}</h2>
                  <p className="text-xs text-slate-500 font-medium mt-1">{selectedExpense.date} • {selectedExpense.time} • {selectedExpense.location}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => openContributionModal(selectedExpense)}
                    className="flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-500/10 px-3.5 py-2 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-colors"
                  >
                    <Edit2 size={13} /> Update contribution
                  </button>
                  <button onClick={() => setShowDetailDrawer(false)} className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-500 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors">
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Columns */}
                <div className="lg:col-span-8 space-y-6">

                  {/* Split Summary Cards */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl p-4 text-center">
                      <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Total paid</p>
                      <p className="text-lg font-bold text-slate-900 dark:text-white mt-1">₹{selectedExpense.amount.toLocaleString()}</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl p-4 text-center">
                      <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Share per head</p>
                      <p className="text-lg font-bold text-slate-900 dark:text-white mt-1">₹{Math.round(selectedExpense.amount / members.length).toLocaleString()}</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl p-4 text-center">
                      <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Split rule</p>
                      <p className="text-sm font-bold text-blue-600 mt-1.5 uppercase tracking-wide">Equal Split</p>
                    </div>
                  </div>

                  {/* Contributions Table */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Contribution Ledger</h3>
                    <div className="bg-white dark:bg-[#111111] border border-slate-100 dark:border-white/10 rounded-[24px] overflow-hidden shadow-sm">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-slate-50/70 dark:bg-white/5 border-b border-slate-100 dark:border-white/10 text-left">
                            <th className="px-5 py-3 text-[9px] font-bold text-slate-500 uppercase tracking-wider">Member</th>
                            <th className="px-5 py-3 text-[9px] font-bold text-slate-500 uppercase tracking-wider text-right">Expected Share</th>
                            <th className="px-5 py-3 text-[9px] font-bold text-slate-500 uppercase tracking-wider text-right">Amount Paid</th>
                            <th className="px-5 py-3 text-[9px] font-bold text-slate-500 uppercase tracking-wider text-right">Net Balance</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50 dark:divide-white/5">
                          {members.map(m => {
                            const expected = selectedExpense.amount / members.length;
                            const paid = selectedExpense.paidBy[m.id] || 0;
                            const bal = paid - expected;

                            return (
                              <tr key={m.id}>
                                <td className="px-5 py-3.5 flex items-center gap-2.5">
                                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 ${m.color}`}>
                                    {m.avatar}
                                  </div>
                                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{m.name}</span>
                                </td>
                                <td className="px-5 py-3.5 text-xs text-slate-500 text-right">
                                  ₹{Math.round(expected).toLocaleString()}
                                </td>
                                <td className="px-5 py-3.5 text-xs font-bold text-slate-900 dark:text-white text-right">
                                  ₹{paid.toLocaleString()}
                                </td>
                                <td className="px-5 py-3.5 text-right">
                                  <span className={`text-xs font-bold px-2 py-0.5 rounded-lg text-[9px] ${bal > 0.01
                                      ? 'bg-green-50 text-green-600'
                                      : bal < -0.01
                                        ? 'bg-rose-50 text-rose-600'
                                        : 'bg-slate-100 dark:bg-white/10 text-slate-400'
                                    }`}>
                                    {bal > 0.01
                                      ? `+₹${Math.round(bal)}`
                                      : bal < -0.01
                                        ? `-₹${Math.round(Math.abs(bal))}`
                                        : '₹0'}
                                  </span>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {selectedExpense.notes && (
                    <div className="bg-blue-50/50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 rounded-2xl p-4.5 flex gap-3 text-xs text-blue-700 dark:text-blue-400">
                      <Info size={16} className="shrink-0 mt-0.5 text-blue-500" />
                      <div>
                        <p className="font-bold">Expense Notes</p>
                        <p className="mt-0.5 text-blue-600/90 dark:text-blue-400/90 font-medium">{selectedExpense.notes}</p>
                      </div>
                    </div>
                  )}

                </div>

                {/* Right side: quick actions */}
                <div className="lg:col-span-4 space-y-6">
                  <div className="bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-[24px] p-5 space-y-4">
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Settlement suggestion</h3>
                    <p className="text-[10px] text-slate-500 font-medium leading-relaxed">
                      Settle this specific expense immediately using auto suggestions.
                    </p>
                    <button
                      onClick={() => openContributionModal(selectedExpense)}
                      className="w-full bg-blue-600 text-white py-3.5 rounded-xl text-xs font-bold hover:bg-blue-700 shadow-sm active:scale-97 transition-all flex items-center justify-center gap-1.5"
                    >
                      <Edit2 size={13} /> Update Payments
                    </button>
                    <button
                      onClick={() => {
                        setExpenses(expenses.filter(e => e.id !== selectedExpense.id));
                        setShowDetailDrawer(false);
                      }}
                      className="w-full bg-white dark:bg-transparent border border-rose-100 dark:border-rose-500/30 text-rose-500 py-3 rounded-xl text-xs font-bold hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Trash2 size={13} /> Delete Expense
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </>
      )}

      {/* ─── MEMBER CONTRIBUTION DIALOG ─── */}
      {showContributionModal && (
        <>
          <div className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm" onClick={() => setShowContributionModal(null)} />
          <div className="fixed inset-x-4 bottom-4 md:inset-x-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50 bg-white dark:bg-[#111111] rounded-[24px] shadow-premium max-w-md w-full overflow-hidden animate-in fade-in zoom-in-95 duration-200 border border-slate-100 dark:border-white/10">
            <div className="p-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/10">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider leading-none mb-1">Update payments</h3>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">{showContributionModal.title}</p>
                </div>
                <button onClick={() => setShowContributionModal(null)} className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors">
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-3.5 max-h-[300px] overflow-y-auto pr-1">
                {members.map(m => (
                  <div key={m.id} className="flex items-center justify-between gap-3 bg-slate-50 dark:bg-white/5 p-2.5 rounded-2xl border border-slate-100/50 dark:border-white/10">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${m.color}`}>
                        {m.avatar}
                      </div>
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{m.name}</span>
                    </div>
                    <div className="relative w-28">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500">₹</span>
                      <input
                        type="number"
                        value={tempPayments[m.id] || ''}
                        onChange={(e) => setTempPayments({
                          ...tempPayments,
                          [m.id]: e.target.value
                        })}
                        placeholder="0"
                        className="w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl pl-7 pr-3 py-2 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-all text-right"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-xl p-3 text-[10px] text-slate-500 font-bold flex items-center gap-2">
                <Info size={13} className="text-blue-600" />
                <span>Adjusting these values updates balances and suggests settlements in real time.</span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => setShowContributionModal(null)}
                  className="bg-white dark:bg-[#111111] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 py-3 rounded-xl text-xs font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveContribution}
                  className="bg-blue-600 text-white py-3 rounded-xl text-xs font-bold hover:bg-blue-700 shadow-sm transition-all"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </>
      )}

    </div>
  );
}
