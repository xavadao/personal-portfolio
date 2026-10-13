# Elara Voss — Creative & Lifestyle

A standalone creative lifestyle portfolio demo built with Next.js, React, and Tailwind CSS.

[Live demo](https://vibed-personal.xavainf.com) · [View source on GitHub](https://github.com/xavadao/personal-portfolio)

## Features

- Responsive home, about, work, and contact pages.
- Project filtering, image galleries, and project detail navigation.
- Scroll reveals and carefully styled typography.
- Static hosting on Cloudflare Workers Static Assets.

## Install and develop

Requires Node.js 22 or later and pnpm.

```bash
pnpm install
pnpm dev
```

## Build and preview

```bash
pnpm build
pnpm preview
```

The production build is written to `out`. Preview uses Wrangler to test the same static routing used in production.

## Deploy

Authenticate Wrangler with an account that can manage the configured Cloudflare account and `xavainf.com` zone:

```bash
pnpm exec wrangler login
pnpm deploy
```

`wrangler.jsonc` configures the `vibed-personal.xavainf.com` custom domain. Update the account ID and domain when deploying your own copy.

## Demo limitations

Portfolio identities, project descriptions, testimonials, and contact details are sample content. The contact form demonstrates a confirmation state in the browser; it does not send email or save submissions. Social and journal links are illustrative. Images load from Unsplash and fonts load from Google Fonts, so those services need to be reachable. There is no authentication, database, or backend API.

## Search and accessibility

Every route exports its main content as HTML with a descriptive title, canonical URL, social sharing metadata, and truthful sample structured data. Robots, sitemap, and `llms.txt` describe the demo scope. Every page includes a keyboard accessible “Made with XavaInf” badge fixed to the bottom-right while scrolling, plus a visible GitHub source link in the footer. The badge respects device safe areas and yields to the mobile menu.

## Open source

The source is publicly available at [xavadao/personal-portfolio](https://github.com/xavadao/personal-portfolio). Demo disclosures remain part of the page content.

## License

The code is available under the [MIT License](LICENSE). See [Third-party notices](THIRD_PARTY_NOTICES.md) for external imagery, fonts, and other assets; their rights are separate from the code license.
