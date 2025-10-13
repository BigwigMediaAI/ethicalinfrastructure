"use client";

import { div } from "framer-motion/client";
import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function TermsAndConditionsPage() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 text-gray-900">
        <section className="w-full py-16 px-6 md:px-24 lg:px-48">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 border border-gray-100">
            <header className="text-center mb-10">
              <h1 className="text-4xl font-bold text-indigo-700 mb-3">
                Terms and Conditions
              </h1>
              <p className="text-gray-600 text-lg">
                Ethical Infrastructures P Ltd - Website Terms and Conditions
              </p>
            </header>

            <article className="space-y-8 text-gray-800 leading-relaxed">
              <p>
                Please read these Terms and Conditions ("Terms") carefully
                before using the Ethical Infrastructures P Ltd website ("the
                Website").
              </p>
              <p>
                By accessing or using the Website, you agree to be bound by
                these Terms. If you do not agree to these Terms, please do not
                use the Website.
              </p>

              <section>
                <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
                  Acceptance of Terms
                </h2>
                <p>
                  By accessing and using the Website, you acknowledge that you
                  have read, understood, and agree to be bound by these Terms
                  and all applicable laws and regulations. You agree to use the
                  Website only for lawful purposes and in a manner that does not
                  infringe the rights of, restrict, or inhibit the use and
                  enjoyment of the Website by any third party.
                </p>

                <p className="mt-3">
                  The Website provides information about the real estate
                  services offered by Ethical Infrastructures P Ltd, including
                  but not limited to:
                </p>
                <ul className="list-disc pl-8 mt-2 space-y-1">
                  <li>Property listing information</li>
                  <li>Real estate consultation services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
                  Services Provided
                </h2>
                <p>
                  The information provided on the Website is for informational
                  purposes only and does not constitute legal, financial, or
                  real estate advice. You should consult with a qualified
                  professional for specific advice tailored to your situation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
                  Governing Law
                </h2>
                <p>
                  These Terms shall be governed by and construed in accordance
                  with the laws without regard to its conflict of law
                  provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
                  Contact Us
                </h2>
                <p>
                  If you have any questions or concerns about these Terms,
                  please contact us at{" "}
                  <a
                    href="mailto:info@eiplin.com"
                    className="text-indigo-600 underline font-medium"
                  >
                    info@eiplin.com
                  </a>
                  .
                </p>
              </section>
            </article>

            <footer className="text-center mt-16 border-t border-gray-200 pt-6 text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Ethical Infrastructures P Ltd.
              All rights reserved.
            </footer>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
