import { ArrowUp, ArrowUpRight, Clock3, MapPin } from 'lucide-react'
import { company } from '../config/company'
import { homeHref, pageHref } from '../config/links'

const yandexMapHref = `https://yandex.by/maps/?text=${encodeURIComponent(company.address)}`
const socialItems = [
  ['Telegram', `${import.meta.env.BASE_URL}images/social-telegram.png`, company.telegram],
  ['Viber', `${import.meta.env.BASE_URL}images/social-viber.png`, ''],
  ['WhatsApp', `${import.meta.env.BASE_URL}images/social-whatsapp.png`, ''],
  ['Instagram', `${import.meta.env.BASE_URL}images/social-instagram.png`, ''],
] as const

export function Footer() {
  const scrollToTop = () => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
  }

  return (
    <footer className="footer" id="contacts">
      <div className="footer-grid">
        <section className="footer-contact-block" aria-label="Контакты Эра Стали">
          <a className="brand footer-brand" href={homeHref('#top')}>ЭРА <span>СТАЛИ</span></a>
          <a className="footer-phone" href={`tel:${company.phone}`}>{company.phoneDisplay}</a>
          <a className="footer-email" href={`mailto:${company.email}`}>{company.email}</a>
          <div className="footer-socials" aria-label="Мессенджеры и социальные сети">
            {socialItems.map(([label, iconSrc, href]) => href ? (
              <a className="footer-social" href={href} aria-label={`Написать в ${label}`} title={`Написать в ${label}`} key={label} data-cursor="TG">
                <img src={iconSrc} alt="" aria-hidden="true" />
              </a>
            ) : (
              <span className="footer-social" role="img" aria-label={`${label} — ссылка будет добавлена позже`} title={`${label} — подключим позже`} key={label}>
                <img src={iconSrc} alt="" aria-hidden="true" />
              </span>
            ))}
          </div>
          <a className="footer-question-button" href={company.telegram} aria-label="Задать вопрос в Telegram" data-cursor="TG">
            Задать вопрос <ArrowUpRight aria-hidden="true" />
          </a>
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
      <button className="footer-to-top" type="button" aria-label="Вернуться наверх" title="Наверх" onClick={scrollToTop} data-cursor="TOP">
        <ArrowUp aria-hidden="true" />
      </button>
    </footer>
  )
}
