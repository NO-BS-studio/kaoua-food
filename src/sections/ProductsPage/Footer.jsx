import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <footer className=" text-white px-[15vw] py-12  relative z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat "
          style={{ backgroundImage: `url("/backgrounds/bg_maron.png")` }}
        ></div>
        <div className="flex flex-col md:flex-row justify-between relative gap-8">
          <h2 className="text-3xl md:text-[50px] font-extrabold block md:hidden">
            {t("footer.brand")}
          </h2>

          {/* Left: Logo and Map */}
          <div className="flex-col gap-4 w-[40%] hidden md:flex relative">
            <h2 className="text-3xl md:text-[4.5vw] leading-none font-extrabold">
              {t("footer.brand")}
            </h2>
            <img
              src="/images/map.png"
              alt={t("footer.map_alt")}
              className="rounded-md object-cover h-[15vw]"
            />
            <div className="bg-[#b0133b] text-white text-sm md:text-[0.7vw] px-3 py-2 rounded-md shadow-xl font-semibold absolute bottom-0">
              {t("footer.address")}
            </div>
          </div>

          {/* Center: Contact & Mentions */}
          <div className="flex flex-col gap-4 text-sm md:text-[1vw] md:leading-[2vw] md:w-[20vw]">
            <div>
              <h3 className="font-bold text-white md:text-[1.4vw] mb-1">
                {t("footer.contact_title")}
              </h3>
              <p >
                {t("footer.tel_label")}
                <div className="num w-fit">
                  {t("footer.phone1")}
                  <br />
                  {t("footer.phone2")}
                </div>
              </p>
              <p className="mt-2">
                {t("footer.mail_label")}
                <br />
                <a href={`mailto:${t("footer.email")}`} className="underline">
                  {t("footer.email")}
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-bold mt-4 md:text-[1.4vw]">
                {t("footer.legal_title")}
              </h3>
              <p>{t("footer.copyright")}</p>
              <p className="text-sm text-white mt-1">
                {t("footer.subinfo")
                  .split("\n")
                  .map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
              </p>
            </div>
          </div>

          {/* Right: Navigation & Socials */}
          <div className="flex flex-col gap-4 text-sm md:text-[1vw] md:leading-[2vw] md:w-[20vw]">
            <div>
              <h3 className="font-bold mb-1 md:text-[1.4vw]">
                {t("footer.navigation_title")}
              </h3>
              <ul className="space-y-1">
                <li>
                  <a href="/" className="hover:underline">
                    {t("footer.nav_home")}
                  </a>
                </li>

                <li>
                  <a href="/produits" className="hover:underline">
                    {t("footer.nav_products")}
                  </a>
                </li>
                <li>
                  <a href="/carriere" className="hover:underline">
                    {t("footer.nav_career")}
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    {t("footer.nav_contact")}
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="font-bold mb-2 md:text-[1.4vw]">
                {t("footer.socials_title")}
              </h3>
              <div className="flex gap-3 text-xl">
                <a href="#">
                  <FaFacebook />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaYoutube />
                </a>
                <a href="#">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <img
        src="/images/map.png"
        alt={t("footer.mobile_map_alt")}
        className=" h-auto w-screen z-50 relative block md:hidden"
      />
    </>
  );
}
