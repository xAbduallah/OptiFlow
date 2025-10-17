"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../../public/images/global/logo.png";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { dinNextRegular } from "./ui/fonts";
import { Button } from "./ui/button";

export default function Header() {
  const pathname = usePathname();
  const locale = useLocale();

  const router = useRouter();
  const getTransText = useTranslations("Header");
  const [mobileOpen, setMobileOpen] = useState(false);

  const changeLocale = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    router.push(pathname, { locale: newLocale });
  };

  const navigation = [
    { name: getTransText("home"), href: "#home" },
    {
      name: getTransText("services"),
      href: "/Services",
      type: "dropdown",
      children: [
        {
          name: getTransText("servicesDropdown.automationFlow"),
          href: "#automation-flow",
        },
        {
          name: getTransText("servicesDropdown.integrationService"),
          href: "#integration-service",
        },
        {
          name: getTransText("servicesDropdown.customDevelopment"),
          href: "#custom-development",
        },
        {
          name: getTransText("servicesDropdown.hostingDevelopment"),
          href: "#hosting-and-development",
        },
      ],
    },
    {
      name: getTransText("solution"),
      href: "/Solution",
      type: "dropdown",
      children: [
        {
          name: getTransText("solutionDropdown.restaurant"),
          href: "/Services",
        },
        {
          name: getTransText("solutionDropdown.construction"),
          href: "/Services",
        },
        {
          name: getTransText("solutionDropdown.industrialAutomation"),
          href: "/Services",
        },
        {
          name: getTransText("solutionDropdown.hospitalManagement"),
          href: "/Services",
        },
        {
          name: getTransText("solutionDropdown.concreteManagement"),
          href: "/Services",
        },
        { name: getTransText("solutionDropdown.pos"), href: "/Services" },
        {
          name: getTransText("solutionDropdown.fashionManagement"),
          href: "/Services",
        },
        {
          name: getTransText("solutionDropdown.shippingManagement"),
          href: "/Services",
        },
      ],
    },
    {
      name: getTransText("frappe"),
      href: "/Frappe",
      type: "dropdown",
      children: [
        { name: getTransText("frappeDropdown.erpNext"), href: "/Frappe" },
        { name: getTransText("frappeDropdown.hrManagement"), href: "/Frappe" },
        { name: getTransText("frappeDropdown.manufacturing"), href: "/Frappe" },
        { name: getTransText("frappeDropdown.education"), href: "/Frappe" },
        { name: getTransText("frappeDropdown.construction"), href: "/Frappe" },
        { name: getTransText("frappeDropdown.healthcare"), href: "/Frappe" },
      ],
    },
    {
      name: getTransText("products"),
      href: "/Products",
      type: "dropdown",
      children: [
        {
          name: getTransText("productsDropdown.salesForce"),
          href: "/Products",
        },
        {
          name: getTransText("productsDropdown.hrServices"),
          href: "/Products",
        },
        {
          name: getTransText("productsDropdown.ksaCompliance"),
          href: "/Products",
        },
      ],
    },
    { name: getTransText("contact"), href: "/Contact-Us " },
  ];

  return (
    <header
      className={`rtl:${dinNextRegular.className} flex select-none items-center justify-between sticky top-0 left-0 z-50 px-6 mt-5 pb-4 max-md:px-4 max-lg:px-5`}
    >
      <div
        className="main-section bg-white w-full p-4 rounded-2xl flex items-center justify-between mb-10"
        style={{ boxShadow: "0px 4px 15px 0px rgba(51, 51, 51, 0.32)" }}
      >
        <Link href="/" className="w-[140px] sm:w-[180px]">
          <Image
            src={logo}
            alt="Logo"
            className="w-[140px] sm:w-[180px] scale-110 translate-y-1"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden min-[1200px]:flex items-center justify-end w-full gap-5">
          <div className="flex gap-6 items-center justify-center rtl:pl-12">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.type === "dropdown" ? (
                  <DropdownMenu key={item.href}>
                    <DropdownMenuTrigger asChild>
                      <span className="text-gray-900 text-lg hover:text-gray-700 flex items-center gap-2 cursor-pointer">
                        {item.name}
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {item.children.map((child) => (
                        <DropdownMenuItem
                          asChild
                          key={`child-${child.name}`}
                          className="p-4 pr-12 cursor-pointer"
                        >
                          <Link href={child.href} className="text-[16px]">
                            {child.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    className="text-gray-900 text-lg hover:text-gray-700"
                    key={item.href}
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="flex max-w-[290px] gap-4 items-center justify-end">
            <Button
              type="submit"
              className="px-10 py-4 bg-zinc-900 hover:bg-zinc-800"
            >
              {getTransText("demo")}
            </Button>
            <Button
              type="submit"
              onClick={() => changeLocale()}
              className="px-6 py-4 bg-white hover:bg-white text-black border border-black"
            >
              {locale === "en" ? "العربيه" : "ENGLISH"}
            </Button>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="min-[1200px]:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div className="min-[1200px]:hidden fixed top-0 left-0 w-full h-full bg-white shadow-lg z-20 pt-9 px-10 pb-4 max-md:px-8 max-lg:px-9">
          <div className="flex justify-between items-center mb-6">
            <Link
              href="/"
              className="w-[140px] sm:w-[180px]"
              onClick={() => setMobileOpen(false)}
            >
              <Image
                src={logo}
                alt="Logo"
                className="w-[140px] sm:w-[180px] scale-110 translate-y-1"
              />
            </Link>
            <button onClick={() => setMobileOpen(false)}>
              <X className="w-7 h-7" />
            </button>
          </div>

          <nav className="flex flex-col gap-4">
            {navigation.map((item) =>
              item.type === "dropdown" ? (
                <details key={item.name}>
                  <summary className="cursor-pointer text-lg flex items-center justify-between gap-2">
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </summary>
                  <ul className="ml-4 mt-2 flex flex-col gap-2">
                    {item.children.map((child) => (
                      <a
                        href={child.href}
                        key={`child-${child.name}`}
                        className="text-gray-700"
                      >
                        {child.name}
                      </a>
                    ))}
                  </ul>
                </details>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg text-[#1D1E20]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          <div className="mt-6 flex gap-3">
            <Button
              type="submit"
              className="px-10 py-4 bg-zinc-900 hover:bg-zinc-800"
            >
              {getTransText("demo")}
            </Button>
            <Button
              type="submit"
              onClick={() => changeLocale()}
              className="px-6 py-4 bg-white hover:bg-white text-black border border-black"
            >
              {locale === "en" ? "العربيه" : "ENGLISH"}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
