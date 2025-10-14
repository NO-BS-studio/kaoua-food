import React from "react";
import Navbar from "../components/Navbar";
import ContactFormSection from "../sections/contactPage/ContactForm";
import ContactHeader from "../sections/contactPage/ContactHeader";
import MobileNav from "../components/MobileNav";

export default function ContactPage() {
  return (
    <div
      className="bg-[#fffaf4] text-gray-900 font-sans md:px-[15vw] px-[15vw] py-10"
    >
      <MobileNav/>
      <Navbar variant="style2" />
      <ContactHeader />
      <ContactFormSection />
    </div>
  );
}
