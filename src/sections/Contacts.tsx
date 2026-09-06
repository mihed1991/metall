import { company } from '../config/company'
import { homeHref, pageHref } from '../config/links'

export function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="footer-head">
        <a className="brand footer-brand" href={homeHref('#top')}>ЭРА <span>СТАЛЬ</span></a>
        <address className="footer-contacts">
          <a href={`tel:${company.phone}`}>{company.phoneDisplay}</a>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <span>{company.address}</span>
          <span>{company.workingHours}</span>
        </address>
      </div>
      <div className="footer-links">
        <nav aria-label="Навигация в подвале">
          <a href={pageHref('lazernaya-rezka-metalla/')}>Лазерная резка</a>
          <a href={pageHref('gibka-listovogo-metalla/')}>Гибка металла</a>
          <a href={pageHref('slesarnye-raboty/')}>Слесарные работы</a>
          <a href={homeHref('#quote')}>Расчёт</a>
        </nav>
        <a className="footer-cta" href={homeHref('#quote')}>Обсудить проект <span aria-hidden="true">↗</span></a>
      </div>
      <div className="footer-meta">
        <span>{company.legalName} / УНП {company.unp}</span>
        <span>Минимальный заказ {company.minimumOrder}</span>
        <span>© {new Date().getFullYear()} {company.brand}</span>
      </div>
    </footer>
  )
}
