"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, Home } from "lucide-react";
import banner from "../../../assets/buy-banner.jpg";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import ContactInfo from "../../../components/ContactInfo";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import ContactSidebar from "../../../components/ContactSidebar";
import ButtonFill from "../../../components/Button";

interface Property {
  _id: string;
  title: string;
  slug: string;
  type?: string;
  location?: string;
  price?: number | null;
  images: string[];
  purpose?: string;
}

export default function BuyPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const buyRef = useRef<HTMLDivElement | null>(null);

  const filterOptions = [
    { name: "All", value: "all" },
    { name: "Builder Floor", value: "builder-floor" },
    { name: "Apartment", value: "apartment" },
    { name: "Villa", value: "villa" },
    { name: "Farmhouses", value: "farmhouse" },
  ];

  const typeFromQuery = searchParams.get("type") || "all";
  const [selectedType, setSelectedType] = useState(typeFromQuery.toLowerCase());
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 9;

  // Fetch properties
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/property`)
      .then((res) => res.json())
      .then((data) => {
        const buyProperties = data.filter(
          (p: Property) => p.purpose?.toLowerCase() === "buy"
        );
        setProperties(buyProperties);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Sync query param -> selectedType
  useEffect(() => {
    const queryType = searchParams.get("type") || "all";
    setSelectedType(queryType.toLowerCase());
    setCurrentPage(1);
  }, [searchParams]);

  // Filter properties based on selectedType
  const filtered =
    selectedType === "all"
      ? properties
      : properties.filter(
          (p) => p.type?.replace(/\s+/g, "-").toLowerCase() === selectedType
        );

  // Pagination
  const totalPages = Math.ceil(filtered.length / propertiesPerPage);
  const startIdx = (currentPage - 1) * propertiesPerPage;
  const paginatedProperties = filtered.slice(
    startIdx,
    startIdx + propertiesPerPage
  );

  // Scroll to property section
  const scrollToNext = () => {
    if (buyRef.current) {
      const yOffset = -50;
      const y =
        buyRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Generate page numbers (with ellipsis)
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 3;

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > maxVisible + 1) pages.push("...");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - maxVisible) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[70vh] bg-black text-white flex items-center justify-center">
        <Image
          src={banner}
          alt="Goa Homes"
          fill
          className="object-cover opacity-70"
        />
        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest">
            Find Your Dream Home
          </h1>
          <p className="mt-4 text-lg tracking-widest">
            Builder Floors • Apartments • Villas • Farmhouses
          </p>
          <button
            onClick={scrollToNext}
            className="mt-10 animate-bounce border rounded-full w-fit px-1 py-2 mx-auto cursor-pointer"
          >
            <span className="text-3xl">↓</span>
          </button>
        </motion.div>
      </div>

      {/* Filter Buttons */}
      <motion.div
        className="sticky top-0 bg-[var(--desktop-sidebar)] shadow-md z-20 flex gap-4 p-4 justify-center tracking-widest"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
        }}
      >
        {filterOptions.map((opt) => (
          <motion.button
            key={opt.value}
            onClick={() => {
              setSelectedType(opt.value);
              setCurrentPage(1);
              router.push(`/buy?type=${opt.value}`, { scroll: false });
            }}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              selectedType === opt.value
                ? "bg-[var(--primary-color)] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {opt.name}
          </motion.button>
        ))}
      </motion.div>

      {/* Property List */}
      <div ref={buyRef} className="py-12">
        {loading ? (
          <p className="text-center py-20 text-gray-500">
            Loading properties...
          </p>
        ) : paginatedProperties.length === 0 ? (
          <div className="text-center py-20 text-gray-500 col-span-full tracking-widest">
            <h2 className="text-2xl font-semibold mb-2">
              No properties available
            </h2>
          </div>
        ) : (
          <>
            <motion.div
              className="w-11/12 md:w-5/6 mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 tracking-widest"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              {paginatedProperties.map((p) => (
                <motion.div
                  key={p._id}
                  className="overflow-hidden shadow-md hover:shadow-xl transition bg-[var(--desktop-sidebar)] rounded"
                  variants={{
                    hidden: { opacity: 0, scale: 0.9, y: 30 },
                    visible: { opacity: 1, scale: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative h-64 w-full">
                    {p.images?.[0] ? (
                      <Image
                        src={p.images[0]}
                        alt={p.title}
                        fill
                        className="object-cover rounded"
                        unoptimized
                      />
                    ) : (
                      <div className="h-64 flex items-center justify-center bg-gray-100 text-gray-400">
                        No Image
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <h3 className="font-bold text-[var(--primary-color)] text-lg line-clamp-1">
                      {p.title}
                    </h3>
                    {p.location && (
                      <p className="flex items-center text-sm mt-1">
                        <MapPin size={16} className="mr-1" /> {p.location}
                      </p>
                    )}
                    {p.price !== null && (
                      <p className="mt-1 font-semibold text-[var(--text)]">
                        ₹ {p.price?.toLocaleString()}
                      </p>
                    )}
                    {p.type && (
                      <p className="mt-1 text-sm text-gray-600 flex items-center">
                        <Home size={16} className="mr-1" /> {p.type}
                      </p>
                    )}

                    <ButtonFill
                      onClick={() => router.push(`/buy/${p.slug}`)}
                      text="View Details"
                      className="w-full mt-4"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-10">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                  className="px-3 py-2 rounded border bg-white hover:bg-gray-100 disabled:opacity-50"
                >
                  Prev
                </button>

                {getPageNumbers().map((num, idx) =>
                  num === "..." ? (
                    <span key={idx} className="px-3 py-2">
                      ...
                    </span>
                  ) : (
                    <button
                      key={idx}
                      onClick={() => setCurrentPage(num as number)}
                      className={`px-3 py-2 rounded border ${
                        currentPage === num
                          ? "bg-[var(--primary-color)] text-white"
                          : "bg-white hover:bg-gray-100"
                      }`}
                    >
                      {num}
                    </button>
                  )
                )}

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                  className="px-3 py-2 rounded border bg-white hover:bg-gray-100 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>

      <ContactInfo />

      {/* Mobile Floating Buttons */}
      <div className="fixed bottom-0 left-0 w-full flex md:hidden z-[9999]">
        <div className="w-1/2 bg-[var(--primary-color)] text-white text-center py-3">
          <a
            href="tel:+919999000183"
            className="w-full flex items-center justify-center gap-2"
          >
            <FaPhoneAlt size={18} />
            Call Us
          </a>
        </div>
        <div className="w-1/2 bg-white text-green-500 text-center py-3 border-l border-white">
          <a
            href="https://wa.me/+919999000172"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2"
          >
            <FaWhatsapp size={18} />
            WhatsApp
          </a>
        </div>
      </div>

      <div className="hidden md:block">
        <ContactSidebar />
      </div>

      <Footer />
    </div>
  );
}
