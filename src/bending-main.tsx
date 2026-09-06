import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BendingPage } from './pages/BendingPage'
import './index.css'

const container = document.getElementById('root')!
const application = (
  <StrictMode>
    <BendingPage />
  </StrictMode>
)

if (container.hasChildNodes()) {
  hydrateRoot(container, application)
} else {
  createRoot(container).render(application)
}
