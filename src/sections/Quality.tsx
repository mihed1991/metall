import { assetUrl } from '../config/assets'

export function Quality() {
  return (
    <section className="quality" id="quality" aria-labelledby="quality-title">
      <div className="quality-copy">
        <p className="eyebrow reveal">FINAL / CONTROL</p>
        <h2 id="quality-title" className="reveal">Результат,<br />который можно<br />держать в руках</h2>
        <p className="reveal">Контролируем результат после производственных этапов и передаём заказчику готовую деталь в соответствии с согласованной задачей.</p>
        <div className="quality-labels reveal" aria-label="Направления контроля">
          <span>Geometry</span><span>Edge</span><span>Surface</span><span>Control</span>
        </div>
      </div>
      <div className="quality-image media-reveal" data-cursor="VIEW">
        <img src={assetUrl('assets/finished-part.png')} alt="Робот держит готовую металлическую деталь после обработки" loading="lazy" />
        <span className="image-coordinate">LF / FINAL / 03</span>
      </div>
    </section>
  )
}
