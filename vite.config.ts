import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Configuração do Vite
 * 
 * Build tool e dev server otimizado para React.
 * Configuração básica com plugin React para suporte a JSX/TSX.
 */
export default defineConfig({
  plugins: [react()], // Habilita Fast Refresh e JSX transform
})
