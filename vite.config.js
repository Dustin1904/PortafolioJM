import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import dotenv from 'dotenv'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dotenv.config(), tailwindcss()],
})
