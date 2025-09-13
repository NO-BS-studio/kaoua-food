import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useIsMobile from "../../utils/isMobile";

const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

// ✅ First panel: "Mot du Directeur"
function DirectorPanel() {
  return (
    <motion.div
      key="first"
      variants={fadeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 1 }}
      className="flex md:flex-row flex-col-reverse md:gap-6 gap-3 w-[80vw] "
    >
      {/* Left Image */}
      <img
        src="/mosaic/Rectangle 43.png"
        alt="history-img1"
        className="rounded-2xl shadow-md object-cover w-full aspect-[9/12]"
      />

      {/* Text */}
      <div className="flex flex-col gap-4 justify-between md:w-[40%] h-full leading-none p-[1vw]">
        <h2 className="md:text-[5vw] text-[8vw] font-bold text-black">
          MOT DU DIRECTEUR
        </h2>
        <p className="md:text-[1.5vw] text-[3vw]">
          Kaoua Food est une entreprise algérienne fondée en 2011, spécialisée
          dans la fabrication de produits agroalimentaires.
          <br />
          <br />
          Reconnue pour sa pâte à tartiner emblématique Optilla, la marque s’est
          rapidement imposée comme une référence dans le cœur des consommateurs
          algériens.
          <br />
          <br />
          Forte de ce succès, Kaoua Food a élargi son portefeuille avec une
          gamme complète de confiseries, bonbons durs, gelées : alliant goût,
          innovation et qualité constante.
          <br />
          <br />
          En 2024, l’entreprise lance une gamme premium de chocolat et de
          biscuiterie la marque MOON, répondant à une demande croissante pour
          des produits de qualité, accessibles à un large public.
        </p>
      </div>
    </motion.div>
  );
}

// ✅ Second panel: "L’Histoire"
function HistoryPanel() {
  return (
    <motion.div
      key="second"
      variants={fadeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 1 }}
      className="w-auto  grid grid-cols-[1fr_1fr_1fr_1fr] md:grid-rows-[14vw_14vw_14vw] grid-rows-[20vw_20vw_20vw] md:gap-6 gap-2 my-[5vw] md:my-0"
    >
      {/* Row 1: Title + Subtitle */}
      <div className="md:col-span-2 col-span-4 leading-none order-1 md:order-none">
        <h2 className="md:text-[5vw] text-[10vw] font-extrabold text-black">
          L’HISTOIRE
        </h2>
        <p className="mt-2 text-[3vw] md:text-[1.5vw]">
          entreprise algérienne fondée en 2011, spécialisée dans la fabrication
          de produits agroalimentaires.
        </p>
      </div>
      {/* Row 1 + 2: Big Image - FIRST on mobile, stays in place on desktop */}
      <div className="md:row-span-2 col-span-2  h-full w-full order-5 md:order-none">
        <img
          src="/mosaic/Rectangle 48.png"
          alt="production"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>


      {/* Row 2: Worker + Green Card */}
      <div className="order-3 md:order-none">
        <img
          src="/mosaic/Rectangle 43.png"
          alt="worker"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="bg-green-700 text-white h-full rounded-xl flex flex-col justify-center items-center md:p-6 p-[3vw] leading-none order-4 md:order-none">
        <p className="text-[4vw] font-extrabold">14</p>
        <p className="text-[4vw] font-extrabold">ans</p>
        <p className="text-[2vw] opacity-80">d’existence</p>
      </div>

      {/* Row 3: Jar + Text */}
      <div className="bg-white rounded-xl p-4 shadow col-span-3  flex relative order-5 md:order-none">
        <img
          src="/products/moon.png"
          alt=""
          className="absolute w-[30%] top-[-3vw] left-[2%] -rotate-[5deg]"
        />
        <div className="uppercase absolute bg-orange-400 bottom-[1vw] left-[-4vw] py-[0.5vw] pl-[1.5vw] pr-[3vw] rounded-xl text-white text-[1vw] font-bold leading-none rotate-3">
          origines de la <br /> marque
        </div>
        <p className="md:text-[1.6vw] text-[1.8vw] leading-none pl-[33%] md:py-[2vw]">
          Réputée pour sa célèbre pâte à tartiner Optilla, la marque Kaoua Food
          s’est vite imposée en Algérie. Fort de ce succès, elle propose
          désormais une gamme variée de confiseries alliant goût, innovation et
          qualité.
        </p>
      </div>

      {/* Row 3: Orange Stats Card */}
      <div className="bg-orange-400 text-black rounded-xl flex flex-col justify-end leading-none items-start md:p-6 p-[3vw] order-6 md:order-none">
        <p className="text-[3vw] font-extrabold">11</p>
        <p className="text-[3vw] font-extrabold">production</p>
        <p className="text-[2vw] font-extrabold">complexes</p>
      </div>
    </motion.div>
  );
}

// ✅ Main component
export default function HistorySection() {
  const [showFirst, setShowFirst] = useState(true);
  const isMobile = useIsMobile();

  const handleSwitch = () => {
    if (!isMobile) setShowFirst((prev) => !prev);
  };

  return (
    <div
      className="relative w-full md:h-[80vw] flex flex-col items-center justify-center md:px-[15vw] px-[10vw] py-[5vw] text-black/40"
      onClick={handleSwitch}
    >
      <AnimatePresence mode="wait">
        {showFirst || isMobile ? (
          <>
            <DirectorPanel />
            {isMobile && <HistoryPanel />}
          </>
        ) : (
          <HistoryPanel />
        )}
      </AnimatePresence>
    </div>
  );
}
