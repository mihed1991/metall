# LaserFlux

Премиальный одностраничный сайт металлообрабатывающей компании на React, TypeScript, Vite и Tailwind CSS.

## Запуск

```bash
npm install
npm run dev
```

Проверка и production-сборка:

```bash
npm run check
npm run build
```

Контактные данные задаются в `src/config/company.ts`. Онлайн-отправка формы намеренно не имитируется: для неё нужно подключить серверный обработчик.

## GitHub Pages

Репозиторий содержит workflow `.github/workflows/deploy.yml`. После отправки ветки `main` выберите в настройках репозитория **Settings → Pages → Source → GitHub Actions**. Последующие push в `main` будут автоматически пересобирать и публиковать сайт.
