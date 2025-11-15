"use client";

import React, { useState } from "react";
import LeadFormModal from "./LeadPopup";
import ButtonFill from "./Button";
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
        <div className="absolute inset-0 bg-black/40" />

        {/* Centered Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          {/* First Line - slide from top */}
          <h1
            className={`${tinos.className} text-4xl md:text-6xl font-bold text-[var(--primary-color)] uppercase mb-4 animate-slideFromTop`}
          >
            Ethical Infrastructures Pvt. Ltd.
          </h1>

          {/* Second Line - slide from bottom */}
          <p className="text-lg md:text-2xl text-white/80 font-medium mb-8 animate-slideFromBottom">
            Your Vision, Our Ethical Commitment
          </p>

          {/* Floating Button */}
          <div className="animate-float">
            <ButtonFill
              text="Get in Touch"
              onClick={() => setIsModalOpen(true)}
              className="font-semibold"
            />
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      <LeadFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Animations */}
      <style jsx>{`
        @keyframes slideFromTop {
          0% {
            transform: translateY(-150px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideFromBottom {
          0% {
            transform: translateY(150px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        .animate-slideFromTop {
          animation: slideFromTop 3.5s ease-out forwards; /* slow and smooth */
        }

        .animate-slideFromBottom {
          animation: slideFromBottom 3.5s ease-out forwards; /* slow and smooth */
        }

        .animate-float {
          animation: float 2.5s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default Hero;
