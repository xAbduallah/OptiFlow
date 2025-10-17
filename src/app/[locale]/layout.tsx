import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "@/app/globals.css";
import { dinNextRegular, manrope } from "@/components/ui/fonts";
import TempNavigation from "@/components/Global/TempNavigation";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  const isArabic = locale === "ar";

  return (
    <html lang={locale} dir={isArabic ? "rtl" : "ltr"} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div
            className={isArabic ? dinNextRegular.className : manrope.className}
          >
            <TempNavigation />
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
