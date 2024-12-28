import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'buffer': 'buffer'
    }
  },
  define: {
    'global': {},
  },
  optimizeDeps: {
    include: ['buffer']
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://api.ultra.markets',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  base: '/',
  build: {
    sourcemap: true,
    outDir: 'dist'
  }
});
