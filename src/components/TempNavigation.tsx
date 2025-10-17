"use client";

import { useState } from "react";
import { Box, House, LayoutGrid, Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";

export default function TempNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const sidebarVariants: Variants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <>
      {/* Toggle Button - Fixed on right side */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            onClick={toggleSidebar}
            className="fixed top-1/2 right-4 -translate-y-1/2 z-40 bg-gradient-to-br from-blue-600 to-purple-600 text-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle navigation menu"
          >
            <Menu className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="fixed top-1/2 -translate-y-1/2 right-5 w-40 bg-white/95 backdrop-blur-md shadow-2xl z-50 rounded-3xl overflow-hidden border border-gray-200"
          >
            {/* Close button */}
            <div className="flex justify-center p-4 border-b border-gray-100">
              <motion.button
                onClick={closeSidebar}
                className="p-2 hover:bg-red-50 rounded-xl transition-colors duration-200 border border-gray-200 hover:border-red-300"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6 text-gray-600 hover:text-red-600 transition-colors duration-200" />
              </motion.button>
            </div>

            {/* Navigation Links */}
            <div className="py-4 px-3 flex flex-col gap-3">
              <Link href="/" onClick={closeSidebar}>
                <motion.div
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex flex-col items-center justify-center gap-2 p-4 bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-2xl cursor-pointer transition-all duration-300 border border-blue-200/50"
                >
                  <div className="p-2.5 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <House className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-xs font-semibold text-gray-700 text-center leading-tight">
                    Landing
                  </span>
                </motion.div>
              </Link>

              <Link href="/software-service" onClick={closeSidebar}>
                <motion.div
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex flex-col items-center justify-center gap-2 p-4 bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 rounded-2xl cursor-pointer transition-all duration-300 border border-purple-200/50"
                >
                  <div className="p-2.5 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <LayoutGrid className="w-6 h-6 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-xs font-semibold text-gray-700 text-center leading-tight">
                    Software
                  </span>
                </motion.div>
              </Link>

              <Link href="/products" onClick={closeSidebar}>
                <motion.div
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex flex-col items-center justify-center gap-2 p-4 bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-2xl cursor-pointer transition-all duration-300 border border-green-200/50"
                >
                  <div className="p-2.5 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <Box className="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-xs font-semibold text-gray-700 text-center leading-tight">
                    Products
                  </span>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
