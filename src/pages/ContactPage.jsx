import React from "react";
import Navbar from "../components/Navbar";
import ContactFormSection from "../sections/contactPage/ContactForm";
import ProductionSites from "../sections/contactPage/ProductionSite";
import ContactHeader from "../sections/contactPage/ContactHeader";

export default function ContactPage() {
  return (
    <div className="bg-[#fffaf4] text-gray-900 font-sans md:px-[15vw] px-[15vw] py-10">
      <Navbar variant="style2"/>
      <ContactHeader />
      <ProductionSites />
      <ContactFormSection />
    </div>
  );
}
