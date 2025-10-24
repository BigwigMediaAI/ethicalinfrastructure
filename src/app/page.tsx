"use client";
import FeaturedApartments from "../../components/FeaturedApartments";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";

import WeHelp from "../../components/WeHelp";
import bgImage from "../../assets/video-bg.jpg";
import Testimonials from "../../components/Testimonial";
import CompanySection from "../../components/AboutCompany";

import PropertyGrid from "../../components/Properties";
import BlogGrid from "../../components/Blogs";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import ContactSidebar from "../../components/ContactSidebar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import RealEstateExperts from "../../components/expert";
import BuyLeaseSection from "../../components/BuyLease";
import ScrollingIcons from "../../components/ScrollingIcons";
import OurSegments from "../../components/OurSegments";

export default function Home() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: "ease-in-out",
      once: true, // animate only once
    });
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <OurSegments />
      <PropertyGrid />
      <BuyLeaseSection />
      <WeHelp />
      {/* <FeaturedApartments /> */}
      <ScrollingIcons />
      {/* 
      <div
        className="relative h-[600px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black/50" /> {/* dark overlay */}
      {/* <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Find Your Dream Property
        </h2>
        <p className="text-lg text-gray-200 max-w-xl mx-auto">
          Discover the perfect home that matches your lifestyle and budget.
        </p>
      </div> */}
      {/* </div>  */}
      {/* <StatsSection /> */}
      {/* <CompanySection /> */}
      <Testimonials />
      {/* <BlogGrid /> */}

      <Footer />
      <ScrollToTopButton />
      <div className="fixed bottom-0 left-0 w-full flex md:hidden z-[9999]">
        <div className="w-1/2 bg-[var(--primary-color)] text-white text-center py-3">
          <a
            href="tel:+919999000183"
            className="w-full flex items-center justify-center gap-2"
          >
            <FaPhoneAlt size={18} />
            Call Us
          </a>
        </div>
        <div className="w-1/2 bg-white text-green-500 text-center py-3 border-l border-white">
          <a
            href="https://wa.me/+919999000172"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2"
          >
            <FaWhatsapp size={18} />
            WhatsApp
          </a>
        </div>
      </div>

      <div className="hidden md:block">
        <ContactSidebar />
      </div>
    </>
  );
}
