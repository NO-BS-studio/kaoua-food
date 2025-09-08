import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import MetierCards from "../../components/HomePage/MetierCards";

export default function MetierSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  // `once: true` → runs only first time
  // `margin` → lets it trigger slightly before fully visible

  return (
    <section className="w-full  flex flex-col items-center py-[6vw] px-[15vw]">
      <div className="flex flex-col items-center">
        <h1 className="uppercase md:text-[6vw] font-extrabold">les métiers</h1>
        <p className="md:text-[2vw] text-black/40 text-center">
          Des questions ? Posez vos questions a notre <br /> chat bot.
        </p>
      </div>

      <div
        ref={ref}
        className="w-full   overflow-hidden relative"
      >
        <motion.div
          initial={{ opacity: 0, x: "-80vw" }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className=" "
        >
          <MetierCards/>
        </motion.div>
      </div>
    </section>
  );
}
