import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className=" text-white px-[15vw] py-12  relative z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat "
          style={{ backgroundImage: `url("/backgrounds/bg_maron.png")` }}
        ></div>
        <div className="flex flex-col md:flex-row justify-between relative gap-8">
          <h2 className="text-3xl md:text-[50px] font-extrabold block md:hidden">KAOUAFOOD</h2>

          {/* Left: Logo and Map */}
          <div className="flex-col gap-4 w-[40%] hidden md:flex">
            <h2 className="text-3xl md:text-[50px] font-extrabold">
              KAOUAFOOD
            </h2>
            <img
              src="/images/map.png"
              alt="Map"
              className="rounded-md object-cover h-[15vw]"
            />
            <div className="bg-[#b0133b] text-white text-sm md:text-[0.7vw] px-3 py-2 rounded-xl shadow-xl font-semibold -translate-y-7">
              Adresse : Domaine Halimi Property N°260 lot 193 Section 03 local
              B, Hamadi W.Boumerdes – Algeria
            </div>
          </div>

          {/* Center: Contact & Mentions */}
          <div className="flex flex-col gap-4 text-sm md:text-[1vw] md:leading-[2vw] md:w-[20vw]">
            <div>
              <h3 className="font-bold text-white md:text-[1.4vw] mb-1">
                Contact
              </h3>
              <p>
                tel.
                <br />
                +213 XXX XXX XXX
              </p>
              <p className="mt-2">
                mail.
                <br />
                <a href="mailto:contact@kawafood.com" className="underline">
                  contact@kawafood.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-bold mt-4 md:text-[1.4vw]">
                Mentions Légales
              </h3>
              <p>cc © 2025 Kawafood</p>
              <p className="text-sm text-white mt-1">
                moon.inc
                <br />
                powered by NO BS Studio
              </p>
            </div>
          </div>

          {/* Right: Navigation & Socials */}
          <div className="flex flex-col gap-4 text-sm md:text-[1vw] md:leading-[2vw] md:w-[20vw]">
            <div>
              <h3 className="font-bold mb-1 md:text-[1.4vw]">Navigation</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Complex
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Nos produits
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Fournisseurs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="font-bold mb-2 md:text-[1.4vw]">Reseaux</h3>
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
        alt="Map"
        className=" h-auto w-screen z-50 relative block md:hidden"
      />
    </>
  );
}
