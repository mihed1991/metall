import { ArrowUpRight, Clock3, Mail, MapPin, Phone, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { company } from '../config/company'
import { homeHref, pageHref } from '../config/links'

const promptSeenKey = 'era-steel-contact-prompt-seen'
const yandexMapHref = `https://yandex.by/maps/?text=${encodeURIComponent(company.address)}`
const socialPlaceholders = [
  ['Telegram', `${import.meta.env.BASE_URL}images/telegram_vector.svg`],
  ['Viber', `${import.meta.env.BASE_URL}images/viber_vector.svg`],
  ['WhatsApp', `${import.meta.env.BASE_URL}images/whatsapp_vector.svg`],
  ['Instagram', `${import.meta.env.BASE_URL}images/instagram_vector.svg`],
] as const

export function Footer() {
  const [promptOpen, setPromptOpen] = useState(false)
  const dialogRef = useRef<HTMLElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const restoreFocusRef = useRef<HTMLElement | null>(null)

  const openPrompt = () => {
    restoreFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
    sessionStorage.setItem(promptSeenKey, '1')
    setPromptOpen(true)
  }

  const closePrompt = () => setPromptOpen(false)

  useEffect(() => {
    if (sessionStorage.getItem(promptSeenKey)) return

    let shown = false
    const showPrompt = () => {
      if (shown || sessionStorage.getItem(promptSeenKey)) return
      shown = true
      sessionStorage.setItem(promptSeenKey, '1')
      setPromptOpen(true)
      window.removeEventListener('scroll', handleScroll)
    }
    const handleScroll = () => {
      const pageHeight = document.documentElement.scrollHeight
      const progress = (window.scrollY + window.innerHeight) / pageHeight
      if (progress >= 0.72) showPrompt()
    }
    const timer = window.setTimeout(showPrompt, 22000)

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (!promptOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setPromptOpen(false)
        return
      }
      if (event.key !== 'Tab' || !dialogRef.current) return

      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'))
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
      restoreFocusRef.current?.focus()
    }
  }, [promptOpen])

  return (
    <>
      <footer className="footer" id="contacts">
        <div className="footer-grid">
          <section className="footer-contact-block" aria-label="Контакты Эра Стали">
            <a className="brand footer-brand" href={homeHref('#top')}>ЭРА <span>СТАЛИ</span></a>
            <a className="footer-phone" href={`tel:${company.phone}`}>{company.phoneDisplay}</a>
            <a className="footer-email" href={`mailto:${company.email}`}>{company.email}</a>
            <div className="footer-socials" aria-label="Мессенджеры и социальные сети — ссылки будут добавлены позже">
              {socialPlaceholders.map(([label, iconSrc]) => (
                <span className="footer-social" role="img" aria-label={`${label} — ссылка будет добавлена позже`} title={`${label} — подключим позже`} key={label}>
                  <img src={iconSrc} alt="" aria-hidden="true" />
                </span>
              ))}
            </div>
            <button className="footer-question-button" type="button" onClick={openPrompt}>
              Задать вопрос <ArrowUpRight aria-hidden="true" />
            </button>
          </section>

          <nav className="footer-column" aria-label="Основная навигация в подвале">
            <h2>Меню</h2>
            <a href={homeHref()}>Главная</a>
            <a href={homeHref('#services')}>Возможности</a>
            <a href={homeHref('#engineering')}>Производство</a>
            <a href={homeHref('#process')}>Процесс</a>
            <a href={homeHref('#quote')}>Расчёт проекта</a>
            <a href={homeHref('#faq')}>Вопросы и ответы</a>
          </nav>

          <nav className="footer-column" aria-label="Услуги в подвале">
            <h2>Услуги</h2>
            <a href={pageHref('lazernaya-rezka-metalla/')}>Лазерная резка</a>
            <a href={pageHref('gibka-listovogo-metalla/')}>Гибка металла</a>
            <a href={pageHref('slesarnye-raboty/')}>Слесарные работы</a>
          </nav>

          <section className="footer-column footer-production" aria-labelledby="footer-production-title">
            <h2 id="footer-production-title">Производство</h2>
            <address>
              <a className="footer-address-link" href={yandexMapHref} target="_blank" rel="noreferrer" data-cursor="MAP" aria-label={`${company.address} — открыть в Яндекс Картах`}>
                <MapPin aria-hidden="true" />{company.address}
              </a>
              <span><Clock3 aria-hidden="true" />{company.workingHours}</span>
            </address>
            <dl>
              <div><dt>Станок</dt><dd>{company.machine} / {company.laserPower}</dd></div>
              <div><dt>Рабочее поле</dt><dd>{company.workArea}</dd></div>
              <div><dt>Заказ</dt><dd>{company.minimumOrder}</dd></div>
            </dl>
          </section>
        </div>

        <div className="footer-meta">
          <span>{company.legalName} / УНП {company.unp}</span>
          <span>{company.city} / Беларусь</span>
          <span>© {new Date().getFullYear()} {company.brand}</span>
        </div>
      </footer>

      {promptOpen && (
        <div className="contact-prompt" role="presentation">
          <button className="contact-prompt-backdrop" type="button" aria-label="Закрыть окно" onClick={closePrompt} />
          <section ref={dialogRef} className="contact-prompt-panel" role="dialog" aria-modal="true" aria-labelledby="contact-prompt-title" aria-describedby="contact-prompt-description">
            <button ref={closeButtonRef} className="contact-prompt-close" type="button" aria-label="Закрыть" onClick={closePrompt} data-cursor="CLOSE">
              <X aria-hidden="true" />
            </button>
            <p className="eyebrow">09 / ПРЯМАЯ СВЯЗЬ</p>
            <h2 id="contact-prompt-title">Остались<br />вопросы?</h2>
            <p className="contact-prompt-lead" id="contact-prompt-description">Подскажем по срокам, стоимости и техническим возможностям производства.</p>
            <div className="contact-prompt-status"><span aria-hidden="true" />На связи {company.workingHours}</div>
            <a className="contact-prompt-phone" href={`tel:${company.phone}`} onClick={closePrompt} data-cursor="CALL">{company.phoneDisplay}</a>
            <div className="contact-prompt-actions">
              <a className="button button-primary" href={`tel:${company.phone}`} onClick={closePrompt} data-cursor="CALL">Позвонить <Phone aria-hidden="true" /></a>
              <a className="button contact-prompt-email" href={`mailto:${company.email}`} onClick={closePrompt} data-cursor="MAIL">Написать <Mail aria-hidden="true" /></a>
            </div>
            <p className="contact-prompt-note">Минимальный заказ — {company.minimumOrder}</p>
          </section>
        </div>
      )}
    </>
  )
}
