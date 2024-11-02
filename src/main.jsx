import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { TokenProvider } from './contexts/TokenContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TokenProvider>
      <RouterProvider router={router} />
    </TokenProvider>
  </StrictMode>,
)
