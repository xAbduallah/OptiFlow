# OptiFlow - Business Operations Management Platform

A modern, multilingual web application built with Next.js that provides comprehensive business automation and ERP solutions powered by the Frappe framework.

## 🚀 Overview

OptiFlow is an all-in-one platform designed to streamline business operations, automate workflows, and enable smarter decision-making. The platform offers industry-specific solutions ranging from retail and construction to healthcare and logistics.

## ✨ Key Features

- **Multilingual Support**: Full internationalization (i18n) with English and Arabic languages
- **Frappe Integration**: Built on the powerful Frappe framework for flexible ERP solutions
- **Industry Solutions**: Tailored solutions for restaurants, construction, healthcare, retail, and more
- **Custom Development**: Bespoke software, websites, and apps development services
- **Automation Flow**: Intelligent workflow automation with AI capabilities
- **Integration Services**: Seamless system integration and data flow management
- **Responsive Design**: Mobile-first, fully responsive UI across all devices
- **Modern UI/UX**: Clean, intuitive interface with TailwindCSS styling

## 🛠️ Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org) with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS with custom configuration
- **UI Components**: Custom component library with shadcn/ui
- **Internationalization**: next-intl for multi-language support
- **Package Manager**: pnpm
- **Deployment**: Docker support with docker-compose

## 📁 Project Structure

```
optiflow/
├── src/
│   ├── app/
│   │   ├── [locale]/           # Locale-based routing
│   │   │   ├── page.tsx        # Home page
│   │   │   ├── layout.tsx      # Locale layout
│   │   │   └── software-service/
│   │   ├── globals.css         # Global styles
│   │   └── layout.tsx          # Root layout
│   ├── components/
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Footer.tsx          # Footer with newsletter
│   │   ├── Hero.tsx            # Hero section
│   │   ├── AboutUs.tsx         # About section
│   │   ├── Banner.tsx          # CTA banner
│   │   ├── ContactUs.tsx       # Contact form
│   │   ├── Frappe.tsx          # Frappe services showcase
│   │   ├── Products.tsx        # Products section
│   │   ├── Services.tsx        # Services section
│   │   ├── Solutions.tsx       # Industry solutions
│   │   ├── Grow.tsx            # Statistics section
│   │   ├── Cards/              # Reusable card components
│   │   ├── SoftwareService/    # Software service pages
│   │   └── ui/                 # Base UI components
│   ├── i18n/
│   │   ├── routing.ts          # Routing configuration
│   │   ├── request.ts          # Request handling
│   │   └── navigation.ts       # Navigation utilities
│   ├── lib/
│   │   └── utils.ts            # Utility functions
│   └── middleware.ts           # i18n middleware
├── messages/
│   ├── en.json                 # English translations
│   └── ar.json                 # Arabic translations
├── public/
│   ├── images/                 # Static images
│   └── fonts/                  # Custom fonts (DIN Next LT Arabic)
├── docker-compose.yml          # Docker configuration
├── components.json             # shadcn/ui configuration
└── package.json
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm package manager (or npm/yarn)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd optiflow
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Using Docker

```bash
docker-compose up
```

## 🌐 Internationalization

The project supports multiple languages through `next-intl`:

- **English (en)**: Default language
- **Arabic (ar)**: Full RTL support

Translations are managed in the `messages/` directory. Each component uses the `useTranslations` hook to access localized content.

### Adding New Translations

1. Add translation keys to `messages/en.json` and `messages/ar.json`
2. Use the `useTranslations` hook in your component:

```tsx
import { useTranslations } from "next-intl";

export default function MyComponent() {
  const t = useTranslations("SectionName");
  return <h1>{t("title")}</h1>;
}
```

## 📦 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🎨 Styling

The project uses TailwindCSS with custom configurations:

- Custom color palette matching brand identity
- Responsive breakpoints for mobile, tablet, and desktop
- Custom fonts including DIN Next LT Arabic for multilingual support
- Component-based styling with utility classes

## 📄 Main Sections

1. **Hero**: Landing section with demo request form
2. **About Us**: Company overview with timeline
3. **Services**: Core service offerings (Automation, Integration, Custom Development, Hosting)
4. **Solutions**: Industry-specific solutions (Restaurant, Construction, Healthcare, etc.)
5. **Frappe**: Frappe framework capabilities and modules
6. **Products**: Featured products (Sales Force, HR Services, KSA Compliance)
7. **Grow**: Company statistics and achievements
8. **Contact**: Contact form and information
9. **Banner**: Call-to-action section
10. **Footer**: Newsletter signup and footer links

## 🚀 Deployment

The application can be deployed on:

- **Vercel**: Optimized for Next.js (recommended)
- **Docker**: Using the provided docker-compose configuration
- **Any Node.js hosting**: Supports standard Node.js deployment

For Vercel deployment:

```bash
vercel deploy
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

Copyright @ AR Shakir 2022. All Rights Reserved.

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [next-intl Documentation](https://next-intl-docs.vercel.app)
- [Frappe Framework](https://frappeframework.com)

---

**Powered by OptiFlow**
