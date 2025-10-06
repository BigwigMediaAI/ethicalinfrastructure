import FeaturedApartments from "../../components/FeaturedApartments";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import WeHelp from "../../components/WeHelp";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WeHelp />
      <FeaturedApartments />
      <Footer />
    </>
  );
}
