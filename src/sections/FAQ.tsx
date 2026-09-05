import { Plus } from 'lucide-react'
import { useState } from 'react'

const items = [
  ['Можно заказать одну деталь?', 'Да, запрос может относиться как к единичной детали, так и к партии. Возможность изготовления оценивается по чертежу и задаче.'],
  ['Можно работать без готового чертежа?', 'Можно отправить эскиз или описание. Для расчёта мы уточним геометрию и исходные требования.'],
  ['Какие файлы можно отправить?', 'Форма принимает PDF, DXF, DWG, JPG и PNG. Если данных недостаточно, мы запросим уточнение.'],
  ['Как рассчитывается стоимость?', 'Стоимость зависит от материала, геометрии, количества деталей и набора производственных операций.'],
  ['Можно заказать одновременно резку и гибку?', 'Да. Выберите в форме «Несколько операций» и опишите итоговую задачу.'],
  ['Как узнать срок изготовления?', 'Предварительный срок определяется после проверки файлов и уточнения всех исходных данных.'],
]

export function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="faq section" id="faq" aria-labelledby="faq-title">
      <div className="faq-head">
        <p className="eyebrow reveal">08 / FAQ</p>
        <h2 id="faq-title" className="reveal">Часто задаваемые<br />вопросы</h2>
      </div>
      <div className="faq-list reveal">
        {items.map(([question, answer], index) => {
          const expanded = open === index
          return (
            <article className={`faq-item ${expanded ? 'is-open' : ''}`} key={question}>
              <h3>
                <button type="button" aria-expanded={expanded} onClick={() => setOpen(expanded ? -1 : index)}>
                  <span><small>0{index + 1}</small>{question}</span><Plus aria-hidden="true" />
                </button>
              </h3>
              <div className="faq-answer"><div><p>{answer}</p></div></div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
