import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ command, mode }) => {
  const isProduction = command === 'build';
  const isDev = !isProduction;
  
  // For Vercel deployment, ensure we're using the correct base URL
  const base = process.env.VERCEL ? '/' : '/';
  
  return {
    plugins: [react()],
    
    // Base public path when served in development or production
    base,
    
    // Development server configuration
    server: {
      port: 5173,
      strictPort: true,
      cors: true,
      fs: {
        // Allow serving files from one level up from the package root
        allow: ['..']
      },
      // Handle SPA fallback in development
      historyApiFallback: true,
      // Custom middleware for SPA fallback
      proxy: {
        '^/(?!.*\\.(js|css|json|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot|mp4|webm|wav|mp3|m4a|aac|oga)$)': {
          target: 'http://localhost:5173',
          changeOrigin: true,
          rewrite: (path) => '/index.html'
        }
      }
    },
    
    // Build configuration
    build: {
      // Generate sourcemaps for production
      sourcemap: isProduction ? 'hidden' : false,
      // Configure rollup options
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html')
        },
        output: {
          // Ensure consistent hashed filenames for better caching
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash][extname]',
        },
      },
      // Minify for production
      minify: isProduction ? 'terser' : false,
      // Don't clear the screen when errors occur
      clearScreen: false,
      // Output directory for the build
      outDir: 'dist',
      // Ensure the build directory is cleaned before building
      emptyOutDir: true,
    },
    
    // Configure the preview server
    preview: {
      port: 5000,
      strictPort: true,
      // Handle SPA fallback in preview mode
      proxy: {
        '^/(?!.*\\.(js|css|json|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot|mp4|webm|wav|mp3|m4a|aac|oga)$)': {
          target: 'http://localhost:5000',
          changeOrigin: true,
          rewrite: (path) => '/index.html'
        }
      }
    },
    
    // This is a custom plugin to handle SPA fallback in development
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // If the request is for a file that doesn't exist, serve index.html
        if (!req.url.includes('.') && !req.url.startsWith('/api')) {
          req.url = '/index.html';
        }
        next();
      });
    }
  };
});