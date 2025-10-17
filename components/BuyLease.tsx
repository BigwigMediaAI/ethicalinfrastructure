"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import buyImage from "../assets/buy.svg";
import sellImage from "../assets/sale.svg";
import leaseImage from "../assets/lease.svg";

export default function BuyLeaseSection() {
  const [activeTab, setActiveTab] = useState<"buy" | "sell" | "lease">("buy");
  const router = useRouter();

  const images = {
    buy: buyImage,
    sell: sellImage,
    lease: leaseImage,
  };

  // 🔁 Auto-switch images on mobile view
  useEffect(() => {
    if (window.innerWidth >= 768) return; // only for mobile

    const tabs: ("buy" | "sell" | "lease")[] = ["buy", "sell", "lease"];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % tabs.length;
      setActiveTab(tabs[index]);
    }, 2500); // switch every 2.5s

    return () => clearInterval(interval);
  }, []);

  const handleRedirect = (path: string) => {
    router.push(path);
  };

  return (
    <div className="bg-[var(--white)] text-[var(--black)] py-12 relative">
      <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 items-stretch">
        {/* LEFT SECTION */}
        <div className="border border-gray-700 h-auto md:h-[300px] my-auto p-6 md:p-12 flex flex-col justify-center">
          <div className="space-y-4 w-full">
            {/* ===== MOBILE BUTTONS ===== */}
            <div className="flex md:hidden justify-center gap-4 mb-6">
              {[
                { label: "BUY", path: "/buy" },
                { label: "SELL", path: "/sell" },
                { label: "LEASE", path: "/lease" },
              ].map(({ label, path }) => (
                <button
                  key={label}
                  onClick={() => handleRedirect(path)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
                    activeTab === label.toLowerCase()
                      ? "bg-[var(--black)] text-[var(--white)] border-[var(--title)]"
                      : "bg-transparent border-gray-400 text-[var(--black)]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* ===== DESKTOP HOVER & CLICK ===== */}
            <div className="hidden md:block space-y-4">
              {/* BUY */}
              <div
                className="relative flex items-center cursor-pointer group"
                onMouseEnter={() => setActiveTab("buy")}
                onClick={() => handleRedirect("/buy")}
              >
                <h2
                  className={`text-5xl tracking-wider transition-colors duration-300 ${
                    activeTab === "buy" ? "text-[var(--title)] font-bold" : ""
                  }`}
                >
                  BUY
                </h2>
                <div
                  className={`relative ml-6 h-[1px] bg-[var(--black)] transition-all duration-300 ${
                    activeTab === "buy" ? "w-32" : "w-6"
                  }`}
                >
                  <span className="absolute -right-2 md:-top-4 text-[var(--black)] text-xl">
                    &gt;
                  </span>
                </div>
              </div>

              {/* SELL */}
              <div
                className="relative flex items-center cursor-pointer group"
                onMouseEnter={() => setActiveTab("sell")}
                onClick={() => handleRedirect("/sell")}
              >
                <h2
                  className={`text-5xl tracking-wider transition-colors duration-300 ${
                    activeTab === "sell" ? "text-[var(--title)] font-bold" : ""
                  }`}
                >
                  SELL
                </h2>
                <div
                  className={`relative ml-6 h-[1px] bg-[var(--black)] transition-all duration-300 ${
                    activeTab === "sell" ? "w-32" : "w-6"
                  }`}
                >
                  <span className="absolute -right-2 md:-top-4 text-[var(--black)] text-xl">
                    &gt;
                  </span>
                </div>
              </div>

              {/* LEASE */}
              <div
                className="relative flex items-center cursor-pointer group"
                onMouseEnter={() => setActiveTab("lease")}
                onClick={() => handleRedirect("/lease")}
              >
                <h2
                  className={`text-5xl tracking-wider transition-colors duration-300 ${
                    activeTab === "lease" ? "text-[var(--title)] font-bold" : ""
                  }`}
                >
                  LEASE
                </h2>
                <div
                  className={`relative ml-6 h-[1px] bg-[var(--black)] transition-all duration-300 ${
                    activeTab === "lease" ? "w-32" : "w-6"
                  }`}
                >
                  <span className="absolute -right-2 md:-top-4 text-[var(--black)] text-xl">
                    &gt;
                  </span>
                </div>
              </div>
            </div>

            <p className="text-[var(--text)] mt-6 text-sm md:text-base leading-relaxed max-w-md text-center md:text-left">
              Discover, sell, or lease premium properties in Gurugram — your
              trusted partner for every real estate move.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="min-h-[300px] md:min-h-[450px] mt-8 md:mt-0">
          <Image
            src={images[activeTab]}
            alt={activeTab}
            className="w-full h-full object-cover transition-all duration-700"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
}
