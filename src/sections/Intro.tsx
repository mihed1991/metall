import { LaserLine } from '../components/LaserLine'
import { ResponsivePicture } from '../components/ResponsivePicture'
import { responsiveAssets } from '../config/responsiveAssets'

export function Intro() {
  return (
    <section className="intro section" id="foundation" aria-labelledby="intro-title">
      <ResponsivePicture
        className="intro-picture"
        imageClassName="intro-image"
        desktop={responsiveAssets.foundation.desktop}
        mobile={responsiveAssets.foundation.mobile}
        alt=""
        decorative
      />
      <div className="section-index reveal">02 / ОСНОВА</div>
      <div className="intro-copy">
        <p className="eyebrow reveal">ЭРА СТАЛИ / PRECISION METAL PROCESSING</p>
        <h2 id="intro-title" className="display-title reveal">
          <span>Металл.</span><span>Точность.</span><span>Контроль.</span>
        </h2>
        <p className="intro-text reveal">Производим детали из листового металла в Калинковичах: работаем по чертежам, эскизам и техническим заданиям.</p>
      </div>
      <LaserLine />
    </section>
  )
}
