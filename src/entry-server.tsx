import { renderToString } from 'react-dom/server'
import App from './App'
import { BendingPage } from './pages/BendingPage'
import { LaserCuttingPage } from './pages/LaserCuttingPage'
import { LocksmithPage } from './pages/LocksmithPage'

export function render(page = 'home') {
  const application = page === 'laser-cutting'
    ? <LaserCuttingPage />
    : page === 'bending'
      ? <BendingPage />
      : page === 'locksmith'
        ? <LocksmithPage />
        : <App />

  return renderToString(application)
}
