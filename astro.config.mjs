// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import { tableWrap } from './src/lib/table-wrap.mjs';

export default defineConfig({
  site: 'https://navidonskis.com',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap()],

  // Fonts come from Google Fonts, fetched at build time and served from /_astro/fonts
  // with generated @font-face rules and metric-matched fallbacks (no third-party CSS
  // on the critical path, no layout shift beyond swap).
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'IBM Plex Sans',
      cssVariable: '--font-plex-sans',
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      display: 'swap',
      fallbacks: ['Helvetica Neue', 'Arial', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'IBM Plex Sans Condensed',
      cssVariable: '--font-plex-condensed',
      weights: [600],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      display: 'swap',
      fallbacks: ['Arial Narrow', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'IBM Plex Mono',
      cssVariable: '--font-plex-mono',
      weights: [400],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
      fallbacks: ['Menlo', 'Consolas', 'monospace'],
    },
  ],

  markdown: {
    processor: satteri({
      hastPlugins: [tableWrap],
    }),
    shikiConfig: {
      theme: 'github-dark',
    },
  },
  build: {
    format: 'directory',
    // Keep all CSS in files so the CSP needs no 'unsafe-inline' for style elements.
    inlineStylesheets: 'never',
  },
});
