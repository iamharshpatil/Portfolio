import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      // Compression settings (optional)
      algorithm: 'gzip',  // Choose 'gzip' or 'brotliCompress'
      threshold: 10240,   // Only compress files larger than 10kB
      ext: '.gz',         // Compressed file extension (you can use '.br' for Brotli)
    }),
  ],
});
