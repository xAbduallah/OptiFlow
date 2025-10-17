"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  fadeInUpVariants,
  fadeInLeftVariants,
  fadeInRightVariants,
} from "@/lib/motion-variants";
import { Feature, FeatureCard } from "../Cards/FeatureCard";

type FeaturesProps = { id?: string };
const Features: React.FC<FeaturesProps> = ({ id: _id }) => {
  const getTransText = useTranslations("FrappePage.Features");

  const features: Feature[] = [
    {
      key: "appointmentScheduling",
      image: "/images/frappe/features/appointment.svg",
      imageWidth: { sm: 343, md: 423.92, lg: 423.92 },
      imageHeight: { sm: 242.73, md: 300, lg: 300 },
      layout: "text-image",
    },
    {
      key: "patientManagement",
      image: "/images/frappe/features/patient.svg",
      imageWidth: { sm: 343, md: 500, lg: 597 },
      imageHeight: { sm: 159.72, md: 232.83, lg: 278 },
      layout: "image-text",
    },
    {
      key: "laboratoryManagement",
      image: "/images/frappe/features/laboratory.svg",
      imageWidth: { sm: 343, md: 500, lg: 582 },
      imageHeight: { sm: 170.32, md: 248.28, lg: 289 },
      layout: "text-image",
    },
    {
      key: "pharmacyInventory",
      image: "/images/frappe/features/pharmacy.svg",
      imageWidth: { sm: 343, md: 500, lg: 597 },
      imageHeight: { sm: 159.72, md: 232.83, lg: 278 },
      layout: "image-text",
    },
    {
      key: "billingAccounting",
      image: "/images/frappe/features/billing.svg",
      imageWidth: { sm: 343, md: 500, lg: 582 },
      imageHeight: { sm: 170.32, md: 248.28, lg: 289 },
      layout: "text-image",
    },
    {
      key: "reportingAnalytics",
      image: "/images/frappe/features/reporting.svg",
      imageWidth: { sm: 343, md: 500, lg: 597 },
      imageHeight: { sm: 159.72, md: 232.83, lg: 278 },
      layout: "image-text",
    },
  ];

  return (
    <section className="main-section flex justify-center items-center">
      <div className="flex flex-col items-center gap-10 md:gap-[60px] lg:gap-[60px] w-full">
        {/* Header Section */}
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUpVariants}
          className="flex flex-col items-center gap-1 md:gap-2 lg:gap-4 w-full max-w-[343px] md:max-w-[680px] lg:max-w-[1250px]"
        >
          <div className="flex flex-col items-center gap-1 w-full">
            <h3 className="section-title">{getTransText("sectionTitle")}</h3>
            <h2 className="section-heading">{getTransText("heading")}</h2>
          </div>
          <p className="section-description text-center max-w-full md:max-w-[680px] lg:max-w-[834px]">
            {getTransText("description")}
          </p>
        </motion.header>

        {/* Features List */}
        <div className="flex flex-col gap-10 md:gap-[60px] lg:gap-[80px] w-full max-w-[343px] md:max-w-[653px] lg:max-w-[1268px]">
          {features.map((feature) => (
            <motion.div
              key={feature.key}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={
                feature.layout === "text-image"
                  ? fadeInLeftVariants
                  : fadeInRightVariants
              }
            >
              <FeatureCard
                feature={feature}
                title={getTransText(`features.${feature.key}.title`)}
                description={getTransText(
                  `features.${feature.key}.description`
                )}
                goalsTitle={getTransText(`features.${feature.key}.goalsTitle`)}
                goals={getTransText(`features.${feature.key}.goals`)}
                importanceTitle={getTransText(
                  `features.${feature.key}.importanceTitle`
                )}
                importance={getTransText(`features.${feature.key}.importance`)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
