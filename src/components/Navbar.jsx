import { useTranslation } from "react-i18next";
import clsx from "clsx"; // For conditional class handling (optional, but clean)

export default function Navbar({ variant = "style1" }) {
  const navStyles = {
    style1: {
      wrapper: "flex items-center md:justify-between justify-around w-full mb-10",
      nav: "md:flex hidden gap-10 text-white text-sm backdrop-blur-sm bg-white/10 px-10 py-2 rounded-full",
      flagBorder: "border-white",
      textColor: "text-white",
    },
    style2: {
      wrapper: "flex items-center md:justify-between justify-around w-full mb-10",
      nav: "md:flex hidden gap-10 text-black text-sm bg-[#5A3726]/10 px-10 py-2 rounded-full",
      flagBorder: "border-black",
      textColor: "text-black",
    },
  };

  const style = navStyles[variant];

  return (
    <div className={style.wrapper}>
      <img src="/logos/kaoua_logo.png" alt="Logo" className="h-12" />
      <nav className={style.nav}>
        <a href="/" className={style.textColor}>ACCUEUIL</a>
        <a href="/products" className={style.textColor}>NOS PRODUITS</a>
        <a href="/fournisseurs" className={style.textColor}>FOURNISSEURS</a>
        <a href="/contact" className={style.textColor}>CONTACT</a>
      </nav>
      <div className="md:flex hidden gap-4">
        <FlagButton code="fr" borderColor={style.flagBorder} />
        <FlagButton code="en" borderColor={style.flagBorder} />
      </div>
    </div>
  );
}

function FlagButton({ code, borderColor }) {
  const { i18n } = useTranslation();

  return (
    <button
      className={clsx("w-[3vw] h-[3vw] rounded-full overflow-hidden border ", borderColor)}
      title={code.toUpperCase()}
      onClick={() => i18n.changeLanguage(code)}
    >
      <img
        src={`/flags/${code}.png`}
        alt={code}
        className="w-full h-full object-cover"
      />
    </button>
  );
}
