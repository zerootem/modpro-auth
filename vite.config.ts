import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import { resolve } from 'path';

const __dirname = import.meta.dirname; // بديل __dirname

export default defineConfig({
  plugins: [solid()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    target: 'es2020',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('solid-js')) {
            return 'vendor';
          }
        },
      },
    },
    chunkSizeWarningLimit: 100,
  },
  server: {
    port: 3000,
  },
});
