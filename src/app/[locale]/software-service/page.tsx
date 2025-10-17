import React from "react";
import Hero from "@/components/SoftwarePage/Hero";

import Service from "@/components/SoftwarePage/Service";
import Products from "@/components/SoftwarePage/Products";
import Header from "@/components/Global/Header";
import Banner from "@/components/Global/Banner";
import Footer from "@/components/Global/Footer";
import ContactUs from "@/components/Global/ContactUs";

const SoftwareService: React.FC = () => {
  return (
    <main className="w-full bg-white">
      <Header />
      <div id="home" className="relative scroll-mt-26 overflow-hidden">
        <Hero />
        <div className="px-6 max-sm:px-4 max-lg:px-5 max-xl:px-6">
          <Products />
          <Service />
          <ContactUs />
          <Banner />
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default SoftwareService;
