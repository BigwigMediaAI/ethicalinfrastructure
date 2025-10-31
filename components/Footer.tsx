"use client";

import React from "react";
import Link from "next/link";
import LeadForm from "./LeadForm";

const Footer = () => {
  return (
    <footer className="bg-[var(--white)] text-[var(--black)] text-sm">
      {/* Top Line */}
      <div className="border-t border-[var(--text)] w-full" />

      {/* Main Content: Map + Lead Form */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-6 px-4 py-10">
        {/* Left: Google Map */}
        <div className="w-full lg:w-1/2">
          <div className="w-full h-[250px] md:h-[450px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2037326384284!2d77.0934439!3d28.4734105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18d7d137311f%3A0xc0cbc38c4452175d!2sETHICAL%20INFRASTRUCTURES%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1759831704667!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Right: Lead Form */}
        <div className="w-full lg:w-1/2">
          <LeadForm />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 w-full" />
      <div className="max-w-7xl mx-auto px-4 py-6 text-xs text-[var(--text)] flex flex-col sm:flex-row justify-between items-center gap-4">
        <span>Ethical Infrastructure ©2025 All Rights Reserved</span>

        <div className="flex gap-4">
          <Link
            href="/Terms&Conditions"
            className="hover:text-[var(--primary-color)] transition"
          >
            Terms of Use
          </Link>
          <Link
            href="/Privacy&Policy"
            className="hover:text-[var(--primary-color)] transition"
          >
            Privacy Policy
          </Link>
        </div>

        <Link
          href="https://www.bigwigmediadigital.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[var(--primary-color)] text-[var(--primary-color)] px-4 py-2 uppercase text-xs tracking-widest text-center"
        >
          Made & Marketed with ❤️ by Bigwig Digital
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
