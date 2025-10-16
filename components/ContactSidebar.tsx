import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+919999000172"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed md:bottom-10 right-6 md:mb-11 md:w-12 md:h-12 w-12 h-12 bottom-0 mb-5 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-50"
    >
      <FaWhatsapp className="text-white" size={28} />
    </a>
  );
}
