import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { LocksmithPage } from './pages/LocksmithPage'
import './index.css'

const container = document.getElementById('root')!
const application = (
  <StrictMode>
    <LocksmithPage />
  </StrictMode>
)

if (container.hasChildNodes()) {
  hydrateRoot(container, application)
} else {
  createRoot(container).render(application)
}
