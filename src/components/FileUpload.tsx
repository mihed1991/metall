import { FileText, Paperclip, X } from 'lucide-react'
import { DragEvent, useRef, useState } from 'react'

const allowed = ['.pdf', '.dxf', '.dwg', '.jpg', '.jpeg', '.png']
const formatSize = (size: number) => size < 1024 * 1024
  ? `${Math.max(1, Math.round(size / 1024))} КБ`
  : `${(size / 1024 / 1024).toFixed(1)} МБ`

export function FileUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [dragging, setDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const accept = (incoming?: File) => {
    if (!incoming) return
    const extension = `.${incoming.name.split('.').pop()?.toLowerCase()}`
    if (allowed.includes(extension)) setFile(incoming)
  }

  const drop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setDragging(false)
    accept(event.dataTransfer.files[0])
  }

  return (
    <div className="upload-field">
      <span className="field-label">Чертёж или эскиз</span>
      {!file ? (
        <div
          className={`drop-zone ${dragging ? 'is-dragging' : ''}`}
          onDragOver={(event) => { event.preventDefault(); setDragging(true) }}
          onDragLeave={() => setDragging(false)}
          onDrop={drop}
        >
          <Paperclip aria-hidden="true" />
          <p>Перетащите файл сюда или <button type="button" onClick={() => inputRef.current?.click()}>выберите</button></p>
          <small>PDF, DXF, DWG, JPG, PNG</small>
          <input
            ref={inputRef}
            type="file"
            name="drawing"
            accept={allowed.join(',')}
            onChange={(event) => accept(event.target.files?.[0])}
            tabIndex={-1}
          />
        </div>
      ) : (
        <div className="selected-file" aria-live="polite">
          <FileText aria-hidden="true" />
          <span><strong>{file.name}</strong><small>{formatSize(file.size)}</small></span>
          <button type="button" onClick={() => setFile(null)} aria-label={`Удалить файл ${file.name}`}>
            <X aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  )
}
