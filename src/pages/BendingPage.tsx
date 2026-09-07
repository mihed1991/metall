import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { CustomCursor } from '../components/CustomCursor'
import { LaserLine } from '../components/LaserLine'
import { Navigation } from '../components/Navigation'
import { ResponsivePicture } from '../components/ResponsivePicture'
import { assetUrl } from '../config/assets'
import { company } from '../config/company'
import { homeHref } from '../config/links'
import { responsiveAssets } from '../config/responsiveAssets'
import { Footer } from '../sections/Contacts'

const specifications = [
  ['Оборудование', 'листогиб JFY AMB 10025'],
  ['Усилие', '100 тонн'],
  ['Максимальная длина гиба', '2500 мм'],
  ['Толщина при гибе на длине 2500 мм', 'до 6 мм'],
  ['Толщина при меньшей длине гиба', 'ориентировочно 8–10 мм'],
  ['Расчёт возможности гибки', 'по материалу и геометрии'],
]

const steps = [
  ['01', 'Получаем чертёж', 'Принимаем файл, эскиз или описание детали с размерами и материалом.'],
  ['02', 'Проверяем геометрию', 'Оцениваем длину линии гиба, толщину, углы, полки и доступность инструмента.'],
  ['03', 'Подбираем режим', 'Определяем усилие, оснастку и последовательность переходов для конкретной детали.'],
  ['04', 'Выполняем гибку', 'Формируем деталь на листогибе JFY AMB 10025 с усилием 100 тонн.'],
  ['05', 'Контролируем', 'Проверяем полученную геометрию и основные размеры готовой детали.'],
]

const priceFactors = [
  'Материал детали',
  'Толщина металла',
  'Длина линии гиба',
  'Количество гибов',
  'Углы и радиусы',
  'Размеры полок',
  'Сложность геометрии',
  'Количество деталей',
  'Требования к точности',
  'Срочность выполнения',
]

const questions = [
  ['Какую максимальную длину можно согнуть?', 'Максимальная рабочая длина листогиба — 2500 мм. Возможность выполнения конкретной детали зависит также от материала, толщины и геометрии.'],
  ['Какую толщину металла можно гнуть?', 'При длине гиба 2500 мм ориентир составляет до 6 мм. На более коротких участках можно рассматривать толщину 8–10 мм, но окончательно возможность подтверждаем после расчёта детали.'],
  ['Почему допустимая толщина зависит от длины гиба?', 'Чем короче линия гиба, тем большее усилие можно сосредоточить на участке. Поэтому короткую деталь часто можно согнуть из более толстого металла.'],
  ['Какие данные нужны для расчёта?', 'Нужны материал, толщина, размеры детали, длины и углы гибов, количество изделий. Можно прислать PDF, DXF, DWG, JPG или PNG.'],
  ['Можно заказать резку и гибку вместе?', 'Да. Укажите в заявке несколько операций — мы рассмотрим изготовление детали как единый производственный процесс.'],
]

