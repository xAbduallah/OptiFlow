"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import {
  containerVariants,
  fadeInUpVariants,
  scaleInVariants,
  zoomInVariants,
} from "@/lib/motion-variants";

const Hero: React.FC = () => {
  const t = useTranslations("ProductsPage.hero");

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="main-section flex h-[620px] md:h-[810px] lg:h-[940px] flex-col items-center justify-start gap-6
        bg-[url('/images/products/hero-sm.svg')]
        md:bg-[url('/images/products/hero-md.svg')]
        lg:bg-[url('/images/products/hero-lg.svg')]
        bg-contain bg-center bg-no-repeat max-sm:mb-0"
    >
      {/* Main Content Container */}
      <div className="flex flex-col items-center gap-[18px] min-w-[320px] w-[70%] md:max-w-[594px] lg:max-w-[860px]">
        {/* Heading with Highlighted Badge */}
        <motion.div variants={fadeInUpVariants} className="relative w-full">
          <h1 className="text-[#191919] text-center font-semibold text-[32px] md:text-[40px] lg:text-[55px] leading-[1.33] tracking-[-0.03em] capitalize">
            {t("heading")}&nbsp;
            <motion.span
              variants={zoomInVariants}
              className="px-3 py-1 bg-[#EBFCFF] rounded-full shadow-[0px_0px_6px_0px_rgba(161,221,232,1),0px_0px_12px_0px_rgba(161,221,232,1),0px_0px_43px_0px_rgba(161,221,232,1)] text-[#2A8E9E] font-bold text-[28px] md:text-[34px] lg:text-[40px] tracking-[-0.03em] capitalize whitespace-nowrap"
            >
              {t("badge")}
            </motion.span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeInUpVariants}
          className="text-[#4C4C4C] text-center font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[1.366] tracking-[-0.06em] capitalize"
        >
          {t("description")}
        </motion.p>
      </div>

      {/* CTA Buttons */}
      <motion.div
        variants={containerVariants}
        className="flex items-center gap-2 md:gap-6"
      >
        <motion.div variants={scaleInVariants}>
          <Button className="bg-[#1B1C31] hover:bg-[#1B1C31]/90 text-white text-[14px] md:text-[18px] lg:text-[20px] px-6 py-3 lg:px-8 lg:py-4">
            {t("ctaButton")}
          </Button>
        </motion.div>

        <motion.div variants={scaleInVariants}>
          <Button className="bg-transparent hover:bg-transparent text-[#1B1C31] hover:text-[#1B1C31] border border-[#1B1C31] text-[14px] md:text-[18px] lg:text-[20px] px-6 py-3 lg:px-8 lg:py-4">
            {t("contactButton")}
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
