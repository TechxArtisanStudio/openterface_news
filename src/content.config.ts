import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const productSlug = z.enum([
  'keymod',
  'kvm-go',
  'minikvm',
  'uconsole-kvm-extension',
  'accessories',
]);

const news = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/news',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    locale: z.enum(['en', 'zh', 'ja', 'ko', 'de', 'fr', 'es', 'it', 'pt', 'ro', 'hk', 'tw']),
    translationKey: z.string(),
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    channel: z.enum(['product', 'software', 'events']),
    product: productSlug.nullish(),
    eventType: z.enum(['exhibition', 'contest']).nullish(),
    topic: z.array(z.string()).default([]),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    author: z.string().optional(),
    social: z
      .object({
        image: z.string().optional(),
        title: z.string().optional(),
        description: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = { news };
