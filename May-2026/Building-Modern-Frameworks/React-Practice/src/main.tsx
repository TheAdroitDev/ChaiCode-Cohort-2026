import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


const e = document.getElementById("my-react-container")
createRoot(e!).render(
  <StrictMode>
  </StrictMode>,
)
