"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import BannerImg from "../../../public/images/global/Banner.svg";
import BannerImgMD from "../../../public/images/global/BannerMD.svg";
import BannerImgSM from "../../../public/images/global/BannerSM.svg";
import { Button } from "../ui/button";
import {
  fadeInVariants,
  scaleInVariants,
  fadeInUpVariants,
} from "@/lib/motion-variants";

export default function Banner() {
  const getTrans = useTranslations("Global.Banner");

  return (
    <section className="main-section bg-white overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
        className="max-h-[284px] w-full mb-8 protect-img"
      >
        <Image
          src={BannerImg}
          alt="Banner background large"
          width={1440}
          height={264}
          className="w-full h-auto hidden lg:block"
        />
        <Image
          src={BannerImgMD}
          alt="Banner background medium"
          width={1440}
          height={264}
          className="w-full h-auto hidden md:block lg:hidden"
        />
        <Image
          src={BannerImgSM}
          alt="Banner background small"
          width={1440}
          height={264}
          className="w-full h-auto block md:hidden"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={scaleInVariants}
        className="flex flex-col items-center justify-center px-4 max-sm:mt-[-110px] pb-12"
      >
        <div className="w-full max-w-[779px] flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-4">
            <h2 className="max-w-[352px] md:max-w-full text-center font-normal text-[34px] lg:text-[58px] md:text-[58px] capitalize leading-[-3%] bg-gradient-to-b from-[#191919] to-[#7b7b7b] bg-clip-text text-transparent">
              {getTrans("title")}
            </h2>

            <p className="w-full text-center font-medium capitalize text-[20px] text-[#4C4C4C]">
              {getTrans("description")}
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <Button
              type="submit"
              className="px-10 bg-zinc-900 hover:bg-zinc-800"
            >
              {getTrans("ctaButton")}
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
