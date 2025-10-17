"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  fadeInUpVariants,
  modalVariants,
  overlayVariants,
  scaleInVariants,
  slideInBottomVariants,
} from "@/lib/motion-variants";

interface DemoProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormValues {
  name: string;
  email: string;
  phone: string;
  company: string;
  services: string;
}

export default function Demo({ isOpen, onClose }: DemoProps) {
  const t = useTranslations("Global.Demo");

  // Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(4, "Name must be at least 2 characters")
      .max(50, "Name must be less than 50 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(
        /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,
        "Invalid phone number"
      )
      .required("Phone number is required"),
    company: Yup.string()
      .min(2, "Company name must be at least 2 characters")
      .required("Company name is required"),
    services: Yup.string().required("Please select a service"),
  });

  // Formik Hook
  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      services: "",
    },
    validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      // Handle form submission
      console.log("Form submitted:", values);

      // Simulate API call
      setTimeout(() => {
        alert("Demo request submitted successfully!");
        resetForm();
        setSubmitting(false);
        onClose();
      }, 1000);
    },
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 pointer-events-none">
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
              className="relative w-full max-w-[250px] md:max-w-[620px] lg:max-w-[1000px] pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Desktop & Tablet: Background with Image */}
              <div className="hidden md:block relative w-full h-[550px] lg:h-[711px] rounded-[20px] lg:rounded-[15px] overflow-hidden">
                {/* Background Images */}
                <div className="absolute inset-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center hidden lg:block"
                    style={{
                      backgroundImage:
                        "url('/images/landing/demo/demo-lg.svg')",
                    }}
                  />
                  <div
                    className="absolute inset-0 bg-cover bg-center lg:hidden"
                    style={{
                      backgroundImage:
                        "url('/images/landing/demo/demo-md.svg')",
                    }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black" />
                </div>

                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="absolute top-6 right-6 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors duration-200"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-white" />
                </motion.button>

                {/* Left Content - Desktop & Tablet */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUpVariants}
                  className="absolute bottom-10 md:bottom-[90px] lg:bottom-[120px] left-6 md:left-6 lg:left-10 z-10 max-w-[255px] lg:max-w-[457px]"
                >
                  <h2 className="text-white font-semibold text-[20px] md:text-[20px] lg:text-[32px] leading-[1.366] tracking-[-0.03em] capitalize mb-2 md:mb-2 lg:mb-3">
                    {t("heading")}
                  </h2>
                  <p className="text-[#F2F2F2] font-normal text-[10px] md:text-[10px] lg:text-[14px] leading-[1.366] lowercase">
                    {t("description")}
                  </p>
                </motion.div>

                {/* Form Card - Desktop & Tablet */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={scaleInVariants}
                  className="absolute top-[14px] md:top-[14px] lg:top-5 right-3 md:right-3 lg:right-5 bg-white rounded-[5px] p-[18px_18px_10px] md:p-[18px_18px_10px] lg:p-[24px_24px_50px] w-[300px] md:w-[300px] lg:w-[450px] max-h-[523px] md:max-h-[523px] lg:max-h-[671px]"
                >
                  <form
                    onSubmit={formik.handleSubmit}
                    className="flex flex-col gap-4 md:gap-4 lg:gap-6"
                  >
                    {/* Form Header */}
                    <div className="flex flex-col gap-[6px] md:gap-[6px] lg:gap-2">
                      <h3 className="font-bold text-[22px] md:text-[22px] lg:text-[28px] leading-[1.366] tracking-[-0.03em] capitalize text-black">
                        {t("form.title")}
                      </h3>
                      <p className="font-medium text-[10px] md:text-[10px] lg:text-[12px] leading-[1.366] lowercase text-[#808080]">
                        {t("form.subtitle")}
                      </p>
                    </div>

                    {/* Form Fields */}
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col gap-1">
                        <label className="font-semibold text-[10.66px] md:text-[10.66px] lg:text-[14px] leading-[1.366] tracking-[-0.02em] capitalize text-[#333333]">
                          {t("form.name")}
                        </label>
                        <Input
                          type="text"
                          name="name"
                          placeholder="ahmed mohamed"
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={`h-[38px] md:h-[38px] lg:h-[48px] bg-[#FAFAFA] border-[0.38px] md:border-[0.38px] lg:border-[0.5px] rounded-[3px] md:rounded-[3px] lg:rounded-[5px] text-[9px] md:text-[9px] lg:text-[12px] px-[8px] md:px-[8px] lg:px-3 ${
                            formik.touched.name && formik.errors.name
                              ? "border-red-500"
                              : "border-[#808080]"
                          }`}
                        />
                        {formik.touched.name && formik.errors.name && (
                          <p className="text-red-500 text-[10px] md:text-[12px] lg:text-[14px] mt-0.5">
                            {formik.errors.name}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="font-semibold text-[10.66px] md:text-[10.66px] lg:text-[14px] leading-[1.366] tracking-[-0.02em] capitalize text-[#333333]">
                          {t("form.email")}
                        </label>
                        <Input
                          type="email"
                          name="email"
                          placeholder="abanobwwlaes@gmail.com"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={`h-[38px] md:h-[38px] lg:h-[48px] bg-[#FAFAFA] border-[0.38px] md:border-[0.38px] lg:border-[0.5px] rounded-[3px] md:rounded-[3px] lg:rounded-[5px] text-[9px] md:text-[9px] lg:text-[12px] px-[8px] md:px-[8px] lg:px-3 ${
                            formik.touched.email && formik.errors.email
                              ? "border-red-500"
                              : "border-[#808080]"
                          }`}
                        />
                        {formik.touched.email && formik.errors.email && (
                          <p className="text-red-500 text-[10px] md:text-[12px] lg:text-[14px] mt-0.5">
                            {formik.errors.email}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="font-semibold text-[10.66px] md:text-[10.66px] lg:text-[14px] leading-[1.366] tracking-[-0.02em] capitalize text-[#333333]">
                          {t("form.phone")}
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          placeholder="+02165025626564"
                          value={formik.values.phone}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={`h-[38px] md:h-[38px] lg:h-[48px] bg-[#FAFAFA] border-[0.38px] md:border-[0.38px] lg:border-[0.5px] rounded-[3px] md:rounded-[3px] lg:rounded-[5px] text-[9px] md:text-[9px] lg:text-[12px] px-[8px] md:px-[8px] lg:px-3 ${
                            formik.touched.phone && formik.errors.phone
                              ? "border-red-500"
                              : "border-[#808080]"
                          }`}
                        />
                        {formik.touched.phone && formik.errors.phone && (
                          <p className="text-red-500 text-[10px] md:text-[12px] lg:text-[14px] mt-0.5">
                            {formik.errors.phone}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="font-semibold text-[12px] md:text-[12px] lg:text-[14px] leading-[1.366] tracking-[-0.02em] capitalize text-[#333333]">
                          {t("form.company")}
                        </label>
                        <Input
                          type="text"
                          name="company"
                          placeholder="OptiFlow Solutions"
                          value={formik.values.company}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={`h-[38px] md:h-[38px] lg:h-[48px] bg-[#FAFAFA] border-[0.38px] md:border-[0.38px] lg:border-[0.5px] rounded-[3px] md:rounded-[3px] lg:rounded-[5px] text-[9px] md:text-[9px] lg:text-[12px] px-[8px] md:px-[8px] lg:px-3 ${
                            formik.touched.company && formik.errors.company
                              ? "border-red-500"
                              : "border-[#808080]"
                          }`}
                        />
                        {formik.touched.company && formik.errors.company && (
                          <p className="text-red-500 text-[10px] md:text-[12px] lg:text-[14px] mt-0.5">
                            {formik.errors.company}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="font-semibold text-[12px] md:text-[12px] lg:text-[14px] leading-[1.366] tracking-[-0.02em] capitalize text-[#333333]">
                          {t("form.services")}
                        </label>
                        <select
                          name="services"
                          value={formik.values.services}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={`h-[38px] md:h-[38px] lg:h-[48px] bg-[#FAFAFA] border-[0.38px] md:border-[0.38px] lg:border-[0.5px] rounded-[3px] md:rounded-[3px] lg:rounded-[5px] text-[10px] md:text-[10px] lg:text-[12px] px-[8px] md:px-[8px] lg:px-3 text-[#808080] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M2.72%205.97L8%2010.7L13.28%205.97%22%20stroke%3D%22%23808080%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E')] bg-no-repeat bg-[right_8px_center] md:bg-[right_8px_center] lg:bg-[right_12px_center] ${
                            formik.touched.services && formik.errors.services
                              ? "border-red-500"
                              : "border-[#808080]"
                          }`}
                        >
                          <option value="">
                            {t("form.serviceOptions.placeholder")}
                          </option>
                          <option value="Frappe HealthCare">
                            {t("form.serviceOptions.healthcare")}
                          </option>
                          <option value="Frappe ERPNext">
                            {t("form.serviceOptions.erpnext")}
                          </option>
                          <option value="Frappe HR">
                            {t("form.serviceOptions.hr")}
                          </option>
                          <option value="Custom Development">
                            {t("form.serviceOptions.customDevelopment")}
                          </option>
                        </select>
                        {formik.touched.services && formik.errors.services && (
                          <p className="text-red-500 text-[10px] md:text-[12px] lg:text-[14px] mt-0.5">
                            {formik.errors.services}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={formik.isSubmitting}
                      className="w-full h-[38px] md:h-[38px] lg:h-[52px] bg-[#1B1C31] hover:bg-[#1B1C31]/90 text-white text-[14px] md:text-[14px] lg:text-[16px] font-medium rounded-[5px] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formik.isSubmitting ? "Submitting..." : t("form.submit")}
                    </Button>
                  </form>
                </motion.div>
              </div>

              {/* Mobile: Simple White Card */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={slideInBottomVariants}
                className="md:hidden bg-white rounded-[4.27px] p-4 w-full max-w-[250px] mx-auto max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button - Mobile */}
                <div className="flex justify-end mb-4">
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="p-1.5 hover:bg-gray-100 rounded-full transition-colors duration-200"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </motion.button>
                </div>

                <form
                  onSubmit={formik.handleSubmit}
                  className="flex flex-col gap-3"
                >
                  {/* Form Header */}
                  <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-[18px] leading-[1.366] tracking-[-0.03em] capitalize text-black">
                      {t("form.title")}
                    </h3>
                    <p className="font-medium text-[8px] leading-[1.366] lowercase text-[#808080]">
                      {t("form.subtitle")}
                    </p>
                  </div>

                  {/* Form Fields */}
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                      <label className="font-semibold text-[12px] leading-[1.366] tracking-[-0.02em] capitalize text-[#333333]">
                        {t("form.name")}
                      </label>
                      <Input
                        type="text"
                        name="name"
                        placeholder="ahmed mohamed"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`h-[34px] bg-[#FAFAFA] border-[0.32px] rounded-[3px] text-[10px] px-2 ${
                          formik.touched.name && formik.errors.name
                            ? "border-red-500"
                            : "border-[#808080]"
                        }`}
                      />
                      {formik.touched.name && formik.errors.name && (
                        <p className="text-red-500 text-[8px] mt-0.5">
                          {formik.errors.name}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="font-semibold text-[12px] leading-[1.366] tracking-[-0.02em] capitalize text-[#333333]">
                        {t("form.email")}
                      </label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="abanobwwlaes@gmail.com"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`h-[34px] bg-[#FAFAFA] border-[0.32px] rounded-[3px] text-[10px] px-2 ${
                          formik.touched.email && formik.errors.email
                            ? "border-red-500"
                            : "border-[#808080]"
                        }`}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <p className="text-red-500 text-[8px] mt-0.5">
                          {formik.errors.email}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="font-semibold text-[12px] leading-[1.366] tracking-[-0.02em] capitalize text-[#333333]">
                        {t("form.phone")}
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="+02165025626564"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`h-[34px] bg-[#FAFAFA] border-[0.32px] rounded-[3px] text-[10px] px-2 ${
                          formik.touched.phone && formik.errors.phone
                            ? "border-red-500"
                            : "border-[#808080]"
                        }`}
                      />
                      {formik.touched.phone && formik.errors.phone && (
                        <p className="text-red-500 text-[8px] mt-0.5">
                          {formik.errors.phone}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="font-semibold text-[12px] leading-[1.366] tracking-[-0.02em] capitalize text-[#333333]">
                        {t("form.company")}
                      </label>
                      <Input
                        type="text"
                        name="company"
                        placeholder="OptiFlow Solutions"
                        value={formik.values.company}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`h-[34px] bg-[#FAFAFA] border-[0.32px] rounded-[3px] text-[10px] px-2 ${
                          formik.touched.company && formik.errors.company
                            ? "border-red-500"
                            : "border-[#808080]"
                        }`}
                      />
                      {formik.touched.company && formik.errors.company && (
                        <p className="text-red-500 text-[8px] mt-0.5">
                          {formik.errors.company}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="font-semibold text-[12px] leading-[1.366] tracking-[-0.02em] capitalize text-[#333333]">
                        {t("form.services")}
                      </label>
                      <select
                        name="services"
                        value={formik.values.services}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`h-[34px] bg-[#FAFAFA] border-[0.32px] rounded-[3px] text-[10px] px-2 text-[#808080] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M2.04%204.48L6%207.73L9.96%204.48%22%20stroke%3D%22%23808080%22%20stroke-width%3D%221%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E')] bg-no-repeat bg-[right_8px_center] ${
                          formik.touched.services && formik.errors.services
                            ? "border-red-500"
                            : "border-[#808080]"
                        }`}
                      >
                        <option value="">
                          {t("form.serviceOptions.placeholder")}
                        </option>
                        <option value="Frappe HealthCare">
                          {t("form.serviceOptions.healthcare")}
                        </option>
                        <option value="Frappe ERPNext">
                          {t("form.serviceOptions.erpnext")}
                        </option>
                        <option value="Frappe HR">
                          {t("form.serviceOptions.hr")}
                        </option>
                        <option value="Custom Development">
                          {t("form.serviceOptions.customDevelopment")}
                        </option>
                      </select>
                      {formik.touched.services && formik.errors.services && (
                        <p className="text-red-500 text-[8px] mt-0.5">
                          {formik.errors.services}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className="w-full h-[34px] bg-[#1B1C31] hover:bg-[#1B1C31]/90 text-white text-[12px] font-medium rounded-[4.27px] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formik.isSubmitting ? "Submitting..." : t("form.submit")}
                  </Button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
