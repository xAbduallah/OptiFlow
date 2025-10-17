"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import hostingIcon from "../../../public/images/landing/services/hosting.png";
import automationFlowIcon from "../../../public/images/landing/services/automationFlow.png";
import customDevelopmentIcon from "../../../public/images/landing/services/customDevelopment.png";
import integrationServiceIcon from "../../../public/images/landing/services/integrationService.png";
import { ServiceCard } from "../Cards/ServiceCard";
import {
  fadeInLeftVariants,
  fadeInRightVariants,
  containerVariants,
  fadeInUpVariants,
} from "@/lib/motion-variants";

const Service: React.FC = () => {
  const getTransText = useTranslations("LandingPage.Services");
  return (
    <section className="main-section flex justify-center items-center">
      <div className="flex flex-col items-start gap-10 max-md:w-full max-md:max-w-[900px]">
        <div className="flex max-lg:flex-col justify-between items-start w-full gap-6">
          <motion.header
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
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
            </div>
          </motion.header>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRightVariants}
          >
            <ServiceCard
              id="automation-flow"
              icon={automationFlowIcon}
              title={getTransText("services.automationFlow.title")}
              description={getTransText("services.automationFlow.description")}
              featured
            />
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="flex max-lg:flex-col rtl:flex-row-reverse items-center lg:items-stretch gap-6 w-full max-md:flex-wrap max-md:justify-center"
        >
          <motion.div variants={fadeInUpVariants} className="w-full lg:flex-1">
            <ServiceCard
              id="integration-service"
              icon={integrationServiceIcon}
              title={getTransText("services.integrationService.title")}
              description={getTransText(
                "services.integrationService.description"
              )}
            />
          </motion.div>
          <motion.div variants={fadeInUpVariants} className="w-full lg:flex-1">
            <ServiceCard
              id="custom-development"
              icon={customDevelopmentIcon}
              title={getTransText("services.customDevelopment.title")}
              description={getTransText(
                "services.customDevelopment.description"
              )}
            />
          </motion.div>
          <motion.div variants={fadeInUpVariants} className="w-full lg:flex-1">
            <ServiceCard
              id="hosting-and-development"
              icon={hostingIcon}
              title={getTransText("services.hostingDevelopment.title")}
              description={getTransText(
                "services.hostingDevelopment.description"
              )}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
