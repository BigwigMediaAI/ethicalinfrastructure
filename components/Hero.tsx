"use client";

import React, { useState } from "react";
import LeadFormModal from "./LeadPopup";
import ButtonFill from "./Button"; // ✅ using your custom animated button
import { Tinos } from "next/font/google";

const tinos = Tinos({
  subsets: ["latin"],
  weight: ["700"],
});

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full h-[86vh] md:h-[100vh] overflow-hidden flex items-center justify-center">
        {/* Background Video */}
        <video
          src="./Ethvideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Centered Content */}
        <div className="relative z-10 text-center max-w-5xl">
          <h1
            className={`${tinos.className} text-xl md:text-5xl font-bold mb-2 text-[var(--primary-color)] uppercase leading-tight`}
          >
            Ethical Infrastructures Pvt. Ltd.
          </h1>

          <p className="text-lg md:text-2xl text-white/80 font-medium mb-6">
            Your Vision, Our Ethical Commitment
          </p>

          {/* ✨ Use ButtonFill */}
          <ButtonFill
            text="Get in Touch"
            onClick={() => setIsModalOpen(true)}
            className="font-semibold"
          />
        </div>
      </section>

      {/* Popup Modal */}
      <LeadFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Hero;
