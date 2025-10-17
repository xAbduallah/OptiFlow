import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0F0E2C" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://optiflow.com"),
  title: {
    default:
      "Optiflow - Enterprise Solutions & ERP Systems for Business Growth",
    template: "%s | Optiflow",
  },
  description:
    "Transform your business with Optiflow's comprehensive ERP solutions powered by Frappe and ERPNext. Specialized in Sales Force automation, HR management, KSA compliance, and custom development services across healthcare, manufacturing, construction, and retail industries. Experience seamless integration, workflow automation, and real-time business insights.",
  applicationName: "Optiflow",
  keywords: [
    "ERP system",
    "Frappe",
    "ERPNext",
    "business automation",
    "sales force management",
    "HR services",
    "KSA compliance",
    "workflow automation",
    "enterprise software",
    "custom development",
    "healthcare management",
    "manufacturing ERP",
    "construction software",
    "retail solutions",
    "POS systems",
    "cloud hosting",
    "system integration",
    "business intelligence",
    "Saudi Arabia ERP",
    "digital transformation",
    "enterprise resource planning",
  ],
  authors: [{ name: "Optiflow Team", url: "https://optiflow.com" }],
  creator: "Optiflow",
  publisher: "Optiflow",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/images/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_SA"],
    url: "https://optiflow.com",
    siteName: "Optiflow",
    title: "Optiflow - Enterprise Solutions & ERP Systems",
    description:
      "Transform your business with comprehensive ERP solutions, automation tools, and custom development services. Powered by Frappe/ERPNext for industries across Saudi Arabia and globally.",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Optiflow Enterprise Solutions",
        type: "image/png",
      },
      {
        url: "/images/global/logo.png",
        width: 800,
        height: 600,
        alt: "Optiflow Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Optiflow - Enterprise Solutions & ERP Systems",
    description:
      "Transform your business with comprehensive ERP solutions and automation tools powered by Frappe/ERPNext.",
    images: ["/images/hero.png"],
    creator: "@optiflow", // Add your Twitter handle
    site: "@optiflow", // Add your Twitter handle
  },
  appleWebApp: {
    capable: true,
    title: "Optiflow",
    statusBarStyle: "default",
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // other: {
    //   me: ["your-email@optiflow.com", "https://optiflow.com"],
    // },
  },
  category: "technology",
  classification: "Business Software",
  alternates: {
    canonical: "https://optiflow.com",
    languages: {
      "en-US": "https://optiflow.com/en",
      "ar-SA": "https://optiflow.com/ar",
    },
    types: {
      "application/rss+xml": "https://optiflow.com/rss",
    },
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
