import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ command, mode }) => {
  const isProduction = command === 'build';
  const isDev = !isProduction;
  
  // Base URL configuration
  const base = '/';
  
  // Development server proxy configuration
  const proxyConfig = {
    '^/api/.*': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      secure: false,
      rewrite: (path) => path.replace(/^\/api/, '')
    }
  };

  return {
    plugins: [
      react({
        // Enable Fast Refresh
        fastRefresh: true,
      })
    ],
    
    // Base public path
    base,
    
    // Development server configuration
    server: {
      port: 5173,
      strictPort: true,
      host: true, // Listen on all network interfaces
      open: !process.env.CI,
      cors: true,
      fs: {
        // Allow serving files from the project root
        allow: ['.', '..']
      },
      proxy: proxyConfig,
      // Enable HMR (Hot Module Replacement)
      hmr: {
        overlay: true
      },
    },
    
    // Build configuration
    build: {
      // Output directory for the build
      outDir: 'dist',
      // Generate sourcemaps for production builds
      sourcemap: isProduction ? 'hidden' : false,
      // Minify the production build
      minify: isProduction ? 'terser' : false,
      // Don't clear the screen when errors occur
      clearScreen: false,
      // Clean the output directory before building
      emptyOutDir: true,
      // Rollup options
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
      // Terser options for production builds
      terserOptions: isProduction ? {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      } : {},
    },
    
    // Preview server configuration
    preview: {
      port: 5000,
      strictPort: true,
      cors: true,
      // SPA fallback for preview server
      proxy: {
        '^/(?!.*\\.(js|css|json|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot|mp4|webm|wav|mp3|m4a|aac|oga)$)': {
          target: 'http://localhost:5000',
          changeOrigin: true,
          rewrite: (path) => '/index.html'
        }
      }
    },
    
    // Custom middleware for SPA fallback in development
    configureServer(server) {
      return () => {
        server.middlewares.use((req, res, next) => {
          // If the request is for a file that doesn't exist, serve index.html
          if (!req.url.includes('.') && !req.url.startsWith('/api') && !req.url.startsWith('/_vite')) {
            req.url = '/index.html';
          }
          next();
        });
      };
    },
    
    // Optimize dependencies
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
      exclude: [],
    },
    
    // CSS configuration
    css: {
      devSourcemap: isDev,
      modules: {
        localsConvention: 'camelCaseOnly',
      },
    },
    
    // Log level
    logLevel: isProduction ? 'warn' : 'info',
  };
});