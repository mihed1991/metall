import { renderToString } from 'react-dom/server'
import App from './App'
import { LaserCuttingPage } from './pages/LaserCuttingPage'

export function render(page = 'home') {
  return renderToString(page === 'laser-cutting' ? <LaserCuttingPage /> : <App />)
}
