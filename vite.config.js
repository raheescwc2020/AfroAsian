import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 2. Use path.resolve to ensure the alias works in all environments
      '@': path.resolve(__dirname, './src') 
    }
  }
})
