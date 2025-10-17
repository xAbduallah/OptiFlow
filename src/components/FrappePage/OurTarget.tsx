"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import accurateIcon from "../../../public/images/frappe/accurate.png";
import enhancedIcon from "../../../public/images/frappe/enhanced.png";
import improvedIcon from "../../../public/images/frappe/improved.png";
import streamlinedIcon from "../../../public/images/frappe/streamlined.png";
import { ServiceCard } from "../Cards/ServiceCard";
import {
  fadeInLeftVariants,
  fadeInRightVariants,
  containerVariants,
  fadeInUpVariants,
} from "@/lib/motion-variants";

type OurTargetProps = { id?: string };
const OurTarget: React.FC<OurTargetProps> = ({ id: _id }) => {
  const getTransText = useTranslations("FrappePage.OurTarget");
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
            <div className="flex flex-col items-start gap-4 w-full max-w-full md:max-w-[550px]">
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
              id="streamlined-patient-experience"
              icon={streamlinedIcon}
              title={getTransText(
                "services.streamlinedPatientExperience.title"
              )}
              description={getTransText(
                "services.streamlinedPatientExperience.description"
              )}
              featured
              moreInfo={false}
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
              id="accurate-centralized-data"
              icon={accurateIcon}
              title={getTransText("services.accurateCentralizedData.title")}
              description={getTransText(
                "services.accurateCentralizedData.description"
              )}
              moreInfo={false}
            />
          </motion.div>
          <motion.div variants={fadeInUpVariants} className="w-full lg:flex-1">
            <ServiceCard
              id="improved-operational-efficiency"
              icon={improvedIcon}
              title={getTransText(
                "services.improvedOperationalEfficiency.title"
              )}
              description={getTransText(
                "services.improvedOperationalEfficiency.description"
              )}
              moreInfo={false}
            />
          </motion.div>
          <motion.div variants={fadeInUpVariants} className="w-full lg:flex-1">
            <ServiceCard
              id="enhanced-financial-control"
              icon={enhancedIcon}
              title={getTransText("services.enhancedFinancialControl.title")}
              description={getTransText(
                "services.enhancedFinancialControl.description"
              )}
              moreInfo={false}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurTarget;
