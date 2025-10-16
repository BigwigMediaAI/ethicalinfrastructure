"use client";

import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white font-raleway text-sm">
      {/* Top horizontal line */}
      <div className="border-t border-gray-300 dark:border-gray-700 w-full" />

      {/* Logo and CONTACTS Title */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 sm:px-12 lg:px-6">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-4">
            <div className="w-16 border-t border-[var(--primary-color)]" />
            <Image
              src={logo}
              alt="Logo"
              className="w-44 h-auto object-contain"
            />
            <div className="w-20 border-t border-[var(--primary-color)]" />
          </div>
        </div>
        <h2 className="hidden md:block text-2xl font-thin mt-10 md:mt-0">
          CONTACTS
        </h2>
      </div>

      {/* Mid horizontal line */}
      <div className="md:max-w-7xl mx-auto border-t border-gray-300 dark:border-gray-700 w-full mb-8" />

      {/* Main content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between px-6 sm:px-12 lg:px-6 gap-8 pb-10 font-light dark:font-thin">
        {/* Left: Navigation Columns */}
        <div className="grid grid-cols-3 gap-6">
          {[
            [
              { label: "Buy", path: "/buy" },
              { label: "Sell", path: "/sell" },
              { label: "Lease", path: "/lease" },
            ],

            [
              { label: "Team", path: "/team" },
              { label: "Contact Us", path: "/contact-us" },
            ],
          ].map((group, idx) => (
            <ul key={idx} className="space-y-4">
              {group.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.path}
                    className="cursor-pointer hover:text-[var(--primary-color)] transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Right: Contact Info */}
        <div className="space-y-4 lg:text-right">
          <h3 className="text-lg">Gurugram, Haryana</h3>
          <p className="text-gray-700 dark:text-gray-200">
            First Floor, A26/12 B, Golf Course Rd, A Block, DLF Phase 1,
            Gurugram, Haryana 122002
          </p>
          <div className="flex justify-start lg:justify-end gap-4 pt-2 text-[var(--primary-color)] text-xl">
            <a
              href="mailto:info@eipl.co"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:bg-gray-700 p-2 rounded"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61581857552733"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:bg-gray-700 p-2 rounded"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.linkedin.com/company/109224060/admin/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:bg-gray-700 p-2 rounded"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://wa.me/919999000172"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:bg-gray-700 p-2 rounded"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.instagram.com/ethical.infrastructure?igsh=MXh4NWVpbmw5eTg0eQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:bg-gray-700 p-2 rounded"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.youtube.com/channel/UC_PoUpH4pZvbWr7oTE8-BqQ"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:bg-gray-700 p-2 rounded"
            >
              <FaYoutube />
            </a>
          </div>

          <button className="mt-4 px-6 py-3 font-raleway font-light bg-gradient-to-r from-[#C29579] via-[#e3c5b5] to-[#C29579] text-black hover:opacity-90 transition">
            <a href="tel:+919999000183">Call Us</a>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-6 py-6 text-xs text-gray-600 dark:text-gray-400 flex flex-col gap-2">
        <div className="flex flex-col sm:hidden gap-2 pb-16">
          <div className="flex flex-row justify-between items-center flex-wrap gap-2">
            <span>Ethical Infrastructure ©2025 All Rights Reserved</span>
            <div className="flex gap-4">
              <a
                href="/Terms&Conditions"
                className="cursor-pointer hover:text-[var(--primary-color)] transition"
              >
                Terms of Use
              </a>
              <a
                href="/Privacy&Policy"
                className="cursor-pointer hover:text-[var(--primary-color)] transition"
              >
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="w-full flex justify-center mt-2">
            <a
              href="https://www.bigwigdigital.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[var(--primary-color)] text-[var(--primary-color)] px-4 py-3 uppercase text-xs tracking-widest text-center"
            >
              Made & Marketed with ❤️ by Bigwig Digital
            </a>
          </div>
        </div>

        <div className="hidden sm:flex flex-row justify-between items-center w-full">
          <span>Ethical Infrastructure ©2025 All Rights Reserved</span>
          <a
            href="https://www.bigwigdigital.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[var(--primary-color)] text-[var(--primary-color)] px-4 py-3 uppercase text-sm tracking-widest text-center"
          >
            Made & Marketed with ❤️ by Bigwig Digital
          </a>
          <div className="flex gap-4">
            <a
              href="/Terms&Conditions"
              className="cursor-pointer hover:text-[var(--primary-color)] transition"
            >
              Terms of Use
            </a>
            <a
              href="/Privacy&Policy"
              className="cursor-pointer hover:text-[var(--primary-color)] transition"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
