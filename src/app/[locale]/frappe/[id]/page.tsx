'use client';
import React from "react";
import Header from "@/components/Global/Header";
import Banner from "@/components/Global/Banner";
import Footer from "@/components/Global/Footer";
import ContactUs from "@/components/Global/ContactUs";
import Hero from "@/components/FrappePage/Hero";
import OurTarget from "@/components/FrappePage/OurTarget";
import Features from "@/components/FrappePage/Features";
import { useParams } from "next/navigation";

const ProductsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <main className="w-full bg-white">
      <Header />
      <div id="home" className="relative scroll-mt-26 overflow-hidden">
        <Hero id={id} />
        <div className="px-6 max-sm:px-4 max-lg:px-5 max-xl:px-6">
          <OurTarget id={id} />
          <Features id={id} />
          <ContactUs />
          <Banner />
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default ProductsPage;
