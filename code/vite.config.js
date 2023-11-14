import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_API_KEY': JSON.stringify('6e3cfa8a59d38185c35ad08fb6420f20'),
    'import.meta.env.VITE_BASE_URL': JSON.stringify('https://api.themoviedb.org/3/'),
    'import.meta.env.VITE_IMAGE_BASE_URL': JSON.stringify('https://image.tmdb.org/t/p/original'),
    'import.meta.env.VITE_SERVER_URL': JSON.stringify('https://cinetrail-server.herokuapp.com/'),
  }
})
