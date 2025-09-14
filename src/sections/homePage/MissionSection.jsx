import React from "react";
import ScrollCards from "../../components/HomePage/ScrollCards";

export default function MissionSection() {
  return (
    <section
      className="w-full    py-[6vw]"
      style={{ backgroundImage: `url("/backgrounds/bg_maron.png")` }}
    >
      {/* Background pattern if needed */}
      <div className=" mx-auto grid grid-cols-2 gap-[2vw] relative z-10 px-[15vw]">
        {/* Mission (left side) */}
        <div className=" flex flex-col col-span-2 md:col-span-1 justify-center">
          <h2 className="md:text-[5vw] text-[10vw] font-extrabold text-white leading-tight">
            NOTRE <br /> MISSION
          </h2>
          <p className="mt-[1.5vw] md:text-[1.3vw] text-[2.5vw] leading-relaxed text-white/90 max-w-[90%]">
            Notre mission est d’offrir des produits de qualité supérieure,
            alliant saveur, confiance et accessibilité, pour répondre aux
            attentes quotidiennes de nos consommateurs.
          </p>
        </div>

        {/* Valeurs (right side) */}
        <div className="flex flex-col col-span-2 md:col-span-1 gap-[1.5vw]">
          {/* Heading badge */}
          <div className="relative w-full">
            <div className="absolute w-fit md:-top-[1vw] md:left-[1vw] right-0  rotate-[-5deg] bg-green-700 text-white font-bold px-[2vw] py-[0.5vw] rounded-md shadow">
              <span className="md:text-[1.5vw] text-[3vw]">VALEURS</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow md:p-[1.5vw] p-[2vw]">
            <p className="md:text-[1.4vw] text-[5vw] font-bold text-black">Qualité</p>
            <p className="md:text-[1.1vw] text-[3vw] text-gray-700 mt-[0.5vw]">
              Nous nous engageons à proposer des produits qui allient excellence
              et goût
            </p>
          </div>

          <div className="bg-white rounded-xl shadow md:p-[1.5vw] p-[2vw]">
            <p className="md:text-[1.4vw] text-[5vw] font-bold text-black">Innovation</p>
            <p className="md:text-[1.1vw] text-[3vw] text-gray-700 mt-[0.5vw]">
              Notre expertise et notre département R&amp;D sont pleinement
              dédiés à la création de produits
            </p>
          </div>

          <div className="bg-white rounded-xl shadow md:p-[1.5vw] p-[2vw]">
            <p className="md:text-[1.4vw] text-[5vw] font-bold text-black">Proximité</p>
            <p className="md:text-[1.1vw] text-[3vw] text-gray-700 mt-[0.5vw]">
              Nous plaçons le consommateur algérien au cœur de notre stratégie
            </p>
          </div>
        </div>

        {/* Vision (bottom full width) */}
        <div className="col-span-3 bg-[#d91f37] text-white rounded-xl mt-[3vw] flex flex-col md:flex-row justify-between items-center p-[2vw] gap-[2vw]">
          <p className="md:text-[2vw] text-[3vw] font-extralight leading-none md:max-w-[70%] p-[1vw]">
            Nous visons à faire de chaque produit Kaoua Food un symbole de
            confiance, d’innovation et de fierté nationale, en enrichissant les
            moments de vie des consommateurs avec authenticité et générosité.
          </p>
          <h2 className="text-[5vw] md:flex hidden  font-extrabold text-white leading-none">
            NOTRE <br /> VISION
          </h2>
        </div>
      </div>
      <div className="mt-[4vw] ml-[0vw] ">
        <ScrollCards />
      </div>{" "}
    </section>
  );
}
