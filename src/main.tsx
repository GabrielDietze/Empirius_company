import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

/**
 * Ponto de entrada da aplicação
 * 
 * Monta o componente App dentro do elemento #root do HTML
 * StrictMode ativa verificações adicionais e avisos em desenvolvimento
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
