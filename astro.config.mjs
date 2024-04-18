import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import basicSsl from '@vitejs/plugin-basic-ssl';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';

const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    storyblok({
      accessToken: 'OqxGZ71sXSHPUCcoGe7KNQtt',
      bridge: true,
      components: {
        blogPost: 'storyblok/BlogPost'
      },
      apiOptions: {
        region: 'us',
      }
    })
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    }
  }
});