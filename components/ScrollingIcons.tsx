"use client";
import dynamic from "next/dynamic";
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
  { src: img1, alt: "Nifty" },
  { src: img2, alt: "Gold" },
  { src: img3, alt: "Gold" },
  { src: img4, alt: "Gold" },
  { src: img5, alt: "Gold" },
  { src: img6, alt: "Gold" },
  { src: img7, alt: "Gold" },
  { src: img8, alt: "Gold" },
  //   { src: img9, alt: "Gold" },
  { src: img10, alt: "Gold" },
  { src: img11, alt: "Gold" },
  { src: img12, alt: "Gold" },
  { src: img13, alt: "Gold" },
  { src: img14, alt: "Gold" },
  { src: img15, alt: "Gold" },
  { src: img16, alt: "Gold" },
  { src: img17, alt: "Gold" },
  { src: img18, alt: "Gold" },
  { src: img19, alt: "Gold" },
  { src: img20, alt: "Gold" },
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
    pauseOnHover: false,
  };

  return (
    <div className="w-full py-10 bg-[var(--white)] overflow-hidden">
      <Slider {...settings}>
        {icons.map((icon, index) => (
          <div key={index} className="flex items-center justify-center px-4">
            <img
              src={icon.src.src}
              alt={icon.alt}
              className="h-16 w-auto object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ScrollingIcons;