export function BendingPage() {
  return (
    <div className="site service-landing" data-styleseed-recipe="expressive-brand">
      <CustomCursor />
      <Navigation />
      <main>
        <section className="service-landing-hero service-landing-hero--bending" aria-labelledby="bending-title">
          <img className="service-landing-hero-image" src={assetUrl('images/engineering-review.png')} alt="Подготовка чертежа детали перед гибкой листового металла" />
          <div className="service-landing-hero-shade" aria-hidden="true" />
          <div className="service-landing-hero-content">
            <nav className="breadcrumbs" aria-label="Хлебные крошки">
              <a href={homeHref()}>Главная</a><span aria-hidden="true">/</span><span aria-current="page">Гибка листового металла</span>
            </nav>
            <p className="eyebrow">УСЛУГА 02 / КАЛИНКОВИЧИ</p>
            <h1 id="bending-title"><span>Гибка листового</span><span>металла</span></h1>
            <p className="service-landing-lead">Гибка деталей по чертежам на листогибе JFY AMB 10025 с усилием 100 тонн и рабочей длиной до 2500 мм.</p>
            <div className="service-landing-actions">
              <a className="button button-primary magnetic" href={homeHref('#quote')} data-cursor="GO">Рассчитать заказ <ArrowDownRight aria-hidden="true" /></a>
              <a className="text-link" href="#specifications">Характеристики</a>
            </div>
          </div>
          <div className="service-landing-hero-facts" aria-label="Основные характеристики">
            <span><small className="fact-index">01</small><strong>2500 <small className="fact-unit">мм</small></strong><em>максимальная длина</em></span>
            <span><small className="fact-index">02</small><strong>100 <small className="fact-unit">тонн</small></strong><em>усилие</em></span>
            <span><small className="fact-index">03</small><strong>до 6 <small className="fact-unit">мм</small></strong><em>при гибе 2500 мм</em></span>
            <span><small className="fact-index">04</small><strong>8–10 <small className="fact-unit">мм</small></strong><em>на коротком гибе</em></span>
          </div>
          <LaserLine className="service-landing-laser" />
        </section>

        <section className="service-specifications section" id="specifications" aria-labelledby="bending-specifications-title">
          <div className="service-section-head">
            <p className="eyebrow">01 / ВОЗМОЖНОСТИ</p>
            <h2 id="bending-specifications-title">Параметры<br />листогиба</h2>
          </div>
          <div className="service-specification-copy">
            <p>Толщину определяем не отдельно, а вместе с длиной гиба, материалом и геометрией детали. Чем меньше длина линии гиба, тем более толстый металл можно рассматривать.</p>
            <dl>
              {specifications.map(([label, value], index) => (
                <div key={label}><dt><small>0{index + 1}</small>{label}</dt><dd>{value}</dd></div>
              ))}
            </dl>
          </div>
        </section>

        <section className="service-order-flow service-order-flow--bending" id="process-details" aria-labelledby="bending-flow-title">
          <ResponsivePicture
            className="service-order-picture"
            desktop={responsiveAssets.bending.desktop}
            mobile={responsiveAssets.bending.mobile}
            alt="Проверка чертежей перед гибкой листового металла"
          />
          <div className="service-order-shade" aria-hidden="true" />
          <div className="service-order-copy">
            <p className="eyebrow">02 / ПРОЦЕСС</p>
            <h2 id="bending-flow-title">От развёртки<br />до готового гиба</h2>
            <ol>
              {steps.map(([number, title, description]) => (
                <li key={number}><small>{number}</small><div><strong>{title}</strong><p>{description}</p></div></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="service-price section" aria-labelledby="bending-price-title">
          <div className="service-section-head">
            <p className="eyebrow">03 / СТОИМОСТЬ</p>
            <h2 id="bending-price-title">Из чего складывается цена</h2>
          </div>
          <div className="service-price-content">
            <p>Минимальный заказ — <strong>{company.minimumOrder}</strong>. Перед расчётом проверяем чертёж и возможность выполнения всех гибов.</p>
            <ul>
              {priceFactors.map((factor, index) => <li key={factor}><small>{String(index + 1).padStart(2, '0')}</small><span>{factor}</span></li>)}
            </ul>
          </div>
        </section>

        <section className="service-faq section" aria-labelledby="bending-faq-title">
          <div className="service-section-head">
            <p className="eyebrow">04 / FAQ</p>
            <h2 id="bending-faq-title">Вопросы о гибке металла</h2>
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

        <section className="service-closing section" aria-labelledby="bending-closing-title">
          <p className="eyebrow">05 / ЗАЯВКА</p>
          <h2 id="bending-closing-title">Есть чертёж?<br />Проверим гибы</h2>
          <p>Пришлите файл и укажите материал, толщину, длины гибов и количество деталей. Производство находится по адресу: {company.address}.</p>
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
