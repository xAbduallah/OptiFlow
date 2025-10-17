"use client";
import Image from "next/image";
import React, { useRef } from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  fadeInUpVariants,
  fadeInVariants,
  staggerSlowVariants,
} from "@/lib/motion-variants";

import Nourish from "../../../public/images/logos/Nourish.png";
import Roseline from "../../../public/images/logos/Roseline.png";
import SLKTVES from "../../../public/images/logos/SLKTVES.png";
import Veela from "../../../public/images/logos/Veela.png";
import VitalRoots from "../../../public/images/logos/VitalRoots.png";
import glam from "../../../public/images/logos/glam.png";
import { dinNextBold } from "../ui/fonts";
import { Button } from "../ui/button";

export default function AboutUs() {
  const getTransText = useTranslations("LandingPage.AboutUs");
  const brands = [Nourish, Roseline, SLKTVES, Veela, VitalRoots, glam];
  const plugin = useRef(
    AutoScroll({
      direction: "forward",
      startDelay: 0,
      speed: 2.5,
      stopOnInteraction: false,
    })
  );

  return (
    <section
      id="about-us"
      className="main-section flex flex-col font-sans overflow-hidden relative"
    >
      <div className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariants}
          className="flex flex-col justify-center items-center mt-8"
        >
          <p className="text-zinc-500 font-semibold text-center text-sm md:text-base">
            {getTransText("businessesGrowing")}
          </p>

          <div className="w-full my-3 max-sm:my-0">
            <Carousel
              plugins={[plugin.current]}
              opts={{
                dragFree: false,
                loop: true,
              }}
            >
              <CarouselContent className="select-none">
                {brands.map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 flex items-center basis-[200px] md:basis-[300px] lg:basis-[350px] protect-img"
                  >
                    <Image loading="lazy" alt="logo" src={brands[index]} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </motion.div>
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between mt-8 relative">
          {/* Cards and SVG line */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUpVariants}
            className="scroll-mt-24 relative ltr:bg-[url('/images/landing/about-us/timeline-sm.svg')] ltr:md:bg-[url('/images/landing/about-us/timeline-md.png')] ltr:lg:bg-[url('/images/landing/about-us/timeline.png')] rtl:bg-[url('/images/landing/about-us/timeline-sm-ar.svg')] rtl:md:bg-[url('/images/landing/about-us/timeline-md-ar.png')] rtl:lg:bg-[url('/images/landing/about-us/timeline-ar.png')] bg-no-repeat bg-contain bg-left md:bg-center w-full h-[407px] md:h-[488px] lg:h-[604px] md:mt-20 mt-0"
          />
          {/* Main content section */}
          {/* 485 -- 598 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerSlowVariants}
            className="flex md:absolute left-0 top-0 flex-col w-full md:w-[485px] lg:w-[598px] z-10"
          >
            <header className="inline-flex flex-col items-start gap-6 w-full">
              <motion.div
                variants={fadeInUpVariants}
                className="flex w-full flex-col items-start gap-4 relative"
              >
                <div className="flex flex-col items-start relative">
                  <div className="section-title">
                    {getTransText("sectionTitle")}
                  </div>
                  <h1
                    id="about-heading"
                    className={`rtl:${dinNextBold.className} section-heading text-start`}
                  >
                    {getTransText("heading")}
                  </h1>
                </div>
                <p className="section-description text-start">
                  {getTransText("description")}
                </p>
              </motion.div>
              <motion.div variants={fadeInUpVariants}>
                <Button
                  type="submit"
                  className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800"
                >
                  {getTransText("getStartedButton")}
                </Button>
              </motion.div>
            </header>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
