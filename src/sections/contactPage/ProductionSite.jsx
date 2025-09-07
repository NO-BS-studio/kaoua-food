import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import sitesData from "../../data/productionSites.json";
import useIsMobile from "../../utils/isMobile";

export default function ProductionSites() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = sitesData.length;
  const currentSite = sitesData[currentIndex];

  const isMobile = useIsMobile();
  const [containerHeight, setContainerHeight] = useState("auto");

  // keep latest index in a ref so resize handler can access it without re-adding listeners
  const currentIndexRef = useRef(currentIndex);
  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  const MULTIPLIER = 2.5; // tweak this

  // measure the element that corresponds to the current index (or fall back to any visible slide)
  const calculateHeightForCurrent = () => {
    const idx = currentIndexRef.current;

    // prefer the element matching the current index
    let el = document.querySelector(`.production-slide[data-index="${idx}"]`);

    // if not found or not measurable, fallback to any visible production-slide element
    if (!el || el.getBoundingClientRect().height === 0) {
      const els = document.querySelectorAll(".production-slide");
      for (const e of els) {
        const r = e.getBoundingClientRect();
        if (r.height > 0) {
          el = e;
          break;
        }
      }
    }

    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.height > 0) {
        setContainerHeight(rect.height * MULTIPLIER);
        return true;
      }
    }
    return false;
  };

  // initial measurement (only once) + try again via rAF to ensure DOM painted
  // initial measurement (only once) + ensure DOM is painted
  useEffect(() => {
    if (!isMobile) return;

    if (containerHeight === "auto") {
      // do an immediate measure after mount
      calculateHeightForCurrent();
      // and a second measure on next frame to catch async layout
      requestAnimationFrame(() => calculateHeightForCurrent());
    }
  }, [isMobile, containerHeight]);

  // resize listener: instant measure without debounce
  useEffect(() => {
    if (!isMobile) return;

    const onResize = () => {
      calculateHeightForCurrent();
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [isMobile]); // still no currentIndex here

  const appliedHeight = isMobile ? containerHeight : "30vw";

  return (
    <section className="mt-16 text-center">
      <h2 className="text-3xl font-bold mb-6 w-full text-right md:text-[4vw] md:leading-[4vw]">
        SITES DE <br /> PRODUCTION
      </h2>

      <div
        style={{ height: appliedHeight }}
        className="w-full md:h-[30vw] mx-auto flex flex-col md:flex-row items-stretch bg-white shadow-lg rounded-3xl overflow-hidden relative transition-all duration-500 ease-in-out"
      >
        {/* Animated Image */}
        <div className="flex w-full md:w-1/2 h-full relative overflow-hidden">
          <AnimatePresence mode="sync">
            <motion.img
              key={currentSite.id}
              src={currentSite.image}
              alt={currentSite.name}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="h-full object-cover absolute rounded-3xl"
            />
          </AnimatePresence>
        </div>

        {/* Animated Text */}
        <div className="flex md:w-1/2 h-full text-left flex-col justify-center relative overflow-hidden">
          <AnimatePresence mode="sync">
            <motion.div
              key={currentSite.id + "-text"}
              className="absolute w-full h-full flex flex-col justify-between md:p-[2vw] p-[5vw] md:text-[1.5vw] text-[4vw]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              {/* assign a predictable selector and data-index so we can query it on resize */}
              <div className="production-slide" data-index={currentIndex}>
                <h3 className="text-gray-200 md:text-[12vw] text-[25vw] leading-none font-bold text-right">
                  #{currentSite.id}
                </h3>

                <div>
                  <h4 className="font-bold mt-2">{currentSite.name}</h4>
                  <p className="italic text-gray-500">{currentSite.category}</p>
                </div>

                <p className="mt-3 leading-none">
                  Adr. {currentSite.address}
                  <br />
                  tel. {currentSite.phone}
                  <br />
                  mail. {currentSite.email}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: total }).map((_, i) => (
          <motion.div
            key={i}
            initial={false}
            animate={{
              width: i === currentIndex ? "10vw" : (isMobile ? "2vw" : "0.6vw"),
              backgroundColor:
                i === currentIndex ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.25)",
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:h-[0.6vw] h-[2vw] rounded-full cursor-pointer"
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
