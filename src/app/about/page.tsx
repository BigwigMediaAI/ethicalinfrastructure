"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import bgImage from "../../../assets/team2.jpg";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { Building2, Armchair, Ruler } from "lucide-react";
import image from "../../../assets/property/property1.jpg";
import image2 from "../../../assets/property/property2.jpg";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-widest">
            About <span className="text-[var(--primary-color)]">Us</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">
            We are dedicated to delivering excellence and innovation in
            everything we do, empowering clients to achieve their goals with
            confidence.
          </p>
        </div>
      </section>

      {/* ===== ABOUT COMPANY SECTION ===== */}
      <section className="py-12">
        <div className="w-11/12 md:w-5/6 mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="md:w-2/3">
            <h2
              className="text-4xl font-bold mb-4 tracking-widest text-[var(--title)]"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              About{" "}
              <span className="text-[var(--primary-color)] ">
                Ethical Infrastructure
              </span>
            </h2>
            <p
              className="text-gray-700 mb-4"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Vivamus at augue eget arcu dictum varius duis at consectetur
              lorem.
            </p>
            <p
              className="text-gray-700 mb-4"
              data-aos="fade-right"
              data-aos-delay="600"
            >
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p
              className="text-gray-700"
              data-aos="fade-right"
              data-aos-delay="800"
            >
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2" data-aos="zoom-in" data-aos-delay="800">
            <Image
              src={image2}
              alt="About Company"
              className="rounded-xl object-cover w-full h-80"
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ENDORA SECTION */}
      <section className="py-16 bg-[var(--primary-bgColor)] ">
        <div className="w-11/12 md:w-5/6 mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 text-center lg:text-left">
          {/* LEFT TITLE BLOCK */}
          <div className="lg:w-1/3" data-aos="fade-right" data-aos-delay="200">
            <span className="bg-[var(--primary-color)] text-white text-sm font-semibold px-3 py-1 rounded">
              Bricks And Clicks
            </span>
            <h2 className="text-4xl  font-bold mt-6 mb-4 text-white tracking-widest">
              Why Choose <br /> Ethical?
            </h2>
          </div>

          {/* RIGHT FEATURE BOXES */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div
              className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="relative">
                <Building2
                  size={48}
                  className="relative text-[var(--primary-color)]"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Historic Properties
              </h3>
              <p className="text-gray-300">
                Fusce aliquet quam eget neque ultrices elementum felis id arcu
                blandit sagittis.
              </p>
            </div>

            {/* Feature 2 */}
            <div
              className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="relative">
                <Armchair
                  size={48}
                  className="relative text-[var(--primary-color)]"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Furniture Includes
              </h3>
              <p className="text-gray-300">
                Fusce aliquet quam eget neque ultrices elementum felis id arcu
                blandit sagittis.
              </p>
            </div>

            {/* Feature 3 */}
            <div
              className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="relative">
                <Ruler
                  size={48}
                  className="relative text-[var(--primary-color)]"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Architecture Design
              </h3>
              <p className="text-gray-300">
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
              data-aos="zoom-in"
            />
          </div>
          <div className="md:w-1/2">
            <h2
              className="text-4xl font-bold mb-4 tracking-widest text-[var(--title)]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Our Journey
            </h2>
            <p
              className="text-gray-600 mb-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p
              className="text-gray-600"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="py-16">
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
      </section> */}

      <section className="py-16 bg-[var(--primary-color)] text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Work With Us?</h2>
        <p className="mb-6 px-4">
          Contact our team today to discuss your project and how we can help you
          achieve your goals.
        </p>
        <Link href="/contact-us">
          <button className="cursor-pointer bg-white text-[var(--primary-color)] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Contact Us
          </button>
        </Link>
      </section>

      <Footer />
    </>
  );
};

export default AboutHero;
