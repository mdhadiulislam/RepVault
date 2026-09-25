import Image from 'next/image';
export default function Footer() {
  return <footer className="mt-24 border-t border-white/10 bg-[#050505] py-8"><div className="container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-2"><Image src="/assets/logo.png" alt="FitLog" width={34} height={34} className="h-8 w-8 object-contain"/><span className="display text-lg">FITLOG</span></div><p className="text-xs uppercase tracking-[.12em] text-white/40">© 2026 FitLog — Workout Library. Train hard, log honest.</p></div></footer>;
}
