import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // @/* maps to src/* — avoids deep relative import chains like ../../../services/
    alias: { '@': resolve(__dirname, 'src') },
  },
  server: {
    // Port 5174 — ai-course project occupies 5173; both can run side-by-side
    port: 5174,
  },
});