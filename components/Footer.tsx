"use client";

import React from "react";
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
import ButtonFill from "./Button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[var(--white)] text-[var(--black)] text-sm">
      {/* Top horizontal line */}
      <div className="border-t border-[var(--text)] w-full" />

      {/* Logo and CONTACTS Title */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 sm:px-12 lg:px-6">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-4">
            <div className="w-16 border-t border-[var(--primary-color)]" />
            <Image
              src={logo}
              alt="Logo"
              className="w-44 h-auto object-contain logo-invert"
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
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between px-6 sm:px-12 lg:px-6 gap-8 pb-10">
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
                  <Link
                    href={item.path}
                    className="cursor-pointer hover:text-[var(--primary-color)] transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          ))}

          {/* Google Map iframe below navigation */}
          <div className="col-span-3 mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2037326384284!2d77.0934439!3d28.4734105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18d7d137311f%3A0xc0cbc38c4452175d!2sETHICAL%20INFRASTRUCTURES%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1759831704667!5m2!1sen!2sin"
              width="100%"
              height="150"
              className="border-0 rounded"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Right: Contact Info */}
        <div className="space-y-4 lg:text-right">
          <h3 className="text-lg">Gurugram, Haryana</h3>
          <p className="text-[var(--text)]">
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

          <ButtonFill
            text="Call Us"
            onClick={() => (window.location.href = "tel:+919999000183")}
            className="mt-4"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-6 py-6 text-xs text-[var(--text)] flex flex-col gap-2">
        <div className="flex flex-col sm:hidden gap-2 pb-16">
          <div className="flex flex-row justify-between items-center flex-wrap gap-2">
            <span>Ethical Infrastructure ©2025 All Rights Reserved</span>
            <div className="flex gap-4">
              <Link
                href="/Terms&Conditions"
                className="cursor-pointer hover:text-[var(--primary-color)] transition"
              >
                Terms of Use
              </Link>
              <Link
                href="/Privacy&Policy"
                className="cursor-pointer hover:text-[var(--primary-color)] transition"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="w-full flex justify-center mt-2">
            <Link
              href="https://www.bigwigdigital.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[var(--primary-color)] text-[var(--primary-color)] px-4 py-3 uppercase text-xs tracking-widest text-center"
            >
              Made & Marketed with ❤️ by Bigwig Digital
            </Link>
          </div>
        </div>

        <div className="hidden sm:flex flex-row justify-between items-center w-full">
          <span>Ethical Infrastructure ©2025 All Rights Reserved</span>
          <Link
            href="https://www.bigwigdigital.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[var(--primary-color)] text-[var(--primary-color)] px-4 py-3 uppercase text-sm tracking-widest text-center"
          >
            Made & Marketed with ❤️ by Bigwig Digital
          </Link>
          <div className="flex gap-4">
            <Link
              href="/Terms&Conditions"
              className="cursor-pointer hover:text-[var(--primary-color)] transition"
            >
              Terms of Use
            </Link>
            <Link
              href="/Privacy&Policy"
              className="cursor-pointer hover:text-[var(--primary-color)] transition"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
