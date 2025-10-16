"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaHome,
  FaInfoCircle,
  FaBuilding,
  FaEnvelope,
  FaBlog,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { MdPhone } from "react-icons/md";
import { BiMenu, BiX, BiChevronDown, BiChevronRight } from "react-icons/bi";
import logo from "../assets/logo.png";
import ThemeToggle from "./Theme-toggle";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidePanelOpen, setSidePanelOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
    {
      name: "Property",
      icon: <FaBuilding />,
      dropdown: [
        {
          name: "Buy",
          path: "/buy",
          subDropdown: [
            { name: "Builder Floor", path: "/buy?type=builder-floor" },
            { name: "Villa", path: "/buy?type=villa" },
            { name: "Apartment", path: "/buy?type=apartment" },
            { name: "Farmhouse", path: "/buy?type=farmhouse" },
          ],
        },
        { name: "Sell", path: "/sell" },
        { name: "Lease", path: "/lease" },
      ],
    },
    { name: "Blogs", path: "/blogs", icon: <FaBlog /> },
    { name: "Contact Us", path: "/contact-us", icon: <FaEnvelope /> },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-[var(--white)] shadow-md">
      {/* ===== Top Bar ===== */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 border-b border-gray-600 text-sm text-[var(--black)]">
        <div className="flex items-center gap-4">
          <Link
            href="https://www.facebook.com/profile.php?id=61581857552733"
            target="_blank"
          >
            <FaFacebookF className="cursor-pointer hover:text-[var(--primary-color)] transition" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/109224060/admin/dashboard/"
            target="_blank"
          >
            <FaLinkedinIn className="cursor-pointer hover:text-blue-400 transition" />
          </Link>
          <Link
            href="https://www.instagram.com/ethical.infrastructure?igsh=MXh4NWVpbmw5eTg0eQ%3D%3D&utm_source=qr"
            target="_blank"
          >
            <FaInstagram className="cursor-pointer hover:text-pink-400 transition" />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UC_PoUpH4pZvbWr7oTE8-BqQ"
            target="_blank"
          >
            <FaYoutube className="cursor-pointer hover:text-red-600 transition" />
          </Link>
          <Link
            href="https://maps.app.goo.gl/Z4fHRJ9yCoNWc8119"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMapMarkedAlt className="cursor-pointer hover:text-green-600 transition" />
          </Link>
        </div>

        <div className="flex items-center gap-7">
          <Link
            href="mailto:webmail@eiplin.com"
            className="flex items-center gap-2"
          >
            info@eipl.co
          </Link>
          <Link href="tel:+919999000183" className="flex items-center gap-2">
            <FaPhoneAlt /> +91 9999000183
          </Link>
        </div>
      </div>

      {/* ===== Main Navbar ===== */}
      <nav className="flex items-center justify-between px-6 py-2 relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Logo"
            width={120}
            height={45}
            priority
            className="logo-invert"
          />
        </Link>

        {/* ===== Desktop Menu ===== */}
        <ul className="hidden md:flex gap-8 font-medium ">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="relative group tracking-widest py-8"
              onMouseEnter={() =>
                setDropdownOpen(item.name === "Property" ? "Property" : null)
              }
              onMouseLeave={() => setDropdownOpen(null)}
            >
              {item.path ? (
                <Link
                  href={item.path}
                  className={`flex items-center gap-1 transition-all ${
                    pathname === item.path
                      ? "text-[var(--hover-color)] font-semibold"
                      : "text-[var(--black)] hover:text-[var(--hover-color)]"
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <span
                  className={`cursor-pointer flex items-center gap-1 transition-all ${
                    dropdownOpen === "Property"
                      ? "text-[var(--hover-color)] font-semibold"
                      : "text-[var(--black)] hover:text-[var(--hover-color)]"
                  }`}
                >
                  {item.name}
                  <BiChevronDown className="text-lg" />
                </span>
              )}

              {/* Dropdown */}
              {item.dropdown && dropdownOpen === "Property" && (
                <ul className="absolute left-0 top-full bg-[var(--white)] shadow-lg  w-48 z-50">
                  {item.dropdown.map((drop) => (
                    <li
                      key={drop.name}
                      className="relative group/submenu hover:bg-[var(--featured)]"
                    >
                      {/* --- Full-row clickable link --- */}
                      <Link
                        href={drop.path}
                        className="flex justify-between items-center px-4 py-2 text-sm text-[var(--text)] hover:text-[var(--hover-color)] w-full"
                      >
                        <span>{drop.name}</span>

                        {/* --- Arrow for sub-dropdown --- */}
                        {drop.subDropdown && (
                          <BiChevronRight className="ml-1 cursor-pointer group-hover/submenu:text-[var(--hover-color)]" />
                        )}
                      </Link>

                      {/* --- Second-level dropdown --- */}
                      {drop.subDropdown && (
                        <ul className="absolute left-full top-2 bg-[var(--white)] shadow-lg  w-44 opacity-0 group-hover/submenu:opacity-100 invisible group-hover/submenu:visible translate-x-1 group-hover/submenu:translate-x-0 transition-all duration-200 ease-in-out z-[60]">
                          {drop.subDropdown.map((sub) => (
                            <li key={sub.name}>
                              <Link
                                href={sub.path}
                                className="block px-4 py-2 text-sm text-[var(--text)] hover:bg-[var(--featured)] hover:text-[var(--hover-color)]"
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setSidePanelOpen(true)}
            className="text-[var(--black)] hover:text-[var(--hover-color)] transition"
          >
            <BiMenu size={32} />
          </button>
        </div>

        {/* ===== Mobile Menu Button ===== */}
        <div className="flex items-center gap-5 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[var(--black)]"
          >
            <BiMenu size={36} />
          </button>
        </div>
      </nav>

      {/* ===== Mobile Fullscreen Menu ===== */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-2/5 h-full bg-[#0a2342] z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
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
                    className="flex items-center gap-2 px-5 py-3 text-white hover:bg-[var(--primary-color)] rounded transition"
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
                            className={`flex items-center gap-2 text-white transition px-3 py-2 rounded ${
                              pathname === drop.path
                                ? "text-[var(--hover-color)] font-semibold"
                                : "hover:text-blue-200"
                            }`}
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
                  className={`flex items-center gap-2 px-5 py-3 text-white rounded transition ${
                    pathname === item.path
                      ? "bg-[var(--primary-color)] text-[var(--hover-color)] font-semibold"
                      : "hover:bg-[var(--primary-color)]"
                  }`}
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
          <div className="relative h-full w-80 md:w-96 bg-[var(--desktop-sidebar)] shadow-2xl animate-slideIn">
            <button
              onClick={() => setSidePanelOpen(false)}
              className="absolute top-6 right-4 text-[var(--black)]"
            >
              <BiX size={32} />
            </button>

            <div className="p-6 pt-12 flex flex-col gap-4 overflow-y-auto h-full">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--title)]">
                  About Us
                </h3>
                <p className="text-[var(--text)] text-md leading-relaxed">
                  ETHICAL INFRASTRUCTURES PRIVATE LIMITED delivers personalized,
                  cost-effective real estate solutions with a focus on customer
                  satisfaction. Our dedicated team provides expert guidance,
                  site visits, and market updates to ensure seamless, informed,
                  and tailored property transactions for every client.
                </p>
              </div>

              <hr />

              <div>
                <h3 className="text-2xl font-semibold text-[var(--title)] mb-4">
                  Our social
                </h3>
                <div className="flex items-center gap-4">
                  <FaFacebookF className="cursor-pointer text-[var(--text)] hover:text-[var(--primary-color)] transition text-2xl" />
                  <FaLinkedinIn className="cursor-pointer text-[var(--text)] hover:text-blue-400 transition text-2xl" />
                  <FaInstagram className="cursor-pointer text-[var(--text)] hover:text-pink-400 transition text-2xl" />
                  <FaYoutube className="cursor-pointer text-[var(--text)] hover:text-red-600 transition text-2xl" />
                </div>
              </div>

              <hr />

              <div>
                <h3 className="text-2xl font-semibold text-[var(--title)] mb-4">
                  Connect with us
                </h3>
                <div className="text-[var(--text)] text-md">
                  <p className="flex items-center gap-2">
                    <FiMail />
                    info@eipl.co
                  </p>
                  <Link
                    href="tel:+919999000183"
                    className="flex items-center gap-2 mt-2"
                  >
                    <MdPhone /> +91 9999000183
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== Animations ===== */}
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
