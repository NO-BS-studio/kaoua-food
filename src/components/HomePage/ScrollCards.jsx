import { div } from "framer-motion/client";
import React from "react";

const cards = [
  {
    id: 1,
    image: "/images/img1.jpg",
    title: "Processus de fabrication",
    badge: "KAOUAFOOD USINE",
    description:
      "Nos usines sont dotées de lignes de production spécialisées pour la pâte à tartiner, la biscuiterie et la confiserie. Chaque étape, de la sélection des matières premières à l’emballage, est contrôlée avec précision. Notre processus est pensé pour allier efficacité industrielle et excellence gustative.",
  },
  {
    id: 2,
    image: "/images/img1.jpg",
    title: "Contrôle qualité",
    badge: "QUALITÉ",
    description:
      "Chaque produit est soumis à un contrôle rigoureux afin de garantir une qualité constante, en accord avec nos standards d’excellence.",
  },
  {
    id: 3,
    image: "/images/img1.jpg",
    title: "Innovation continue",
    badge: "R&D",
    description:
      "Notre département R&D explore constamment de nouvelles recettes et techniques pour répondre aux attentes des consommateurs.",
  },
  // ...3 autres cartes
];

export default function ScrollCards() {
  return (
    <div className="flex w-full bg-green-500 p-10 overflow-clip">
      <div className="w-full bg-blue-500 overflow-clip py-10">
        {" "}
        {/* SCROLL CONTAINER */}
        <div className="flex gap-[4vw] overflow-clip scrollbar-hide scroll-smooth ">
          {" "}
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 w-[70vw] bg-white rounded-xl shadow overflow-clip snap-center"
            >
              <div className="flex flex-col md:flex-row h-full overflow-clip">
                {/* Image */}
                <div className="md:w-1/2">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>

                {/* Content */}
                <div className="md:w-1/2 p-[2vw] flex flex-col justify-center">
                  <h3 className="text-[1.6vw] font-bold text-gray-900">
                    {card.title}
                  </h3>

                  {card.badge && (
                    <span className="inline-block bg-orange-500 text-white text-[1vw] px-[1vw] py-[0.3vw] rounded-md mt-[0.5vw] rotate-[-3deg] w-fit">
                      {card.badge}
                    </span>
                  )}

                  <p className="mt-[1vw] text-[1.1vw] text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
