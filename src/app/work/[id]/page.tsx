import View from '@/site/pages/WorkDetailPage';
import { ALL_PROJECTS } from '@/site/data/projects';

export function generateStaticParams() {
  return ALL_PROJECTS.map(({ id }) => ({ id }));
}

export const dynamicParams = false;

export default function Page() {
  return <View />;
}
