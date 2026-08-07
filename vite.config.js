import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/kiran-portfolio/', // Base path for GitHub Pages deployment (https://kirankr9343.github.io/kiran-portfolio/)
  server: {
    port: 3000,
    open: true
  }
})
