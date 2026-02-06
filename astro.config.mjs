import { defineConfig } from 'astro/config';
import pagefind from 'astro-pagefind';

const isNetlify = process.env.NETLIFY === 'true';
const siteUrl =
  process.env.URL ??
  'https://thomastsao0704.github.io';

export default defineConfig({
  site: siteUrl,
  base: isNetlify ? '/' : '/BLOG/',
  integrations: [pagefind()],
});
