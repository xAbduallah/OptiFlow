import localFont from "next/font/local";
import { Inria_Serif, Manrope } from "next/font/google";

export const inriaSerif = Inria_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  variable: "--font-inria",
});
export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal"],
  variable: "--font-instrument",
});

export const dinNextLight = localFont({
  src: "../../../public/fonts/DINNextLTArabicLight.ttf",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const dinNextRegular = localFont({
  src: "../../../public/fonts/DINNextLTArabicRegular.ttf",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const dinNextBold = localFont({
  src: "../../../public/fonts/DINNextLTArabicBold.ttf",
  weight: "700",
  style: "normal",
  display: "swap",
});

// import { manrope } from './components/ui/fonts.tsx';
// manrope.className
