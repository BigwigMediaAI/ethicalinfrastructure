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
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import RealEstateExperts from "../../components/expert";
import BuyLeaseSection from "../../components/BuyLease";
import ScrollingIcons from "../../components/ScrollingIcons";
import OurSegments from "../../components/OurSegments";
import LeadFormWithoutImage from "../../components/LeadPopupwithoutImage";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto-open popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

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
      {/* <!-- Open Graph Meta Tags --> */}
      <meta
        property="og:title"
        content="Ethical Infrastructures Pvt Ltd | Real Estate in Gurugram"
      />
      <meta property="og:site_name" content="Ethical Infrastructures Pvt Ltd" />
      <meta property="og:url" content="https://www.eipl.co/" />
      <meta
        property="og:description"
        content="Discover trusted real estate solutions in Gurugram with Ethical Infrastructures. Expert guidance for residential, commercial, and industrial properties."
      />
      <meta
        property="og:image"
        content="https://www.eipl.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.634a2fe3.png&w=256&q=75&dpl=dpl_GFYV9DHiQvmLtnjCNteqBUbAgF9L"
      />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IN" />
      <link rel="canonical" href="https://www.eipl.co/" />
      <title>
        Ethical Infrastructures – Best Real Estate Company in Gurgaon
      </title>
      <meta
        name="description"
        content="Buy, sell, or lease premium properties in Gurgaon with Ethical Infrastructures – trusted, transparent, and expert real estate services."
      />
      <Navbar />
      <Hero />
      <OurSegments />
      <PropertyGrid />
      <BuyLeaseSection />
      <WeHelp />
      {/* <FeaturedApartments /> */}
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
      <ScrollingIcons />

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

      <LeadFormWithoutImage
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <div className="hidden md:block">
        <ContactSidebar />
      </div>
    </>
  );
}
