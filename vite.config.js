import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Add base URL for GitHub Pages
  base: '/',
  // Configure the development server
  server: {
    // Enable CORS for development
    cors: true,
    // Enable HMR (Hot Module Replacement)
    hmr: true,
    headers: {
      'Cache-Control': 'no-store, max-age=0',
      'Service-Worker-Allowed': '/'
    },
  },
  // Configure preview server
  preview: {
    headers: {
      'Cache-Control': 'no-store, max-age=0',
      'Service-Worker-Allowed': '/'
    },
    port: 5000,
    strictPort: true,
  },
  // Configure the build output
  build: {
    // Generate sourcemaps for better debugging
    sourcemap: true,
    // Configure rollup options
    rollupOptions: {
      output: {
        // Add content hashes to filenames for better caching
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
        // Add version hash to all asset URLs
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          return `assets/[name]-[hash][extname]?v=${Date.now()}`;
        },
      },
    },
    // Add version info to manifest
    manifest: true,
  },
  // Configure the preview server (for testing the production build locally)
  preview: {
    port: 5000,
    strictPort: true,
  },
});