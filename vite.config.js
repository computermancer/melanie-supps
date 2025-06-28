import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    open: !process.env.CI,
    cors: true,
    fs: {
      allow: ['.', '..']
    },
    hmr: {
      overlay: true
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  preview: {
    port: 5000,
    strictPort: true,
    cors: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  }
});