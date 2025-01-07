import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import SystemProvider from './context/SystemProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SystemProvider>
      <App />
    </SystemProvider>
  </StrictMode>,
)
