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
import { FiMail, FiUser } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { MdPhone } from "react-icons/md";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full  text-white">
      {/* ===== Top Bar ===== */}
      <div className="hidden bg-[#0a2342] md:flex justify-between items-center px-6 py-2 border-b border-gray-600 text-sm">
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
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <FiMail /> contact@mail.com
          </span>
          <span className="flex items-center gap-2">
            <BsWhatsapp /> +1 408 167 1234
          </span>
        </div>
      </div>

      {/* ===== Main Navbar ===== */}
      <nav className="flex items-center justify-between px-6 py-2 relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Logo" width={100} height={40} priority />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {[
            "Home",
            "Demos",
            "Lists",
            "Property",
            "Pages",
            "Elements",
            "Search",
          ].map((item, i) => (
            <li
              key={i}
              className="hover:text-blue-400 transition cursor-pointer text-black"
            >
              <Link href={`/${item.toLowerCase()}`}>{item}</Link>
            </li>
          ))}
        </ul>

        {/* Contact + Add Listing */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-black">
            <MdPhone size={20} />
            <span>800-555-6789</span>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white font-semibold">
            Add Listing
          </button>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-1"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>

        {/* ===== Mobile Menu ===== */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#0a2342] flex flex-col items-center py-4 gap-4 md:hidden border-t border-gray-700 z-50">
            <ul className="flex flex-col items-center gap-4 text-lg">
              {[
                "Home",
                "Demos",
                "Lists",
                "Property",
                "Pages",
                "Elements",
                "Search",
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <button className="bg-blue-500 px-4 py-2 rounded text-white font-semibold">
              Add Listing
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
