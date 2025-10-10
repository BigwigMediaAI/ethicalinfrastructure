"use client";
import Link from "next/link";
import React from "react";

interface ButtonFillProps {
  text: React.ReactNode;
  href?: string; // if provided, renders as Link
  onClick?: () => void; // optional click handler
  className?: string; // extra Tailwind classes
  aos?: string; // optional AOS animation type
  aosDelay?: string; // optional AOS delay
}

const ButtonFill: React.FC<ButtonFillProps> = ({
  text,
  href,
  onClick,
  className = "",
  aos,
  aosDelay,
}) => {
  const buttonContent = (
    <button
      onClick={onClick}
      data-aos={aos}
      data-aos-delay={aosDelay}
      className={`relative overflow-hidden border-2 border-[var(--primary-color)] px-6 py-2 rounded-lg group transition-all duration-500 ${className}`}
    >
      {/* Animated background */}
      <span className="absolute inset-0 bg-[var(--primary-color)] h-0 group-hover:h-full transition-all duration-500 ease-in rounded-md z-0"></span>

      {/* Text */}
      <span className="relative z-10 text-[var(--primary-color)] group-hover:text-white transition-colors duration-500">
        {text}
      </span>
    </button>
  );

  // If `href` is passed, render as a Link
  if (href) {
    return <Link href={href}>{buttonContent}</Link>;
  }

  // Otherwise, render as normal button
  return buttonContent;
};

export default ButtonFill;
