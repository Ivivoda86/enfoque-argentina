import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { FaHourglassStart } from 'react-icons/fa'

// https://vitejs.dev/config/
export default defineConfig({
  server:{host:true},
  plugins: [react()]
  
})


