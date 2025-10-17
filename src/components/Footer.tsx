"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { staggerSlowVariants, fadeInUpVariants } from "@/lib/motion-variants";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="w-full bg-[#0F0E2C] text-[#FAFAFA]">
      <div className="main-section px-6 pt-20 mb-0">
        {/* Top sections */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerSlowVariants}
          className="flex flex-col lg:grid lg:grid-cols-[233px_auto_auto_1fr] gap-8 lg:gap-8 border-b border-[#CCCCCC] pb-10"
        >
          {/* Brand + description + socials */}
          <motion.div
            variants={fadeInUpVariants}
            className="flex flex-col gap-4 w-full max-w-[233px]"
          >
            <div className="text-[20px] md:text-[21px] font-extrabold leading-[1.4] md:leading-[1.33] tracking-[-0.02em]">
              {t("brandName")}
            </div>
            <p className="text-[14px] md:text-[16px] leading-[1.366] md:leading-[1.75] text-[#F2F2F2]">
              {t("description")}
            </p>
            <div className="flex items-center gap-4">
              <a
                aria-label="Messenger"
                className="inline-flex items-center justify-center size-8 rounded bg-white/0"
              >
                <Image
                  src="/images/global/messenger.png"
                  alt="Messenger"
                  width={22}
                  height={20}
                />
              </a>
              <a
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center size-8 rounded bg-white/0"
              >
                <Image
                  src="/images/global/linkedin.png"
                  alt="LinkedIn"
                  width={22}
                  height={20}
                />
              </a>
              <a
                aria-label="Twitter"
                className="inline-flex items-center justify-center size-8 rounded bg-white/0"
              >
                <Image
                  src="/images/global/twitter.png"
                  alt="Twitter"
                  width={22}
                  height={20}
                />
              </a>
            </div>
          </motion.div>

          {/* Navigation & Contact Row (Mobile: stacked, Tablet+: side by side) */}
          <div className="flex flex-col md:flex-row md:gap-10 lg:contents gap-8">
            {/* Navigation */}
            <motion.div
              variants={fadeInUpVariants}
              className="flex flex-col gap-4 w-full"
            >
              <div className="text-[16px] md:text-[20px] lg:text-[21px] font-bold leading-[1.5] md:leading-[1.2]">
                {t("navigation.title")}
              </div>
              <div className="flex flex-col gap-[18px] md:gap-4">
                <a
                  className="text-[14px] md:text-[16px] leading-[1.714] md:leading-[1.5]"
                  href="#"
                >
                  {t("navigation.home")}
                </a>
                <a
                  className="text-[14px] md:text-[16px] leading-[1.714] md:leading-[1.5]"
                  href="#services"
                >
                  {t("navigation.services")}
                </a>
                <a
                  className="text-[14px] md:text-[16px] leading-[1.714] md:leading-[1.5]"
                  href="#solution"
                >
                  {t("navigation.solution")}
                </a>
                <a
                  className="text-[14px] md:text-[16px] leading-[1.714] md:leading-[1.5]"
                  href="#frappe"
                >
                  {t("navigation.frappe")}
                </a>
                <a
                  className="text-[14px] md:text-[16px] leading-[1.714] md:leading-[1.5]"
                  href="#products"
                >
                  {t("navigation.products")}
                </a>
                <a
                  className="text-[14px] md:text-[16px] leading-[1.714] md:leading-[1.5]"
                  href="#contact"
                >
                  {t("navigation.contact")}
                </a>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              variants={fadeInUpVariants}
              className="flex flex-col gap-4 w-full"
            >
              <div className="text-[16px] md:text-[20px] lg:text-[21px] font-bold leading-[1.5] md:leading-[1.2]">
                {t("contactUs.title")}
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[14px] md:text-[16px] leading-[1.714] md:leading-[1.5]">
                  {t("contactUs.phone")}
                </p>
                <p className="text-[14px] md:text-[16px] leading-[1.714] md:leading-[1.5] max-w-[191px]">
                  {t("contactUs.address")}
                </p>
                <p className="text-[14px] md:text-[16px] leading-[1.714] md:leading-[1.5] max-w-[191px]">
                  {t("contactUs.email")}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Newsletter */}
          <motion.div
            variants={fadeInUpVariants}
            className="flex flex-col gap-4 w-full lg:max-w-[426px]"
          >
            <div className="text-[18px] md:text-[20px] lg:text-[21px] font-bold leading-[1.333] md:leading-[1.2]">
              {t("newsletter.title")}
            </div>
            <form className="flex flex-col sm:flex-row gap-2 sm:gap-0 w-full max-w-[329px] md:max-w-[378px] lg:max-w-none">
              <Input
                type="email"
                placeholder={t("newsletter.emailPlaceholder")}
                className="h-[52px] bg-[#333333] border-0 text-white text-[12px] md:text-[16px] placeholder:text-[#CCCCCC] flex-1"
              />
              <Button
                type="submit"
                className="h-[52px] px-[27px] md:px-6 bg-[#2A8E9E] whitespace-nowrap text-[14px] md:text-[16px]"
              >
                {t("newsletter.subscribeButton")}
              </Button>
            </form>
            <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-[2.166] md:leading-[1.857] lg:leading-[1.625] uppercase lg:normal-case">
              {t("newsletter.description")}
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-10"
        >
          <p className="text-[12px] md:text-[16px] leading-[2.166] md:leading-[1.625] text-center">
            {t("copyright")}
          </p>
          <p className="hidden md:block text-[16px] leading-[1.625] text-center">
            {t("poweredBy")}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
        >
          <Image
            src="/images/global/footer.png"
            alt="Footer"
            width={1440}
            height={264}
            className="pt-8 md:pt-12 lg:pt-16"
          />
        </motion.div>
      </div>
    </footer>
  );
}
