import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/index.tsx'
import './styles/global.css'
import { AppProvider } from './context/index.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
)
