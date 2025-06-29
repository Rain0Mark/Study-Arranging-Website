import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/~b13902070/',
  plugins: [react({
    babel: {
      plugins: [['babel-plugin-react-compiler', { target: '19' }]],
    },
  })],
})
