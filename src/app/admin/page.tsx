"use client";
import { EarthIcon, Handshake } from "lucide-react";
import { useRouter } from "next/navigation";
import { JSX, useEffect, useState } from "react";
import { FaBook, FaBuilding, FaUser, FaUsers } from "react-icons/fa";

const Dashboard = () => {
  const router = useRouter();
  const [counts, setCounts] = useState({
    leads: 0,
    brochureLead: 0,
    blogs: 0,
    properties: 0,
    plots: 0,
    sellPropertiesRequests: 0,
  });

  useEffect(() => {
    // ✅ Check login status
    const loggedIn = localStorage.getItem("isAdmin");
    if (loggedIn !== "true") {
      router.push("/login"); // redirect if not logged in
      return;
    }

    // ✅ Fetch data only if logged in
    Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/lead/all`).then((r) =>
        r.json()
      ),
      fetch(`${process.env.NEXT_PUBLIC_API_BASE}/brochure-leads`).then((r) =>
        r.json()
      ),
      fetch(`${process.env.NEXT_PUBLIC_API_BASE}/blog/viewblog`).then((r) =>
        r.json()
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/property?page=1&limit=10000`
      ).then((r) => r.json()),
      fetch(`${process.env.NEXT_PUBLIC_API_BASE}/plot/all`).then((r) =>
        r.json()
      ),
      fetch(`${process.env.NEXT_PUBLIC_API_BASE}/sellproperty/viewsell`).then(
        (r) => r.json()
      ),
    ])
      .then(
        ([
          leads,
          brochureLead,
          blogs,
          properties,
          plots,
          sellPropertiesRequests,
        ]) => {
          setCounts({
            leads: Array.isArray(leads) ? leads.length : 0,
            brochureLead: Array.isArray(brochureLead) ? brochureLead.length : 0,
            blogs: Array.isArray(blogs) ? blogs.length : 0,
            properties: Array.isArray(properties.properties)
              ? properties.properties.length
              : 0,
            plots: Array.isArray(plots.data) ? plots.data.length : 0,
            sellPropertiesRequests: Array.isArray(sellPropertiesRequests)
              ? sellPropertiesRequests.length
              : 0,
          });
        }
      )

      .catch((error) => {
        console.error("Error loading dashboard data:", error);
      });
  }, [router]);

  const cards = [
    { title: "Blogs", icon: <FaBook />, count: counts.blogs },
    { title: "Properties", icon: <FaBuilding />, count: counts.properties },
    { title: "Leads", icon: <FaUsers />, count: counts.leads },
    { title: "Brochure Leads", icon: <FaUser />, count: counts.brochureLead },
    { title: "Plots", icon: <EarthIcon />, count: counts.plots },
    {
      title: "Sell Property Requests",
      icon: <Handshake />,
      count: counts.sellPropertiesRequests,
    },
  ];

  return (
    <section className="px-4 py-8 space-y-10">
      <h2 className="text-2xl font-bold text-center text-gray-200">
        Admin Dashboard
      </h2>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
        {cards.map((card) => (
          <StatCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
};

const StatCard = ({
  title,
  icon,
  count,
}: {
  title: string;
  icon: JSX.Element;
  count: number;
}) => (
  <div className="w-full max-w-sm rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-white border border-[#0a2342] bg-neutral-900 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
    <div className="text-4xl mb-3">{icon}</div>
    <h3 className="text-lg font-semibold mb-1 text-center">{title}</h3>
    <p className="text-3xl font-bold">{count}</p>
  </div>
);

export default Dashboard;
