import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Использовать опрос вместо стандартного наблюдения
      interval: 100,    // Интервал проверки изменений
    },
  },
})
