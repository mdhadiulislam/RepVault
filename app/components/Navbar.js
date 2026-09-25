'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Dumbbell, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useApp } from './AppProvider';

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = useApp();
  const [open, setOpen] = useState(false);
  const active = (href) => pathname === href ? 'text-[var(--accent)]' : 'text-white/60 hover:text-white';
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090909]/95 backdrop-blur">
      <div className="container flex min-h-[74px] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image src="/assets/logo.png" alt="FitLog" width={42} height={42} className="h-9 w-9 object-contain" />
          <span className="display text-xl">FITLOG</span>
        </Link>
        <nav className={`absolute left-0 top-[74px] w-full border-b border-white/10 bg-[#090909] px-4 py-5 md:static md:w-auto md:border-0 md:bg-transparent md:p-0 ${open ? 'block' : 'hidden'} md:block`}>
          <div className="container flex flex-col gap-5 md:flex-row md:items-center md:gap-8">
            <Link href="/" onClick={() => setOpen(false)} className={`text-sm font-bold uppercase tracking-[.14em] transition ${active('/')}`}>Workout</Link>
            <Link href="/my-plan" onClick={() => setOpen(false)} className={`text-sm font-bold uppercase tracking-[.14em] transition ${active('/my-plan')}`}>My Plan</Link>
          </div>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/my-plan" className="hidden items-center gap-2 rounded-full bg-[var(--accent)] px-3 py-2 text-xs font-black uppercase text-black sm:flex">
            Plan <span className="grid h-5 min-w-5 place-items-center rounded-full bg-black px-1 text-[10px] text-[var(--accent)]">{plan.length}</span>
          </Link>
          <Link href="/my-plan" className="hidden items-center gap-2 rounded-full border border-white/25 px-3 py-2 text-xs font-black uppercase text-white sm:flex">
            Saved <span className="grid h-5 min-w-5 place-items-center rounded-full bg-white/10 px-1 text-[10px]">{saved.length}</span>
          </Link>
          <button onClick={() => setOpen(v => !v)} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 md:hidden" aria-label="Toggle menu">
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
      <div className="container flex gap-2 pb-3 sm:hidden">
        <Link href="/my-plan" className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[var(--accent)] py-2 text-xs font-black uppercase text-black">Plan {plan.length}</Link>
        <Link href="/my-plan" className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/25 py-2 text-xs font-black uppercase">Saved {saved.length}</Link>
      </div>
    </header>
  );
}
