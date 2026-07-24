import {notFound} from 'next/navigation';
import ProjectCaseStudyScreen from '@/components/ProjectCaseStudyScreen';

// Phase 2 TODO: replace hardcoded project IDs with a content layer
// (MDX, JSON, or a CMS) once the personalization pass is complete.
const VALID_PROJECT_IDS = ['fast-utilities', 'dramaghar', 'portfolio-v1'] as const;

export function generateStaticParams() {
  return VALID_PROJECT_IDS.map((id) => ({id}));
}

export default function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{id: string}>;
}) {
  // params is a Promise in Next.js 15 — await it.
  return <ProjectCaseStudyPageInner params={params} />;
}

async function ProjectCaseStudyPageInner({
  params,
}: {
  params: Promise<{id: string}>;
}) {
  const {id} = await params;
  if (!VALID_PROJECT_IDS.includes(id as (typeof VALID_PROJECT_IDS)[number])) {
    notFound();
  }
  return <ProjectCaseStudyScreen projectId={id} />;
}
