import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Providers } from '@/components/providers';
import AppShell from '@/site/app-shell';
import './globals.css';
import { XavaInfCredit } from '@/components/xavainf-credit';
import { StructuredData, siteUrl, siteName, siteDescription } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteName,
  description: siteDescription,
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <StructuredData data={{ '@context': 'https://schema.org', '@type': 'WebSite', name: siteName, description: siteDescription, url: siteUrl }} />
        <noscript><style>{'.reveal,.reveal-fade,.reveal-left,.reveal-right,.reveal-mask,.project-tile-caption,.tile-label,.tile-text,.gallery-item .overlay{opacity:1!important;transform:none!important;clip-path:none!important}body,body *{cursor:auto!important}.project-tile-caption{background:rgba(247,245,242,.96)!important}'}</style></noscript>
				<Providers>

						<AppShell>{children}</AppShell>

				</Providers>
        <XavaInfCredit />
			</body>
		</html>
	);
}
