"use client";

import React from "react";
import Image from "next/image";
import hero from "../assets/book_wide-1.webp";

const Hero = () => {
  return (
    <section className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <Image
        src={hero}
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Centered Content */}
      <div className="relative z-10 text-center px-4 md:px-10 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold mb-5 font-merriweather text-white leading-tight">
          Dream It. Live It. Own Your Home with Ethical Infrastructure
        </h1>
        <h2 className="text-lg md:text-2xl mb-6 uppercase text-gray-200">
          Premium properties, secure investments, and expert guidance with{" "}
          <span className="text-[var(--primary-color)] font-bold">
            ETHICAL INFRASTRUCTURE
          </span>
        </h2>
      </div>
    </section>
  );
};

export default Hero;
