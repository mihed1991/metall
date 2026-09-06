import { assetUrl } from '../config/assets'
import { company } from '../config/company'

const specifications = [
  ['Станок', company.machine],
  ['Мощность', company.laserPower],
  ['Рабочее поле', company.workArea],
  ['Сталь', 'до 20 мм'],
  ['Алюминий / нерж. сталь / другие', 'до 10 мм'],
]

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
        <div className="technical-list reveal" aria-label="Характеристики оборудования">
          {specifications.map(([label, value], index) => (
            <span key={label}><small>0{index + 1}</small><strong>{label}</strong><em>{value}</em></span>
          ))}
        </div>
      </div>
    </section>
  )
}
