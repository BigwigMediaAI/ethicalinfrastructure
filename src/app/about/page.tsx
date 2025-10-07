"use client";
import React from "react";
import Image from "next/image";
import bgImage from "../../../assets/team2.jpg";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const AboutHero = () => {
  return (
    <>
      <Navbar />
      <section className="relative w-full h-[60vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src={bgImage}
          alt="About Us Background"
          fill
          priority
          className="object-cover brightness-50"
        />

        {/* Overlay Text */}
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
      <Footer />
    </>
  );
};

export default AboutHero;
