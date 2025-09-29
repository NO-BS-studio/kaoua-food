import React from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { useRef } from "react";
const jobs = [
  {
    title: "Expert Comptable",
    location: "On site - Boumerdes",
    type: "CDI / Temlps plein",
    isNew: true,
    missions: [
      "Prise en charge et supervision d’un portefeuille clients (comptabilité, fiscalité, juridique)",
      "Encadrement et supervision d’une équipe de collaborateurs comptables",
      "Conseil stratégique auprès des clients (optimisation fiscale, gestion, investissement, etc.)",
      "Revue et validation des bilans et liasses fiscales",
      "Veille réglementaire et participation au développement du cabinet",
    ],
    profile: [
      "Diplôme d’Expertise Comptable (DEC) obligatoire",
      "Expérience confirmée en cabinet (minimum 5 ans)",
      "Maîtrise des outils comptables (Quadra, Cegid, etc.)",
      "Sens du service client, rigueur, leadership et esprit d’équipe",
      "Bonnes capacités d’analyse et de synthèse",
    ],
  },
  {
    title: "Designer Graphique",
    location: "Hybride - Boumerdes",
    type: "CDD / Temlps partiel",
    isNew: true,
    missions: [
      "Création de supports graphiques pour print et digital",
      "Participation aux campagnes marketing",
    ],
    profile: [
      "Maîtrise de Photoshop/Illustrator",
      "Créativité et sens du détail",
    ],
  },
  {
    title: "Adjoint Secretaire",
    location: "On site - Boumerdes",
    type: "CDI / Temlps plein",
    isNew: false,
    missions: ["Gestion de l'agenda", "Accueil et communication"],
    profile: ["Bonne communication", "Organisation"],
  },
];

export default function MetierCards() {
  const ref = useRef(null);
  const dragRow = useDraggable(ref);
  return (
    <div className="w-full  px-[15vw]   py-[1vw]">
      <div ref={ref} {...dragRow.events} className="flex md:gap-[1vw] gap-[2vw] overflow-x-auto cursor-grab">
        {jobs.map((card) => (
          <div
            key={card.title}
            className="flex flex-col flex-shrink-0 w-[30vw] md:w-[16.5vw] md:h-[10vw] bg-white md:rounded-2xl rounded-2xl shadow overflow-hidden snap-center my-[1vw]"
          >
            
            <div className="select-none w-full h-full flex flex-col justify-center md:p-[1vw] p-[4vw] whitespace-pre-wrap leading-none md:text-[2vw] text-[4vw] font-extrabold">
              {card.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
