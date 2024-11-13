import { z, defineCollection } from 'astro:content';

const mixtapeCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      genre: z.array(z.string()),
      id: z.string(),
      href: z.object({
        spotify: z.string().url(),
      }),
      cover: image().refine((img) => img.width >= 400, {
        message: 'Cover image must be at least 400 pixels wide!',
      }),
      alt: z.string(),
      date: z.number(),
    }),
});

export const collections = {
  mixtapes: mixtapeCollection,
};
