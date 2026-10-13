import { pageMetadata } from '@/lib/seo';

import View from '@/site/pages/WorkPage';

export default function Page() {
	return <View />;
}

export const metadata = pageMetadata('/work', "Selected work", "Explore the sample projects, categories, and image collections in the Elara Voss portfolio.");
