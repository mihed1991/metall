import { ArrowUpRight } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { FileUpload } from '../components/FileUpload'

export function Quote() {
  const [notice, setNotice] = useState('')

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }
    setNotice('Данные проверены. Онлайн-отправка будет доступна после подключения обработчика формы.')
  }

  return (
    <section className="quote section" id="quote" aria-labelledby="quote-title">
      <div className="quote-intro">
        <p className="eyebrow reveal">07 / PROJECT REQUEST</p>
        <h2 id="quote-title" className="reveal">Рассчитать<br />проект</h2>
        <p className="reveal">Прикрепите чертёж или опишите задачу. Мы изучим данные и свяжемся с вами для уточнения деталей.</p>
        <div className="quote-note reveal"><span>01</span> Один запрос — вся исходная информация для предварительной оценки.</div>
      </div>

      <form className="quote-form reveal" onSubmit={submit} noValidate={false}>
        <div className="field-grid">
          <label><span>Имя *</span><input name="name" autoComplete="name" required placeholder="Как к вам обращаться" /></label>
          <label><span>Телефон *</span><input name="phone" type="tel" autoComplete="tel" required placeholder="+375 ——— ——— ———" /></label>
          <label><span>Email *</span><input name="email" type="email" autoComplete="email" required placeholder="name@company.by" /></label>
          <label>
            <span>Тип работ *</span>
            <select name="service" required defaultValue="">
              <option value="" disabled>Выберите направление</option>
              <option>Лазерная резка</option>
              <option>Гибка листового металла</option>
              <option>Слесарные операции</option>
              <option>Несколько операций</option>
            </select>
          </label>
          <label><span>Количество деталей</span><input name="quantity" inputMode="numeric" placeholder="Например, 20" /></label>
          <label className="field-wide"><span>Комментарий</span><textarea name="comment" rows={3} placeholder="Материал, геометрия, требования к результату" /></label>
        </div>

        <FileUpload />

        <label className="consent">
          <input type="checkbox" name="consent" required />
          <span>Я согласен с обработкой персональных данных</span>
        </label>

        <button className="button button-primary submit-button magnetic" type="submit" data-cursor="GO">
          Получить расчёт <ArrowUpRight aria-hidden="true" />
        </button>
        {notice && <p className="form-notice" role="status">{notice}</p>}
      </form>
    </section>
  )
}
