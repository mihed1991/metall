import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { LaserCuttingPage } from './pages/LaserCuttingPage'
import './index.css'

const container = document.getElementById('root')!
const application = (
  <StrictMode>
    <LaserCuttingPage />
  </StrictMode>
)

if (container.hasChildNodes()) {
  hydrateRoot(container, application)
} else {
  createRoot(container).render(application)
}
