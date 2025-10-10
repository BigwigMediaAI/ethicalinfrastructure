"use client";

import { Mail, Phone, MapPin, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#021A33] text-gray-300 pt-16 pb-16 md:pb-6">
      <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Left About Section */}
        <div className="col-span-2 md:col-span-1 space-y-4">
          <div className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="Ethical Infrastructure Logo"
              width={120}
              height={120}
              className="invert"
            />
          </div>
          {/* <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste sit
            esse earum a iure ut necessitatibus. Vero quas eos sapiente vitae
            optio, eligendi officiis neque.
          </p> */}
          <div className="flex items-center gap-4">
            <Link
              href="https://www.facebook.com/profile.php?id=61581857552733"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="cursor-pointer hover:text-blue-600 transition text-2xl" />
            </Link>

            <Link
              href="https://www.linkedin.com/company/109224060/admin/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="cursor-pointer hover:text-blue-400 transition text-2xl" />
            </Link>

            <Link
              href="https://www.instagram.com/ethical.infrastructure?igsh=MXh4NWVpbmw5eTg0eQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="cursor-pointer hover:text-pink-400 transition text-2xl" />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UC_PoUpH4pZvbWr7oTE8-BqQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="cursor-pointer hover:text-red-600 transition text-2xl" />
            </Link>
          </div>
        </div>

        {/* Featured Houses */}
        <div>
          <h3 className="font-semibold text-white mb-4">Featured Houses</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <span>Villa</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>Commercial</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>Farm Houses</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>Apartments</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#">Privacy & Policy</Link>
            </li>
            <li>
              <Link href="#">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link href="/team">Team</Link>
            </li>
          </ul>
        </div>

        {/* Map Location (aligned at far right) */}

        <div className="space-y-3 text-sm col-span-2">
          <div className="flex items-center space-x-2">
            <Phone size={16} />
            <span>+91-9999000183</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={16} />
            <span>webmail@eiplin.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={20} /> {/* Increased size from 16 → 20 */}
            <span>
              First Floor, A26/12 B, Golf Course Rd, A Block, DLF Phase 1,
              Gurugram, Haryana 122002
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-11/12 md:w-5/6 mx-auto mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
        <p>
          Copyright © 2025{" "}
          <span className="text-[var(--primary-color)]">
            Ethical Infrastructure
          </span>
          . All Rights Reserved.
        </p>
        <p>
          Made & Marketed by{" "}
          <span className="text-[var(--primary-color)]">
            <Link href="https://www.bigwigmediadigital.com/">
              Bigwig Media Digital
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
}
