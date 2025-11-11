"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "yet-another-react-lightbox/styles.css";

import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";

import { MapPin, BedDouble, Home, Phone } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
// import HelpSection from "../../../../components/HelpSection";
import "aos/dist/aos.css"; // CSS is fine at the top
import ContactInfo from "../../../../components/ContactInfo";
import Link from "next/link";
import ContactSidebar from "../../../../components/ContactSidebar";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

import ButtonFill from "../../../../components/Button";

interface Property {
  _id: string;
  title: string;
  slug: string;
  purpose?: string;
  videoLink?: string;
  location?: string;
  price?: number | null;
  bedrooms?: number | null;
  bathrooms?: number | null;
  areaSqft?: number | null;
  images: string[];
  highlights: string[];
  nearby: string[];
  featuresAmenities: string[];
  extraHighlights: string[];
  description: string;
  googleMapUrl?: string;
  brochure?: string;
  metatitle: string;
  metadescription: string;
}

export default function BuyDetailsClient({ property }: { property: Property }) {
  //   const { slug } = useParams();
  //   const [property, setProperty] = useState<Property | null>(null);
  //   const [loading, setLoading] = useState(true);

  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadData, setLeadData] = useState({
    name: "",
    phone: "",
    countryCode: "+91",
  });
  const [loadingLead, setLoadingLead] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  useEffect(() => {
    const submitted = sessionStorage.getItem("brochureLeadSubmitted");
    if (submitted) setLeadSubmitted(true);

    // Initialize AOS
    (async () => {
      const AOS = await import("aos");
      AOS.init({ duration: 1000, once: true, offset: 100 });
    })();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!property)
    return <p className="text-center mt-20 text-xl">Property not found</p>;

  const displayedImages = property?.images?.slice(0, 7) || [];
  const extraCount = (property?.images?.length || 0) - displayedImages.length;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLeadData({ ...leadData, [e.target.name]: e.target.value });
  };

  // Lead submission handler
  const handleSubmitLead = async () => {
    if (!leadData.name || !/^\d{10}$/.test(leadData.phone)) {
      alert("Please enter a valid name and 10-digit phone number.");
      return;
    }

    setLoadingLead(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/brochure-leads`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadData),
        }
      );

      if (!res.ok) throw new Error("Failed to submit lead");

      // Mark as submitted in sessionStorage globally for the session
      sessionStorage.setItem("brochureLeadSubmitted", "true");
      setLeadSubmitted(true);

      // Close modal & open brochure
      setIsLeadModalOpen(false);
      window.open(property.brochure, "_blank");
    } catch (err) {
      console.error(err);
      alert("Something went wrong, please try again.");
    } finally {
      setLoadingLead(false);
    }
  };

  function getYouTubeEmbedUrl(url: string) {
    try {
      const parsedUrl = new URL(url);
      if (parsedUrl.hostname.includes("youtu.be")) {
        return `https://www.youtube.com/embed/${parsedUrl.pathname.slice(1)}`;
      } else if (parsedUrl.hostname.includes("youtube.com")) {
        return `https://www.youtube.com/embed/${parsedUrl.searchParams.get(
          "v"
        )}`;
      }
      return null;
    } catch {
      return null;
    }
  }

  return (
    <div className="   transition-colors duration-300">
      {/* <!-- Open Graph Meta Tags --> */}
      <meta property="og:title" content={property.metatitle} />
      <meta property="og:site_name" content="Ethical Infrastructures Pvt Ltd" />
      <meta
        property="og:url"
        content={`https://www.eipl.co/buy/${property.slug}`}
      />
      <meta property="og:description" content={property.metadescription} />
      <meta
        property="og:image"
        content="https://www.eipl.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.634a2fe3.png&w=256&q=75"
      />
      <meta property="og:type" content="product" />
      <meta property="og:locale" content="en_IN" />
      <link rel="canonical" href={`https://www.eipl.co/buy/${property.slug}`} />
      <title>{property.metatitle}</title>
      <meta name="description" content={property.metadescription} />
      <Navbar />

      {/* Hero with overlay */}
      <section className="relative h-[50vh] md:h-[80vh]">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 4000 }}
          loop
          className="h-full"
        >
          {property?.images?.map((img: string, idx: number) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-full">
                <Image
                  src={img}
                  alt={`Property Image ${idx + 1}`}
                  fill
                  priority={idx === 0}
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Split Layout */}
      <section className="grid md:grid-cols-2 gap-10 w-11/12 md:w-5/6 mx-auto py-16">
        {/* Gallery - Left Side */}
        <div className="columns-2 gap-4 space-y-4">
          {displayedImages.map((img: string, idx: number) => (
            <div
              key={idx}
              onClick={() => {
                setPhotoIndex(idx);
                setIsOpen(true);
              }}
              className="relative overflow-hidden  shadow cursor-pointer"
            >
              <Image
                src={img}
                alt={`Gallery ${idx}`}
                width={600}
                height={400}
                className=" hover:scale-105 transition"
              />
            </div>
          ))}
          {extraCount > 0 && (
            <div
              className="relative h-40 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-xl text-2xl font-bold cursor-pointer"
              onClick={() => {
                setPhotoIndex(8);
                setIsOpen(true);
              }}
            >
              +{extraCount} more
            </div>
          )}
        </div>

        {/* Info + Description - Right Side */}
        <div className="sticky top-24 self-start space-y-6">
          {/* Title + Location + Price */}
          <h1 className="text-3xl font-bold text-[var(--title)]">
            {property.title}
          </h1>
          {property.location && (
            <p className="flex items-center gap-2 text-lg text-[var(--text)]">
              <MapPin size={18} /> {property.location}
            </p>
          )}
          {property.price && (
            <p className="text-2xl font-semibold text-[var(--title)]">
              ₹ {property.price.toLocaleString()}
            </p>
          )}

          {/* Badges */}
          <div className="flex flex-wrap gap-3">
            {/* {property.purpose && (
              <span className="px-4 py-2 bg-gray-100  rounded-lg shadow flex items-center gap-2 text-gray-800">
                <Home size={18} /> {property.purpose}
              </span>
            )} */}
            {property.bedrooms && (
              <span className="px-4 py-2 bg-gray-100  rounded-lg shadow flex items-center gap-2 text-gray-800">
                <BedDouble size={18} /> {property.bedrooms} Beds
              </span>
            )}
            {property.bathrooms && (
              <span className="px-4 py-2 bg-gray-100  rounded-lg shadow flex items-center gap-2 text-gray-800">
                🛁 {property.bathrooms} Baths
              </span>
            )}
            {property.areaSqft && (
              <span className="px-4 py-2 bg-gray-100  rounded-lg shadow flex items-center gap-2 text-gray-800">
                📐 {property.areaSqft} Sqft
              </span>
            )}
          </div>

          {/* Description */}
          <h2 className="text-xl font-semibold mt-6">About this Property</h2>
          <p className="text-lg text-[var(--text)] leading-relaxed">
            {property.description}
          </p>

          {/* Highlights */}
          {property?.highlights?.length > 0 && (
            <>
              <h3 className="text-lg font-semibold mt-6">Highlights</h3>
              <div className="flex flex-wrap gap-3">
                {property.highlights.map((h: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-[var(--featured)] rounded-full shadow text-sm text-[var(--text)]"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </>
          )}

          {/* Brochure Section */}
          {/* Brochure Section */}
          {property.brochure && (
            <section className="mt-6">
              <h2 className="text-xl font-semibold text-[var(--title)] mb-4">
                Brochure
              </h2>

              <ButtonFill
                onClick={() => {
                  if (leadSubmitted) {
                    // If already submitted in this session, open brochure directly
                    window.open(property.brochure, "_blank");
                  } else {
                    // Open modal to submit lead
                    setIsLeadModalOpen(true);
                  }
                }}
                text="📄 View Brochure"
              />
            </section>
          )}
        </div>
      </section>

      {/* Video Tour */}
      {property.videoLink && (
        <section className="w-11/12 md:w-5/6 mx-auto py-12">
          <h2 className="text-3xl font-semibold mb-6 text-[var(--title)]">
            Virtual Tour
          </h2>
          <div className="w-full h-[500px] overflow-hidden rounded-xl shadow">
            {property.videoLink.includes("youtube") ||
            property.videoLink.includes("youtu.be") ? (
              <iframe
                src={getYouTubeEmbedUrl(property.videoLink)!}
                width="100%"
                height="100%"
                allowFullScreen
              />
            ) : (
              <video
                src={property.videoLink}
                controls
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </section>
      )}

      {/* Features */}
      {property?.featuresAmenities?.length > 0 && (
        <section className="w-11/12 md:w-5/6 mx-auto py-12">
          <h2 className="text-3xl font-semibold mb-6 text-[var(--title)]">
            Features & Amenities
          </h2>
          <div className="flex flex-wrap gap-3">
            {property.featuresAmenities.map((f: string, idx: number) => (
              <div
                key={idx}
                className="px-4 py-2 bg-[var(--featured)] rounded-full shadow text-sm text-[var(--text)] text-center"
              >
                {/* <span className="text-lg mb-2">⭐</span> */}
                <p className="text-sm md:text-base leading-snug">{f}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Nearby */}
      {property?.nearby?.length > 0 && (
        <section className="w-11/12 md:w-5/6 mx-auto py-12">
          <h2 className="text-3xl font-semibold mb-6 text-[var(--title)]">
            Nearby Places
          </h2>
          <div className="flex flex-wrap gap-3">
            {property.nearby.map((n: string, idx: number) => (
              <span
                key={idx}
                className="px-5 py-2 bg-[var(--featured)] text-[var(--text)] rounded-full"
              >
                {n}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Map */}
      {property.googleMapUrl && (
        <section className="w-11/12 md:w-5/6 mx-auto py-12">
          <h2 className="text-3xl font-semibold mb-6 text-[var(--title)]">
            Location
          </h2>
          <iframe
            src={property.googleMapUrl}
            width="100%"
            height="450"
            loading="lazy"
            className="rounded-xl shadow border-0"
          />
        </section>
      )}

      {/* Floating Contact Widget */}
      <Link href="tel:919999000183">
        <div className="fixed bottom-6 right-6 bg-[var(--primary-color)] text-black p-4 rounded-full shadow-xl flex items-center gap-2 cursor-pointer hover:scale-105 transition">
          <Phone />
        </div>
      </Link>
      <ContactInfo />
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
      {/* <HelpSection /> */}
      <Footer />

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={property.images.map((img: string) => ({ src: img }))}
          index={photoIndex}
          plugins={[Fullscreen, Slideshow]}
        />
      )}

      {/* Lead Modal */}
      {isLeadModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl w-11/12 max-w-md shadow-xl relative">
            <button
              className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              onClick={() => setIsLeadModalOpen(false)}
            >
              ×
            </button>

            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Get Your Brochure
            </h2>

            <div className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name*"
                className="border border-gray-300 dark:border-gray-600 rounded-lg p-3 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                value={leadData.name}
                onChange={handleInputChange}
              />

              <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[var(--primary-color)]">
                <select
                  name="countryCode"
                  className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white p-3 outline-none border-r border-gray-300 dark:border-gray-600"
                  value={leadData.countryCode || "+91"}
                  onChange={(e) =>
                    setLeadData({ ...leadData, countryCode: e.target.value })
                  }
                >
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+971">🇦🇪 +971</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+61">🇦🇺 +61</option>
                </select>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number*"
                  className="flex-1 p-3 bg-transparent text-gray-800 dark:text-white outline-none"
                  value={leadData.phone}
                  onChange={handleInputChange}
                  pattern="^[0-9]{10}$"
                  title="Please enter a valid 10-digit phone number"
                />
              </div>
              <ButtonFill
                onClick={handleSubmitLead}
                text={loadingLead ? "Submitting..." : "Submit & View Brochure"}
                className="mt-2"
              />
            </div>

            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              We respect your privacy. Your information will not be shared.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
