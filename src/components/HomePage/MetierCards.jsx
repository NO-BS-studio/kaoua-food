import React, { useEffect, useState, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

export default function MetierCards() {
  const [jobs, setJobs] = useState([]);
  const ref = useRef(null);
  const dragRow = useDraggable(ref);

  // Fetch jobs from backend
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:3000/jobs"); // adjust endpoint if different
        if (!res.ok) throw new Error("Failed to fetch jobs");
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="w-full px-[15vw] py-[1vw]">
      <div
        ref={ref}
        {...dragRow.events}
        className="flex md:gap-[1vw] gap-[2vw] overflow-x-auto cursor-grab"
      >
        {jobs.map((card) => (
          <div
            key={card._id || card.title}
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
