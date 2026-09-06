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

const operations = [
  ['Снятие заусенцев', 'после резки и сверления'],
  ['Притупление острой кромки', 'для безопасной обработки детали'],
  ['Снятие фаски', 'по заданным параметрам'],
  ['Нарезание потаев', 'под крепёж по чертежу'],
  ['Нарезание резьбы', 'тип и размер по задаче'],
]

const steps = [
  ['01', 'Получаем деталь', 'Принимаем готовую заготовку или выполняем основные операции в нашем производстве.'],
  ['02', 'Проверяем задание', 'Уточняем кромки, отверстия, фаски, потаи, резьбы и требования к результату.'],
  ['03', 'Подбираем инструмент', 'Определяем последовательность обработки и подходящий ручной или станочный инструмент.'],
  ['04', 'Выполняем обработку', 'Удаляем заусенцы, притупляем кромки, снимаем фаски, делаем потаи и резьбы.'],
  ['05', 'Контролируем', 'Проверяем обработанные зоны и готовность детали к следующему этапу или выдаче.'],
]

const priceFactors = [
  'Материал детали',
  'Толщина металла',
  'Вид операции',
  'Количество кромок',
  'Количество отверстий',
  'Тип и размер резьбы',
  'Сложность доступа',
  'Объём заказа',
  'Требования к результату',
  'Срочность выполнения',
]

const questions = [
  ['Какие слесарные операции вы выполняете?', 'Снимаем заусенцы, притупляем острые кромки, снимаем фаски, выполняем потаи под крепёж и нарезаем резьбу по заданию.'],
  ['Можно обработать детали после лазерной резки?', 'Да. Слесарные работы можно включить в заказ после лазерной резки или выполнить для предоставленных заказчиком заготовок.'],
  ['Какую резьбу можно нарезать?', 'Тип и размер резьбы определяются чертежом и возможностью доступа к месту обработки. Укажите обозначение резьбы в файле или описании задачи.'],
  ['Что нужно указать для расчёта?', 'Нужны материал, толщина, количество деталей, перечень операций и обозначение обрабатываемых зон. Лучше всего прислать чертёж или понятный эскиз.'],
  ['Можно заказать только снятие заусенцев?', `Да, можно обсудить отдельную операцию. Минимальная стоимость заказа — ${company.minimumOrder}.`],
]

export function LocksmithPage() {
  return (
    <div className="site service-landing" data-styleseed-recipe="expressive-brand">
      <CustomCursor />
      <Navigation />
      <main>
        <section className="service-landing-hero service-landing-hero--locksmith" aria-labelledby="locksmith-title">
          <img className="service-landing-hero-image" src={assetUrl('assets/finished-part.png')} alt="Контроль металлической детали после слесарной обработки" />
          <div className="service-landing-hero-shade" aria-hidden="true" />
          <div className="service-landing-hero-content">
            <nav className="breadcrumbs" aria-label="Хлебные крошки">
              <a href={homeHref()}>Главная</a><span aria-hidden="true">/</span><span aria-current="page">Слесарные работы</span>
            </nav>
            <p className="eyebrow">УСЛУГА 03 / КАЛИНКОВИЧИ</p>
            <h1 id="locksmith-title"><span>Слесарные</span><span>работы</span></h1>
            <p className="service-landing-lead">Финишная обработка металлических деталей: снятие заусенцев, обработка кромок, фаски, потаи и нарезание резьбы.</p>
            <div className="service-landing-actions">
              <a className="button button-primary magnetic" href={homeHref('#quote')} data-cursor="GO">Рассчитать заказ <ArrowDownRight aria-hidden="true" /></a>
              <a className="text-link" href="#specifications">Операции</a>
            </div>
          </div>
          <div className="service-landing-hero-facts service-landing-hero-facts--words" aria-label="Основные операции">
            <span><small className="fact-index">01</small><strong>Заусенцы</strong><em>удаление</em></span>
            <span><small className="fact-index">02</small><strong>Кромки</strong><em>притупление</em></span>
            <span><small className="fact-index">03</small><strong>Фаски</strong><em>обработка</em></span>
            <span><small className="fact-index">04</small><strong>Резьба</strong><em>по заданию</em></span>
          </div>
          <LaserLine className="service-landing-laser" />
        </section>

        <section className="service-specifications section" id="specifications" aria-labelledby="locksmith-operations-title">
          <div className="service-section-head">
            <p className="eyebrow">01 / ОПЕРАЦИИ</p>
            <h2 id="locksmith-operations-title">Финишная<br />обработка деталей</h2>
          </div>
          <div className="service-specification-copy">
            <p>Обрабатываем отдельные зоны детали по чертежу или согласованному заданию. Слесарные операции можно выполнять после лазерной резки или для готовых заготовок.</p>
            <dl>
              {operations.map(([label, value], index) => (
                <div key={label}><dt><small>0{index + 1}</small>{label}</dt><dd>{value}</dd></div>
              ))}
            </dl>
          </div>
        </section>

        <section className="service-order-flow service-order-flow--locksmith" id="process-details" aria-labelledby="locksmith-flow-title">
          <ResponsivePicture
            className="service-order-picture"
            desktop={responsiveAssets.services.desktop}
            mobile={responsiveAssets.services.mobile}
            alt="Подготовка металлической заготовки к слесарной обработке"
          />
          <div className="service-order-shade" aria-hidden="true" />
          <div className="service-order-copy">
            <p className="eyebrow">02 / ПРОЦЕСС</p>
            <h2 id="locksmith-flow-title">От заготовки<br />до чистой детали</h2>
            <ol>
              {steps.map(([number, title, description]) => (
                <li key={number}><small>{number}</small><div><strong>{title}</strong><p>{description}</p></div></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="service-price section" aria-labelledby="locksmith-price-title">
          <div className="service-section-head">
            <p className="eyebrow">03 / СТОИМОСТЬ</p>
            <h2 id="locksmith-price-title">Из чего складывается цена</h2>
          </div>
          <div className="service-price-content">
            <p>Минимальный заказ — <strong>{company.minimumOrder}</strong>. Стоимость рассчитываем по количеству и сложности конкретных операций.</p>
            <ul>
              {priceFactors.map((factor, index) => <li key={factor}><small>{String(index + 1).padStart(2, '0')}</small><span>{factor}</span></li>)}
            </ul>
          </div>
        </section>

        <section className="service-faq section" aria-labelledby="locksmith-faq-title">
          <div className="service-section-head">
            <p className="eyebrow">04 / FAQ</p>
            <h2 id="locksmith-faq-title">Вопросы о слесарных работах</h2>
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

        <section className="service-closing section" aria-labelledby="locksmith-closing-title">
          <p className="eyebrow">05 / ЗАЯВКА</p>
          <h2 id="locksmith-closing-title">Покажите деталь.<br />Подберём обработку</h2>
          <p>Пришлите чертёж или эскиз, отметьте нужные кромки, отверстия и резьбы. Производство находится по адресу: {company.address}.</p>
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
