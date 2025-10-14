"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import bgImage from "../assets/fun-fact.jpg"; // replace with your image

const statsData = [
  { value: 12, label: "Our Happy\n Customers", suffix: "K" },
  { value: 98, label: "Client Satisfaction\n Rate", suffix: "%" },
  // { value: 6, label: "Our Office\n Locations", suffix: "+" },
  { value: 20, label: "Total Property\n Sale", suffix: "K" },
  { value: 85, label: "Real Estate\n Agents", suffix: "+" },
];

export default function StatsSection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState(statsData.map(() => 0));

  // 👉 Intersection Observer to trigger animation when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  // 👉 Animate counts from 0 to value
  useEffect(() => {
    if (hasAnimated) {
      statsData.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000; // 2 seconds
        const stepTime = 20;
        const increment = end / (duration / stepTime);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          setCounts((prev) => {
            const updated = [...prev];
            updated[index] = Math.floor(start);
            return updated;
          });
        }, stepTime);
      });
    }
  }, [hasAnimated]);

  return (
    <div
      ref={sectionRef}
      className="relative h-[300px] flex items-center justify-center text-white"
    >
      {/* Background Image */}
      <Image
        src={bgImage}
        alt="Stats Background"
        fill
        className="object-cover brightness-50"
      />

      {/* Overlay Content */}
      <div className="w-11/12 md:w-5/6 relative z-10 flex flex-wrap justify-center items-center gap-10 text-center px-4 md:grid md:grid-cols-4 md:gap-8">
        {" "}
        {statsData.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3 className="text-4xl md:text-5xl font-bold mb-2">
              {counts[index].toLocaleString()}
              {stat.suffix || ""}
            </h3>
            <p className="text-gray-200 text-sm md:text-base max-w-[150px] whitespace-pre-line">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
