"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import data2Icon from "../../../public/images/software-service/data-2.png";
import html5Icon from "../../../public/images/software-service/html-5.png";
import penToolIcon from "../../../public/images/software-service/pen-tool.png";
import mobileProgrammingIcon from "../../../public/images/software-service/mobile-programming.png";
import { ServiceCard } from "../Cards/ServiceCard";
import { Button } from "../ui/button";
import {
  fadeInLeftVariants,
  fadeInRightVariants,
  containerVariants,
  fadeInUpVariants,
  scaleInVariants,
} from "@/lib/motion-variants";

const Service: React.FC = () => {
  const getTransText = useTranslations("SoftwarePage.service");
  return (
    <section className="main-section flex justify-center items-center">
      <div className="flex flex-col items-start gap-10 max-md:w-full max-md:max-w-[900px]">
        <div className="flex max-lg:flex-col justify-between items-start w-full gap-6">
          <motion.header
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeftVariants}
            className="flex w-full max:lg-w-2/4 flex-col items-start gap-6 max-md:w-full"
          >
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="flex flex-col items-start gap-1 w-full">
                <div className="section-title">
                  {getTransText("sectionTitle")}
                </div>
                <h1 className="section-heading">{getTransText("heading")}</h1>
              </div>
              <p className="section-description">
                {getTransText("description")}
              </p>
              <Button className="bg-black px-10 py-3 text-xl font-medium text-white max-sm:text-sm">
                {getTransText("ctaButton")}
              </Button>
            </div>
          </motion.header>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRightVariants}
          >
            <ServiceCard
              id="backend-integration"
              icon={data2Icon}
              title={getTransText("services.backendIntegration.title")}
              description={getTransText(
                "services.backendIntegration.description"
              )}
              featured
            />
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="flex max-lg:flex-col items-center gap-6 w-full lg:items-stretch max-md:flex-wrap max-md:justify-center"
        >
          <motion.div variants={fadeInUpVariants} className="w-full lg:flex-1">
            <ServiceCard
              id="frontend"
              icon={html5Icon}
              title={getTransText("services.frontend.title")}
              description={getTransText("services.frontend.description")}
            />
          </motion.div>
          <motion.div variants={scaleInVariants} className="w-full lg:flex-1">
            <ServiceCard
              id="mobile-app"
              icon={mobileProgrammingIcon}
              title={getTransText("services.mobileApp.title")}
              description={getTransText("services.mobileApp.description")}
            />
          </motion.div>
          <motion.div variants={fadeInUpVariants} className="w-full lg:flex-1">
            <ServiceCard
              id="ui-ux-design"
              icon={penToolIcon}
              title={getTransText("services.uiUxDesign.title")}
              description={getTransText("services.uiUxDesign.description")}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
