import { LaserLine } from '../components/LaserLine'
import introBackground from '../../1.png'

export function Intro() {
  return (
    <section className="intro section" aria-labelledby="intro-title">
      <img className="intro-image" src={introBackground} alt="" aria-hidden="true" />
      <div className="section-index reveal">02 / ОСНОВА</div>
      <div className="intro-copy">
        <p className="eyebrow reveal">LASERFLUX / PRECISION METAL PROCESSING</p>
        <h2 id="intro-title" className="display-title reveal">
          <span>Металл.</span><span>Точность.</span><span>Контроль.</span>
        </h2>
        <p className="intro-text reveal">Работаем с листовым металлом и превращаем чертежи, эскизы и технические задачи в готовые детали.</p>
      </div>
      <LaserLine />
    </section>
  )
}
