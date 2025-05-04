import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace 'my-love-website' with your actual GitHub repository name
export default defineConfig({
  plugins: [react()],
  base: '/my-love-website/',  // Adjust this to match the repo name on GitHub
});
