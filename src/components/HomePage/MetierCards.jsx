import React from "react";

const cards = [
  {
    id: 1,
    image: "/mosaic/Rectangle 42.png",
    title: "CORPS\nMÉTIER #04",
  },
  {
    id: 2,
    image: "/mosaic/Rectangle 42.png",
    title: "CORPS\nMÉTIER #04",
  },
  {
    id: 3,
    image: "/mosaic/Rectangle 42.png",
    title: "CORPS\nMÉTIER #04",
  },
  {
    id: 4,
    image: "/mosaic/Rectangle 42.png",
    title: "CORPS\nMÉTIER #04",
  },
  {
    id: 5,
    image: "/mosaic/Rectangle 42.png",
    title: "CORPS\nMÉTIER #04",
  },
  {
    id: 6,
    image: "/mosaic/Rectangle 42.png",
    title: "CORPS\nMÉTIER #04",
  },
  // ...add 3 more cards
];

export default function MetierCards() {
  return (
    <div className="w-full   py-[1vw]">
      <div className="flex md:gap-[1vw] gap-[2vw] overflow-x-auto scrollbar-hide no-scrollbar">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex flex-col flex-shrink-0 w-[30vw] md:w-[16.5vw] md:h-[30vw] bg-white md:rounded-4xl rounded-2xl shadow overflow-hidden snap-center my-[1vw]"
          >
            <div className="w-full h-[70%] bg-green-200 rounded-full">
              <img
                src={card.image}
                className="object-cover w-full h-full"
                alt=""
              />
            </div>
            <div className="w-full h-full flex flex-col justify-end p-[1vw] whitespace-pre leading-none md:text-[2vw] text-[4vw] font-extrabold">
                {card.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
