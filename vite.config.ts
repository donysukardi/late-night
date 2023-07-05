import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

console.log();

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/late-night' : '/',
  plugins: [react()],
});
