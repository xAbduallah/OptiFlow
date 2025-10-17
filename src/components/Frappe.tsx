"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import erpnext from "../../public/images/landing/frappe/erpnext.svg";
import hrManagement from "../../public/images/landing/frappe/hr-management.svg";
import manufacturing from "../../public/images/landing/frappe/manufacturing.svg";
import construction from "../../public/images/landing/frappe/construction.svg";
import healthcare from "../../public/images/landing/frappe/healthcare.svg";
import education from "../../public/images/landing/frappe/education.svg";
import { dinNextBold } from "./ui/fonts";
import {
  fadeInDownVariants,
  fadeInLeftVariants,
  fadeInRightVariants,
  containerVariants,
  fadeInUpVariants,
} from "@/lib/motion-variants";

interface FrappeModule {
  id: string;
  translationKey: string;
  image: StaticImageData;
  size: string;
}

const Frappe: React.FC = () => {
  const getTransText = useTranslations("Frappe");

  const frappeModules: FrappeModule[] = [
    {
      id: "erpnext",
      translationKey: "erpnext",
      image: erpnext,
      size: "w-full h-[470px] lg:h-[500px] lg:min-w-[56%]",
    },
    {
      id: "hr-management",
      translationKey: "hrManagement",
      image: hrManagement,
      size: "w-full h-[470px] lg:h-[500px] lg:min-w-[42%]",
    },
    {
      id: "manufacturing",
      translationKey: "manufacturing",
      image: manufacturing,
      size: "w-full h-[470px] lg:h-[500px] lg:min-w-[49%]",
    },
    {
      id: "construction",
      translationKey: "construction",
      image: construction,
      size: "w-full h-[470px] lg:h-[500px] lg:min-w-[49%]",
    },
    {
      id: "healthcare",
      translationKey: "healthcare",
      image: healthcare,
      size: "w-full h-[470px] lg:h-[500px] lg:min-w-[42%]",
    },
    {
      id: "education",
      translationKey: "education",
      image: education,
      size: "w-full h-[470px] lg:h-[500px] lg:min-w-[56%]",
    },
  ];
  // Group cards into rows: [0,1], [2,3], [4,5]
  const cardRows = [
    [frappeModules[0], frappeModules[1]], // Large + Medium
    [frappeModules[2], frappeModules[3]], // Medium + Medium
    [frappeModules[4], frappeModules[5]], // Medium + Large
  ];

  return (
    <section className="main-section flex flex-col justify-center items-center relative max-md:gap-10 max-sm:gap-[30px]">
      <motion.header
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInDownVariants}
        className="flex flex-col items-center text-center gap-4 self-stretch max-md:left-10 max-md:top-0"
      >
        <div className="flex flex-col items-center gap-1 self-stretch relative">
          <p className="section-title">{getTransText("sectionTitle")}</p>
          <h1 className={`rtl:${dinNextBold.className} section-heading`}>
            {getTransText("heading")}
          </h1>
        </div>
        <p className="section-description">{getTransText("description")}</p>
      </motion.header>

      <div className="w-full flex flex-col items-center justify-center gap-6 max-md:w-full max-md:relative max-md:h-auto pt-0 md:pt-16">
        {cardRows.map((row, index) => {
          return (
            <div
              key={index}
              className="w-full flex max-lg:flex-col lg:rtl:flex-row-reverse lg:items-center gap-6 relative max-md:gap-5"
            >
              {row.map((module, moduleIndex) => {
                // Alternate animations: first card from left, second from right
                const cardVariants =
                  moduleIndex === 0 ? fadeInLeftVariants : fadeInRightVariants;

                return (
                  <motion.article
                    key={module.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={cardVariants}
                    className={`${module.size} w-full flex flex-col justify-between bg-white rounded-2xl border-[0.3px] border-solid border-[#CCC]/50 transform transition-transform duration-200 will-change-transform hover:scale-102 overflow-hidden`}
                  >
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      variants={containerVariants}
                      className="h-full flex flex-col"
                    >
                      <motion.div
                        variants={fadeInUpVariants}
                        className="h-[70%] w-full overflow-hidden relative protect-img"
                      >
                        <Image
                          src={module.image}
                          alt={getTransText(
                            `modules.${module.translationKey}.title`
                          )}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                      <div className="p-4 rounded-2xl bg-[linear-gradient(to_bottom,rgba(255,255,255,0.7)_0%,rgba(242,242,242,1)_100%)]">
                        <motion.div
                          variants={fadeInUpVariants}
                          className="flex flex-col items-start self-stretch relative"
                        >
                          <h3 className="self-stretch text-[#191919] text-[28px] font-normal leading-[48px] tracking-[-0.84px] relative max-sm:text-2xl max-sm:leading-8">
                            {getTransText(
                              `modules.${module.translationKey}.title`
                            )}
                          </h3>
                          <p className="self-stretch text-[#4C4C4C] font-normal relative max-sm:text-[13px] max-sm:leading-[18px]">
                            {getTransText(
                              `modules.${module.translationKey}.description`
                            )}
                          </p>
                        </motion.div>

                        <motion.div
                          variants={fadeInUpVariants}
                          className="flex items-center gap-2 relative cursor-pointer group pt-2"
                          dir="auto"
                          tabIndex={0}
                          role="button"
                        >
                          <span className="text-[#2A8E9E] text-base font-semibold leading-4 relative group-hover:underline">
                            {getTransText("readMore")}
                          </span>
                          <svg
                            width="13"
                            height="10"
                            viewBox="0 0 13 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`w-[11.5px] h-[8.5px] transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180`}
                          >
                            <path
                              d="M0 4.75H11.5M11.5 4.75L7 0.75M11.5 4.75L7 9.25"
                              stroke="#2A8E9E"
                              strokeWidth="2"
                            />
                          </svg>
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.article>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Frappe;
