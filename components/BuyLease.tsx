"use client";
import { useState } from "react";
import sellImage from "../assets/sell.jpg"; // replace with your image
import buyImage from "../assets/buy.jpg"; // replace with your image
import leaseImage from "../assets/lease.jpg";
import Image from "next/image";

export default function BuyLeaseSection() {
  const [activeTab, setActiveTab] = useState<"buy" | "sell" | "lease">("buy");

  const images = {
    buy: buyImage,
    sell: sellImage,
    lease: leaseImage,
  };

  return (
    <div className="bg-[var(--white)] text-[var(--black)] py-12 relative">
      <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 items-stretch">
        {/* Left Text Block */}
        <div className=" border border-gray-700 h-[300px] my-auto p-6 md:p-12 flex items-center">
          <div className="space-y-4 w-full">
            {/* BUY Row */}
            <div
              className="relative flex items-center cursor-pointer group"
              onMouseEnter={() => setActiveTab("buy")}
            >
              <h2
                className={`text-5xl  tracking-wider transition-colors ${
                  activeTab === "buy" ? "text-[var(--black)] " : ""
                }`}
              >
                <a href="/buy">BUY</a>
              </h2>
              <div
                className={`relative ml-6 h-[1px] bg-[var(--black)] transition-all duration-300 ${
                  activeTab === "buy" ? "w-32" : "w-6"
                }`}
              >
                <span
                  className={`absolute -right-2 md:-top-4 -top-[13px] text-[var(--black)]  text-xl transition-opacity duration-300 ${
                    activeTab === "buy" ? "opacity-100" : "opacity-100"
                  }`}
                >
                  &gt;
                </span>
              </div>
            </div>

            {/* SELL Row */}
            <div
              className="relative flex items-center cursor-pointer group"
              onMouseEnter={() => setActiveTab("sell")}
            >
              <h2
                className={`text-5xl font-raleway font-thin tracking-wider transition-colors ${
                  activeTab === "sell" ? "text-[var(--black)] " : ""
                }`}
              >
                <a href="/sell">SELL</a>
              </h2>
              <div
                className={`relative ml-6 h-[1px] bg-[var(--black)] transition-all duration-300 ${
                  activeTab === "sell" ? "w-32" : "w-6"
                }`}
              >
                <span
                  className={`absolute -right-2 md:-top-4 -top-[13px] text-[var(--black)] text-xl transition-opacity duration-300 ${
                    activeTab === "sell" ? "opacity-100" : "opacity-100"
                  }`}
                >
                  &gt;
                </span>
              </div>
            </div>

            {/* Lease Row */}
            <div
              className="relative flex items-center cursor-pointer group"
              onMouseEnter={() => setActiveTab("lease")}
            >
              <h2
                className={`text-5xl font-raleway font-thin tracking-wider transition-colors ${
                  activeTab === "lease" ? "text-[var(--black)] " : ""
                }`}
              >
                <a href="/lease">LEASE</a>
              </h2>
              <div
                className={`relative ml-6 h-[1px] bg-[var(--black)] transition-all duration-300 ${
                  activeTab === "lease" ? "w-32" : "w-6"
                }`}
              >
                <span
                  className={`absolute -right-2 md:-top-4 -top-[13px] text-[var(--black)] text-xl transition-opacity duration-300 ${
                    activeTab === "lease" ? "opacity-100" : "opacity-100"
                  }`}
                >
                  &gt;
                </span>
              </div>
            </div>

            <p className="text-[var(--text)] mt-8 text-sm md:text-base leading-relaxed max-w-md">
              Find your next home, secure a rental, or make your first smart
              investment. Our curated portfolio covers all your real estate
              goals in Dubai.
            </p>
          </div>
        </div>

        {/* Right Image Block */}
        <div className="min-h-[300px] md:min-h-[450px]">
          <Image
            src={images[activeTab]}
            alt={activeTab}
            className="w-full h-full object-cover"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
}
