// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  output: 'server',
  adapter: vercel(),
});
