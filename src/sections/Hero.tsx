import { ArrowDownRight } from 'lucide-react'
import { LaserLine } from '../components/LaserLine'
import { assetUrl } from '../config/assets'
import { company } from '../config/company'
import { homeHref } from '../config/links'

export function Hero() {
  return (
    <section className="hero" id="top" data-cursor="EXPLORE" aria-label={company.brand}>
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={assetUrl('images/laser-cutting-wide.png')}
        aria-label="Промышленный робот выполняет лазерную обработку металла"
      >
        <source src={assetUrl('videos/laserflux-hero.mp4')} type="video/mp4" />
      </video>
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-content">
        <p className="eyebrow">ЭРА СТАЛИ / METAL TECHNOLOGY</p>
        <h1><span>Лазерная</span><span>резка и гибка</span><span>металла</span></h1>
        <div className="hero-bottom">
          <p>Резка с точностью ±0,02 мм: сталь до 20 мм, алюминий, нержавеющая сталь и другие металлы — до 10 мм. Гибка с усилием 100 тонн.</p>
          <div className="hero-actions">
            <a className="button button-primary magnetic" href={homeHref('#quote')} data-cursor="GO">
              Рассчитать проект <ArrowDownRight aria-hidden="true" />
            </a>
            <a className="text-link" href={homeHref('#services')} data-cursor="↘">Наши возможности</a>
          </div>
        </div>
      </div>

      <div className="hero-spec" aria-hidden="true">
        <span>Резка / гибка / слесарные операции</span>
        <span>КАЛИНКОВИЧИ / BY</span>
      </div>
      <LaserLine className="hero-laser" />
    </section>
  )
}
