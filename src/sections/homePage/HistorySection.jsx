import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useIsMobile from "../../utils/isMobile";
import { useTranslation } from "react-i18next";
const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

// ✅ First panel: "Mot du Directeur"
function DirectorPanel() {
  const { t, i18n } = useTranslation();

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
        className="rounded-2xl shadow-md object-cover w-full md:w-[50%] aspect-[9/12]"
      />

      {/* Text */}
      <div className="flex flex-col gap-4 justify-between md:w-[50%] h-full leading-none p-[1vw]">
        <h2 className="md:text-[5vw] text-[8vw] font-bold text-black uppercase">
          {t("homePage.section2.title")}{" "}
        </h2>
        <p className="md:text-[2vw] text-[4vw] whitespace-pre-wrap">
          {t("homePage.section2.paragraph")}{" "}
        </p>
      </div>
    </motion.div>
  );
}

// ✅ Second panel: "L’Histoire"
function HistoryPanel() {
  const { t, i18n } = useTranslation();

  return (
    <motion.div
      key="second"
      variants={fadeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 1 }}
      className="w-[80vw]  grid grid-cols-[1fr_1fr_1fr_1fr] md:grid-rows-[14vw_14vw_auto] grid-rows-[20vw_20vw_auto] md:gap-6 gap-2 my-[5vw] md:my-0"
    >
      {/* Row 1: Title + Subtitle */}
      <div className="md:col-span-2 col-span-4 leading-none order-1 md:order-none">
        <h2 className="md:text-[5vw] text-[10vw] font-extrabold text-black">
          {t("homePage.section3.title")}
        </h2>
        <p className="mt-2 text-[3vw] md:text-[1.5vw]">
          {t("homePage.section3.p1")}
        </p>
      </div>
      {/* Row 1 + 2: Big Image - FIRST on mobile, stays in place on desktop */}
      <div className="md:row-span-2 col-span-2  h-full w-full order-5 md:order-none">
        <img
          src="/mosaic/13.jpg"
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
        <p className="text-[4vw] font-extrabold">{t("homePage.section3.stats.yearsNumber")}</p>
        <p className="text-[4vw] font-extrabold">{t("homePage.section3.stats.yearsLabel")}</p>
        <p className="text-[2vw] opacity-80">{t("homePage.section3.stats.existence")}</p>
      </div>

      {/* Row 3: Jar + Text */}
      <div className="bg-white rounded-xl p-4 shadow col-span-4  flex relative order-5 md:order-none">
        <img
          src="/products/OPTILLA/PATE A TARTINER/OPTILLA 350G_trimmed.png"
          alt=""
          className="absolute w-[25%] md:top-[5vw] top-[15vw] md:left-0 left-[1vw] -rotate-[5deg]"
        />
        <div className="uppercase whitespace-pre absolute bg-orange-400 bottom-[1vw] left-[-4vw] py-[0.5vw] pl-[1.5vw] pr-[3vw] rounded-xl text-white text-[1vw] font-bold leading-none rotate-3">
          {t("homePage.section3.origines")}
        </div>
        <p className="md:text-[2vw] text-[2.5vw] leading-none rtl:leading-tight pl-[25%] md:py-[2vw] whitespace-pre-wrap">
          {t("homePage.section3.p2")}
        </p>
      </div>

      {/* Row 3: Orange Stats Card */}
      {/* <div className="bg-orange-400 text-black rounded-xl flex flex-col justify-end leading-none items-start md:p-6 p-[3vw] order-6 md:order-none">
        <p className="text-[3vw] font-extrabold">11</p>
        <p className="text-[3vw] font-extrabold">production</p>
        <p className="text-[2vw] font-extrabold">complexes</p>
      </div> */}
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
      className="relative w-full gap-[5vw]  flex flex-col items-center justify-center md:px-[15vw] px-[10vw] py-[5vw] text-black/40"
      // onClick={handleSwitch}
    >
      <AnimatePresence mode="wait">
        {
          // showFirst || isMobile
          true ? (
            <>
              {/* <DirectorPanel /> */}
              {
                // isMobile
                true && <HistoryPanel />
              }
            </>
          ) : (
            <HistoryPanel />
          )
        }
      </AnimatePresence>
    </div>
  );
}
