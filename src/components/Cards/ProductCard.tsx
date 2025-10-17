"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import {
  containerVariants,
  fadeInUpVariants,
  fadeInRightVariants,
} from "@/lib/motion-variants";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

interface TechTag {
  text: string;
  bg: string;
  textColor: string;
}

interface ProductCardProps {
  header?: string;
  title: string;
  description: string;
  image: StaticImageData;
  logo?: StaticImageData;
  icon?: StaticImageData;
  techTags?: TechTag[];
  gradientFrom: string;
  explore?: boolean;
}

export default function ProjectCard({
  header,
  title,
  description,
  image,
  logo,
  icon,
  techTags,
  gradientFrom,
  explore,
}: ProductCardProps) {
  const getTransText = useTranslations("LandingPage.Products");

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className={`flex flex-col  justify-between relative w-full rounded-[30px] border border-[#CCCCCC] overflow-hidden max-h-[562px] md:max-h-[470px] lg:max-h-[500px]`}
      style={{
        background: `linear-gradient(180deg, ${gradientFrom} 0%, #FFFFFF 100%)`,
      }}
    >
      {header && icon && (
        <motion.div
          variants={fadeInUpVariants}
          className="self-start py-6 ltr:pl-6 rtl:pr-6 w-max"
        >
          <span className="bg-white px-4 rounded-[50px] shadow-sm text-black text-sm font-medium tracking-[-0.03em] relative flex items-center gap-2 py-2">
            <Image src={icon} alt={header} className="object-contain" />
            {header}
          </span>
        </motion.div>
      )}
      {/* Tech Tags */}
      {techTags && (
        <motion.div
          variants={fadeInUpVariants}
          className="flex flex-wrap items-center gap-2 self-start py-6 ltr:pl-6 rtl:pr-6"
        >
          {techTags.map((tag, idx) => (
            <span
              key={idx}
              className={`${tag.bg} ${tag.textColor} rounded-full border-[0.5px] border-[#CCCCCC] px-4 py-1.5 text-xs font-medium lg:text-base`}
            >
              {tag.text}
            </span>
          ))}
        </motion.div>
      )}
      <div className="flex flex-col md:flex-row items-start justify-around">
        <motion.div
          variants={fadeInUpVariants}
          className="w-full md:w-2/4 flex gap-8 lg:gap-[84px]"
        >
          <div className="flex flex-col gap-6 lg:gap-11 ltr:pl-6 rtl:pr-6">
            <div className="flex flex-col gap-4">
              {logo && (
                <div className="relative h-10 w-[105px] md:h-[50px] md:w-[132px] lg:h-[77.52px] lg:w-[204px]">
                  <Image
                    src={logo}
                    alt={title}
                    fill
                    className="object-contain object-left"
                  />
                </div>
              )}
              {/* Title */}
              <h3 className="section-heading">{title}</h3>
              {/* Description */}
              <p
                className={`section-description max-sm:max-w-[246px] whitespace-pre-line
                  ${!explore && "mb-6"}
                  `}
              >
                {description}
              </p>
              {explore && (
                <Button
                  type="submit"
                  className="w-[180px] px-4 py-2 bg-zinc-900 hover:bg-zinc-800 max-sm:mb-6"
                >
                  {getTransText("cta")}
                </Button>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInRightVariants}
          className="w-full md:w-2/4 md:flex-shrink-0 md:ml-auto flex justify-center md:justify-end items-end "
        >
          <Image src={image} alt="" className="object-fit h-auto w-auto" />
        </motion.div>
      </div>
    </motion.article>
  );
}
