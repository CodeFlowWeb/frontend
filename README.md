<div align="center">
  <img src="/public/logo.svg" alt="CodeFlow Logo" width="200" height="200" />
  
  # CodeFlow

### 🚀 Мощная платформа для управления IT-проектами

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-latest-black?style=for-the-badge)](https://ui.shadcn.com/)

[О проекте](#о-проекте) · [Установка](#быстрый-старт) · [Технологии](#технологии)

</div>

---

## ✨ Особенности

- 📋 **Канбан-доски** — Визуализируйте рабочий процесс с помощью настраиваемых досок и карточек
- 👥 **Командная работа** — Эффективное взаимодействие и отслеживание прогресса
- 📚 **Документация** — Встроенная wiki с поддержкой Markdown
- 🔄 **CI/CD интеграция** — Связь с GitHub Actions, Jenkins и другими CI системами
- 🎯 **Спринты** — Планирование и отслеживание спринтов
- 📊 **Аналитика** — Подробные отчеты и метрики производительности
- 🌙 **Темная тема** — Поддержка светлой и темной темы
- 📱 **Адаптивный дизайн** — Работает на всех устройствах

## 🚀 Быстрый старт

1. **Клонируйте репозиторий**

```bash
git clone https://github.com/your-username/code-flow.git
cd code-flow
```

2. **Установите зависимости**

```bash
# С помощью npm
npm install

# Или с помощью Bun
bun install
```

3. **Настройте переменные окружения**

```bash
cp .env.example .env.local
```

Заполните `.env.local` необходимыми значениями:

```env
NEXTAUTH_URL=http://localhost:3000
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
```

4. **Запустите сервер разработки**

```bash
npm run dev
# или
bun dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## 🛠️ Технологии

- [Next.js 15](https://nextjs.org/) — React фреймворк
- [TypeScript](https://www.typescriptlang.org/) — Типизированный JavaScript
- [Tailwind CSS](https://tailwindcss.com/) — Утилитарный CSS фреймворк
- [shadcn/ui](https://ui.shadcn.com/) — Компоненты пользовательского интерфейса
- [NextAuth.js](https://next-auth.js.org/) — Аутентификация
- [Prisma](https://www.prisma.io/) — ORM для базы данных
- [tRPC](https://trpc.io/) — End-to-end типизированный API

## 🤝 Вклад в проект

Мы приветствуем вклад в развитие CodeFlow! Вот как вы можете помочь:

1. Форкните репозиторий
2. Создайте ветку для вашей фичи (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'feat: add amazing feature'`)
4. Отправьте изменения в ваш форк (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

Пожалуйста, ознакомьтесь с нашим [руководством по внесению изменений](/CONTRIBUTING.md).

## 📄 Лицензия

Распространяется под лицензией MIT. Смотрите [`LICENSE`](/LICENSE) для получения дополнительной информации.

## 💖 Благодарности

CodeFlow вдохновлен и использует множество отличных open-source проектов:

- [Trello](https://trello.com/) — За вдохновение в дизайне канбан-досок
- [GitHub Projects](https://github.com/features/projects) — За идеи интеграции с системой контроля версий
- [Linear](https://linear.app/) — За великолепный UX
- [Next.js](https://nextjs.org/) — За превосходный фреймворк
- [shadcn/ui](https://ui.shadcn.com/) — За потрясающие компоненты пользовательского интерфейса

## 📬 Связаться с нами

- GitHub - [your-username/code-flow](https://github.com/your-username/code-flow)

---

<div align="center">
  <sub>Built with ❤️ by the CodeFlow Team.</sub>
</div>
