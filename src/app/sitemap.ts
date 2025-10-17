import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://optiflow.com";
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          ar: `${baseUrl}/ar`,
        },
      },
    },
    {
      url: `${baseUrl}/products`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/en/products`,
          ar: `${baseUrl}/ar/products`,
        },
      },
    },
    {
      url: `${baseUrl}/software-service`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/en/software-service`,
          ar: `${baseUrl}/ar/software-service`,
        },
      },
    },
    // Add more pages as your site grows
    // {
    //   url: `${baseUrl}/about`,
    //   lastModified: currentDate,
    //   changeFrequency: "monthly",
    //   priority: 0.7,
    // },
    // {
    //   url: `${baseUrl}/contact`,
    //   lastModified: currentDate,
    //   changeFrequency: "monthly",
    //   priority: 0.6,
    // },
  ];
}
