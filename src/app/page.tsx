import { pageMetadata } from '@/lib/seo';

import View from '@/site/pages/HomePage';

export default function Page() {
	return <View />;
}

export const metadata = pageMetadata('/', "Creative portfolio", "A creative lifestyle portfolio demo with art direction, brand projects, a journal, and a contact experience.");
