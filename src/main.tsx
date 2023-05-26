import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AceCoinPayProvider from './context/aceCoinPay.context.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AceCoinPayProvider>
      <App />
    </AceCoinPayProvider>
  </React.StrictMode>,
)
