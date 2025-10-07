"use client";
import React from "react";
import Image from "next/image";
import bgImage from "../../../assets/team2.jpg";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { Building2, Armchair, Ruler } from "lucide-react";
import image from "../../../assets/property/property1.jpg";
import image2 from "../../../assets/property/property2.jpg";

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

      {/* ===== ABOUT COMPANY SECTION ===== */}
      <section className="py-16 bg-gray-50">
        <div className="w-11/12 md:w-5/6 mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">
              About{" "}
              <span className="text-blue-600">Ethical Infrastructure</span>
            </h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Vivamus at augue eget arcu dictum varius duis at consectetur
              lorem.
            </p>
            <p className="text-gray-700 mb-4">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p className="text-gray-700">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <Image
              src={image2}
              alt="About Company"
              className="rounded-xl object-cover w-full h-80"
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ENDORA SECTION */}
      <section className="py-12  bg-white">
        <div className="w-11/12 md:w-5/6 mx-auto flex flex-col lg:flex-row items-start gap-12">
          {/* LEFT TITLE BLOCK */}
          <div className="lg:w-1/3">
            <span className="bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded">
              Bricks And Clicks
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
              Why Choose <br /> Ethical?
            </h2>
            {/* <div className="w-16 h-1 bg-blue-400 mb-6"></div> */}
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

      <section className="py-16 bg-gray-50">
        <div className="w-11/12 md:w-5/6 mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src={image}
              alt="Our Story"
              className="rounded-xl object-cover w-full h-80"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-gray-600">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="w-11/12 md:w-5/6 mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Integrity", "Excellence", "Innovation"].map((value) => (
              <div
                key={value}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <div className="text-blue-600 mb-4">
                  <Building2 size={48} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value}</h3>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Work With Us?</h2>
        <p className="mb-6">
          Contact our team today to discuss your project and how we can help you
          achieve your goals.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>

      <Footer />
    </>
  );
};

export default AboutHero;
