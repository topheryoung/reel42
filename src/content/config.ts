// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const mixtapeCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      genre: z.array(z.string()),
      id: z.string(),
      href: z.string().url(),
      cover: image().refine((img) => img.width >= 400, {
        message: 'Cover image must be at least 1080 pixels wide!',
      }),
      alt: z.string(),
      date: z.number(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  mixtapes: mixtapeCollection,
};
