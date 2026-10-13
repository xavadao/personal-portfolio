import { pageMetadata, StructuredData, siteUrl } from '@/lib/seo';
import View from '@/site/pages/WorkDetailPage';
import { ALL_PROJECTS } from '@/site/data/projects';

export function generateStaticParams() {
  return ALL_PROJECTS.map(({ id }) => ({ id }));
}

export const dynamicParams = false;

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = ALL_PROJECTS.find((item) => item.id === id);
  return <>{project && <StructuredData data={{ '@context': 'https://schema.org', '@type': 'CreativeWork', name: project.title, description: 'Sample portfolio project. ' + project.desc, url: siteUrl + '/work/' + id, image: project.img }} />}<View /></>;
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = ALL_PROJECTS.find((item) => item.id === id);
  return pageMetadata('/work/' + id, project?.title ?? 'Project', 'Sample portfolio project. ' + (project?.desc ?? ''), project?.img);
}
