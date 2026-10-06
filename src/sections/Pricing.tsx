import { ArrowUpRight } from 'lucide-react'
import { useRef, useState, type KeyboardEvent } from 'react'
import { ResponsivePicture } from '../components/ResponsivePicture'
import { company, priceFactors } from '../config/company'
import { laserPrices } from '../config/laserPrices'
import { homeHref } from '../config/links'
import { responsiveAssets } from '../config/responsiveAssets'
import './pricing.css'

const formatPrice = (price: number) => price.toLocaleString('ru-BY', { maximumFractionDigits: 1 })

export function Pricing({ eyebrow = 'ПРАЙС / ЛАЗЕРНАЯ РЕЗКА' }: { eyebrow?: string }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const tabs = useRef<Array<HTMLButtonElement | null>>([])

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number
    switch (event.key) {
      case 'ArrowRight': nextIndex = (index + 1) % laserPrices.length; break
      case 'ArrowLeft': nextIndex = (index - 1 + laserPrices.length) % laserPrices.length; break
      case 'Home': nextIndex = 0; break
      case 'End': nextIndex = laserPrices.length - 1; break
      default: return
    }
    event.preventDefault()
    setActiveIndex(nextIndex)
    tabs.current[nextIndex]?.focus()
  }

  return (
    <section className="pricing section" id="prices" aria-labelledby="pricing-title">
      <header className="pricing-heading">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id="pricing-title">Стоимость<br />лазерной резки</h2>
        </div>
        <p>Выберите материал и толщину металла.<br />Стоимость указана за 1 метр реза в BYN, без НДС.</p>
      </header>

      <div className="pricing-layout">
        <aside className="pricing-intro" aria-label="Условия заказа">
          <div className="pricing-visual">
            <ResponsivePicture desktop={responsiveAssets.engineering.desktop} mobile={responsiveAssets.engineering.mobile} decorative alt="" />
            <div className="pricing-visual-copy">
              <span>Минимальный заказ</span>
              <strong>от 100 <small>BYN</small></strong>
            </div>
          </div>
          <div className="pricing-intro-copy">
            <p className="pricing-machine">{company.machine} / {company.laserPower}</p>
            <h3>Точная цена —<br />по вашему чертежу</h3>
            <p>Базовая ставка помогает оценить бюджет. Итоговая стоимость зависит от геометрии, количества врезок, объёма заказа и требований к детали.</p>
            <a className="button button-primary" href={homeHref('#quote')} data-cursor="GO">Рассчитать проект <ArrowUpRight aria-hidden="true" /></a>
            <details className="pricing-factors">
              <summary>Что влияет на стоимость <span aria-hidden="true">+</span></summary>
              <ul>{priceFactors.map((factor) => <li key={factor}>{factor}</li>)}</ul>
            </details>
          </div>
        </aside>

        <div className="pricing-rates">
          <div className="pricing-tabs" role="tablist" aria-label="Материал для лазерной резки">
            {laserPrices.map((material, index) => (
              <button
                key={material.id}
                ref={(element) => { tabs.current[index] = element }}
                type="button"
                role="tab"
                id={`price-tab-${material.id}`}
                aria-controls={`price-panel-${material.id}`}
                aria-selected={index === activeIndex}
                tabIndex={index === activeIndex ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                <span>{material.name}</span><small>{material.limit}</small>
              </button>
            ))}
          </div>
          {laserPrices.map((material, index) => (
            <div
              className="pricing-panel"
              role="tabpanel"
              id={`price-panel-${material.id}`}
              aria-labelledby={`price-tab-${material.id}`}
              tabIndex={0}
              hidden={index !== activeIndex}
              key={material.id}
            >
              <table className="pricing-table">
                <caption>{material.name}<span>Стоимость 1 метра реза</span></caption>
                <thead><tr><th scope="col">Толщина, мм</th><th scope="col">Цена, BYN без НДС</th></tr></thead>
                <tbody>
                  {material.rows.map(([thickness, price]) => (
                    <tr key={thickness}>
                      <th scope="row">{thickness}</th>
                      <td className={price === null ? 'pricing-custom-rate' : undefined}>{price === null ? 'По расчёту' : <><span>от </span>{formatPrice(price)}</>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="pricing-note">Цены «от» — ориентир для расчёта. Точную стоимость заказа подтверждаем после проверки файла, материала и количества деталей.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
