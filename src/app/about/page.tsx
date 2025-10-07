"use client";
import React from "react";
import Image from "next/image";
import bgImage from "../../../assets/team2.jpg";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { Building2, Armchair, Ruler } from "lucide-react";

const AboutHero = () => {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full h-[60vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        <Image
          src={bgImage}
          alt="About Us Background"
          fill
          priority
          className="object-cover brightness-50"
        />
        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            About <span className="text-blue-400">Us</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">
            We are dedicated to delivering excellence and innovation in
            everything we do — empowering clients to achieve their goals with
            confidence.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE ENDORA SECTION */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
          {/* LEFT TITLE BLOCK */}
          <div className="lg:w-1/3">
            <span className="bg-blue-600 text-black text-sm font-semibold px-3 py-1 rounded">
              Bricks And Clicks
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
              Why Choose <br /> Ethical?
            </h2>
            <div className="w-16 h-1 bg-blue-400 mb-6"></div>
          </div>

          {/* RIGHT FEATURE BOXES */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-start text-left space-y-4">
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-16 h-16 bg-blue-300 rounded-full opacity-50 blur-lg"></div>
                <Building2 size={48} className="relative text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold">Historic Properties</h3>
              <p className="text-gray-500">
                Fusce aliquet quam eget neque ultrices elementum felis id arcu
                blandit sagittis.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-start text-left space-y-4">
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-16 h-16 bg-blue-300 rounded-full opacity-50 blur-lg"></div>
                <Armchair size={48} className="relative text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold">Furniture Includes</h3>
              <p className="text-gray-500">
                Fusce aliquet quam eget neque ultrices elementum felis id arcu
                blandit sagittis.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-start text-left space-y-4">
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-16 h-16 bg-blue-300 rounded-full opacity-50 blur-lg"></div>
                <Ruler size={48} className="relative text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold">Architecture Design</h3>
              <p className="text-gray-500">
                Fusce aliquet quam eget neque ultrices elementum felis id arcu
                blandit sagittis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutHero;
