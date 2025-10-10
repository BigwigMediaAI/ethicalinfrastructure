"use client";
import FeaturedApartments from "../../components/FeaturedApartments";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import StatsSection from "../../components/Stats";
import WeHelp from "../../components/WeHelp";
import bgImage from "../../assets/video-bg.jpg";
import Testimonials from "../../components/Testimonial";
import CompanySection from "../../components/AboutCompany";
import Image from "next/image";
import sellImage from "../../assets/buy-sell1.jpg"; // replace with your image
import buyImage from "../../assets/buy-sell2.jpg"; // replace with your image
import { FiArrowRight } from "react-icons/fi";
import PropertyGrid from "../../components/Properties";
import BlogGrid from "../../components/Blogs";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import ContactSidebar from "../../components/ContactSidebar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import ButtonFill from "../../components/Button";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

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
      <CompanySection />
      <section className="w-full py-16 bg-[#021A33]">
        <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* ===== Sell Your Property Card ===== */}
          <div
            className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer h-96"
            data-aos="flip-left" // optional zoom-in for heading
            data-aos-delay="200"
          >
            <Image
              src={sellImage}
              alt="Sell Your Property"
              className="w-full h-full object-cover transition-transform duration-500 "
            />
            {/* Overlay */}
            <div className="absolute inset-0  flex flex-col justify-end items-center p-6 text-white transition-all duration-300">
              <h3 className="text-4xl font-semibold mb-2 text-center  tracking-widest">
                Sell Your Property
              </h3>
              <p className="mb-4 text-center">
                Maximize your property&#39;s value with our expert selling
                strategies and personalized service.
              </p>
              <Link href="/sell">
                <ButtonFill text={<FiArrowRight size={18} />} />
              </Link>
            </div>
          </div>

          {/* ===== Buy A Property Card ===== */}
          <div
            className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer h-96"
            data-aos="flip-left" // optional zoom-in for heading
            data-aos-delay="400"
          >
            <Image
              src={buyImage}
              alt="Buy A Property"
              className="w-full h-full object-cover transition-transform duration-500 "
            />
            {/* Overlay */}
            <div className="absolute inset-0  flex flex-col justify-end items-center p-6 text-white transition-all duration-300">
              <h3 className="text-4xl font-semibold mb-2 text-center tracking-widest">
                Buy A Property
              </h3>
              <p className="mb-4 text-center">
                Find your perfect home with our expert guidance and tailored
                property options.
              </p>
              <Link href="/buy">
                <ButtonFill text={<FiArrowRight size={18} />} />
              </Link>
            </div>
          </div>

          {/* ===== Lease A Property Card ===== */}
          <div
            className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer h-96"
            data-aos="flip-left" // optional zoom-in for heading
            data-aos-delay="400"
          >
            <Image
              src={buyImage}
              alt="Lease A Property"
              className="w-full h-full object-cover transition-transform duration-500 "
            />
            {/* Overlay */}
            <div className="absolute inset-0  flex flex-col justify-end items-center p-6 text-white transition-all duration-300">
              <h3 className="text-4xl font-semibold mb-2 text-center tracking-widest">
                Lease A Property
              </h3>
              <p className="mb-4 text-center">
                Lease premium spaces effortlessly with personalized service and
                expert support.
              </p>
              <Link href="/lease">
                <ButtonFill text={<FiArrowRight size={18} />} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <PropertyGrid />
      <FeaturedApartments />
      <WeHelp />

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
        <div className="relative z-10 text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Dream Property
          </h2>
          <p className="text-lg text-gray-200 max-w-xl mx-auto">
            Discover the perfect home that matches your lifestyle and budget.
          </p>
        </div>
      </div>
      <StatsSection />
      <Testimonials />
      <BlogGrid />
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
