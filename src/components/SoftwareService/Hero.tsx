"use client";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("SoftwareService.hero");

  return (
    <div
      className="main-section flex h-[403px] lg:h-[653px] flex-col items-center justify-center gap-6
      bg-[url('/images/software-service/hero-sm.svg')]
      md:bg-[url('/images/software-service/hero-md.svg')]
      lg:bg-[url('/images/software-service/hero-lg.svg')]
      bg-contain bg-center bg-no-repeat max-sm:h-auto max-sm:w-full mb-0"
    >
      <h1 className="w-[300px] md:w-[482px] lg:w-[710px] pt-32 md:pt-40 text-center text-[26px] md:text-[40px] lg:text-[60px] tracking-[-0.02em] font-semibold">
        {t("title")}
        <span className="text-[#2A8E9E]"> {t("titleHighlight")}</span>
      </h1>
      <p className="max-w-[296px] md:max-w-[520px] lg:max-w-[935px] tracking-[-0.03em] text-center text-gray-700 text-[12px] md:text-[16px] lg:text-[20px] font-normal">
        {t("description")}
      </p>
      <Button className="h-[59px] max-w-[236px] bg-black px-8 py-4 text-xl font-medium text-white max-sm:text-sm">
        {t("ctaButton")}
      </Button>
    </div>
  );
}
