import { pageMetadata } from '@/lib/seo';

import View from '@/site/pages/AboutPage';

export default function Page() {
	return <View />;
}

export const metadata = pageMetadata('/about', "About", "Meet the sample creative behind Elara Voss, explore the portfolio story and creative approach.");
