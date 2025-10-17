"use client";

// import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
// import Image from "next/image";
// import { div } from "framer-motion/client";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import founder from "../../../assets/founder.png";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  social: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
}

const team: TeamMember[] = [
  {
    name: "Sorabh Chopra",
    role: "Programming Guru",
    image: "http://www.eiplin.com/images/team/sorabh.jpg", // replace with your image path
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Rohit Ahuja",
    role: "Creative Leader",
    image: "http://www.eiplin.com/images/team/rohit.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Manish Verma",
    role: "Manager",
    image: "http://www.eiplin.com/images/team/manish.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Poonam Arora",
    role: "Manager",
    image: "http://www.eiplin.com/images/team/poonam.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Sandeep Gandhi",
    role: "Manager",
    image: "http://www.eiplin.com/images/team/sandeep.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Abhay Kumar Pandey",
    role: "Manager",
    image: "http://www.eiplin.com/images/team/abhay.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
];

export default function TeamPage() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16">
        {/* Our Founder */}
        <section className="py-12 w-11/12 md:w-5/6 mx-auto">
          <h3 className="uppercase text-2xl md:text-3xl font-semibold text-[var(--primary-color)] mb-6 font-amatic border-l-4 border-[var(--primary-color)] pl-3">
            Our Founder
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Founder Card */}
            <div className="rounded-xl col-span-1 overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white">
              <Image
                src={founder}
                alt="Founder"
                className="w-full h-[70vh] object-cover"
              />
            </div>

            {/* Founder Statement */}
            <div className="flex flex-col col-span-2 justify-center text-gray-800">
              <p className="text-xl  leading-relaxed italic font-light text-gray-800">
                “At <strong>ETHICAL INFRASTRUCTURE Pvt. Ltd.</strong>, our
                mission has always been to deliver homes that bring happiness,
                security, and trust to every family. Since 1995, we’ve dedicated
                ourselves to making real estate simple, transparent, and
                reliable for all our clients.”
              </p>
              <span className="mt-6 block font-semibold text-[var(--primary-color)] text-lg md:text-xl">
                — Mr. Sorabh Chopra, Founder
              </span>
            </div>
          </div>
        </section>

        {/* <div className="relative w-full flex justify-center">
          <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-20 bg-orange-500 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-11/12 md:w-4/5">
            {team.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="object-fill w-full h-80"
                />
                <div className="text-center p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
}
