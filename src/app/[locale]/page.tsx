import React from "react";
import Header from "@/components/Global/Header";
import Hero from "@/components/LandingPage/Hero";
import AboutUs from "@/components/LandingPage/AboutUs";
import Frappe from "@/components/LandingPage/Frappe";
import Service from "@/components/LandingPage/Services";
import Grow from "@/components/LandingPage/Grow";
import Solutions from "@/components/LandingPage/Solutions";
import Products from "@/components/LandingPage/Products";
import ContactUs from "@/components/Global/ContactUs";
import Footer from "@/components/Global/Footer";
import Banner from "@/components/Global/Banner";

const Home: React.FC = () => {
  return (
    <main className="w-full">
      <Header />
      <div id="home" className="relative scroll-mt-26 overflow-hidden">
        <Hero />
        <div className="px-6 max-sm:px-4 max-lg:px-5 max-xl:px-6">
          <AboutUs />
          <Frappe />
          <Service />
          <Grow />
          <Products />
          <Solutions />
          <ContactUs />
        </div>
        <Banner />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
