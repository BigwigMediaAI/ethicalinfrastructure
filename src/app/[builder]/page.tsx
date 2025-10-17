"use client";

import { useEffect, useState, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Home } from "lucide-react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ContactSidebar from "../../../components/ContactSidebar";
import ContactInfo from "../../../components/ContactInfo";
import ButtonFill from "../../../components/Button";

interface Property {
  _id: string;
  title: string;
  slug: string;
  builder?: string;
  type?: string;
  location?: string;
  price?: number | null;
  images: string[];
}

export default function BuilderPage() {
  const { builder } = useParams();
  const router = useRouter();
  const builderName = builder?.toString();
  const listRef = useRef<HTMLDivElement | null>(null);

  const [properties, setProperties] = useState<Property[]>([]);
  const [filtered, setFiltered] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 9;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/property`);
        const data = await res.json();
        setProperties(data);

        const filteredData = data.filter(
          (p: Property) =>
            p.builder?.toLowerCase() === builderName?.toLowerCase()
        );

        setFiltered(filteredData);
      } catch (error) {
        console.error("Error fetching builder data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [builderName]);

  // Pagination logic
  const totalPages = Math.ceil(filtered.length / propertiesPerPage);
  const startIdx = (currentPage - 1) * propertiesPerPage;
  const paginatedProperties = filtered.slice(
    startIdx,
    startIdx + propertiesPerPage
  );

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > maxVisible) pages.push("...");
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

      {/* Header Section */}
      <div className=" mt-10 flex items-center justify-center text-center text-[var(--title)] tracking-widest">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold capitalize">
            {builderName} Properties
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Explore luxury properties built by {builderName}
          </p>
        </motion.div>
      </div>

      {/* Property List */}
      <div ref={listRef} className="py-12">
        {loading ? (
          <p className="text-center py-20 text-gray-500 tracking-widest">
            Loading properties...
          </p>
        ) : paginatedProperties.length === 0 ? (
          <div className="text-center py-20 text-gray-500 tracking-widest">
            <h2 className="text-2xl font-semibold mb-2">No properties found</h2>
            <p>
              We couldn’t find any listings by{" "}
              <span className="font-semibold capitalize">{builderName}</span>.
            </p>
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
                {/* Prev Button */}
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                  className="px-3 py-2 rounded border bg-[--white] hover:bg-[var(--pagination-button)] disabled:opacity-50"
                >
                  Prev
                </button>

                {/* Page Numbers */}
                {getPageNumbers().map((num, idx) =>
                  num === "..." ? (
                    <span key={idx} className="px-3 py-2 text-gray-500">
                      ...
                    </span>
                  ) : (
                    <button
                      key={idx}
                      onClick={() => setCurrentPage(Number(num))}
                      className={`px-3 py-2 rounded border ${
                        currentPage === num
                          ? "bg-[var(--primary-color)] text-[var(--white)]"
                          : "bg-[var(--white)] hover:bg-[var(--pagination-button)]"
                      }`}
                    >
                      {num}
                    </button>
                  )
                )}

                {/* Next Button */}
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                  className="px-3 py-2 rounded border bg-[--white] hover:bg-[var(--pagination-button)] disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>

      <ContactInfo />

      {/* Mobile Contact Buttons */}
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
