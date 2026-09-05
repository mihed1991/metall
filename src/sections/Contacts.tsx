export function Footer() {
  return (
    <footer className="footer" id="privacy">
      <a className="brand footer-brand" href="#top">LASER<span>FLUX</span></a>
      <nav aria-label="Навигация в подвале">
        <a href="#services">Лазерная резка</a>
        <a href="#services">Гибка металла</a>
        <a href="#services">Слесарные операции</a>
        <a href="#quote">Расчёт</a>
      </nav>
      <div className="footer-meta">
        <span>PRECISION METAL PROCESSING</span>
        <a href="#privacy">Политика конфиденциальности</a>
        <span>© {new Date().getFullYear()} LASERFLUX</span>
      </div>
    </footer>
  )
}
