import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import "./../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import './index.css'
import ReactDOM from 'react-dom'

import App from './App.jsx'

createRoot(document.querySelector('#root')).render(
  <StrictMode>
    <App />
    
  </StrictMode>,
  
)
