import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { company } from '../config/company'
import { homeHref } from '../config/links'

const links = [
  ['Услуги', 'services'],
  ['Производство', 'engineering'],
  ['Процесс', 'process'],
  ['Стоимость', 'prices'],
  ['Расчёт', 'quote'],
  ['Контакты', 'contacts'],
]

export function Navigation({ pricingHref = homeHref('#prices') }: { pricingHref?: string }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const linkHref = (target: string) => target === 'prices' ? pricingHref : homeHref(`#${target}`)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 48)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  return (
    <header className={`navigation ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="brand" href={homeHref('#top')} data-cursor="↗" aria-label={`${company.brand} — на главную страницу`}>
        ЭРА <span>СТАЛИ</span>
      </a>

      <nav className="desktop-nav" aria-label="Основная навигация">
        {links.map(([label, target]) => <a key={target} href={linkHref(target)} data-cursor="↘">{label}</a>)}
      </nav>

      <a className="nav-cta magnetic" href={homeHref('#quote')} data-cursor="GO">
        Рассчитать проект <span aria-hidden="true">↗</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <div className={`mobile-panel ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Мобильная навигация">
          {links.map(([label, target], index) => (
            <a key={target} href={linkHref(target)} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
              <small>0{index + 1}</small>{label}<span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
