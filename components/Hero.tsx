"use client";

import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        src="./video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Centered Content */}
      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-xl md:text-4xl font-bold mb-2 font-merriweather text-white leading-tight tracking-widest">
          Ethical Infrastructure Pvt. Ltd.
        </h1>
        <p className="text-lg text-white/80 font-medium">
          Your Vision, Our Ethical Commitment
        </p>
      </div>
    </section>
  );
};

export default Hero;
