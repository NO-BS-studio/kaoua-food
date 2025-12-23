import { useTranslation } from "react-i18next";
import clsx from "clsx"; // For conditional class handling (optional, but clean)
export default function Navbar({ variant = "style1" }) {
  const { t, i18n } = useTranslation();

  const navStyles = {
    style1: {
      wrapper:
        "flex items-center md:justify-between justify-around w-full mb-10",
      nav: "md:flex hidden gap-10 text-white text[2vw] backdrop-blur-sm bg-white/10 px-10 py-2 rounded-full",
      flagBorder: "border-white ",
      textColor: "text-white text-[1vw] text-center",
    },
    style2: {
      wrapper:
        "flex items-center md:justify-between justify-around w-full mb-10",
      nav: "md:flex hidden gap-10 text-black text[2vw] bg-[#5A3726]/10 px-10 py-2 rounded-full",
      flagBorder: "border-black ",
      textColor: "text-black text-[1vw] text-center",
    },
  };

  const style = navStyles[variant];

  return (
    <div className={style.wrapper}>
      <a href="/">
      <img
        src="/logos/kaoua_logo.png"
        alt="Logo"
        className="md:h-[4vw] h-[10vw]"
      /></a>
      
      <nav className={style.nav}>
        <a href="/" className={style.textColor}>
          {t("nav.accueuil")}
        </a>
        <a href="/produits" className={style.textColor}>
          {t("nav.produits")}
        </a>
        {/* <a href="/carriere" className={style.textColor}>{t("nav.carriere")}</a> */}
        <a href="/contact" className={style.textColor}>
          {t("nav.contact")}
        </a>
      </nav>
      <div className="md:flex hidden gap-4">
        <FlagButton code="fr" borderColor={style.flagBorder} />
        <FlagButton code="en" borderColor={style.flagBorder} />
        <FlagButton code="ar" borderColor={style.flagBorder} />
      </div>
    </div>
  );
}

export function FlagButton({ code }) {
  const { i18n } = useTranslation();

  return (
    <button
      className="w-[2vw] h-[2vw] flex items-center justify-center rounded-full border-2 border-black/80 text-black/80 text-[0.8vw] font-gmrkB uppercase bg-[#D9D9D9]/15 hover:bg-transparent transition"
      title={code.toUpperCase()}
      onClick={() => i18n.changeLanguage(code)}
    >
      {code.toUpperCase()}
    </button>
  );
}
