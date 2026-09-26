"use client";

import Image from "next/image";
import Link from "next/link";
import { Flame, Clock3, Star } from "lucide-react";

export default function WorkoutCard({ workout }) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="card-hover block overflow-hidden rounded-2xl border border-white/10 bg-[var(--panel)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#1a1a1a]">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full border border-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[.12em] text-white/60"
            >
              {group}
            </span>
          ))}
        </div>

        <h3 className="display text-xl uppercase leading-tight">
          {workout.name}
        </h3>

        <p className="mt-2 truncate text-sm text-white/45">
          {workout.equipment}
        </p>

        <div className="mt-5 grid grid-cols-3 border-t border-white/10 pt-4 text-xs text-white/55">
          <span className="flex items-center gap-1">
            <Clock3 size={14} />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <Flame size={14} />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <Star size={14} />
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}