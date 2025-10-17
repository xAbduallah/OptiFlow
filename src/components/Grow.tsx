"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Counter from "./ui/counter";
import {
  fadeInUpVariants,
  containerVariants,
  zoomInVariants,
} from "@/lib/motion-variants";

interface StatisticData {
  translationKey: string;
}

export const Grow: React.FC = () => {
  const getTransText = useTranslations("Grow");

  const STATISTICS_DATA: StatisticData[] = [
    { translationKey: "projects" },
    { translationKey: "experience" },
    { translationKey: "users" },
    { translationKey: "partners" },
  ];
  return (
    <section
      id="grow"
      className="main-section flex flex-col items-center gap-[60px] md:gap-10 sm:gap-8"
    >
      <motion.header
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
        className="w-full flex flex-col lg:flex-row flex-nowrap justify-between gap-6 md:gap-8 lg:gap-[212px]"
      >
        <motion.h1
          variants={fadeInUpVariants}
          className="capitalize whitespace-pre-line text-[#1D1E20] text-[28px] max-w-[506px] font-semibold leading-[1.366] tracking-[-0.03em]"
        >
          {getTransText("heading")}
        </motion.h1>
        <motion.p
          variants={fadeInUpVariants}
          className="lg:w-[455px] section-description"
        >
          {getTransText("description")}
        </motion.p>
      </motion.header>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="w-full grid grid-cols-2 lg:grid-cols-4 gap-x-[94px] gap-y-6 md:gap-y-8 sm:gap-y-6"
      >
        {STATISTICS_DATA.map((stat) => (
          <motion.article
            key={stat.translationKey}
            variants={zoomInVariants}
            className="flex flex-col gap-4 md:gap-6 lg:gap-8 md:w-full"
          >
            <div className="h-[42px] text-black text-[32px] md:text-[44px] lg:text-[52px] font-bold tracking-[-0.02em]">
              +
              <Counter
                value={getTransText(`statistics.${stat.translationKey}.number`)}
              />
            </div>
            <p className="text-[#64607D] text-[20px] font-medium tracking-[-0.02em] md:text-[20px] sm:text-[16px]">
              {getTransText(`statistics.${stat.translationKey}.description`)}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Grow;
