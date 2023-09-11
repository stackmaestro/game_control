import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import SceneProvider from './context/SceneContext'
const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <SceneProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SceneProvider>
  </React.StrictMode>
)
