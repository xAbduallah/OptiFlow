import React from "react";
import Header from "@/components/Global/Header";
import Banner from "@/components/Global/Banner";
import Footer from "@/components/Global/Footer";
import ContactUs from "@/components/Global/ContactUs";
import Hero from "@/components/ProductsPage/Hero";
import AppFeature from "@/components/ProductsPage/AppFeature";

const ProductsPage: React.FC = () => {
  return (
    <main className="w-full bg-white">
      <Header />
      <div id="home" className="relative scroll-mt-26 overflow-hidden">
        <Hero />
        <AppFeature />
        <div className="px-6 max-sm:px-4 max-lg:px-5 max-xl:px-6">
          <ContactUs />
          <Banner />
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default ProductsPage;
