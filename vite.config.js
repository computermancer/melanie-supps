import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ command }) => {
  const isProduction = command === 'build';
  
  return {
    plugins: [react()],
    
    // Base public path when served in development or production
    base: '/',
    
    // Development server configuration
    server: {
      port: 5173,
      strictPort: true,
      cors: true,
      // This handles the SPA fallback for client-side routing
      fs: {
        // Allow serving files from one level up from the package root
        allow: ['..']
      },
      // This middleware handles SPA fallback for development
      // It's a simple way to ensure all routes work in development
      // without requiring a complex server configuration
      // Note: For production, you'll need to configure your server
      // to serve index.html for all routes
      middlewareMode: 'html',
    },
    
    // Configure the build output
    build: {
      // Generate sourcemaps for better debugging
      sourcemap: 'hidden',
      // Configure rollup options
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
      // Ensure the build directory is cleaned before building
      emptyOutDir: true,
    },
    
    // Configure the preview server
    preview: {
      port: 5000,
      strictPort: true,
      // This middleware handles SPA fallback for the preview server
      middlewareMode: 'html',
    },
    
    // This is a custom plugin to handle SPA fallback in development
    // It's a simple implementation that works for most cases
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // If the request is for a file that doesn't exist, serve index.html
        if (!req.url.includes('.') && req.url !== '/') {
          req.url = '/';
        }
        next();
      });
    }
  };
});