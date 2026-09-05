import { ArrowDownRight } from 'lucide-react'
import { LaserLine } from '../components/LaserLine'
import { assetUrl } from '../config/assets'

export function Hero() {
  return (
    <section className="hero" id="top" data-cursor="EXPLORE" aria-label="LaserFlux">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={assetUrl('assets/laser-cutting-wide.png')}
        aria-label="Промышленный робот выполняет лазерную обработку металла"
      >
        <source src={assetUrl('assets/laserflux-hero.mp4')} type="video/mp4" />
      </video>
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-content">
        <p className="eyebrow">LASERFLUX / METAL TECHNOLOGY</p>
        <h1><span>Лазерная</span><span>резка</span><span>металла</span></h1>
        <div className="hero-bottom">
          <p>Резка, гибка и обработка листового металла — от чертежа до готовой детали.</p>
          <div className="hero-actions">
            <a className="button button-primary magnetic" href="#quote" data-cursor="GO">
              Рассчитать проект <ArrowDownRight aria-hidden="true" />
            </a>
            <a className="text-link" href="#services" data-cursor="↘">Наши возможности</a>
          </div>
        </div>
      </div>

      <div className="hero-spec" aria-hidden="true">
        <span>Резка / гибка / слесарные операции</span>
        <span>53°54′ N / PRECISION WORKFLOW</span>
      </div>
      <LaserLine className="hero-laser" />
    </section>
  )
}
