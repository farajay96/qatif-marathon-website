import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import './App.css'

import App from './App.jsx'
import ArabicApp from './ArabicApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ar" element={<ArabicApp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)