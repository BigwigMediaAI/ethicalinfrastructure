"use client";
import { FaBars, FaTimes, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import {
  Building,
  Gauge,
  Handshake,
  NotebookPen,
  Users,
  Users2,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { icon: <Gauge size={18} />, label: "Dashboard", to: "/admin" },
    { icon: <Users size={18} />, label: "Leads", to: "/admin/leads" },
    {
      icon: <Users2 size={18} />,
      label: "Brochure Leads",
      to: "/admin/brochure-leads",
    },
    { icon: <NotebookPen size={18} />, label: "Blogs", to: "/admin/blogs" },
    {
      icon: <Building size={18} />,
      label: "Properties",
      to: "/admin/properties",
    },
    { icon: <Handshake />, label: "Sell Requests", to: "/admin/sell-requests" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    router.push("/login");
  };

  return (
    <div className="h-screen flex flex-col lg:flex-row overflow-hidden bg-[#0b0b0b] text-white font-raleway relative">
      {/* ===== MOBILE TOP NAV ===== */}
      <div className="lg:hidden bg-[#111111] flex items-center justify-between px-5 py-4 shadow-md border-b border-gray-800">
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="logo"
            width={40}
            height={40}
            className="object-contain invert"
          />
          <span className="text-lg font-semibold tracking-wide">Admin</span>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white text-2xl"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ===== MOBILE SLIDE-OUT MENU ===== */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-2/5 h-full bg-[#111] z-50 transform transition-transform duration-300 ease-in-out 
          ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <Image
              src={logo}
              alt="logo"
              width={40}
              height={40}
              className="object-contain invert"
            />
            <span className="text-lg font-semibold tracking-wide">Admin</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-white text-2xl"
          >
            <FaTimes />
          </button>
        </div>

        <nav className="flex flex-col mt-6 space-y-1">
          {navItems.map(({ icon, label, to }) => (
            <Link
              key={to}
              href={to}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-6 py-3 text-sm font-medium transition-all duration-200 
                ${
                  pathname === to
                    ? "bg-[var(--primary-color)] text-white shadow-md"
                    : "text-gray-300 hover:bg-[#1e1e1e] hover:text-white"
                }`}
            >
              {icon}
              <span>{label}</span>
            </Link>
          ))}

          {/* Logout Button (Mobile) */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-6 py-3 mt-4 text-sm font-medium text-red-400 hover:text-red-500 border-t border-gray-700"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </nav>
      </div>

      {/* ===== DESKTOP SIDEBAR ===== */}
      <aside className="hidden lg:flex lg:flex-col w-64 bg-[#111111] border-r border-gray-800 shadow-lg p-5 fixed h-full">
        <div className="flex items-center gap-3 mb-8">
          <Image
            src={logo}
            alt="logo"
            width={140}
            height={100}
            className="object-contain invert"
          />
        </div>

        <nav className="flex flex-col gap-1 text-sm font-medium overflow-y-auto flex-1">
          {navItems.map(({ icon, label, to }) => (
            <Link
              key={to}
              href={to}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-md transition-all duration-200 ${
                pathname === to
                  ? "bg-[var(--primary-color)] text-white shadow-md"
                  : "text-gray-400 hover:bg-[#1a1a1a] hover:text-white"
              }`}
            >
              {icon}
              <span>{label}</span>
            </Link>
          ))}
        </nav>

        {/* Logout Button (Desktop) */}
        <button
          onClick={handleLogout}
          className="cursor-pointer flex items-center gap-3 px-4 py-2.5 rounded-md text-sm font-medium text-red-400 hover:text-red-500 transition-all duration-200 border-t border-gray-800"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </aside>

      {/* ===== MAIN CONTENT AREA ===== */}
      <main className="flex-1 lg:ml-64 overflow-y-auto p-5 sm:p-8 bg-[#0b0b0b] text-gray-100 min-h-screen">
        {children}
      </main>
    </div>
  );
}
