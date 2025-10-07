"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaVimeoV,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { MdPhone } from "react-icons/md";
import { BiMenu, BiX } from "react-icons/bi";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // for mobile
  const [sidePanelOpen, setSidePanelOpen] = useState(false); // for desktop

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Property", path: "/property" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md">
      {/* ===== Top Bar ===== */}
      <div className="hidden bg-[#0a2342] md:flex justify-between items-center px-6 py-2 border-b border-gray-600 text-sm text-white">
        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <FaFacebookF className="cursor-pointer hover:text-blue-400" />
          <FaLinkedinIn className="cursor-pointer hover:text-blue-400" />
          <FaPinterestP className="cursor-pointer hover:text-blue-400" />
          <FaVimeoV className="cursor-pointer hover:text-blue-400" />
          <FaInstagram className="cursor-pointer hover:text-blue-400" />
          <FaTwitter className="cursor-pointer hover:text-blue-400" />
        </div>

        {/* Contact Info */}
        <div className="flex items-center gap-7">
          <span className="flex items-center gap-2">
            <Link href="mailto:contact@mail.com">contact@mail.com</Link>
          </span>
          <span className="flex items-center gap-2">
            <Link
              href="https://wa.me/+919999000183"
              className="flex items-center gap-2"
              target="blank"
            >
              <BsWhatsapp />
              +919999000183
            </Link>
          </span>
        </div>
      </div>

      {/* ===== Main Navbar ===== */}
      <nav className="flex items-center justify-between px-6 py-1 relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Logo" width={120} height={45} priority />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className="hover:text-blue-500 transition text-black"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="hidden md:flex items-center gap-4">
          {/* Desktop Slide Menu Button */}
          <button
            onClick={() => setSidePanelOpen(true)}
            className="text-black hover:text-blue-600 transition"
          >
            <BiMenu size={32} />
          </button>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex justify-center items-center text-black"
        >
          <BiMenu size={36} />
        </button>
      </nav>

      {/* ===== Mobile Menu (Full View) ===== */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#0a2342]/95 flex flex-col items-center justify-center gap-6 text-white z-50">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-5 text-white"
          >
            <BiX size={40} />
          </button>
          <ul className="flex flex-col items-center gap-6 text-xl">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-blue-400 transition flex items-center gap-2"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-4 mt-8">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      )}

      {/* ===== Desktop Side Panel ===== */}
      {sidePanelOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
          {/* Create right gap using margin */}
          <div className="relative h-full w-80 md:w-96 bg-white shadow-2xl animate-slideIn">
            <button
              onClick={() => setSidePanelOpen(false)}
              className="absolute top-6 right-4 text-black"
            >
              <BiX size={32} />
            </button>

            <div className="p-6 pt-12 flex flex-col gap-4 overflow-y-auto h-full">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[#0a2342]">
                  About Us
                </h3>
                <p className="text-gray-600 text-md leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  dolorem quaerat libero optio fuga dolores dicta neque nesciunt
                  culpa aspernatur ipsa harum quae, rem dolorum temporibus
                  excepturi reprehenderit quas, consectetur officiis ut impedit
                  esse tenetur animi qui! Earum, delectus sapiente?
                </p>
              </div>

              <hr />

              <div>
                <h3 className="text-2xl font-semibold text-[#0a2342] mb-4">
                  We are social
                </h3>
                <div className="flex gap-3  text-xl text-gray-600 mb-5">
                  <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
                  <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                  <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
                  <FaTwitter className="hover:text-sky-500 cursor-pointer" />
                </div>
              </div>
              <hr />

              <div>
                <h3 className="text-2xl font-semibold text-[#0a2342] mb-4">
                  Connect with us
                </h3>
                <div className="text-gray-700 text-md">
                  <p className="flex items-center gap-2">
                    <FiMail /> contact@mail.com
                  </p>
                  <p className="flex items-center gap-2 mt-2">
                    <MdPhone /> +1 408 167 1234
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== Simple Animation ===== */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slideIn {
          animation: slideIn 0.4s ease forwards;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
