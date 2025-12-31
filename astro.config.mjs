import { defineConfig } from 'astro/config';
import github from '@astrojs/github';

export default defineConfig({
  site: 'https://thomastsao0704.github.io',
  base: '/BLOG/',
  adapter: github(),
});
