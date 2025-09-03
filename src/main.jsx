import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx' // <-- Import the CartProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>  {/* <-- Wrap the app with CartProvider */}
      <App />
    </CartProvider>
  </StrictMode>
)
