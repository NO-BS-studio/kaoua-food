import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function HistorySection() {
  const [showFirst, setShowFirst] = useState(true);

  const handleSwitch = () => {
    setShowFirst((prev) => !prev);
  };

  return (
    <div
      className="relative w-full h-[80vw] flex flex-col items-center justify-center px-[15vw] py-[5vw] text-black/40"
      onClick={handleSwitch} // click anywhere to switch
    >
      <AnimatePresence mode="wait">
        {showFirst ? (
          <motion.div
            key="first"
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6 w-[70vw] ipl-[1.5vw]tems-center"
          >
            {/* Left Image */}
            <img
              src="/mosaic/Rectangle 43.png"
              alt="history-img1"
              className="rounded-2xl shadow-md object-cover w-full aspect-[9/12] "
            />

            {/* Text */}
            <div className="flex flex-col gap-4 justify-between h-full leading-none p-[1vw]">
              <h2 className="text-[5vw] font-bold text-black">
                MOT DU DIRECTEUR
              </h2>
              <p className=" text-[1.5vw] ">
                Kaoua Food est une entreprise algérienne fondée en 2011,
                spécialisée dans la fabrication de produits agroalimentaires.{" "}
                <br />
                <br />
                Reconnue pour sa pâte à tartiner emblématique Optilla, la marque
                s’est rapidement imposée comme une référence dans le cœur des
                consommateurs algériens. <br />
                <br />
                Forte de ce succès, Kaoua Food a élargi son portefeuille avec
                une gamme complète de confiseries , bonbons durs, gelées :
                alliant goût, innovation et qualité constante. <br />
                <br /> En 2024, l’entreprise lance une gamme premium de chocolat
                et de biscuiterie la marque MOON, répondant à une demande
                croissante pour des produits de qualité, accessibles à un large
                public.{" "}
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="second"
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.6 }}
            className=" w-auto mx-auto grid grid-cols-[1fr_1fr_1fr_1fr] grid-rows-3 gap-6"
          >
            {/* Row 1: Title + Subtitle */}
            <div className="col-span-2 leading-none">
              <h2 className="text-[5vw] font-extrabold text-black">
                L’HISTOIRE
              </h2>
              <p className="mt-2 text-[1.5vw] ">
                entreprise algérienne fondée en 2011, spécialisée dans la
                fabrication de produits agroalimentaires.
              </p>
            </div>
            {/* Row 1 + 2: Big Image */}
            <div className="row-span-2 col-span-2">
              <img
                src="/mosaic/Rectangle 48.png"
                alt="production"
                className="w-full h-full object-cover rounded-xl aspect-[5/4]"
              />
            </div>

            {/* Row 2: Worker + Green Card */}
            <div>
              <img
                src="/mosaic/Rectangle 43.png"
                alt="worker"
                className="w-full h-full aspect-[5/4] object-cover rounded-xl"
              />
            </div>
            <div className="bg-green-700 text-white h-full rounded-xl flex flex-col justify-center items-center p-6 leading-none">
              <p className="text-[4vw] font-extrabold">14</p>
              <p className="text-[4vw] font-extrabold">ans</p>
              <p className="text-[2vw] opacity-80">d’existence</p>
            </div>

            {/* Row 3: Jar + Text */}
            {/* <div className="col-span-2 grid grid-cols-2 gap-4 items-center"> */}
            {/* Jar with label */}

            {/* Text card */}
            <div className="bg-white rounded-xl p-4 shadow col-span-3 flex relative">
              {/* <div className="relative flex w-[100%] h-full "> */}
              <img
                src="/products/moon.png"
                alt=""
                className="absolute w-[30%]  top-[-3vw] -rotate-[5deg]"
              />
              <div className="uppercase absolute bg-orange-400 bottom-[1vw] left-[-4vw] py-[0.5vw] pl-[1.5vw] pr-[3vw] rounded-xl text-white text-[1vw] font-bold leading-none rotate-3">
                origines de la <br /> marque
              </div>
              {/* </div> */}
              <p className=" text-[1.6vw] leading-none pl-[33%] py-[2vw] ">
                Réputée pour sa célèbre pâte à tartiner Optilla, la marque Kaoua
                Food s’est vite imposée en Algérie. Fort de ce succès, elle
                propose désormais une gamme variée de confiseries alliant goût,
                innovation et qualité.
              </p>
            </div>
            {/* </div> */}

            {/* Row 3: Orange Stats Card */}
            <div className="bg-orange-400 text-black rounded-xl flex flex-col justify-end leading-none items-start p-6">
              <p className="text-[3vw] font-extrabold">11</p>
              <p className="text-[3vw] font-extrabold">production</p>
              <p className="text-[2vw] font-extrabold">complexes</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
