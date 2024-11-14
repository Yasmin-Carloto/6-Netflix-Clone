import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    VITE_APP_TMDB_API_KEY: process.env.VITE_APP_TMDB_API_KEY
  },
  base: './'
})
