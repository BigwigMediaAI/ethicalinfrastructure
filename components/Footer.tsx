"use client";

import { Mail, Phone, MapPin, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#021A33] text-gray-300 pt-16 pb-6">
      <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Left About Section */}
        <div className="col-span-2 space-y-4">
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

          <div className="space-y-3 text-sm">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>+91-9999000183</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span>webmail@eiplin.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span>
                First Floor, A26/12 B, Golf Course Rd, A Block, DLF Phase 1,
                Gurugram, Haryana 122002
              </span>
            </div>
          </div>
        </div>

        {/* Featured Houses */}
        <div>
          <h3 className="font-semibold text-white mb-4">Featured Houses</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <Home size={16} />
              <span>Villa</span>
            </li>
            <li className="flex items-center space-x-2">
              <Home size={16} />
              <span>Commercial</span>
            </li>
            <li className="flex items-center space-x-2">
              <Home size={16} />
              <span>Farm Houses</span>
            </li>
            <li className="flex items-center space-x-2">
              <Home size={16} />
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
              <Link href="#">Sitemap</Link>
            </li>
            <li>
              <Link href="#">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Map Location (aligned at far right) */}
        <div>
          <h3 className="font-semibold text-white mb-4">
            Ethical Infrastructure Location
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2037326384284!2d77.0934439!3d28.4734105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18d7d137311f%3A0xc0cbc38c4452175d!2sETHICAL%20INFRASTRUCTURES%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1759831704667!5m2!1sen!2sin"
            width="100%"
            height="180"
            allowFullScreen
            loading="lazy"
            className="rounded-lg border-0"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-11/12 md:w-5/6 mx-auto mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-center text-sm">
        <p>
          Copyright © 2025{" "}
          <span className="text-blue-600">Ethical Infrastructure</span>. All
          Rights Reserved.
        </p>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="#">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link href="#">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link href="#">
            <i className="fab fa-linkedin-in"></i>
          </Link>
          <Link href="#">
            <i className="fab fa-whatsapp"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
}
