import type { Metadata } from 'next';
export const siteUrl = 'https://vibed-personal.xavainf.com';
export const siteName = "Elara Voss \u2014 Creative & Lifestyle";
export const siteDescription = "A creative lifestyle portfolio demo with art direction, brand projects, a journal, and a contact experience.";
export const shareImage = "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&q=85&auto=format&fit=crop";
export function pageMetadata(path: string, title: string, description: string, image = shareImage): Metadata {
  const url = siteUrl + path;
  const fullTitle = `${title} | ${siteName}`;
  return { title: { absolute: fullTitle }, description, alternates: { canonical: url },
    openGraph: { type: 'website', title: fullTitle, description, url, siteName, locale: 'en_US', images: [{ url: image, alt: title }] },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images: [image] },
  };
}
export function StructuredData({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}
