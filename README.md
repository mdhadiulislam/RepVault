# FitLog — Workout Library

FitLog is a responsive, dark-mode workout library and daily workout planner built for the Programming Hero B14-A6 assignment. Browse twelve lifts, inspect detailed instructions, add up to five lifts to today's plan, save workouts for later, and track your daily minutes and calories.

## Technologies
- Next.js App Router
- React
- Tailwind CSS v4
- Lucide React icons
- React Hot Toast
- FitLog REST API
- localStorage for plan/saved persistence

## Key Features
1. Responsive workout library with 3-column desktop layout.
2. Workout detail pages with specs, instructions, and CTA actions.
3. Today's Plan with a five-lift cap, live metrics, completion state, and removal.
4. Saved workouts tab with persistent localStorage data.
5. Duration / Calories / Rating sorting and workout search.
6. Loading states, toast feedback, custom 404 page, and deployment-safe App Router routes.

## Run locally
```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build
```bash
npm run build
npm start
```

## API
- All workouts: https://api.abcz.workers.dev/api/fitlog
- Single workout: https://api.abcz.workers.dev/api/fitlog/:id
