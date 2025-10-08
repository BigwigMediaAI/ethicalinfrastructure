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
  FaHome,
  FaInfoCircle,
  FaBuilding,
  FaEnvelope,
  FaBlog,
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
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
    {
      name: "Property",
      icon: <FaBuilding />,
      dropdown: [
        { name: "Buy", path: "/buy" },
        { name: "Sell", path: "/sell" },
        { name: "Lease", path: "/lease" },
      ],
    },
    { name: "Blogs", path: "/blogs", icon: <FaBlog /> },
    { name: "Contact Us", path: "/contact-us", icon: <FaEnvelope /> },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md">
      {/* ===== Top Bar ===== */}
      <div className="hidden bg-[var(--primary-bgColor)] md:flex justify-between items-center px-6 py-2 border-b border-gray-600 text-sm text-white">
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
              className="relative group tracking-widest"
              onMouseEnter={() =>
                setDropdownOpen(item.name === "Property" ? "Property" : null)
              }
              onMouseLeave={() => setDropdownOpen(null)}
            >
              {item.path ? (
                <Link
                  href={item.path}
                  className="hover:text-[var(--hover-color)] transition flex items-center gap-1"
                >
                  {item.name}
                  {item.dropdown && <BiChevronDown className="text-lg" />}
                </Link>
              ) : (
                <span className="cursor-pointer hover:text-[var(--hover-color)] transition flex items-center gap-1">
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
            className="text-black hover:text-[var(--hover-color)] transition cursor-pointer"
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

      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-2/5 h-full bg-[#0a2342] z-50 transform transition-transform duration-300 ease-in-out 
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-700">
          <Image
            src={logo}
            alt="Logo"
            width={140}
            height={40}
            className="invert"
          />
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl"
          >
            <BiX />
          </button>
        </div>

        <nav className="flex flex-col mt-6 space-y-2">
          {navItems.map((item) => (
            <div key={item.name} className="flex flex-col">
              {item.dropdown ? (
                <>
                  <button
                    onClick={() =>
                      setDropdownOpen(
                        dropdownOpen === item.name ? null : item.name
                      )
                    }
                    className="flex items-center gap-2 px-5 py-3 text-white hover:bg-blue-600 rounded transition"
                  >
                    {item.icon} <span>{item.name}</span> <BiChevronDown />
                  </button>

                  {dropdownOpen === item.name && (
                    <ul className="flex flex-col ml-10 mt-1 space-y-1">
                      {item.dropdown.map((drop) => (
                        <li key={drop.name}>
                          <Link
                            href={drop.path}
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center gap-2 text-white hover:text-blue-200 transition px-3 py-2 rounded"
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
                  className="flex items-center gap-2 px-5 py-3 text-white hover:bg-blue-600 rounded transition"
                >
                  {item.icon} <span>{item.name}</span>
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>

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
                  Our social
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
                    <FiMail />
                    webmail@eiplin.com
                  </p>
                  <p className="flex items-center gap-2 mt-2">
                    <MdPhone /> +91 9999000183
                  </p>
                </div>
              </div>
            </div>
          </div>
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
