import { pageMetadata } from '@/lib/seo';

import View from '@/site/pages/ContactPage';

export default function Page() {
	return <View />;
}

export const metadata = pageMetadata('/contact', "Contact", "Try the Elara Voss demo contact form. Messages are not sent or saved.");
