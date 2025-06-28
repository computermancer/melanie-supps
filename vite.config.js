import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  optimizeDeps: {
    exclude: [],
    include: ['react', 'react-dom', 'react-router-dom']
  },
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
      'Cache-Control': 'no-store, max-age=0'
    },
  },
  // Configure preview server for testing production build locally
  preview: {
    headers: {
      'Cache-Control': 'no-store, max-age=0'
    },
    port: 5000,
    strictPort: true,
  },
  // Configure the build output
  build: {
    // Generate sourcemaps for better debugging
    sourcemap: 'hidden',
    // Configure rollup options
    rollupOptions: {
      output: {
        // Add content hashes to filenames for better caching
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
    // Ensure the build directory is cleaned before building
    emptyOutDir: true,
  },
});