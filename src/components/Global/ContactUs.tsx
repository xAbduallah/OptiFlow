"use client";
import React from "react";
import { motion } from "framer-motion";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import {
  fadeInLeftVariants,
  fadeInRightVariants,
  containerVariants,
  fadeInUpVariants,
} from "@/lib/motion-variants";

export default function ContactUs() {
  const getTransText = useTranslations("Global.ContactUs");
  return (
    <section
      id="contact-us"
      className="main-section flex flex-col lg:flex-row justify-between gap-8 lg:gap-[120px] mb-0"
    >
      {/* Left Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInLeftVariants}
        className="flex flex-col gap-4 max-w-[640px] items-start"
      >
        <div className="flex flex-col gap-3 lg:max-w-[569px]">
          <p className="section-title">{getTransText("title")}</p>
          <h2 className="section-heading font-semibold lg:leading-[60px] lg:tracking-[-0.037em] lg:text-[50px]">
            {getTransText("heading")}
          </h2>
        </div>
        <p className="section-description whitespace-pre-line">
          {getTransText("description")}
        </p>
      </motion.div>

      {/* Right Form */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="flex flex-col gap-10 w-full lg:w-[504px] md:min-w-[404px]"
      >
        <motion.div
          variants={fadeInRightVariants}
          className="flex flex-col gap-4 lg:gap-[16px]"
        >
          <Input
            type="email"
            placeholder={getTransText("emailPlaceholder")}
            className="h-[60px] px-6 bg-[#FAFAFA] border-[#808080]/50 text-[#4C4C4C] text-base font-medium leading-[1.875] tracking-[-0.02em] placeholder:text-[#4C4C4C]"
          />
          <Input
            type="text"
            placeholder={getTransText("companyPlaceholder")}
            className="h-[60px] px-6 bg-[#FAFAFA] border-[#808080]/50 text-[#4C4C4C] text-base font-medium leading-[1.875] tracking-[-0.02em] placeholder:text-[#4C4C4C]"
          />
          <Input
            type="text"
            placeholder={getTransText("phonePlaceholder")}
            className="h-[60px] px-6 bg-[#FAFAFA] border-[#808080]/50 text-[#4C4C4C] text-base font-medium leading-[1.875] tracking-[-0.02em] placeholder:text-[#4C4C4C]"
          />
        </motion.div>
        <motion.div variants={fadeInUpVariants}>
          <Button
            type="submit"
            className="w-full h-[60px] bg-[#0F0E2C] hover:bg-[#0F0E2C]/90 text-white text-lg font-semibold uppercase leading-[1.67]"
          >
            {getTransText("submitButton")}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
