"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  fadeInUpVariants,
  fadeInLeftVariants,
  fadeInRightVariants,
  containerVariants,
} from "@/lib/motion-variants";

interface Feature {
  key: string;
  image: string;
  width: number;
  widthLg: number;
  size: number;
}
interface FeatureCardProps {
  feature: Feature;
  title: string;
  description: string;
  variant: "large" | "mobile";
  index?: number;
}

const AppFeature: React.FC = () => {
  const t = useTranslations("ProductsPage.appFeature");

  const features: Feature[] = [
    {
      key: "liveTracking",
      image: "/images/products/live-tracking.svg",
      width: 172,
      widthLg: 212,
      size: 506,
    },
    {
      key: "routeOptimization",
      image: "/images/products/route-optimization.svg",
      width: 200,
      widthLg: 340,
      size: 719,
    },
    {
      key: "customerVerification",
      image: "/images/products/customer-verification.svg",
      width: 149,
      widthLg: 231,
      size: 612,
    },
    {
      key: "visitScheduling",
      image: "/images/products/visit-scheduling.svg",
      width: 134,
      widthLg: 236,
      size: 612,
    },
    {
      key: "salesDocuments",
      image: "/images/products/sales-documents.svg",
      width: 237,
      widthLg: 341,
      size: 719,
    },
    {
      key: "stockPricelist",
      image: "/images/products/stock-pricelist.svg",
      width: 132,
      widthLg: 280,
      size: 506,
    },
    {
      key: "customerContact",
      image: "/images/products/customer-contact.svg",
      width: 180,
      widthLg: 293,
      size: 612,
    },
    {
      key: "salespersonDashboard",
      image: "/images/products/salesperson-dashboard.svg",
      width: 186,
      widthLg: 268,
      size: 612,
    },
    {
      key: "salesTargets",
      image: "/images/products/sales-targets.svg",
      width: 150,
      widthLg: 227,
      size: 506,
    },
    {
      key: "advancedAnalytics",
      image: "/images/products/advanced-analytics.svg",
      width: 202,
      widthLg: 400,
      size: 719,
    },
    {
      key: "offlineSyncing",
      image: "/images/products/offline-syncing.svg",
      width: 180,
      widthLg: 254,
      size: 506,
    },
    {
      key: "accessibilityCustomization",
      image: "/images/products/accessibility-customization.svg",
      width: 228,
      widthLg: 350,
      size: 719,
    },
  ];

  return (
    <section className="main-section">
      {/* Header Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUpVariants}
        className="flex flex-col items-center gap-4 mb-10 px-4"
      >
        <h3 className="text-[#0F0E2C] text-center font-semibold text-[12px] md:text-[14px] lg:text-[14px] leading-[1.366] uppercase tracking-wide">
          {t("sectionTitle")}
        </h3>
        <h2 className="text-[#191919] text-center font-normal text-[28px] md:text-[32px] lg:text-[40px] rtl:lg:text-[60px] leading-[1.14] md:leading-[1.5] lg:leading-[1.2] tracking-[-0.03em]">
          {t("heading")}
        </h2>
        <p className="text-[#4C4C4C] text-center font-normal text-[12px] md:text-[14px] lg:text-[16px] leading-[1.366] capitalize max-w-[341px] md:max-w-[654px] lg:max-w-[888px]">
          {t("description")}
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="flex flex-col gap-4 md:gap-6 lg:gap-6 px-4 md:px-8 lg:px-0">
        {/* Large Screen: 2 columns */}
        <div className="hidden lg:flex lg:flex-col gap-y-6">
          {/* Create rows of 2 cards */}
          {Array.from(
            { length: Math.ceil(features.length / 2) },
            (_, rowIndex) => (
              <motion.div
                key={rowIndex}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
                className="flex gap-6"
              >
                {features
                  .slice(rowIndex * 2, rowIndex * 2 + 2)
                  .map((feature, cardIndex) => (
                    <motion.div
                      key={feature.key}
                      variants={
                        cardIndex === 0
                          ? fadeInLeftVariants
                          : fadeInRightVariants
                      }
                    >
                      <FeatureCard
                        feature={feature}
                        title={t(`features.${feature.key}.title`)}
                        description={t(`features.${feature.key}.description`)}
                        variant="large"
                        index={rowIndex * 2 + cardIndex}
                      />
                    </motion.div>
                  ))}
              </motion.div>
            )
          )}
        </div>

        {/* Medium and Small Screen: 1 column */}
        <div className="flex flex-col gap-4 md:gap-6 lg:hidden">
          {features.map((feature, index) => {
            // Alternate animations for each card
            const cardVariants =
              index % 2 === 0 ? fadeInLeftVariants : fadeInRightVariants;

            return (
              <motion.div
                key={feature.key}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <FeatureCard
                  feature={feature}
                  title={t(`features.${feature.key}.title`)}
                  description={t(`features.${feature.key}.description`)}
                  variant="mobile"
                  index={index}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  feature,
  title,
  description,
  variant,
}) => {
  return (
    <div
      className="flex items-start flex-col md:flex-row justify-end border-1 rounded-[10px] lg:rounded-[15px]
                bg-gradient-to-br from-white to-[#EBEBEB]/80
                max-h-[300px] md:max-h-[200px] lg:max-h-[281px] overflow-hidden"
      style={{
        width: `${variant === "large" ? feature.size + "px" : "100%"}`,
      }}
    >
      <div className="w-full md:w-[53%] flex flex-col gap-2 ltr:p-[32px_0px_0px_32px] rtl:p-[32px_32px_0px_0px]">
        <div className="w-full max-w-[281px] md:max-w-[381px] lg:max-w-[245px]">
          <h3 className="font-bold text-black capitalize leading-[1.366] text-[20px] lg:text-[24px]">
            {title}
          </h3>
          <p className="text-[#4C4C4C] capitalize leading-[1.366] tracking-[-0.02em] text-[14px] lg:text-[16px]">
            {description}
          </p>
        </div>
      </div>
      <div className="w-full md:w-[47%] flex justify-end">
        <img
          src={feature.image}
          alt={title}
          className="object-cover object-right"
          style={{
            filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.05))",
            width: `${
              (variant === "large" ? feature.widthLg : feature.width) + "px"
            }`,
          }}
        />
      </div>
    </div>
  );
};

export default AppFeature;
