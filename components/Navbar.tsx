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
import { BiMenu, BiX, BiChevronDown } from "react-icons/bi";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidePanelOpen, setSidePanelOpen] = useState(false);

  // 👇 fix: allow string or null instead of boolean
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Property",
      dropdown: [
        { name: "Buy", path: "/property/buy" },
        { name: "Sell", path: "/property/sell" },
        { name: "Lease", path: "/property/lease" },
      ],
    },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md">
      {/* ===== Top Bar ===== */}
      <div className="hidden bg-[#0a2342] md:flex justify-between items-center px-6 py-2 border-b border-gray-600 text-sm text-white">
        <div className="flex items-center gap-4">
          <FaFacebookF className="cursor-pointer hover:text-blue-400" />
          <FaLinkedinIn className="cursor-pointer hover:text-blue-400" />
          <FaPinterestP className="cursor-pointer hover:text-blue-400" />
          <FaVimeoV className="cursor-pointer hover:text-blue-400" />
          <FaInstagram className="cursor-pointer hover:text-blue-400" />
          <FaTwitter className="cursor-pointer hover:text-blue-400" />
        </div>

        <div className="flex items-center gap-7">
          <Link
            href="mailto:contact@mail.com"
            className="flex items-center gap-2"
          >
            contact@mail.com
          </Link>
          <Link
            href="https://wa.me/+919999000172"
            className="flex items-center gap-2"
            target="_blank"
          >
            <BsWhatsapp /> +919999000172
          </Link>
        </div>
      </div>

      {/* ===== Main Navbar ===== */}
      <nav className="flex items-center justify-between px-6 py-2 relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Logo" width={120} height={45} priority />
        </Link>

        {/* ===== Desktop Menu ===== */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="relative group"
              onMouseEnter={() =>
                setDropdownOpen(item.name === "Property" ? "Property" : null)
              }
              onMouseLeave={() => setDropdownOpen(null)}
            >
              {item.path ? (
                <Link
                  href={item.path}
                  className="hover:text-blue-500 transition flex items-center gap-1"
                >
                  {item.name}
                  {item.dropdown && <BiChevronDown className="text-lg" />}
                </Link>
              ) : (
                <span className="cursor-pointer hover:text-blue-500 transition flex items-center gap-1">
                  {item.name}
                  {item.dropdown && <BiChevronDown className="text-lg" />}
                </span>
              )}

              {/* Dropdown */}
              {item.dropdown && dropdownOpen === "Property" && (
                <ul className="absolute left-0 top-full bg-white shadow-lg rounded-lg overflow-hidden w-40">
                  {item.dropdown.map((drop) => (
                    <li key={drop.name}>
                      <Link
                        href={drop.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 transition"
                      >
                        {drop.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setSidePanelOpen(true)}
            className="text-black hover:text-blue-600 transition"
          >
            <BiMenu size={32} />
          </button>
        </div>

        {/* ===== Mobile Menu Button ===== */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black"
        >
          <BiMenu size={36} />
        </button>
      </nav>

      {/* ===== Mobile Fullscreen Menu ===== */}
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
              <li key={item.name} className="text-center">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setDropdownOpen(
                          dropdownOpen === item.name ? null : item.name
                        )
                      }
                      className="flex items-center gap-2 hover:text-blue-400"
                    >
                      {item.name} <BiChevronDown />
                    </button>

                    {dropdownOpen === item.name && (
                      <ul className="mt-2 flex flex-col gap-2 text-lg">
                        {item.dropdown.map((drop) => (
                          <li key={drop.name}>
                            <Link
                              href={drop.path}
                              onClick={() => setMenuOpen(false)}
                              className="block hover:text-blue-300"
                            >
                              {drop.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.path ?? "/"}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-blue-400"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

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
