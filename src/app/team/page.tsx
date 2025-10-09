"use client";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { div } from "framer-motion/client";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

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
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-2">Our Team</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            We are a passionate team of professionals dedicated to delivering
            quality and creativity in everything we do.
          </p>
        </div>

        <div className="relative w-full flex justify-center">
          {/* Orange stripe background */}
          <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-20 bg-orange-500 -z-10"></div>

          {/* Team members */}
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
                  {/* <p className="text-sm text-gray-500 mb-4">{member.role}</p> */}
                  {/* <div className="flex justify-center gap-4 text-orange-500">
                  <a href={member.social.facebook}>
                    <FaFacebookF className="hover:text-orange-600 transition" />
                  </a>
                  <a href={member.social.twitter}>
                    <FaTwitter className="hover:text-orange-600 transition" />
                  </a>
                  <a href={member.social.instagram}>
                    <FaInstagram className="hover:text-orange-600 transition" />
                  </a>
                </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
