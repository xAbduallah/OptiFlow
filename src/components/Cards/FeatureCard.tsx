import Image from "next/image";
export interface Feature {
  key: string;
  image: string;
  imageWidth: {
    sm: number;
    md: number;
    lg: number;
  };
  imageHeight: {
    sm: number;
    md: number;
    lg: number;
  };
  layout: "text-image" | "image-text";
}

export interface FeatureCardProps {
  feature: Feature;
  title: string;
  description: string;
  goalsTitle: string;
  goals: string;
  importanceTitle: string;
  importance: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  feature,
  title,
  description,
  goalsTitle,
  goals,
  importanceTitle,
  importance,
}) => {
  const goalsArray = goals.split("\n");
  const isTextImage = feature.layout === "text-image";

  return (
    <div
      className={`flex flex-col ${
        isTextImage ? "lg:flex-row" : "lg:flex-row-reverse"
      } justify-between items-start gap-6 md:gap-10 ${
        isTextImage ? "lg:gap-10" : "lg:gap-[40px]"
      } w-full`}
    >
      {/* Content Section */}
      <div className="flex flex-col gap-3 md:gap-4 lg:gap-4 w-full lg:flex-1 lg:max-w-[653px]">
        {/* Title and Description */}
        <div className="flex flex-col items-end gap-2">
          <h3 className="text-[#191919] font-bold text-[24px] md:text-[28px] lg:text-[28px] leading-[1.366] tracking-[-0.03em] ltr:text-left rtl:text-right w-full">
            {title}
          </h3>
          <div className="flex flex-col gap-2 w-full">
            <p className="text-[#4C4C4C] font-normal text-[14px] md:text-[18px] lg:text-[18px] leading-[1.366] capitalize ltr:text-left rtl:text-right">
              {description}
            </p>
          </div>
        </div>
        {/* Goals and Importance */}
        <div className="flex flex-col items-end gap-3 md:gap-4 lg:gap-4 w-full">
          {/* Goals Section */}
          <div className="flex flex-col gap-2 w-full">
            <h4 className="text-[#191919] font-medium text-[20px] md:text-[24px] lg:text-[24px] leading-[1.366] tracking-[-0.03em] ltr:text-left rtl:text-right">
              {goalsTitle}
            </h4>
            <div className="flex flex-col gap-0 text-[#4C4C4C] font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[1.366] capitalize text-left">
              {goalsArray.map((goal, index) => (
                <div key={index} className="flex gap-1">
                  <span>{index + 1}.</span>
                  <span>{goal}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Importance Section */}
          <div className="flex flex-col gap-2 w-full">
            <h4 className="text-[#191919] font-medium text-[20px] md:text-[24px] lg:text-[24px] leading-[1.366] tracking-[-0.03em] ltr:text-left rtl:text-right">
              {importanceTitle}
            </h4>
            <div className="flex gap-2 text-[#4C4C4C] font-normal items-center text-[14px] md:text-[16px] lg:text-[18px] leading-[1.366] ltr:text-left rtl:text-right">
              <span className="text-[20px] leading-[0.8] rtl:mr-0 ltr:mr-0">
                •
              </span>
              <p className="flex-1">{importance}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Image Section */}
      <div
        className="relative w-full md:w-[var(--img-width-md)] lg:w-[var(--img-width-lg)] h-[var(--img-height-sm)] md:h-[var(--img-height-md)] lg:h-[var(--img-height-lg)] lg:flex-shrink-0 rounded-lg overflow-hidden"
        style={
          {
            "--img-width-sm": `${feature.imageWidth.sm}px`,
            "--img-width-md": `${feature.imageWidth.md}px`,
            "--img-width-lg": `${feature.imageWidth.lg}px`,
            "--img-height-sm": `${feature.imageHeight.sm}px`,
            "--img-height-md": `${feature.imageHeight.md}px`,
            "--img-height-lg": `${feature.imageHeight.lg}px`,
          } as React.CSSProperties
        }
      >
        <div className="relative h-full w-full">
          <Image
            src={feature.image}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

{
  /* <div
className={`flex flex-col bg-red-200 ${
  isTextImage
    ? "lg:flex-row rtl:lg:flex-row-reverse"
    : "lg:flex-row-reverse rtl:lg:flex-row"
} justify-between items-start gap-6 md:gap-10 ${
  isTextImage ? "lg:gap-10" : "lg:gap-[40px]"
} w-full`}
>
Content Section
<div className="flex flex-col gap-3 md:gap-4 lg:gap-4 w-full lg:flex-1 lg:max-w-[653px]">
  Title and Description
  <div className="flex flex-col items-end gap-2">
    <h3 className="text-[#191919] font-bold text-[24px] md:text-[28px] lg:text-[28px] leading-[1.366] tracking-[-0.03em] text-left w-full">
      {title}
    </h3>
    <div className="flex flex-col gap-2 w-full">
      <p className="text-[#4C4C4C] font-normal text-[14px] md:text-[18px] lg:text-[18px] leading-[1.366] capitalize text-left">
        {description}
      </p>
    </div>
  </div>

  // Goals and Importance
  <div className="flex flex-col items-end gap-3 md:gap-4 lg:gap-4 w-full">
  //  Goals Section
    <div className="flex flex-col gap-2 w-full">
      <h4 className="text-[#191919] font-medium text-[20px] md:text-[24px] lg:text-[24px] leading-[1.366] tracking-[-0.03em] text-left">
        {goalsTitle}
      </h4>
      <div className="flex flex-col gap-0 text-[#4C4C4C] font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[1.366] capitalize text-left">
        {goalsArray.map((goal, index) => (
          <div key={index} className="flex gap-1">
            <span>{index + 1}.</span>
            <span>{goal}</span>
          </div>
        ))}
      </div>
    </div>

    // Importance Section
    <div className="flex flex-col gap-2 w-full">
      <h4 className="text-[#191919] font-medium text-[20px] md:text-[24px] lg:text-[24px] leading-[1.366] tracking-[-0.03em] text-left">
        {importanceTitle}
      </h4>
      <div className="flex gap-2 text-[#4C4C4C] font-normal items-center text-[14px] md:text-[16px] lg:text-[18px] leading-[1.366] text-left">
        <span className="text-[20px] leading-[0.8] rtl:mr-0 ltr:mr-0">
          •
        </span>
        <p className="flex-1">{importance}</p>
      </div>
    </div>
  </div>
</div>




//  Image Section
<div className="relative w-full lg:w-auto lg:flex-shrink-0 rounded-lg bg-red-300">
  <div
    className="relative w-full lg:w-auto"
    style={{
      width: "100%",
      height: `${feature.imageHeight.sm}px`,
    }}
  >
    <style jsx>{`
      @media (min-width: 768px) {
        div {
          width: ${feature.imageWidth.md}px;
          height: ${feature.imageHeight.md}px;
        }
      }
      @media (min-width: 1024px) {
        div {
          width: ${feature.imageWidth.lg}px;
          height: ${feature.imageHeight.lg}px;
        }
      }
    `}</style>

    <div className="relative w-full h-full flex items-center justify-center z-20 p-2">
      <div className="relative w-full h-full">
        <Image
          src={feature.image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
    </div>
  </div>
</div>
</div> */
}
