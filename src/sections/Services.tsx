import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { assetUrl } from '../config/assets'
import { pageHref } from '../config/links'

const services = [
  {
    number: '01',
    title: 'Лазерная резка листового металла',
    description: 'Раскраиваем сталь толщиной до 20 мм, алюминий, нержавеющую сталь и другие металлы — до 10 мм.',
    details: 'METALTEC / 3 кВт / поле 3005 × 1505 мм / точность ±0,02 мм',
    href: 'lazernaya-rezka-metalla/',
  },
  {
    number: '02',
    title: 'Гибка листового металла',
    description: 'Гибка деталей длиной до 2500 мм на листогибе JFY AMB 10025 с усилием 100 тонн.',
    details: 'JFY AMB 10025 / 100 тонн / длина до 2500 мм / толщина зависит от длины гиба',
    href: 'gibka-listovogo-metalla/',
  },
  {
    number: '03',
    title: 'Слесарные работы',
    description: 'Снятие заусенцев, притупление острых кромок, снятие фаски, выполнение потаев и нарезание резьбы.',
    details: 'Кромки / фаски / потаи / резьбы / финишная обработка',
    href: 'slesarnye-raboty/',
  },
]

export function Services() {
  const [active, setActive] = useState<number | null>(null)

  const toggleService = (index: number) => {
    setActive((current) => current === index ? null : index)
  }

  return (
    <section className="services section" id="services" aria-labelledby="services-title">
      <div className="services-head reveal">
        <div>
          <p className="eyebrow">03 / SERVICES</p>
          <h2 id="services-title">Наши возможности</h2>
        </div>
        <p>Три производственных направления, собранные в один последовательный процесс.</p>
      </div>

      <div className="services-layout">
        <div className="service-list">
          {services.map((service, index) => (
            <article
              className={`service-row reveal ${active === index ? 'is-active' : ''}`}
              key={service.number}
              data-cursor={service.number}
            >
              <span className="service-number">{service.number}</span>
              <div>
                <h3>
                  <button
                    type="button"
                    onClick={() => toggleService(index)}
                    aria-expanded={active === index}
                    aria-controls={`service-detail-${service.number}`}
                  >
                    {service.title}
                  </button>
                </h3>
                <div className="service-detail" id={`service-detail-${service.number}`}>
                  <p>{service.description}</p>
                  <small>{service.details}</small>
                  {service.href && <a className="service-page-link" href={pageHref(service.href)}>Подробнее об услуге <span aria-hidden="true">↗</span></a>}
                </div>
              </div>
              <ArrowUpRight aria-hidden="true" />
            </article>
          ))}
        </div>

        <div className="service-visual reveal" data-cursor="VIEW">
          <img
            src={assetUrl('assets/laser-cutting-wide.png')}
            alt="Лазерная резка листового металла на производстве"
            loading="lazy"
          />
          <span className="visual-code">ES / SERVICES</span>
        </div>
      </div>
    </section>
  )
}
