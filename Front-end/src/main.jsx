import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShopcontextProvider from './Context/Shopcontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShopcontextProvider>
  <React.StrictMode>
    
    <App />
    
  </React.StrictMode>
  </ShopcontextProvider>,
)
