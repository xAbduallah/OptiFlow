"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft, SearchX } from "lucide-react";
import { dinNextRegular, manrope } from "@/components/ui/fonts";

interface NotFoundProps {
  locale?: string;
  translations?: {
    heading: string;
    description: string;
    goHome: string;
    goBack: string;
  };
}

export default function NotFound({
  locale = "en",
  translations,
}: NotFoundProps) {
  const defaultTranslations =
    locale === "ar"
      ? {
          heading: "الصفحة غير موجودة",
          description: "عذراً! الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
          goHome: "العودة للرئيسية",
          goBack: "رجوع",
        }
      : {
          heading: "Page Not Found",
          description:
            "Oops! The page you're looking for doesn't exist or has been moved.",
          goHome: "Back to Home",
          goBack: "Go Back",
        };

  const text = translations || defaultTranslations;
  const isArabic = locale === "ar";
  const fontClass = isArabic ? dinNextRegular.className : manrope.className;
  const homeLink = `/${locale}`;

  return (
    <div
      className={fontClass}
      style={{
        minHeight: "95vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #f5f5f5 0%, #ffffff 50%, #f5f5f5 100%)",
      }}
    >
      {/* Decorative Elements */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            filter: "blur(80px)",
            opacity: 0.2,
            background: "radial-gradient(circle, #18181b 0%, transparent 70%)",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: "48rem",
          width: "100%",
          textAlign: "center",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Animated Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              padding: "2rem",
              borderRadius: "50%",
              background: "#18181b",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
            }}
          >
            <SearchX
              style={{
                width: "80px",
                height: "80px",
                color: "#ffffff",
              }}
            />
          </div>
        </motion.div>

        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1
            style={{
              fontSize: "clamp(6rem, 15vw, 9rem)",
              fontWeight: 700,
              marginBottom: "1rem",
              background: "linear-gradient(135deg, #18181b 0%, #52525b 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              lineHeight: 1,
            }}
          >
            404
          </h1>
          <div
            style={{
              fontSize: "0.875rem",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              fontWeight: 600,
              marginBottom: "0.5rem",
              color: "#71717a",
            }}
          >
            Optiflow
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ marginBottom: "2rem" }}
        >
          <h2
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              fontWeight: 700,
              marginBottom: "1rem",
              color: "#18181b",
            }}
          >
            {text.heading}
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.125rem)",
              marginBottom: "2rem",
              color: "#52525b",
              lineHeight: 1.6,
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            {text.description}
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href={homeLink}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              padding: "1rem 2rem",
              fontWeight: 500,
              transition: "all 0.3s ease",
              minWidth: "180px",
              background: "#18181b",
              color: "#ffffff",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#27272a";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#18181b";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
            }}
          >
            <Home style={{ width: "20px", height: "20px" }} />
            {text.goHome}
          </Link>
          <button
            onClick={() => window.history.back()}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              padding: "1rem 2rem",
              fontWeight: 500,
              transition: "all 0.3s ease",
              minWidth: "180px",
              background: "#ffffff",
              color: "#18181b",
              border: "2px solid #18181b",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#fafafa";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#ffffff";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <ArrowLeft style={{ width: "20px", height: "20px" }} />
            {text.goBack}
          </button>
        </motion.div>

        {/* Animated Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
            marginTop: "3rem",
          }}
        >
          {[0, 150, 300].map((delay, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 0 }}
              animate={{ y: [-10, 0, -10] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: delay / 1000,
              }}
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#18181b",
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
