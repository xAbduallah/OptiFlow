"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import CircleCheck from "../../public/images/landing/circle-check.svg";
import { dinNextBold } from "./ui/fonts";
import { Button } from "./ui/button";
import {
  containerVariants,
  fadeInUpVariants,
  fadeInRightVariants,
  scaleInVariants,
} from "@/lib/motion-variants";

const Hero: React.FC = () => {
  const getTransText = useTranslations("Hero");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Demo requested for:", email);
    setIsSubmitting(false);
  };

  return (
    <section className="main-section flex flex-col-reverse relative overflow-hidden ltr:pl-6 rtl:pr-6">
      {/* Hero image container */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInRightVariants}
        className="
        w-full block mt-6
        h-[250px] sm:h-[375px] md:h-[675px] lg:h-[800px]
        bg-[url('/images/landing/hero.png')] bg-no-repeat bg-contain bg-center
        lg:absolute lg:top-0 lg:h-full lg:w-[50%]
        lg:rtl:left-[-10%] lg:ltr:right-[-6%]
        lg:mt-0 lg:ltr:bg-right lg:rtl:bg-left"
      ></motion.div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 relative">
        {/* Content Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col w-full lg:w-2/4 max-w-[646px]"
        >
          <div className="flex flex-col gap-4">
            <motion.div
              variants={fadeInUpVariants}
              className="text-gray-900 text-[14px] md:text-[18px] lg:text-[22px]"
            >
              {getTransText("subtitle")}
            </motion.div>
            <motion.h1
              variants={fadeInUpVariants}
              className={`rtl:${dinNextBold.className} text-[#191919] text-[32px] md:text-[44px] lg:text-[60px] font-bold leading-[1.2] md:leading-[80px] tracking-[-1.8px] capitalize max-md:max-w-full`}
            >
              {getTransText("title")}
            </motion.h1>
            <motion.p
              variants={fadeInUpVariants}
              className={`text-[#4C4C4C] text-[14px] md:text-[18px] lg:text-[22px] font-normal md:leading-[35px] tracking-[-0.02em] max-md:max-w-full`}
            >
              {getTransText("description")}
            </motion.p>

            {/* Form Section */}
            <motion.form
              variants={fadeInUpVariants}
              onSubmit={handleSubmit}
              className="shadow-[-24px_24px_50px_0_rgba(0,0,0,0.07)] flex min-h-[100px] w-full max-w-[622px] flex-col justify-center bg-neutral-100 px-4 py-[16px] border-[0.5px] border-solid border-[#F2F2F2]"
            >
              <div className="flex w-full items-center gap-4 lg:gap-[40px] justify-between flex-wrap">
                <div className="flex-1 min-w-60">
                  <label
                    htmlFor="email-input"
                    className={`text-[#808080] text-bases capitalize block`}
                  >
                    {getTransText("formLabel")}
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={getTransText("emailPlaceholder")}
                    className="text-[#333] text-xl md:text-2xl mt-1 bg-transparent border-none outline-none w-full font-semibold"
                    required
                    aria-describedby="email-description"
                  />
                  <div id="email-description" className="sr-only">
                    {getTransText("emailDescription")}
                  </div>
                </div>

                {/* 159, 172 */}
                <Button
                  type="submit"
                  className="w-full md:w-[159px] lg:w-[172px] px-6 py-4 bg-zinc-900 hover:bg-zinc-800 rounded-[0px]"
                >
                  {isSubmitting
                    ? getTransText("submittingButton")
                    : getTransText("submitButton")}
                </Button>
              </div>
            </motion.form>

            {/* Feature Points */}
            <motion.div
              variants={fadeInUpVariants}
              className="flex items-center gap-3 lg:gap-10 text-[14px] md:text-[17px] text-[rgba(117,112,149,1)] font-normal tracking-[-0.34px] leading-[30px] flex-wrap"
            >
              <motion.div
                variants={scaleInVariants}
                className="flex items-center gap-2"
              >
                <Image
                  src={CircleCheck}
                  alt=""
                  className="aspect-[1] object-contain w-[18px] rounded-[9px]"
                  role="presentation"
                />
                {getTransText("features.insights")}
              </motion.div>

              <motion.div
                variants={scaleInVariants}
                className="flex items-center gap-2"
              >
                <Image
                  src={CircleCheck}
                  alt=""
                  className="aspect-[1] object-contain w-[18px] rounded-[9px]"
                  role="presentation"
                />
                {getTransText("features.automation")}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
