import React, { useState } from "react";
import {
  FaBuilding,
  FaGlobe,
  FaUsers,
  FaHandshake,
  FaChartLine,
  FaHome,
} from "react-icons/fa";
import image1 from "../assets/9-768x532.webp";
import Image from "next/image";
import ButtonFill from "./Button";
import LeadFormModal from "./LeadPopup";

const RealEstateExperts: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="bg-[var(--white)] py-12 text-[var(--black)] transition-colors ">
      <div className="w-11/12 md:w-5/6 mx-auto grid md:grid-cols-2 gap-4 md:gap-8 items-center py-12">
        {/* Image section */}
        <div className="relative w-full h-[400px] flex justify-center">
          <Image
            src={image1}
            alt="Real Estate Experts"
            className="w-full"
            draggable="false"
          />

          {/* Mobile stats overlay
          <div className="absolute bottom-0 w-full md:hidden bg-white/90 dark:bg-black/80 flex justify-around py-4 text-center">
            <div>
              <h3 className="text-lg font-semibold">5000+</h3>
              <p className="text-xs text-[var(--text)]">
                Listed Properties
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">7+</h3>
              <p className="text-xs text-[var(--text)]">
                Languages Spoken
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">120+</h3>
              <p className="text-xs text-[var(--text)]">
                Consultants
              </p>
            </div>
          </div> */}
        </div>

        {/* Text and stats */}
        <div className="mt-8 md:mt-0">
          <h2 className="text-3xl md:text-3xl font-light mb-6">
            Luxury Living Starts with{" "}
            <span className="text-[var(--primary-color)]">
              ETHICAL INFRASTRUCTURES
            </span>{" "}
          </h2>

          <p className="text-[var(--text)] mb-6 text-justify">
            Searching for your ideal home or a profitable real estate investment
            in Delhi NCR? At ETHICAL INFRASTRUCTURES PRIVATE LIMITED, we go
            beyond property transactions — we build long-term relationships
            rooted in trust, transparency, and professionalism. Our expert
            consultants assist clients across Gurugram, Delhi, and surrounding
            regions with buying, selling, and investing in premium properties
            that match their goals and lifestyle aspirations.With a client-first
            approach and an in-depth understanding of the market, we provide
            comprehensive support — from site visits and market research to
            legal guidance and portfolio management. Whether you’re seeking a
            luxury residence or a high-return commercial space, Ethical
            Infrastructures ensures you make confident
          </p>

          <ButtonFill
            onClick={() => setShowModal(true)}
            text="Talk to an Expert"
          />
        </div>
      </div>
      {/* Desktop stats */}
      <div className="grid grid-cols-3 md:grid-cols-6 text-center gap-6 w-11/12 mx-auto">
        <div>
          <FaBuilding className="text-2xl mb-2 mx-auto text-[var(--primary-color)]" />
          <h3 className="text-2xl font-sans"> 8,000+</h3>
          <p className="text-sm text-[var(--text)] mt-2 whitespace-pre-wrap">
            {"Verified Listings \n Across Dubai"}
          </p>
        </div>
        <div>
          <FaGlobe className="text-2xl mb-2 mx-auto text-[var(--primary-color)]" />
          <h3 className="text-2xl font-sans">10+</h3>
          <p className="text-sm text-[var(--text)] mt-2 whitespace-pre-wrap">
            {"Languages Spoken for \n Global Clients"}
          </p>
        </div>
        <div>
          <FaUsers className="text-2xl mb-2 mx-auto text-[var(--primary-color)]" />
          <h3 className="text-2xl font-sans">150+</h3>
          <p className="text-sm text-[var(--text)] mt-2 whitespace-pre-wrap">
            {"Dedicated Property \n Advisors"}
          </p>
        </div>
        <div>
          <FaHandshake className="text-2xl mb-2 mx-auto text-[var(--primary-color)]" />
          <h3 className="text-2xl font-sans">1200+</h3>
          <p className="text-sm text-[var(--text)] mt-2 whitespace-pre-wrap">
            {"Properties Successfully \n Sold"}
          </p>
        </div>
        <div>
          <FaHome className="text-2xl mb-2 mx-auto text-[var(--primary-color)]" />
          <h3 className="text-2xl font-sans">3500+</h3>
          <p className="text-sm text-[var(--text)] mt-2 whitespace-pre-wrap">
            {"Active Rental \n Listings"}
          </p>
        </div>
        <div>
          <FaChartLine className="text-2xl mb-2 mx-auto text-[var(--primary-color)]" />
          <h3 className="text-2xl font-sans">7B+ AED</h3>
          <p className="text-sm text-[var(--text)] mt-2 whitespace-pre-wrap">
            {"Real Estate \n Portfolio Value"}
          </p>
        </div>
      </div>
      <LeadFormModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default RealEstateExperts;
