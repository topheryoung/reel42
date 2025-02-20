import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const mixtapes = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/mixtapes' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      genre: z.array(z.string()),
      href: z.object({
        spotify: z.string().url(),
      }),
      cover: z.object({
        default: image(),
        retro: image(),
      }),
      date: z.number(),
    }),
});

export const collections = { mixtapes };
