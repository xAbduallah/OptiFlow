"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import pos from "../../public/images/landing/solutions/POS.svg";
import restaurant from "../../public/images/landing/solutions/restaurant.svg";
import construction from "../../public/images/landing/solutions/construction.svg";
import shippingManagement from "../../public/images/landing/solutions/shipping.svg";
import fashionManagement from "../../public/images/landing/solutions/fashion.svg";
import hospitalManagement from "../../public/images/landing/solutions/hospital.svg";
import concreteManagement from "../../public/images/landing/solutions/concrete.svg";
import industrialAutomation from "../../public/images/landing/solutions/industrial-automation.svg";
import {
  rotateInVariants,
  staggerFastVariants,
  scaleInVariants,
} from "@/lib/motion-variants";

interface SolutionCard {
  translationKey: string;
  icon: StaticImageData;
}

const getSolutionsData = (): SolutionCard[] => [
  {
    translationKey: "restaurant",
    icon: restaurant,
  },
  {
    translationKey: "construction",
    icon: construction,
  },
  {
    translationKey: "industrialAutomation",
    icon: industrialAutomation,
  },
  {
    translationKey: "hospitalManagement",
    icon: hospitalManagement,
  },
  {
    translationKey: "concreteManagement",
    icon: concreteManagement,
  },
  {
    translationKey: "pos",
    icon: pos,
  },
  {
    translationKey: "fashionManagement",
    icon: fashionManagement,
  },
  {
    translationKey: "shippingManagement",
    icon: shippingManagement,
  },
];

export const Solutions: React.FC = () => {
  const getTransText = useTranslations("Solutions");
  const SOLUTIONS_DATA = getSolutionsData();

  return (
    <section
      id="solutions"
      className="main-section flex flex-col items-center gap-[60px] max-md:gap-10 max-sm:gap-8"
    >
      <motion.header
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={rotateInVariants}
        className="flex flex-col items-center gap-3 text-center"
      >
        <p className="section-title">{getTransText("sectionTitle")}</p>
        <h2 className="section-heading">{getTransText("heading")}</h2>
        <p className="section-description">{getTransText("description")}</p>
      </motion.header>

      <div className="flex flex-col gap-[60px] w-full max-md:gap-10">
        {/* First Row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerFastVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[66px] gap-y-8 w-full justify-items-center"
        >
          {SOLUTIONS_DATA.slice(0, 4).map((solution, index) => (
            <motion.article
              key={index}
              variants={scaleInVariants}
              className="flex flex-col gap-3 shadow-[0_12px_16px_0_rgba(51,51,51,0.08)] p-2 rounded-[5px]"
            >
              <div className="flex items-center rtl:flex-row-reverse justify-center w-12 h-12 rounded-2xl protect-img">
                <Image src={solution.icon} alt={solution.translationKey} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-black text-[22px] font-semibold leading-[1.366] capitalize">
                  {getTransText(`solutions.${solution.translationKey}.title`)}
                </h3>
                <p className="text-[#4C4C4C] text-base font-normal leading-[1.366] capitalize max-w-[253px] max-md:max-w-full">
                  {getTransText(
                    `solutions.${solution.translationKey}.description`
                  )}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Second Row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerFastVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[66px] gap-y-8 w-full justify-items-center"
        >
          {SOLUTIONS_DATA.slice(4, 8).map((solution, index) => (
            <motion.article
              key={index + 4}
              variants={scaleInVariants}
              className="flex flex-col gap-3 shadow-[0_12px_16px_0_rgba(51,51,51,0.08)] p-2 rounded-2xl"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-[5px] protect-img">
                <Image src={solution.icon} alt={solution.translationKey} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-black text-[22px] font-semibold leading-[1.366] capitalize">
                  {getTransText(`solutions.${solution.translationKey}.title`)}
                </h3>
                <p className="text-[#4C4C4C] text-base font-normal leading-[1.366] capitalize max-w-[260px] max-md:max-w-full">
                  {getTransText(
                    `solutions.${solution.translationKey}.description`
                  )}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
