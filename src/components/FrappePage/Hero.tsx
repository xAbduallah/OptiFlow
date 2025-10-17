"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  containerVariants,
  fadeInUpVariants,
  scaleInVariants,
  zoomInVariants,
} from "@/lib/motion-variants";
import { dinNextBold } from "../ui/fonts";

const Hero: React.FC<{ id: string }> = ({ id }) => {
  const getTrans = useTranslations("FrappePage.Hero");

  return (
    <section className="relative w-full min-h-[calc(100vh-150px)] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/frappe/background.svg"
          alt="Background Grid"
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>

      {/* Content Container */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 flex flex-col items-center main-section"
      >
        {/* Badge */}
        <motion.div
          variants={zoomInVariants}
          className="bg-[#EAF8FF] rtl:flex-row-reverse rounded-[50px] px-3 py-2.5 md:px-4 md:py-3 lg:px-6 lg:py-2.5 flex items-center gap-2 md:gap-3 mb-6 md:mb-8 lg:mb-4 shadow-[0_0_12.48px_0_rgba(207,230,242,1),0_0_43.68px_0_rgba(207,230,242,1)]"
        >
          <div className="bg-white rounded-[50px] px-2 py-1 md:px-2.5 md:py-1.5 lg:px-2.5 lg:py-1.5">
            <svg
              className="w-4 h-4 md:w-5 md:h-5 lg:w-[18px] lg:h-[18px]"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 2.25H12L15 5.25V15.75H3V2.25Z"
                stroke="#049EDB"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="9" cy="6" r="1.5" stroke="#049EDB" strokeWidth="1" />
              <circle cx="12" cy="12.75" r="0.005" stroke="#049EDB" />
              <circle cx="12" cy="9.75" r="0.005" stroke="#049EDB" />
              <circle cx="9" cy="9.75" r="0.005" stroke="#049EDB" />
              <circle cx="6" cy="9.75" r="0.005" stroke="#049EDB" />
              <circle cx="6" cy="12.75" r="0.005" stroke="#049EDB" />
              <circle cx="9" cy="12.75" r="0.005" stroke="#049EDB" />
            </svg>
          </div>
          <span className="text-[#0F0E2C] font-medium text-xs md:text-sm lg:text-[18px] leading-[1.366] uppercase tracking-wide">
            {id}
          </span>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          className="w-full max-w-[343px] md:max-w-[680px] lg:max-w-[1006px] flex flex-col items-center gap-4 md:gap-5 lg:gap-6 mb-8 md:mb-12 lg:mb-10"
        >
          {/* Heading */}
          <motion.h1
            variants={fadeInUpVariants}
            className={`rtl:${dinNextBold.className} rtl:md:px-20 text-[#191919] font-semibold text-[32px] md:text-[40px] lg:text-[60px] leading-[1.333] tracking-[-0.03em] capitalize text-center`}
          >
            {getTrans("heading")}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeInUpVariants}
            className="text-[#4C4C4C] rtl:lg:px-6 font-normal text-[12px] md:text-base lg:text-[20px] leading-[1.366] capitalize text-center"
          >
            {getTrans("description")}
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={containerVariants}
          className="flex flex-col md:flex-row gap-4 md:gap-6 mb-8 md:mb-12 lg:mb-10"
        >
          <motion.div variants={scaleInVariants}>
            <Button className="bg-[#1B1C31] hover:bg-[#1B1C31]/90 text-white font-medium text-sm md:text-base lg:text-[20px] leading-[1.366] px-6 py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4 rounded-[5px] w-full md:w-auto">
              {getTrans("primaryButton")}
            </Button>
          </motion.div>

          <motion.div variants={scaleInVariants}>
            <Button
              variant="outline"
              className="bg-transparent border border-[#1B1C31] text-[#1B1C31] hover:bg-[#1B1C31] hover:text-white font-medium text-sm md:text-base lg:text-[20px] leading-[1.366] px-6 py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4 rounded-[5px] w-full md:w-auto"
            >
              {getTrans("secondaryButton")}
            </Button>
          </motion.div>
        </motion.div>

        {/* Foreground Image (Device Mockup) */}
        <motion.div
          variants={fadeInUpVariants}
          className="relative w-full max-w-[320px] md:max-w-[568px] lg:max-w-[712px] h-auto aspect-[711/503]"
        >
          <Image
            src="/images/frappe/foreground-lg.svg"
            alt="Healthcare Management Dashboard"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
