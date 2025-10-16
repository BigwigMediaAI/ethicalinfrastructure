"use client";

import React from "react";
import Image from "next/image";
import hero from "../assets/book_wide-1.webp";

const Hero = () => {
  return (
    <section className="relative w-full h-[40vh] md:h-[80vh] overflow-hidden">
      <Image
        src={hero}
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center" />
    </section>
  );
};

export default Hero;
