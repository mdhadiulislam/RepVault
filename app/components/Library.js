'use client';
import { useMemo, useState } from 'react';
import { ArrowDownUp, LoaderCircle, Search } from 'lucide-react';
import WorkoutCard from './WorkoutCard';

export default function Library({ workouts, loading, error }) {
  const [sort, setSort] = useState('duration');
  const [search, setSearch] = useState('');
  const list = useMemo(() => [...workouts].filter(w => `${w.name} ${w.muscleGroups.join(' ')}`.toLowerCase().includes(search.toLowerCase())).sort((a,b) => b[sort] - a[sort]), [workouts, sort, search]);
  return <section id="library" className="container scroll-mt-28 py-20">
    <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"><div><p className="mb-2 text-xs font-black uppercase tracking-[.2em] text-[var(--accent)]">12 lifts / one library</p><h2 className="display text-5xl uppercase sm:text-6xl">The Library</h2><p className="mt-3 max-w-xl text-sm text-white/45">Twelve lifts covering every major muscle group.</p></div>
      <div className="flex flex-col gap-2 sm:flex-row"><label className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[.03] px-3"><Search size={16} className="text-white/35"/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search lifts..." className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-white/30"/></label><label className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[.03] px-3"><ArrowDownUp size={16} className="text-[var(--accent)]"/><span className="text-xs font-bold uppercase text-white/45">Sort By</span><select value={sort} onChange={e=>setSort(e.target.value)} className="bg-transparent py-3 text-sm font-bold outline-none"><option value="duration" className="bg-black">Duration</option><option value="caloriesBurned" className="bg-black">Calories</option><option value="rating" className="bg-black">Rating</option></select></label></div>
    </div>
    {loading && <div className="grid place-items-center rounded-2xl border border-white/10 bg-white/[.02] py-24"><LoaderCircle className="animate-spin text-[var(--accent)]"/><p className="mt-4 text-sm text-white/45">Loading workouts…</p></div>}
    {error && !loading && <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8 text-center text-sm text-red-200">{error}</div>}
    {!loading && !error && <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{list.map(w => <WorkoutCard key={w.id} workout={w}/>)}</div>}
  </section>;
}
