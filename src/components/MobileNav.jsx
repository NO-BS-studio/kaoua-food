import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Use Link for routing
import { useTranslation } from "react-i18next";
import useDisableScroll from "../utils/useDisableScroll";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  useDisableScroll(isOpen);

  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language || "en");

  const toggleLanguage = () => {
    const order = ["en", "fr", "ar"];
    const active = i18n.language || currentLang || "en";
    const idx = order.indexOf(active);
    const newLang = order[(idx + 1) % order.length];
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
  };

  // keep local state in sync if language changes elsewhere
  useEffect(() => {
    const lang = i18n.language || "en";
    setCurrentLang(lang);
  }, [i18n.language]);

  const navItems = [
    { label: t("nav.accueuil"), path: "/" },
    { label: t("nav.produits"), path: "/produits" },
    // { label: t("nav.carriere"), path: "/carriere" },
    { label: t("nav.contact"), path: "/contact" },
  ];



  return (
    <>
      {/* Hamburger Button */}
      <button
        className="absolute top-[10vw] left-[10vw] z-[51] md:hidden text-white/80 text-[10vw] focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <motion.div
            key="close-icon"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-black/80 text-[15vw] font-bold leading-[5vw]"
          >
            &times;
          </motion.div>
        ) : (
          <motion.div
            key="hamburger-icon"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-[2vw]"
          >
            <span className="block w-[8vw] h-[1vw] bg-black/30 rounded-sm" />
            <span className="block w-[8vw] h-[1vw] bg-black/30 rounded-sm" />
            <span className="block w-[8vw] h-[1vw] bg-black/30 rounded-sm" />
          </motion.div>
        )}
      </button>

      {/* Language Switcher */}
      <div className="absolute md:hidden flex top-[10vw] right-[10vw] z-50">
        <button
          onClick={toggleLanguage}
          className="w-[9vw] h-[9vw] flex items-center justify-center rounded-full border-2 border-black/30 text-black/30 text-[3vw] font-gmrkB uppercase bg-[#D9D9D9]/15 hover:bg-transparent transition"
        >
          {currentLang}
        </button>
      </div>

      {/* Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[50] bg-black/80 backdrop-blur-md flex flex-col items-center justify-center gap-6 md:hidden"
          >
            {navItems.map((item, index) => (
              <div
                key={index}
                className="border border-transparent hover:border-white px-6 py-3 rounded-full transition cursor-pointer"
              >
                <Link
                  to={item.path}
                  className="text-white text-[6vw] font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
