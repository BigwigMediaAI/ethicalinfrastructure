import "react-phone-number-input/style.css";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import banner from "../../../assets/plot.webp";
import Image from "next/image";
import ContactSidebar from "../../../components/ContactSidebar";
import Plotform from "../../../components/Plotform";

export default function PlotPage() {
  return (
    <div className="min-h-screen ">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[70vh] flex flex-col justify-center items-center text-center px-6 tracking-widest">
        <Image
          src={banner}
          alt="Plots Banner"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Content */}
        <div className="relative text-white z-10 mt-32">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest">
            Find Your Ideal Plot
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-justify">
            Share your requirements and our expert team will help you discover
            the perfect residential or commercial plot in premium locations.
          </p>
        </div>
      </div>

      {/* Centered Form Section */}
      <section className="w-full flex justify-center py-16 px-4 md:px-0">
        <div className="w-full max-w-2xl rounded-xl p-8 card-shadow bg-[var(--white)]">
          <h2 className="text-3xl font-bold text-center text-[var(--primary-color)] mb-6 tracking-widest">
            Plot Inquiry Form
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            Submit your details and we’ll reach out with the best available
            options tailored to your needs.
          </p>

          <Plotform />
        </div>
      </section>

      {/* Sidebar on Desktop */}
      <div className="hidden md:block">
        <ContactSidebar />
      </div>

      <Footer />
    </div>
  );
}
