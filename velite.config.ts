// @ts-nocheck
import { defineCollection, defineConfig, s } from 'velite'
import type { Config } from 'velite'

const authors = defineCollection({
  name: 'Authors',
  pattern: 'authors/**/*.mdx',
  schema: s.object({
    name: s.string(),
    avatar: s.string().optional(),
    occupation: s.string().optional(),
    company: s.string().optional(),
    email: s.string().optional(),
    twitter: s.string().optional(),
    linkedin: s.string().optional(),
    github: s.string().optional(),
    layout: s.string().optional(),
    slug: s.path().transform((p) => p.replace(/^authors\//, '')),
  }),
})

// @ts-nocheck
const posts = defineCollection({
  name: 'Post',
  pattern: 'posts/**/*.mdx',
  schema: s.object({
    title: s.string(),
    date: s.string().optional(),
    lastmod: s.string().optional(),
    tags: s.array(s.string()).optional(),
    draft: s.boolean().optional(),
    summary: s.string().optional(),
    images: s.array(s.string()).optional(),
    canonicalUrl: s.string().optional(),
    slug: s.path().transform((p) => p.replace(/^posts\//, '')),
    content: s.raw(),
  }),
})

// @ts-nocheck
const config: Config = defineConfig({
  root: 'data',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { authors, posts },
})

export default config
