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
  // ...add 3 more cards
];

export default function MetierCards() {
  return (
    <div className="w-full   py-[1vw]">
      <div className="flex gap-[1vw] overflow-x-auto scrollbar-hide no-scrollbar">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex flex-col flex-shrink-0 w-[70vw] md:w-[16.5vw] h-[30vw] bg-white rounded-4xl shadow overflow-hidden snap-center my-[1vw]"
          >
            <div className="w-full h-[70%] bg-green-200 rounded-full">
              <img
                src={card.image}
                className="object-cover w-full h-full"
                alt=""
              />
            </div>
            <div className="w-full h-full flex flex-col justify-end p-[1vw] whitespace-pre leading-none text-[2vw] font-extrabold">
                {card.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
