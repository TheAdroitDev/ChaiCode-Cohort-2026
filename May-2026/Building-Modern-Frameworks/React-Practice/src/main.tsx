import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';

// in memory tree - Virtual DOM
const e = document.getElementById("my-react-container")

createRoot(e!).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
