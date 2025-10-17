"use client";
import { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  fadeInUpVariants,
  fadeInLeftVariants,
  fadeInRightVariants,
} from "@/lib/motion-variants";

// Import logos
import veelaLogo from "../../../public/images/logos/Veela.png";
import slktvesLogo from "../../../public/images/logos/slktves2.png";
import vitalrootslogo from "../../../public/images/logos/VITALROOTS-g.png";
import nourishLogo from "../../../public/images/logos/Nourish.png";
import clinifixLogo from "../../../public/images/logos/Clinifix.png";

// Import background images
import veelaimg from "../../../public/images/software-service/Veela.png";
import slktves from "../../../public/images/software-service/Group-1000000832.png";
import vitalrootsimg from "../../../public/images/software-service/VITALROOTS.png";
import nourishimg from "../../../public/images/software-service/Nourish.png";
import clinifiximg from "../../../public/images/software-service/Clinifix.png";
import ProjectCard from "../Cards/ProductCard";

interface TechTag {
  text: string;
  bg: string;
  textColor: string;
}

interface Project {
  id: number;
  techTags: TechTag[];
  logo: StaticImageData;
  backgroundImage: StaticImageData;
  translationKey: string;
  gradientFrom: string;
  titleStyle: {
    lg: string;
    md: string;
    sm: string;
  };
}

const projects: Project[] = [
  {
    id: 1,
    techTags: [
      { text: "React Next", bg: "bg-[#E6E6E6]", textColor: "text-[#000000]" },
      { text: "Figma", bg: "bg-[#EBEBFF]", textColor: "text-[#01014A]" },
      { text: "My SQL", bg: "bg-[#FFF7EB]", textColor: "text-[#684103]" },
      { text: "Laravel", bg: "bg-[#FFEBEB]", textColor: "text-[#6F0101]" },
      { text: "Filament", bg: "bg-[#FFF2EB]", textColor: "text-[#693202]" },
    ],
    logo: veelaLogo,
    backgroundImage: veelaimg,
    translationKey: "veela",
    gradientFrom: "#DBBBBB",
    titleStyle: {
      lg: "text-[44px] font-bold leading-[48px]",
      md: "text-[28px] font-bold leading-10",
      sm: "text-xl font-bold leading-[40px]",
    },
  },
  {
    id: 2,
    techTags: [
      { text: "React Next", bg: "bg-[#E6E6E6]", textColor: "text-[#000000]" },
      { text: "Figma", bg: "bg-[#EBEBFF]", textColor: "text-[#01014A]" },
      { text: "My SQL", bg: "bg-[#FFF7EB]", textColor: "text-[#684103]" },
      { text: "Laravel", bg: "bg-[#FFEBEB]", textColor: "text-[#6F0101]" },
      { text: "Filament", bg: "bg-[#FFF2EB]", textColor: "text-[#693202]" },
    ],
    logo: slktvesLogo,
    backgroundImage: slktves,
    translationKey: "slktves",
    gradientFrom: "#CCCDCD",
    titleStyle: {
      lg: "text-[44px] font-bold leading-[48px]",
      md: "text-[28px] font-bold leading-10 uppercase",
      sm: "text-xl font-bold leading-[40px] uppercase",
    },
  },
  {
    id: 3,
    techTags: [
      { text: "WordPress", bg: "bg-[#DBF4FF]", textColor: "text-[#185E7E]" },
      { text: "Figma", bg: "bg-[#EBEBFF]", textColor: "text-[#01014A]" },
      {
        text: "Woo Commerce",
        bg: "bg-[#FAEBFF]",
        textColor: "text-[#700292]",
      },
      { text: "Avada", bg: "bg-[#E4FFF3]", textColor: "text-[#016F3D]" },
    ],
    logo: vitalrootslogo,
    backgroundImage: vitalrootsimg,
    translationKey: "vitalRoots",
    gradientFrom: "#32564C",
    titleStyle: {
      lg: "text-[44px] font-normal leading-[48px] capitalize font-serif",
      md: "text-[28px] font-bold leading-10 uppercase",
      sm: "text-xl font-extrabold leading-[40px] uppercase",
    },
  },
  {
    id: 4,
    techTags: [
      { text: "Shopify", bg: "bg-[#DFFFEC]", textColor: "text-[#01672A]" },
      { text: "Figma", bg: "bg-[#EBEBFF]", textColor: "text-[#01014A]" },
    ],
    logo: nourishLogo,
    backgroundImage: nourishimg,
    translationKey: "nourish",
    gradientFrom: "#FAE9DF",
    titleStyle: {
      lg: "text-[44px] font-normal leading-[48px] capitalize font-serif",
      md: "text-[28px] font-bold leading-10 uppercase",
      sm: "text-xl font-bold leading-[40px] uppercase",
    },
  },
  {
    id: 5,
    techTags: [
      { text: "React Next", bg: "bg-[#E6E6E6]", textColor: "text-[#000000]" },
      { text: "Figma", bg: "bg-[#EBEBFF]", textColor: "text-[#01014A]" },
      { text: "My SQL", bg: "bg-[#FFF7EB]", textColor: "text-[#684103]" },
      { text: "Laravel", bg: "bg-[#FFEBEB]", textColor: "text-[#6F0101]" },
      { text: "Filament", bg: "bg-[#FFF2EB]", textColor: "text-[#693202]" },
    ],
    logo: clinifixLogo,
    backgroundImage: clinifiximg,
    translationKey: "clinifix",
    gradientFrom: "#B9C5C2",
    titleStyle: {
      lg: "text-[44px] font-normal leading-[48px] capitalize font-serif",
      md: "text-[28px] font-normal leading-10 uppercase",
      sm: "text-xl font-normal leading-[40px] uppercase",
    },
  },
];

export default function Projects() {
  const getTransText = useTranslations("SoftwarePage.projects");

  return (
    <section className="main-section flex flex-col items-center gap-10 lg:gap-[40px]">
      {/* Header Section */}
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

      {/* Projects Grid */}
      <div className="flex flex-col gap-6 lg:gap-10 w-full">
        {projects.map((project, index) => {
          // Alternate animations for each project card
          const cardVariants =
            index % 2 === 0 ? fadeInLeftVariants : fadeInRightVariants;

          return (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <ProjectCard
                title={getTransText(`items.${project.translationKey}.title`)}
                description={getTransText(
                  `items.${project.translationKey}.description`
                )}
                image={project.backgroundImage}
                logo={project.logo}
                techTags={project.techTags}
                gradientFrom={project.gradientFrom}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
