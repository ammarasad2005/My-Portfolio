import type {MetadataRoute} from 'next';
import { projectIds } from '@/lib/projects';

// Phase 2 TODO: replace with the production deployment URL once live.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    {path: '/', priority: 1.0, changeFrequency: 'monthly' as const},
    {path: '/projects', priority: 0.9, changeFrequency: 'monthly' as const},
    {path: '/about', priority: 0.8, changeFrequency: 'yearly' as const},
    {path: '/experience', priority: 0.6, changeFrequency: 'yearly' as const},
    {path: '/skills', priority: 0.6, changeFrequency: 'yearly' as const},
    {path: '/contact', priority: 0.5, changeFrequency: 'yearly' as const},
  ];

  return [
    ...routes.map((r) => ({
      url: `${SITE_URL}${r.path}`,
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...projectIds.map((id) => ({
      url: `${SITE_URL}/projects/${id}`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
  ];
}
