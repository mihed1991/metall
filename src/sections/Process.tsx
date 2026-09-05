const steps = [
  ['01', 'Заявка', 'Отправляете задачу, чертёж или описание детали.'],
  ['02', 'Проверка', 'Проверяем исходные данные и уточняем детали.'],
  ['03', 'Расчёт', 'Формируем предварительную стоимость и сроки.'],
  ['04', 'Производство', 'Запускаем необходимые производственные операции.'],
  ['05', 'Контроль', 'Проверяем готовый результат.'],
  ['06', 'Готово', 'Передаём готовую деталь клиенту.'],
]

export function Process() {
  return (
    <section className="process section" id="process" aria-labelledby="process-title">
      <div className="process-head">
        <p className="eyebrow reveal">05 / WORKFLOW</p>
        <h2 id="process-title" className="reveal">Как мы работаем</h2>
        <p className="reveal">Прозрачная траектория проекта — от первого файла до готового результата.</p>
      </div>

      <div className="process-track" aria-label="Шесть этапов работы">
        <span className="process-line" aria-hidden="true"><span /></span>
        {steps.map(([number, title, description]) => (
          <article className="process-step reveal" key={number}>
            <span className="step-number">{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
