/**
 * Real project data for the portfolio.
 *
 * Sourced from the project detail files in /docs and the resume.
 * All metrics, URLs, and descriptions are real — no fabricated numbers.
 */

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full Stack' | 'Web Apps' | 'Tools';
  year: string;
  tags: string[];
  /** Placeholder image until real screenshots are added. */
  image: string;
  githubUrl: string;
  liveUrl: string | null;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  /** Only metrics that are real and verifiable. */
  metrics: { value: string; label: string }[];
}

export const projects: Project[] = [
  {
    id: 'fast-utilities',
    title: 'FAST Isb Utilities',
    tagline:
      '10 campus tools in one app. Live at FAST NUCES Islamabad.',
    category: 'Full Stack',
    year: '2026',
    tags: ['Next.js 14', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    // TODO: replace with a real screenshot of fast-nuces.vercel.app
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/ammarasad2005/Exam-Table',
    liveUrl: 'https://fast-nuces.vercel.app/',
    overview:
      'FAST Isb Utilities puts 10 campus tools — timetables, exam schedules, free rooms, faculty directory — into one app. It is live and used by FAST NUCES Islamabad students.',
    problem:
      'FAST NUCES Islamabad students juggled 10+ separate tools and spreadsheets for timetables, exam schedules, room availability, faculty info, and events. Finding a free room or building a clash-free semester schedule required manual cross-referencing across multiple sources.',
    solution:
      'Built a unified Next.js App Router app with a backtracking timetable optimizer that finds clash-free section combinations, multi-format exports (CSV/XLSX/ICS/PNG), and a cron-driven data refresh pipeline (Python + GitHub Actions) that keeps static JSON current.',
    features: [
      'Backtracking timetable optimizer — finds clash-free section combinations for cross-department/elective-laden course loads with Fit Score and Comfort Score',
      'Multi-format exports (CSV / XLSX / ICS / PNG) so schedules flow into Google Calendar, WhatsApp images, or Excel',
      '10 campus utilities: timetable viewer, exam schedule finder, custom builders, free-rooms finder, faculty directory, events calendar, semester calendar, Lost & Found',
      'Cron-driven data refresh committed back to the repo by GitHub Actions; Python ingestion pipeline feeding static JSON',
    ],
    metrics: [
      { value: '10', label: 'Campus utilities in one app' },
      { value: '4', label: 'Export formats (CSV/XLSX/ICS/PNG)' },
      { value: 'Live', label: 'Deployed on Vercel' },
      { value: '2026', label: 'Year' },
    ],
  },
  {
    id: 'wayfinder',
    title: 'Wayfinder',
    tagline:
      'Find a place with Google. Get a ride with Yango. — mobile-first, 3 taps to a ride.',
    category: 'Web Apps',
    year: '2026',
    tags: ['Next.js 16', 'React 19', 'Google Maps API', 'NextAuth'],
    // TODO: replace with a real screenshot of the Wayfinder app
    image:
      'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/ammarasad2005/WayFinder',
    liveUrl: null,
    overview:
      'Wayfinder compresses finding a place, verifying it, and getting a ride into three taps. Search with Google Places, verify on a rich place page, hand off to Yango via deep link.',
    problem:
      'Ride-hailing apps like Yango have weak in-app address indexing in Pakistan. Users had to manually pin-drop destinations, which often led to wrong pickups, especially for less-known locations.',
    solution:
      'Built a mobile-first Next.js App Router app that proxies Google Places and Directions API calls through BFF routes (API key never sent to client), with field masks, per-route Cache-Control TTLs, and rate limiting. A Yango deep-link handoff opens the native app with the verified destination pre-filled.',
    features: [
      'Three-tap flow: search → verify on rich place page → hand off to Yango via deep link',
      'BFF API routes proxy all Google calls with field masks, Cache-Control TTLs, input validation, and rate limiting; API key never reaches the client',
      'Google Places v1 → legacy shape adapter keeps frontend types stable during API version migrations',
      'Dual storage: localStorage for guests, Upstash Redis for authenticated users (saved places deduped by placeId, 100-place cap)',
    ],
    metrics: [
      { value: '3 taps', label: 'From search to ride handoff' },
      { value: '100', label: 'Saved places cap per user' },
      { value: '30/min', label: 'Autocomplete rate limit' },
      { value: '2026', label: 'Year' },
    ],
  },
  {
    id: 'gcr-fetch',
    title: 'GCR Fetch',
    tagline:
      'Bulk-download every Google Classroom resource as one ZIP. ~95% time saved per course.',
    category: 'Tools',
    year: '2025',
    tags: ['Chrome Extension', 'Manifest V3', 'OAuth 2.0', 'Vercel Serverless'],
    // TODO: replace with a real screenshot of the extension
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/ammarasad2005/gcr-resources-fetch',
    liveUrl: null,
    overview:
      'GCR Fetch is a Chrome extension that downloads every resource from a Google Classroom course as a single ZIP. It replaces 20–25 minutes of manual clicking with one scan — built because I got tired of clicking Download 47 times.',
    problem:
      'Downloading all resources from a Google Classroom course meant clicking "Download" on every file individually — often 40+ times per course. The author built this after getting tired of clicking Download 47 times.',
    solution:
      'Built a Manifest V3 extension with a content script that scrapes the Classroom DOM for attachment links, a background service worker that exchanges OAuth codes via a serverless Vercel backend (client secret never touches the extension), and JSZip for client-side ZIP assembly. Non-Google-native Office files are converted via a copy-export-delete Drive API workflow.',
    features: [
      'Hybrid DOM scraping + Classroom REST API resource detection with deduplication by Drive file ID and URL — catches lazy-loaded and collapsed resources',
      'Server-side OAuth code exchange via Vercel function — works with any Google account without leaking the client secret',
      'PDF conversion via copy-export-delete Drive API workflow for non-Google-native Office files',
      'External Resources Dashboard as a self-contained HTML artifact (dark/light themes, search, filters) bundled into the ZIP',
    ],
    metrics: [
      { value: '~95%', label: 'Time reduction per course' },
      { value: '20–25 min', label: 'Manual clicking eliminated' },
      { value: 'MV3', label: 'Chrome Extension standard' },
      { value: '3', label: 'GitHub stars' },
    ],
  },
  {
    id: 'dramaghar',
    title: 'DramaGhar',
    tagline:
      '200+ Pakistani dramas. Stream, track, get reminders. Co-built with Hanzlah Ch.',
    category: 'Full Stack',
    year: '2026',
    tags: ['Next.js 15', 'React 19', 'MongoDB Atlas', 'Supabase'],
    // TODO: replace with a real screenshot of DramaGhar
    image:
      'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/ammarasad2005/Drama-Ghar',
    liveUrl: null,
    overview:
      'DramaGhar is a streaming and tracking platform for Pakistani TV dramas — 200+ titles across 5 channels, with watch history, watchlist, airing reminders, and a live TV schedule grid. Co-built with Hanzlah Ch.',
    problem:
      'Pakistani drama viewers scattered across YouTube, channel websites, and WhatsApp groups to track airing schedules and watch episodes. There was no single platform to discover, stream, and track Pakistani dramas with a watchlist and progress analytics.',
    solution:
      'Built a full-stack Next.js App Router app with MongoDB Atlas for drama/episode data, Supabase Postgres for user/watchlist/history persistence, custom JWT auth with Edge-middleware verification, two-role RBAC, and a live EPG grid built from scratch (2px-per-minute, auto-scrolls to "now").',
    features: [
      'Browse 200+ Pakistani dramas across 5 major channels with in-app YouTube streaming via react-youtube',
      'Per-episode watch history with today / weekly / lifetime hour analytics, watchlist, and airing reminders',
      'Live Electronic Program Guide (EPG) TV-schedule grid built from scratch — auto-scrolls to "now" at 2px per minute',
      'Custom JWT auth with Edge-middleware verification, two-role RBAC (user/admin), admin dashboard, and password reset via Gmail SMTP',
    ],
    metrics: [
      { value: '200+', label: 'Dramas catalogued' },
      { value: '5', label: 'Major channels covered' },
      { value: 'RBAC', label: 'User + admin roles' },
      { value: '2026', label: 'Year' },
    ],
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export const projectIds = projects.map((p) => p.id);
