import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  // plugins: [react()],
  // server: {
  //   https: {
  //     key: fs.readFileSync(path.resolve(__dirname, 'ssl/key.pem')),
  //     cert: fs.readFileSync(path.resolve(__dirname, 'ssl/cert.pem')),
  // //   },
  //   port: 5173,
  // },
  base: '/my-love-website/',  // For GitHub Pages
});
