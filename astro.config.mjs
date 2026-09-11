import {defineConfig} from 'astro/config';
export default defineConfig({
  site: process.env.SITE_URL || 'https://blog.jsr.wtf',
  base: process.env.BASE_PATH || '/',
  trailingSlash:'always',
  markdown:{smartypants:false},
  build:{format:'directory'},
});
