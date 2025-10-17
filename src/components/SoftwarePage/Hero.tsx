"use client";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  containerVariants,
  fadeInUpVariants,
  scaleInVariants,
} from "@/lib/motion-variants";

export default function Hero() {
  const getTransText = useTranslations("SoftwarePage.hero");

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="main-section flex h-[403px] lg:h-[653px] flex-col items-center justify-center gap-6
      bg-[url('/images/software-service/hero-sm.svg')]
      md:bg-[url('/images/software-service/hero-md.svg')]
      lg:bg-[url('/images/software-service/hero-lg.svg')]
      bg-contain bg-center bg-no-repeat max-sm:h-auto max-sm:w-full lg:mb-0"
    >
      <motion.h1
        variants={fadeInUpVariants}
        className="w-[300px] md:w-[482px] lg:w-[710px] pt-32 md:pt-40 text-center text-[26px] md:text-[40px] lg:text-[60px] tracking-[-0.02em] font-semibold"
      >
        {getTransText("title")}
        <span className="text-[#2A8E9E]">
          {" "}
          {getTransText("titleHighlight")}
        </span>
      </motion.h1>
      <motion.p
        variants={fadeInUpVariants}
        className="max-w-[296px] md:max-w-[520px] lg:max-w-[935px] tracking-[-0.03em] text-center text-gray-700 text-[12px] md:text-[16px] lg:text-[20px] font-normal"
      >
        {getTransText("description")}
      </motion.p>
      <motion.div variants={scaleInVariants}>
        <Button className="bg-black px-15 py-4 text-xl font-medium text-white max-sm:text-sm">
          {getTransText("ctaButton")}
        </Button>
      </motion.div>
    </motion.div>
  );
}
