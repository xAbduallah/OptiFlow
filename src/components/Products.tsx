"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import sales from "../../public/images/landing/products/cards/sales.svg";
import hrServices from "../../public/images/landing/products/cards/hrServices.svg";
import KSACompliance from "../../public/images/landing/products/cards/KSACompliance.svg";

import salesIcon from "../../public/images/landing/products/icons/sales.svg";
import hrServicesIcon from "../../public/images/landing/products/icons/hrServices.svg";
import KSAComplianceIcon from "../../public/images/landing/products/icons/KSACompliance.svg";
import ProductCard from "./Cards/ProductCard";
import {
  fadeInUpVariants,
  fadeInLeftVariants,
  fadeInRightVariants,
} from "@/lib/motion-variants";

export default function Products() {
  const getTransText = useTranslations("Products");

  return (
    <section className="main-section flex flex-col items-center gap-10 lg:gap-[40px]">
      <motion.header
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUpVariants}
        className="flex flex-col items-center gap-4 w-full"
      >
        <div className="flex flex-col items-center text-center gap-1">
          <p className="section-title">{getTransText("sectionTitle")}</p>
          <h2 className="section-heading">{getTransText("heading")}</h2>
          <p className="section-description">{getTransText("description")}</p>
        </div>
      </motion.header>

      <div className="flex flex-col gap-6 lg:gap-10 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInLeftVariants}
        >
          <ProductCard
            header={getTransText(`products.salesForce.header`)}
            title={getTransText(`products.salesForce.title`)}
            description={getTransText(`products.salesForce.description`)}
            image={sales}
            icon={salesIcon}
            gradientFrom="#2A8E9E59"
            explore={true}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInRightVariants}
        >
          <ProductCard
            header={getTransText(`products.hrServices.header`)}
            title={getTransText(`products.hrServices.title`)}
            description={getTransText(`products.hrServices.description`)}
            image={hrServices}
            icon={hrServicesIcon}
            gradientFrom="#F1FFC6"
            explore={true}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInLeftVariants}
        >
          <ProductCard
            header={getTransText(`products.ksaCompliance.header`)}
            title={getTransText(`products.ksaCompliance.title`)}
            description={getTransText(`products.ksaCompliance.description`)}
            image={KSACompliance}
            icon={KSAComplianceIcon}
            gradientFrom="#E5F0FF"
            explore={true}
          />
        </motion.div>
      </div>
    </section>
  );
}
