import React from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export default function ScrollCards() {
  const ref = useRef();
  const dragRow = useDraggable(ref);

  const { t, i18n } = useTranslation();

  const cards = [
    {
      id: 1,
      image: "/mosaic/1.jpg",
      title: t("homePage.section4.engagements.0.title"),
      badge: "KAOUAFOOD USINE",
      description: t("homePage.section4.engagements.0.paragraph"),
    },
    {
      id: 2,
      image: "/mosaic/13.jpg",
      title: t("homePage.section4.engagements.1.title"),
      badge: "QUALITÉ",
      description: t("homePage.section4.engagements.1.paragraph"),
    },
    {
      id: 3,
      image: "/mosaic/7.jpg",
      title: t("homePage.section4.engagements.2.title"),
      // badge: "R&D",
      description: t("homePage.section4.engagements.2.paragraph"),
      file: "/files/certificat.pdf",
      fileName: "certificat.pdf",
      fileMessage: t("homePage.certification"),
    },
    {
      id: 4,
      image: "/mosaic/5.jpg",
      title: t("homePage.section4.engagements.3.title"),
      // badge: "R&D",
      description: t("homePage.section4.engagements.3.paragraph"),
      file: "/files/data-protection.pdf",
      fileName: "data-protection.pdf",
      fileMessage: t("homePage.certification"),
    },
    // ...add 3 more cards
  ];

  return (
    <div className="w-full   py-[1vw]">
      <div
        ref={ref}
        {...dragRow.events}
        className="flex gap-[2vw] overflow-x-auto scrollbar-hide no-scrollbar pr-[15vw] md:pl-0 pl-[15vw]"
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex-shrink-0  w-[90vw] md:w-[70vw] md:h-[40vw] h-[55vw bg-white rounded-4xl shadow overflow-hidden snap-center my-[1vw] select-none cursor-grab"
          >
            <div className="flex flex-row h-full">
              {/* Image */}
              <div className="w-1/2">
                <img
                  src={card.image}
                  alt={card.title}
                  draggable={false}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-1/2 p-[2vw] flex flex-col justify-between md:gap-[3vw] gap-[6vw]">
                <div>
                  <div className="md:text-[4vw] text-[6vw] leading-none font-bold text-gray-900 relative">
                    {card.title}

                    {card.badge && (
                      <span className="absolute bottom-[-2vw] left-0 bg-orange-500 text-white text-[1vw] px-[1vw] py-[0.3vw] rounded-md mt-[0.5vw] rotate-[-3deg] w-fit">
                        {card.badge}
                      </span>
                    )}
                  </div>

                  <p className="mt-[2vw] md:text-[1.7vw] text-[2.5vw] leading-tight text-black/40 ">
                    {card.description}
                  </p>
                </div>
                <div className="flex justify-center text-center justify-self-end">
                  {card.file && (
                    <a
                      href={card.file}
                      download={card.fileName}
                      className="bg-[#D70F38] md:w-full w-[80%] text-white font-semibold rounded-full md:px-[2vw] px-[4vw] py-[1vw] md:py-[0.5vw] md:text-[1.2vw] text-[2.4vw] "
                    >
                      {card.fileMessage}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
