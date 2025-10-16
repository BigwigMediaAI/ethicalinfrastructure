import React from "react";
import { Building2, Home, KeyRound } from "lucide-react"; // Lucide icons

type Service = {
  icon: React.ReactNode;
  label: string;
  title: string;
  description: string;
  redirected: string;
};

const services: Service[] = [
  {
    icon: <Home size={32} className="text-[#9C623E]" />,
    label: "Buy Property",
    title: "Buy Property",
    description:
      "Discover premium residential and commercial properties across Delhi NCR with ETHICAL INFRASTRUCTURES PRIVATE LIMITED. Our experts help you find the perfect home or investment property that fits your lifestyle, budget, and vision — ensuring transparency and smooth transactions at every step.",
    redirected: "/buy",
  },
  {
    icon: <Building2 size={32} className="text-[#9C623E]" />,
    label: "Sell Property",
    title: "Sell Property",
    description:
      "Looking to sell your property? Our experienced consultants provide accurate market evaluations, professional marketing strategies, and connect you with serious buyers to ensure quick and profitable sales. We manage the entire process with utmost professionalism and integrity.",
    redirected: "/sell",
  },
  {
    icon: <KeyRound size={32} className="text-[#9C623E]" />,
    label: "Lease Property",
    title: "Lease Property",
    description:
      "Whether you're a landlord seeking reliable tenants or a client looking for a leased property, ETHICAL INFRASTRUCTURES simplifies the leasing process. We provide verified listings, handle documentation, and ensure fair, transparent agreements for both parties.",
    redirected: "/lease",
  },
];

const WhatWeDoSection: React.FC = () => {
  return (
    <div className="bg-[var(--white)] text-[var(--black)]">
      <section className="max-w-7xl px-6 py-16 mx-auto">
        <div className="mb-6">
          <p className="text-md mb-2 tracking-wider text-[var(--primary-color)] font-semibold uppercase">
            Our Services
          </p>
          <h2 className="text-2xl md:text-3xl font-light text-[var(--black)]">
            Buy, Sell & Lease Properties with Ethical Guidance
          </h2>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <a
              href={service.redirected}
              key={idx}
              className="group bg-gray-100 dark:bg-zinc-900 hover:shadow-xl rounded-xl p-6 transition duration-300 flex flex-col space-y-4 md:space-y-6 hover:scale-[1.02]"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">{service.icon}</div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhatWeDoSection;
