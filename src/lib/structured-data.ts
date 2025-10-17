/**
 * Structured Data (JSON-LD) Helpers for SEO
 * These help search engines understand your content better
 */

import { Organization, WebSite, BreadcrumbList, WithContext } from "schema-dts";

export const organizationSchema: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Optiflow",
  alternateName: "Optiflow Enterprise Solutions",
  url: "https://optiflow.com",
  logo: "https://optiflow.com/images/global/logo.png",
  description:
    "Enterprise ERP solutions powered by Frappe and ERPNext for business automation and digital transformation",
  foundingDate: "2020", // Update with actual founding date
  sameAs: [
    // Add your social media profiles
    "https://www.linkedin.com/company/optiflow",
    "https://twitter.com/optiflow",
    "https://www.facebook.com/optiflow",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Sales",
    areaServed: ["SA", "AE", "KW", "BH", "OM", "QA"], // GCC countries
    availableLanguage: ["English", "Arabic"],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "SA", // Update with your actual country
    addressLocality: "Riyadh", // Update with your city
    // Add more address details as needed
  },
};

export const websiteSchema: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Optiflow",
  url: "https://optiflow.com",
  description:
    "Enterprise Solutions & ERP Systems for Business Growth powered by Frappe and ERPNext",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://optiflow.com/search?q={search_term_string}",
    },
  } as unknown as WebSite["potentialAction"],
  inLanguage: ["en", "ar"],
};

export function createBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function createProductSchema(product: {
  name: string;
  description: string;
  image: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    description: product.description,
    image: product.url + product.image,
    url: product.url,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web-based",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "USD",
    },
  };
}

export function createArticleSchema(article: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      "@type": "Person",
      name: article.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "Optiflow",
      logo: {
        "@type": "ImageObject",
        url: "https://optiflow.com/images/global/logo.png",
      },
    },
  };
}

/**
 * Helper to inject JSON-LD into your pages
 * Usage: Add this to your page component
 *
 * Example:
 * <script
 *   type="application/ld+json"
 *   dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
 * />
 */
