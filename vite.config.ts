import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/late-night' : '/',
  plugins: [react(), tsconfigPaths(), svgr()],
});
