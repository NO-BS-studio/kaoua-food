import React from "react";

const cards = [
  {
    id: 1,
    image: "/mosaic/Rectangle 57.png",
    title: "Processus de fabrication",
    badge: "KAOUAFOOD USINE",
    description:
      "Nos usines sont dotées de lignes de production spécialisées pour la pâte à tartiner, la biscuiterie et la confiserie. Chaque étape, de la sélection des matières premières à l’emballage, est contrôlée avec précision. Notre processus est pensé pour allier efficacité industrielle et excellence gustative.",
  },
  {
    id: 2,
    image: "/mosaic/Rectangle 57.png",
    title: "Contrôle qualité",
    badge: "QUALITÉ",
    description:
      "Chaque produit est soumis à un contrôle rigoureux afin de garantir une qualité constante, en accord avec nos standards d’excellence.",
  },
  {
    id: 3,
    image: "/mosaic/Rectangle 57.png",
    title: "Innovation continue",
    badge: "R&D",
    description:
      "Notre département R&D explore constamment de nouvelles recettes et techniques pour répondre aux attentes des consommateurs.",
  },
  // ...add 3 more cards
];

export default function ScrollCards() {
  return (
    <div className="w-full   py-[1vw]">
      <div className="flex gap-[2vw] overflow-x-auto scrollbar-hide no-scrollbar pr-[15vw]">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex-shrink-0 w-[100vw] md:w-[70vw] md:h-[35vw] h-[60vw] bg-white rounded-xl shadow overflow-hidden snap-center my-[1vw]"
          >
            <div className="flex flex-row h-full">
              {/* Image */}
              <div className="w-1/2">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-1/2 p-[2vw] flex flex-col justify-start md:gap-[3vw] gap-[6vw]">
                <div className="md:text-[4vw] text-[6vw] leading-none font-bold text-gray-900 relative">
                  {card.title}

                  {card.badge && (
                    <span className="absolute bottom-[-2vw] left-0 bg-orange-500 text-white text-[1vw] px-[1vw] py-[0.3vw] rounded-md mt-[0.5vw] rotate-[-3deg] w-fit">
                      {card.badge}
                    </span>
                  )}
                </div>

                <p className="mt-[1vw] md:text-[1.7vw] text-[2.5vw] leading-tight text-black/40 ">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
