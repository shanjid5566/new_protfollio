# Shanjid Ahmed — Portfolio (React)

A full React.js clone of the space-themed portfolio with GSAP animations, dynamic SEO, and structured data for search engines.

## Stack

- **React 19** + **Vite**
- **GSAP** (ScrollTrigger, ScrollSmoother, SplitText)
- **react-helmet-async** for dynamic SEO meta tags
- JSON-LD structured data (Person, WebSite, ProfilePage)

## Features

- Pixel-faithful clone of the original HTML portfolio
- Centralized content in `src/data/portfolioData.js`
- **Dynamic SEO** — title, description, and keywords update as you scroll through sections
- `robots.txt` + `sitemap.xml` for crawlers
- Semantic HTML with ARIA labels and schema.org microdata on projects

## Getting Started

```bash
cd shanjid-portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build for Production

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to Vercel, Netlify, or any static host.

## SEO Configuration

Update `src/data/seoConfig.js` and `siteConfig.siteUrl` in `portfolioData.js` with your live domain before deploying.

## Project Structure

```
src/
  components/     # UI sections (Hero, About, Projects, etc.)
  data/           # Content + SEO config
  hooks/          # GSAP animations + dynamic SEO
  styles/         # Global CSS (cloned from original)
  utils/          # GSAP loader helper
public/
  robots.txt
  sitemap.xml
  favicon.svg
```
