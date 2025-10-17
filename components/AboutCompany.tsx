"use client";

import { useState } from "react";

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-[var(--white)] text-[var(--black)] py-12 flex justify-center relative overflow-hidden ">
      <div className="p-[1px] bg-gradient-to-r from-[var(--primary-color)] via-black to-[var(--primary-color)] w-11/12 md:w-5/6">
        <div className="bg-[var(--white)] p-6 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 tracking-widest text-[var(--title)]">
            Ethical Infrastructures Private Limited
          </h2>

          <p className="text-sm md:text-base mb-6 text-justify text-[var(--text)]">
            Here at{" "}
            <span className="font-medium">
              ETHICAL INFRASTRUCTURES PRIVATE LIMITED
            </span>
            , we are dedicated to delivering complete customer satisfaction and
            crafting the best real estate deals that stand out from the crowd.
            While many agencies have emerged to capitalize on the booming real
            estate sector, we pride ourselves on offering exhaustive guidance,
            transparency, and a long-term vision for our clients.
          </p>

          <p className="text-sm md:text-base mb-6 text-justify text-[var(--text)]">
            We provide complete need-based and cost-effective solutions to our
            clients. Our unique selling point lies in the range of personalized
            services offered by our dedicated team, ensuring every client’s
            specific and task-specific requirements are fulfilled with
            precision, professionalism, and care.
          </p>

          {!expanded ? (
            <button
              onClick={() => setExpanded(true)}
              className="text-[var(--primary-color)] text-sm tracking-wide inline-block border-b border-[var(--primary-color)] pt-2 cursor-pointer"
            >
              READ MORE
            </button>
          ) : (
            <>
              <div className="mt-6 space-y-4 text-sm md:text-base text-[var(--text)]">
                <p>
                  Each prospective client is guided through comprehensive site
                  visits, detailed market surveys, and kept informed with
                  real-time updates on property status and market conditions.
                  Our transparent processes and client-centric approach ensure
                  that you make confident, well-informed decisions at every
                  step.
                </p>

                <p>
                  Backed by years of expertise and deep market understanding,
                  ETHICAL INFRASTRUCTURES has established itself as a trusted
                  name in real estate consulting and property management across
                  Delhi NCR. We believe in building long-lasting relationships,
                  not just completing transactions.
                </p>

                <h3 className="text-[var(--primary-color)] font-semibold mt-4">
                  Our Vision
                </h3>
                <p>
                  To redefine the real estate experience through innovation,
                  integrity, and ethical practices. We strive to create
                  world-class developments and provide unmatched service that
                  delivers true value to our clients and investors.
                </p>

                <h3 className="text-[var(--primary-color)] font-semibold mt-4">
                  Our Services
                </h3>
                <p>
                  ETHICAL INFRASTRUCTURES offers a complete suite of real estate
                  solutions designed to cater to both individual and corporate
                  clients, including:
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>Property buying, selling, and leasing services</li>
                  <li>Investment consultation and property advisory</li>
                  <li>Market research and property valuation</li>
                  <li>Project marketing and promotional support</li>
                  <li>Legal and documentation assistance</li>
                  <li>Property management and after-sales services</li>
                </ul>

                <h3 className="text-[var(--primary-color)] font-semibold mt-4">
                  Why Choose Us
                </h3>
                <p>
                  Our commitment to transparency, ethical conduct, and
                  personalized attention sets us apart. We combine deep market
                  insights with advanced tools to ensure every property
                  transaction is seamless, efficient, and rewarding for our
                  clients.
                </p>

                <p>
                  Whether you’re looking to buy, sell, or invest in premium
                  properties, our team of experienced professionals is here to
                  guide you every step of the way — from consultation to
                  closure.
                </p>

                <h3 className="text-[var(--primary-color)] font-semibold mt-4">
                  Our Commitment
                </h3>
                <p>
                  At ETHICAL INFRASTRUCTURES, we don’t just build properties —
                  we build trust. Every interaction with our clients is based on
                  honesty, transparency, and an unwavering commitment to
                  excellence.
                </p>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => setExpanded(false)}
                  className="text-[var(--primary-color)] text-sm tracking-wide inline-block border-b border-[var(--primary-color)] pt-2 cursor-pointer"
                >
                  SEE LESS
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
