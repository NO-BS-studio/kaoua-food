import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function ContactHeader() {
  const { t, i18n } = useTranslation();

  return (
    <section className="flex flex-col md:flex-row justify-between  md:py-[10vw] gap-[5vw] text-black/30">
      {/* Left: Title & Address */}
      <div className="md:w-[50%] md:text-[1.8vw] md:leading-[2vw] text-[4vw] leading-none md:py-0 py-[10vw]">
        <h1 className="text-4xl font-bold mb-4 md:text-[5vw] text-black">
          {t("contact.title")}
        </h1>
        <p className=" mb-4 py-[2vw] ">{t("contact.description")}</p>
        <p className="font-bold md:text-[2vw] text-[4.2vw]">{t("contact.address_label")}</p>
        <p className="">{t("contact.address")}</p>
      </div>

      {/* Right: Contact Details */}
      <div className="flex flex-col gap-4 md:w-[50%] justify-between md:text-[1.8vw] p-[2vw] ">
        <div className=" rounded-lg relative  flex flex-col items-center">
          <span className="bg-red-500 text-white   rounded-md absolute left-[-5vw] md:top-[-5vw] top-[-4vw] rotate-[-15deg] flex md:w-[50%] w-[40%] md:text-[1vw] text-[2vw] md:leading-[1vw] leading-[2vw] font-bold md:px-[1vw] md:py-[0.5vw] py-[1vw] px-[2vw]">
            {t("contact.service").split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </span>

          <div className="grid items-center grid-rows-3 grid-cols-[10%_auto] mx-[5%] gap-[2vw] md:text-[2vw] text-[4vw] my-[5vw] md:my-0">
            <FaPhoneAlt className="" />
            <span className="flex w-full justify-center num">0560 04 05 37</span>
            <FaPhoneAlt className="" />
            <span className="flex w-full justify-center num">0562 67 80 06</span>

            <FaEnvelope className="" />
            <span className="flex w-full justify-center">
              contact@kaouafood.dz
            </span>
          </div>

          {/* <div className="flex items-center mt-2 gap-2"></div>
          <div className="flex items-center mt-1 gap-2"></div> */}
        </div>

        {/* Social Links */}
        {/* <div className="bg-white relative shadow-md p-3 rounded-2xl flex items-center   md:mx-[5%]">
          <span className="bg-green-700 text-white  rounded-md absolute left-[60%] -top-[50%] flex rotate-[5deg] md:w-[50%] w-[40%] md:text-[1vw] text-[2vw] md:leading-[1vw] leading-[2vw] font-bold md:px-[1vw] md:py-[0.5vw] py-[1vw] px-[2vw]">
            LIENS <br /> RÉSEAUX
          </span>
          <div className="flex gap-3 text-gray-700 text-lg justify-around w-full px-[1vw] py-[0.5vw]">
            <FaFacebookF className="md:w-[2vw] md:h-[2vw]" />
            <FaTwitter className="md:w-[2vw]  md:h-[2vw]   " />
            <FaInstagram className="md:w-[2vw]  md:h-[2vw] " />
            <FaYoutube className="md:w-[2vw]  md:h-[2vw] " />
            <FaLinkedin className="md:w-[2vw]  md:h-[2vw] " />
          </div>
        </div> */}
      </div>
    </section>
  );
}
