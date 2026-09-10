import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain sanny.pro is served at site root → base must be '/'.
// (github.io/new_portfolio/ path is no longer used for assets.)
export default defineConfig({
  base: '/',
  plugins: [react()],
})
