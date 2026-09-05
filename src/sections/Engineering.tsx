import { assetUrl } from '../config/assets'

export function Engineering() {
  return (
    <section className="engineering" id="engineering" aria-labelledby="engineering-title">
      <div className="engineering-image media-reveal" data-cursor="VIEW">
        <img src={assetUrl('assets/blueprint-pointing.png')} alt="Робот изучает технический чертёж детали" loading="lazy" />
        <span className="image-coordinate">DWG / REVIEW / 01</span>
      </div>
      <div className="engineering-copy">
        <p className="eyebrow reveal">01 / ENGINEERING</p>
        <h2 id="engineering-title" className="reveal">От чертежа<br />до детали</h2>
        <p className="reveal">Работа начинается с задачи. Мы изучаем чертёж, геометрию детали и требования к результату, после чего определяем последовательность производственных операций.</p>
        <div className="technical-list reveal" aria-label="Этапы подготовки">
          {['Чертёж', 'Материал', 'Геометрия', 'Производство', 'Контроль'].map((item, index) => (
            <span key={item}><small>0{index + 1}</small>{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
