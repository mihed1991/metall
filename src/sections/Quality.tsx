import { ResponsivePicture } from '../components/ResponsivePicture'
import { company } from '../config/company'
import { responsiveAssets } from '../config/responsiveAssets'

export function Quality() {
  return (
    <section className="quality" id="quality" aria-labelledby="quality-title">
      <div className="quality-copy">
        <p className="eyebrow reveal">FINAL / CONTROL</p>
        <h2 id="quality-title" className="reveal">Результат,<br />который можно<br />держать в руках</h2>
        <p className="reveal">Контролируем результат после производственных этапов и передаём заказчику готовую деталь в соответствии с согласованной задачей.</p>
        <div className="quality-metric reveal">
          <strong><span>{company.accuracy.replace(' мм', '')}</span><small>мм</small></strong>
          <span>заявленная точность обработки</span>
        </div>
        <div className="quality-labels reveal" aria-label="Направления контроля">
          <span>Геометрия</span><span>Кромка</span><span>Поверхность</span><span>Контроль</span>
        </div>
      </div>
      <div className="quality-image media-reveal" data-cursor="VIEW">
        <ResponsivePicture
          className="responsive-media-picture"
          desktop={responsiveAssets.quality.desktop}
          mobile={responsiveAssets.quality.mobile}
          alt="Готовая металлическая деталь после обработки"
        />
        <span className="image-coordinate">ES / FINAL / 03</span>
      </div>
    </section>
  )
}
