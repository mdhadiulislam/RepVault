'use client';
import Image from 'next/image';
import Link from 'next/link';
import { use, useEffect, useState } from 'react';
import { ArrowLeft, Bookmark, Check, Clock3, Dumbbell, Flame, Gauge, ListChecks, Star } from 'lucide-react';
import toast from 'react-hot-toast';
import { useApp } from '../../components/AppProvider';

const API='https://api.abcz.workers.dev/api/fitlog';
export default function WorkoutDetails({ params }) {
  const { id } = use(params);
  const { plan, saved, addToPlan, saveWorkout } = useApp();
  const [workout,setWorkout]=useState(null); const [loading,setLoading]=useState(true); const [error,setError]=useState('');
  useEffect(()=>{ fetch(`${API}/${id}`).then(r=>{if(!r.ok) throw new Error('Workout not found.'); return r.json()}).then(setWorkout).catch(e=>setError(e.message)).finally(()=>setLoading(false)); },[id]);
  if(loading) return <div className="container grid min-h-[70vh] place-items-center"><div className="text-center"><div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-[var(--accent)]"/><p className="mt-4 text-sm text-white/45">Loading workout…</p></div></div>;
  if(error || !workout) return <div className="container grid min-h-[70vh] place-items-center text-center"><div><h1 className="display text-5xl">WORKOUT NOT FOUND</h1><p className="mt-3 text-white/45">This lift may have been removed from the library.</p><Link href="/" className="mt-7 inline-flex rounded-full bg-[var(--accent)] px-5 py-3 text-xs font-black uppercase text-black">Back to library</Link></div></div>;
  const inPlan=plan.some(x=>x.id===workout.id), isSaved=saved.some(x=>x.id===workout.id);
  const add=()=>{ if(inPlan){toast('Already in today\'s plan');return;} if(plan.length>=5){toast.error('Today\'s plan is capped at five lifts');return;} addToPlan(workout); toast.success('Added to today\'s plan'); };
  const save=()=>{ if(isSaved){toast('Already saved for later');return;} saveWorkout(workout); toast.success('Saved for later'); };
  return <div className="container py-10 sm:py-14"><Link href="/" className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.15em] text-white/45 hover:text-white"><ArrowLeft size={15}/> Back to library</Link><div className="grid gap-8 lg:grid-cols-[.95fr_1.05fr] lg:items-start"><div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-[#151515] lg:sticky lg:top-28"><Image src={workout.image} alt={workout.name} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover"/></div><div><div className="flex flex-wrap gap-2">{workout.muscleGroups.map(g=><span key={g} className="rounded-full bg-[var(--accent)] px-3 py-1.5 text-[10px] font-black uppercase text-black">{g}</span>)}</div><h1 className="display mt-5 text-5xl uppercase leading-[.95] sm:text-7xl">{workout.name}</h1><p className="mt-6 max-w-2xl text-base leading-7 text-white/50">{workout.description}</p>
  <div className="mt-8 overflow-hidden rounded-2xl border border-white/10"><div className="border-b border-white/10 bg-white/[.025] px-5 py-4 text-xs font-black uppercase tracking-[.18em] text-white/45">Key Specs</div><div className="grid grid-cols-2 sm:grid-cols-3">{[['Equipment',workout.equipment,Dumbbell],['Difficulty',workout.difficulty,Gauge],['Sets',workout.sets,ListChecks],['Reps',workout.reps,Check],['Duration',`${workout.duration} min`,Clock3],['Calories',`${workout.caloriesBurned} kcal`,Flame],['Rating',workout.rating,Star]].map(([label,value,Icon])=><div key={label} className="border-b border-r border-white/10 p-4"><div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/30"><Icon size={13}/>{label}</div><p className="mt-2 text-sm font-bold">{value}</p></div>)}</div></div>
  <div className="mt-8"><h2 className="display text-3xl uppercase">Instructions</h2><ol className="mt-4 space-y-3">{workout.instructions.map((s,i)=><li key={s} className="flex gap-4 rounded-xl border border-white/10 bg-white/[.02] p-4"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[var(--accent)] text-xs font-black text-black">{i+1}</span><span className="pt-1 text-sm leading-6 text-white/65">{s}</span></li>)}</ol></div>
  <div className="mt-8 grid gap-3 sm:grid-cols-2"><button onClick={add} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-4 text-xs font-black uppercase tracking-[.12em] text-black"><Dumbbell size={17}/>{inPlan?'In Today\'s Plan':'Add to today\'s plan'}</button><button onClick={save} className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-4 text-xs font-black uppercase tracking-[.12em] text-white hover:bg-white/5"><Bookmark size={17}/>{isSaved?'Saved':'Save for later'}</button></div>
 </div></div></div>;
}
