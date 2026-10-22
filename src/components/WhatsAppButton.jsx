
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function FloatingContactButtons() {
  const phoneNumber = "923422755150";
  const email = "contact@thereelbazar.com";

  const message =
    "Hello! I want to know more about your services.";

  const whatsappUrl =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const emailUrl =
    `mailto:${email}?subject=${encodeURIComponent("Service Inquiry")}&body=${encodeURIComponent(message)}`;

  return (
    <div
      className="
        fixed
        bottom-6
        right-5
        z-[9999]
        flex
        flex-col
        items-center
        gap-4
        sm:bottom-8
        sm:right-8
      "
    >
      {/* EMAIL BUTTON */}
      <a
        href={emailUrl}
        aria-label="Send us an email"
        className="
          floating-bounce
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#EA4335]
          text-white
          shadow-[0_8px_25px_rgba(234,67,53,0.4)]
          transition-shadow
          hover:shadow-xl
        "
      >
        <MdEmail size={28} />
      </a>

      {/* WHATSAPP BUTTON */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="
          floating-bounce
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-[0_8px_25px_rgba(37,211,102,0.45)]
          transition-shadow
          hover:shadow-xl
        "
        style={{
          animationDelay: "0.3s",
        }}
      >
        <FaWhatsapp size={36} />
      </a>
    </div>
  );
}
