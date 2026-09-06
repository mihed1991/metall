import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { CustomCursor } from '../components/CustomCursor'
import { LaserLine } from '../components/LaserLine'
import { Navigation } from '../components/Navigation'
import { ResponsivePicture } from '../components/ResponsivePicture'
import { assetUrl } from '../config/assets'
import { company, priceFactors } from '../config/company'
import { homeHref } from '../config/links'
import { responsiveAssets } from '../config/responsiveAssets'
import { Footer } from '../sections/Contacts'

const specifications = [
  ['Оборудование', company.machine],
  ['Мощность лазера', company.laserPower],
  ['Рабочее поле', company.workArea],
  ['Сталь', 'до 20 мм'],
  ['Алюминий, нержавеющая сталь и другие металлы', 'до 10 мм'],
  ['Заявленная точность', company.accuracy],
]

const steps = [
  ['01', 'Получаем задачу', 'Принимаем чертёж, эскиз или описание требуемой детали.'],
  ['02', 'Проверяем файл', 'Уточняем материал, толщину, геометрию, количество и допуски.'],
  ['03', 'Рассчитываем', 'Определяем стоимость, технологию резки и предварительный срок.'],
  ['04', 'Выполняем резку', 'Раскраиваем металл на лазерном станке METALTEC мощностью 3 кВт.'],
  ['05', 'Контролируем', 'Проверяем готовые детали перед передачей заказчику.'],
]

const questions = [
  ['Какие файлы можно прислать для расчёта?', 'Подойдут PDF, DXF, DWG, JPG и PNG. Если данных недостаточно, мы уточним размеры, материал и требования к детали.'],
  ['Можно заказать одну деталь?', `Можно обсудить единичное изделие или серию. Минимальная стоимость заказа — ${company.minimumOrder}.`],
  ['Какие металлы вы режете?', 'Режем сталь толщиной до 20 мм, алюминий, нержавеющую сталь и другие металлы толщиной до 10 мм. Возможность обработки конкретного материала подтверждаем после проверки задачи.'],
  ['От чего зависит цена лазерной резки?', 'От материала и толщины, сложности геометрии, количества врезок, объёма заказа, используемого газа, срочности, дополнительных операций и требований к точности.'],
  ['Как узнать срок изготовления?', 'Предварительный срок называем после проверки файла, материала, количества деталей и текущей загрузки производства.'],
]

export function LaserCuttingPage() {
  return (
    <div className="site service-landing" data-styleseed-recipe="expressive-brand">
      <CustomCursor />
      <Navigation />
      <main>
        <section className="service-landing-hero" aria-labelledby="laser-cutting-title">
          <img className="service-landing-hero-image" src={assetUrl('assets/laser-cutting-wide.png')} alt="Лазерная резка листового металла на производстве" />
          <div className="service-landing-hero-shade" aria-hidden="true" />
          <div className="service-landing-hero-content">
            <nav className="breadcrumbs" aria-label="Хлебные крошки">
              <a href={homeHref()}>Главная</a><span aria-hidden="true">/</span><span aria-current="page">Лазерная резка металла</span>
            </nav>
            <p className="eyebrow">УСЛУГА 01 / КАЛИНКОВИЧИ</p>
            <h1 id="laser-cutting-title"><span>Лазерная резка</span><span>металла</span></h1>
            <p className="service-landing-lead">Высокоточный раскрой листового металла по чертежам и техническим файлам на станке METALTEC 3 кВт.</p>
            <div className="service-landing-actions">
              <a className="button button-primary magnetic" href={homeHref('#quote')} data-cursor="GO">Рассчитать заказ <ArrowDownRight aria-hidden="true" /></a>
              <a className="text-link" href="#specifications">Характеристики</a>
            </div>
          </div>
          <div className="service-landing-hero-facts" aria-label="Основные характеристики">
            <span><small className="fact-index">01</small><strong>3 <small className="fact-unit">кВт</small></strong><em>мощность</em></span>
            <span><small className="fact-index">02</small><strong>3005 × 1505 <small className="fact-unit">мм</small></strong><em>рабочее поле</em></span>
            <span><small className="fact-index">03</small><strong>±0,02 <small className="fact-unit">мм</small></strong><em>точность</em></span>
            <span><small className="fact-index">04</small><strong>от 100 <small className="fact-unit">BYN</small></strong><em>минимальный заказ</em></span>
          </div>
          <LaserLine className="service-landing-laser" />
        </section>

        <section className="service-specifications section" id="specifications" aria-labelledby="specifications-title">
          <div className="service-section-head">
            <p className="eyebrow">01 / ВОЗМОЖНОСТИ</p>
            <h2 id="specifications-title">Технические<br />характеристики</h2>
          </div>
          <div className="service-specification-copy">
            <p>Работаем с единичными деталями и серийными заказами. Перед расчётом проверяем геометрию, толщину материала и требования к точности.</p>
            <dl>
              {specifications.map(([label, value], index) => (
                <div key={label}><dt><small>0{index + 1}</small>{label}</dt><dd>{value}</dd></div>
              ))}
            </dl>
          </div>
        </section>

        <section className="service-order-flow" id="process-details" aria-labelledby="order-flow-title">
          <ResponsivePicture
            className="service-order-picture"
            desktop={responsiveAssets.blueprint.desktop}
            mobile={responsiveAssets.blueprint.mobile}
            alt="Подготовка чертежа металлической детали к лазерной резке"
          />
          <div className="service-order-shade" aria-hidden="true" />
          <div className="service-order-copy">
            <p className="eyebrow">02 / ПРОЦЕСС</p>
            <h2 id="order-flow-title">От файла<br />до готовой детали</h2>
            <ol>
              {steps.map(([number, title, description]) => (
                <li key={number}><small>{number}</small><div><strong>{title}</strong><p>{description}</p></div></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="service-price section" aria-labelledby="price-title">
          <div className="service-section-head">
            <p className="eyebrow">03 / СТОИМОСТЬ</p>
            <h2 id="price-title">Из чего складывается цена</h2>
          </div>
          <div className="service-price-content">
            <p>Минимальный заказ — <strong>{company.minimumOrder}</strong>. Итоговую стоимость рассчитываем после проверки файла и исходных требований.</p>
            <ul>
              {priceFactors.map((factor, index) => <li key={factor}><small>{String(index + 1).padStart(2, '0')}</small><span>{factor}</span></li>)}
            </ul>
          </div>
        </section>

        <section className="service-faq section" aria-labelledby="service-faq-title">
          <div className="service-section-head">
            <p className="eyebrow">04 / FAQ</p>
            <h2 id="service-faq-title">Вопросы о лазерной резке</h2>
          </div>
          <div className="service-faq-list">
            {questions.map(([question, answer], index) => (
              <details key={question}>
                <summary><span><small>0{index + 1}</small>{question}</span><b aria-hidden="true">+</b></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="service-closing section" aria-labelledby="service-closing-title">
          <p className="eyebrow">05 / ЗАЯВКА</p>
          <h2 id="service-closing-title">Есть чертёж?<br />Рассчитаем задачу</h2>
          <p>Пришлите файл и укажите материал, толщину и количество деталей. Производство находится по адресу: {company.address}.</p>
          <div className="service-closing-actions">
            <a className="button button-primary magnetic" href={homeHref('#quote')} data-cursor="GO">Перейти к расчёту <ArrowUpRight aria-hidden="true" /></a>
            <a className="service-phone" href={`tel:${company.phone}`}>{company.phoneDisplay}</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
