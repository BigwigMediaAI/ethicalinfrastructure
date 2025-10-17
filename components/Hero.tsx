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
      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-4xl font-bold mb-5 font-merriweather text-white leading-tight tracking-widest">
          Your Vision, Our Ethical Commitment
        </h1>
      </div>
    </section>
  );
};

export default Hero;
