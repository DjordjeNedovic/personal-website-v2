# djordjenedovic.tech

Personal technical blog and portfolio — built with Next.js 15, Velite, Tailwind CSS, and deployed on Netlify.

## Stack

- **Framework:** Next.js 15 (App Router)
- **Content:** Velite (MDX)
- **Styling:** Tailwind CSS v3
- **Deployment:** Netlify
- **Analytics:** Google Analytics 4

## Structure

```
app/                    # Next.js App Router pages
components/             # React components
data/
  posts/               # EN blog posts (.mdx)
  posts/rs/            # SR blog posts (.mdx)
  authors/             # Author data (.mdx)
layouts/               # Page layouts
libs/                  # Velite exports, SEO helpers, utilities
public/                # Static assets
velite.config.ts       # Content schema
```

## Development

```bash
yarn dev
```

## Content

Blog posts are MDX files in `data/posts/`. Frontmatter fields:

```yaml
---
title: "Post title"
date: "2026-01-01"
lastmod: "2026-01-01"
tags: ["Tag1", "Tag2"]
draft: false
summary: "Short summary."
images: ["/images/thumbnail/image.png"]
---
```

Serbian posts go in `data/posts/rs/` and are accessible at `/posts/rs/[slug]`.

## Deploy

Pushing to `master` triggers an automatic deploy on Netlify. Environment variables required:

```
NEXT_PUBLIC_GOOGLE_ID=G-XXXXXXXXXX
```
