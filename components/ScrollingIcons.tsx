"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assets/logos/Builders Association.webp";
import img2 from "../assets/logos/emaar-seeklogo.png";
import img3 from "../assets/logos/434x0w.webp";
import img4 from "../assets/logos/Intelligent-Real-Estate-Investments-at-Hines.svg";
import img5 from "../assets/logos/Pioneer_logo.svg.png";
import img6 from "../assets/logos/Sobha-Realty-Transparent-logo-Click-on-reality.webp";
import img7 from "../assets/logos/images.jpg";
import img8 from "../assets/logos/dlf-g1.jpg";
import img10 from "../assets/logos/2039092348-6429ff6d9aa98da0184c50ab642129ff75457e0084098cd9cb7230534c2c41bf-d.webp";
import img11 from "../assets/logos/m3m.png";
import img12 from "../assets/logos/mahindra-red-logo.webp";
import img13 from "../assets/logos/mnb.png";
import img14 from "../assets/logos/salcon.png";
import img15 from "../assets/logos/silver-glades.webp";
import img16 from "../assets/logos/smartworld.webp";
import img17 from "../assets/logos/suncity-logo1.png";
import img18 from "../assets/logos/trump.png";
import img19 from "../assets/logos/vatika.svg";
import img20 from "../assets/logos/vipul.png";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const icons = [
  { src: img1, alt: "Builders Association", link: "/builders-association" },
  { src: img2, alt: "Emaar", link: "/emaar" },
  { src: img3, alt: "Godrej", link: "/godrej" },
  { src: img4, alt: "Hines", link: "/hines" },
  { src: img5, alt: "Pioneer", link: "/pioneer" },
  { src: img6, alt: "Sobha Realty", link: "/shobha-reality" },
  { src: img7, alt: "Conscient", link: "/conscient" },
  { src: img8, alt: "DLF", link: "/dlf" },
  { src: img10, alt: "Ireo", link: "/ireo" },
  { src: img11, alt: "M3M", link: "/m3m" },
  { src: img12, alt: "Mahindra", link: "/mahindra" },
  { src: img13, alt: "mnb", link: "/mnb" },
  { src: img14, alt: "Salcon", link: "/salcon" },
  { src: img15, alt: "Silver Glades", link: "/silverglades" },
  { src: img16, alt: "Smartworld", link: "/smartworld" },
  { src: img17, alt: "Suncity", link: "/suncity" },
  { src: img18, alt: "Trump", link: "/trump" },
  { src: img19, alt: "Vatika", link: "/vatika" },
  { src: img20, alt: "Vipul", link: "/vipul" },
];

const ScrollingIcons = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 bg-[var(--white)] overflow-hidden">
      <div className="w-11/12 md:w-5/6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 md:mb-10 tracking-widest text-[var(--title)]">
          Trusted by Leading Builders
        </h2>

        <Slider {...settings}>
          {icons.map((icon, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-4 w-28"
            >
              <Link href={icon.link}>
                <img
                  src={icon.src.src}
                  alt={icon.alt}
                  className="h-16 w-28 object-contain hover:scale-110 transition-transform duration-300"
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ScrollingIcons;
