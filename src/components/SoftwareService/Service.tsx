import React from "react";
import { useTranslations } from "next-intl";
import data2Icon from "../../../public/images/software-service/data-2.png";
import html5Icon from "../../../public/images/software-service/html-5.png";
import penToolIcon from "../../../public/images/software-service/pen-tool.png";
import mobileProgrammingIcon from "../../../public/images/software-service/mobile-programming.png";
import { ServiceCard } from "../Cards/ServiceCard";

const Service: React.FC = () => {
  const getTransText = useTranslations("SoftwareService.service");
  return (
    <section className="main-section flex justify-center items-center py-20 max-md:py-[60px] max-sm:py-10">
      <div className="flex flex-col items-start gap-10 max-md:w-full max-md:max-w-[900px]">
        <div className="flex max-lg:flex-col justify-between items-start w-full gap-6">
          <header className="flex w-full max:lg-w-2/4 flex-col items-start gap-6 max-md:w-full">
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="flex flex-col items-start gap-1 w-full">
                <div className="text-[#0F0E2C] font-semibold uppercase">
                  {getTransText("sectionTitle")}
                </div>
                <h1 className="text-[#191919] text-[40px] font-bold leading-[48px] tracking-[-1.2px] max-md:text-[32px] max-md:leading-10 max-md:h-auto max-sm:text-[28px] max-sm:leading-9">
                  {getTransText("heading")}
                </h1>
              </div>
              <p className="text-[#4C4C4C] font-normal max-md:w-full">
                {getTransText("description")}
              </p>
            </div>
          </header>
          <ServiceCard
            icon={data2Icon}
            title={getTransText("services.backendIntegration.title")}
            description={getTransText(
              "services.backendIntegration.description"
            )}
            featured
          />
        </div>
        <div className="flex max-lg:flex-col rtl:flex-row-reverse items-center gap-6 w-full max-md:flex-wrap max-md:justify-center">
          <ServiceCard
            icon={html5Icon}
            title={getTransText("services.frontend.title")}
            description={getTransText("services.frontend.description")}
          />
          <ServiceCard
            icon={mobileProgrammingIcon}
            title={getTransText("services.mobileApp.title")}
            description={getTransText("services.mobileApp.description")}
          />
          <ServiceCard
            icon={penToolIcon}
            title={getTransText("services.uiUxDesign.title")}
            description={getTransText("services.uiUxDesign.description")}
          />
        </div>
      </div>
    </section>
  );
};

export default Service;
