"use client";
import FeaturedApartments from "../../components/FeaturedApartments";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import StatsSection from "../../components/Stats";
import WeHelp from "../../components/WeHelp";
import bgImage from "../../assets/video-bg.jpg";
import Testimonials from "../../components/Testimonial";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WeHelp />
      <FeaturedApartments />
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
      <Footer />
    </>
  );
}
