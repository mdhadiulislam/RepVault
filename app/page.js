'use client';

import Image from 'next/image';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Library from './components/Library';
import workoutsData from '../data/workouts.json';

export default function Home() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setWorkouts(workoutsData);
    setLoading(false);
  }, []);

  return (
    <>
      <section className="grid-bg border-b border-white/10">
        <div className="container grid min-h-[600px] items-center gap-12 py-16 lg:grid-cols-[1.02fr_.98fr] lg:py-20">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-black uppercase tracking-[.22em] text-[var(--accent)]">
              <span className="h-px w-8 bg-[var(--accent)]" />
              Workout Library
            </p>

            <h1 className="display max-w-4xl text-6xl uppercase leading-[.9] sm:text-7xl lg:text-[88px]">
              Train With Intent.
              <br />
              <span className="text-white/30">Log Every Set.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/50">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#library"
                className="inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-6 py-3.5 text-xs font-black uppercase tracking-[.12em] text-black"
              >
                Browse Workouts
                <ArrowRight size={17} />
              </a>

              <Link
                href="/my-plan"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3.5 text-xs font-black uppercase tracking-[.12em] text-white/70 hover:text-white"
              >
                My Plan
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[540px]">
            <div className="absolute -inset-4 rounded-[2rem] bg-[var(--accent)]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#151515] p-2 glow">
              <Image
                src="/assets/banner.png"
                alt="FitLog training banner"
                width={900}
                height={620}
                priority
                className="h-auto w-full rounded-[1.5rem] object-cover"
              />
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-white/10 bg-[#111] px-4 py-3 sm:block">
              <p className="text-[10px] uppercase tracking-widest text-white/35">
                Today&apos;s focus
              </p>
              <p className="mt-1 text-sm font-bold">Train. Log. Repeat.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container flex items-center gap-3 py-5 text-[10px] font-black uppercase tracking-[.18em] text-white/25">
        <ArrowDown size={14} />
        Scroll to library
      </div>

      <Library
        workouts={workouts}
        loading={loading}
        error={error}
      />
    </>
  );
}