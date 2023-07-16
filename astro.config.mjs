import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import sanity from 'astro-sanity';

import { loadEnv } from 'vite';
const { SANITY_DATASET, SANITY_PROJECT_ID } = loadEnv(
  import.meta.env.MODE,
  process.cwd(),
  '',
);

// https://astro.build/config
export default defineConfig({
  site: 'https://alanmart.in',
  env: {
    SANITY_PROJECT_ID: import.meta.env.SANITY_PROJECT_ID,
    SANITY_DATASET: import.meta.env.SANITY_DATASET,
  },
  integrations: [
    tailwind(),
    react(),
    sitemap(),
    sanity({
      projectId: SANITY_PROJECT_ID,
      dataset: SANITY_DATASET,
      apiVersion: '2023-02-08',
      useCdn: false,
    }),
  ],
});
