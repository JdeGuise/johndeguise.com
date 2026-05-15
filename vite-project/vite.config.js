import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Forward API calls to the Express server during local development.
    proxy: {
      '/api': 'http://localhost:5001',
    },
  },
})
