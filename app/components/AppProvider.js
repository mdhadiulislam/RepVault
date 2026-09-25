'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [done, setDone] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      setPlan(JSON.parse(localStorage.getItem('fitlog-plan') || '[]'));
      setSaved(JSON.parse(localStorage.getItem('fitlog-saved') || '[]'));
      setDone(JSON.parse(localStorage.getItem('fitlog-done') || '[]'));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => { if (hydrated) localStorage.setItem('fitlog-plan', JSON.stringify(plan)); }, [plan, hydrated]);
  useEffect(() => { if (hydrated) localStorage.setItem('fitlog-saved', JSON.stringify(saved)); }, [saved, hydrated]);
  useEffect(() => { if (hydrated) localStorage.setItem('fitlog-done', JSON.stringify(done)); }, [done, hydrated]);

  const value = useMemo(() => ({
    plan, saved, done, hydrated,
    addToPlan: (workout) => setPlan(prev => prev.some(x => x.id === workout.id) || prev.length >= 5 ? prev : [...prev, workout]),
    removeFromPlan: (id) => setPlan(prev => prev.filter(x => x.id !== id)),
    saveWorkout: (workout) => setSaved(prev => prev.some(x => x.id === workout.id) ? prev : [...prev, workout]),
    removeSaved: (id) => setSaved(prev => prev.filter(x => x.id !== id)),
    toggleDone: (id) => setDone(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }), [plan, saved, done, hydrated]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() { return useContext(AppContext); }
