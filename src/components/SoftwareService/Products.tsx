"use client";
import { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";

// Import logos
import veelaLogo from "../../../public/images/logos/Veela.png";
import slktvesLogo from "../../../public/images/logos/slktves2.png";
import vitalrootslogo from "../../../public/images/logos/VITALROOTS-g.png";
import nourishLogo from "../../../public/images/logos/Nourish.png";
import clinifixLogo from "../../../public/images/logos/Clinifix.png";

// Import background images
import veelaimg from "../../../public/images/software-service/Veela.png";
import slktves from "../../../public/images/software-service/Group-1000000832.png";
import vitalrootsimg from "../../../public/images/software-service/VITALROOTS.svg";
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
  const getTransText = useTranslations("SoftwareService.projects");

  return (
    <section className="main-section flex-col items-end gap-10 lg:max-w-[1250px] lg:gap-10">
      {/* Header Section */}
      <div className="flex w-full flex-col items-center gap-2 md:mb-0 md:gap-2 lg:mb-0 lg:gap-4">
        <h3 className="text-center text-xs font-semibold uppercase tracking-wide text-[#0F0E2C] md:text-sm lg:text-sm">
          {getTransText("sectionTitle")}
        </h3>
        <h2 className="max-w-[340px] text-center text-2xl font-normal leading-[28px] tracking-tight text-[#191919] md:max-w-none md:text-[32px] md:leading-[48px] lg:text-[40px] lg:leading-[48px]">
          {getTransText("heading")}
        </h2>
        <p className="max-w-[343px] text-center text-xs capitalize leading-[16.4px] text-[#4C4C4C] md:max-w-[664px] md:text-sm md:leading-[19.1px] lg:max-w-[980px] lg:text-base lg:leading-[21.9px] mb-6">
          {getTransText("description")}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid w-full grid-cols-1 gap-6 md:gap-10 lg:gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={getTransText(`items.${project.translationKey}.title`)}
            description={getTransText(
              `items.${project.translationKey}.description`
            )}
            image={project.backgroundImage}
            logo={project.logo}
            techTags={project.techTags}
            gradientFrom={project.gradientFrom}
          />
        ))}
      </div>
    </section>
  );
}
