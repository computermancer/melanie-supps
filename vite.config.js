import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ command, mode }) => {
  const isProduction = command === 'build';
  const isDev = !isProduction;
  
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
      // Handle SPA fallback in development
      historyApiFallback: true,
      // Enable HMR (Hot Module Replacement)
      hmr: {
        overlay: true
      },
      // Configure proxy if needed for API requests
      proxy: {
        // Example: '/api': 'http://localhost:3000'
      }
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
    // It's a simple implementation that works for most cases
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // If the request is for a file that doesn't exist, serve index.html
        if (!req.url.includes('.') && !req.url.startsWith('/api')) {
          res.setHeader('Content-Type', 'text/html');
          res.end(htmlContent);
          return;
        }
        next();
      });
    }
  };
});