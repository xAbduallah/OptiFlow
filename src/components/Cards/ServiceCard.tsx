import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";

export const ServiceCard = ({
  icon,
  title,
  description,
  id,
  featured = false,
  moreInfo = true,
}: {
  icon: StaticImageData;
  title: string;
  description: string;
  id: string;
  featured?: boolean;
  moreInfo?: boolean;
}) => {
  const getTransText = useTranslations("LandingPage.Services");

  const baseClasses =
    "flex flex-col items-start justify-between gap-3 h-fit lg:h-full shadow-[0_12px_16px_0_rgba(51,51,51,0.12)] bg-neutral-50 px-6 py-10 rounded-[10px] max-sm:px-5 max-sm:py-8 transform transition-transform duration-200 will-change-transform hover:scale-102 scroll-mt-26";

  return (
    <article
      id={id}
      className={`${
        featured
          ? `${baseClasses} w-full max:lg:w-[50%]`
          : `${baseClasses} w-full max:lg:w-3/4`
      }`}
    >
      <div className="flex flex-col items-start gap-3 w-full">
        <Image
          loading="lazy"
          alt={title}
          src={icon}
          className="w-[50px] h-[50px] object-contain"
        />
        <div className="flex flex-col items-start gap-2 w-full">
          <h3 className="text-[#16012C] text-xl font-bold w-full max-sm:text-xl max-sm:h-auto">
            {title}
          </h3>
          <p className="text-[#4C4C4C] font-normal w-full">{description}</p>
        </div>
      </div>
      {moreInfo && (
        <div
          className="flex items-center gap-2 relative cursor-pointer group"
          tabIndex={0}
          role="button"
        >
          <span className="text-[#2A8E9E] text-base font-semibold leading-4 relative group-hover:underline">
            {getTransText("readMore")}
          </span>

          <svg
            width="13"
            height="10"
            viewBox="0 0 13 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-[11.5px] h-[8.5px] transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180`}
          >
            <path
              d="M0 4.75H11.5M11.5 4.75L7 0.75M11.5 4.75L7 9.25"
              stroke="#2A8E9E"
              strokeWidth="2"
            />
          </svg>
        </div>
      )}
    </article>
  );
};
