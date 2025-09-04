import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/Navbar";

const products = [
  {
    id: "moon",
    name: "PÂTE MOON",
    descriptionEN:
      "Hazelnuts spread with cocoa, delicious and smooth. Perfect for breakfast or snack.",
    descriptionFR:
      "Pâte à tartiner sans gluten au goût noisette intense, idéale pour toute la famille.",
    image: "/products/moon_slide.png",
    logo: "/logos/moon_logo.png",
    bgImage: "/backgrounds/green_bg.png",
    highlightColor: "#d6b08a",
  },
  {
    id: "henina",
    name: "HENINA",
    descriptionEN:
      "Bonbons fruités fourrés à la crème sucrée. Un plaisir pour les petits et les grands.",
    descriptionFR:
      "Pâte à tartiner sans gluten au goût noisette intense, idéale pour toute la famille.",
    image: "/products/Henina.png",
    logo: "/logos/henina_logo.png",
    bgImage: "/backgrounds/blue_bg.png",
    highlightColor: "#d72a27",
  },
  {
    id: "optilla",
    name: "OPTILLA",
    descriptionEN:
      "Pâte à tartiner sans gluten au goût noisette intense, idéale pour toute la famille.",
    descriptionFR:
      "Pâte à tartiner sans gluten au goût noisette intense, idéale pour toute la famille.",
    image: "/products/optilla.png",
    logo: "/logos/optilla_logo.png",
    bgImage: "/backgrounds/green_bg.png",
    highlightColor: "#e43726",
  },
  {
    id: "banado",
    name: "banado",
    descriptionEN:
      "Bonbons fruités fourrés à la crème sucrée. Un plaisir pour les petits et les grands.",
    descriptionFR:
      "Pâte à tartiner sans gluten au goût noisette intense, idéale pour toute la famille.",
    image: "/products/banado.png",
    logo: "/logos/banado_logo.png",
    bgImage: "/backgrounds/blue_bg.png",
    highlightColor: "#d72a27",
  },
  {
    id: "optilla2",
    name: "OPTILLA2",
    descriptionEN:
      "Pâte à tartiner sans gluten au goût noisette intense, idéale pour toute la famille.",
    descriptionFR:
      "Pâte à tartiner sans gluten au goût noisette intense, idéale pour toute la famille.",
    image: "/products/moon_slide.png",
    logo: "/logos/moon_logo.png",
    bgImage: "/backgrounds/green_bg.png",
    highlightColor: "#e43726",
  },
  {
    id: "henina3",
    name: "HENINA3",
    descriptionEN:
      "Bonbons fruités fourrés à la crème sucrée. Un plaisir pour les petits et les grands.",
    descriptionFR:
      "Pâte à tartiner sans gluten au goût noisette intense, idéale pour toute la famille.",
    image: "/products/moon_slide.png",
    logo: "/logos/moon_logo.png",
    bgImage: "/backgrounds/blue_bg.png",
    highlightColor: "#d72a27",
  },
];

const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

export default function ProductShowcase() {
  const [index, setIndex] = useState(0);
  const current = products[index];

  const handleChangeProduct = (id) => {
    const newIndex = products.findIndex((p) => p.id === id);
    if (newIndex !== -1) setIndex(newIndex);
  };

  const { t, i18n } = useTranslation();
  const lang = i18n.language || "en"; // fallback in case not set

  const currentDescription =
    current[`description${lang.toUpperCase()}`] || current.descriptionEN;

  const handleNextProduct = () => {
    setIndex((prev) => (prev + 1) % products.length);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current.id}
          onClick={handleNextProduct}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${current.bgImage})` }}
          variants={fadeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        />
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col md:px-[15vw] px-[10vw] py-8 ">
        {/* Navbar */}
        <Navbar />

        {/* Main Product Section */}
        <div
          className="flex-grow flex md:flex-row flex-col items-center justify-between gap-16"
          onClick={handleNextProduct}
        >
          {/* Text Block */}

          <div className="max-w-xl md:w-[40%] w-full space-y-6 text-white">
            <AnimatePresence mode="wait">
              <motion.h1
                key={current.name + "-title" + currentDescription}
                className="text-[5vw] leading-none font-bold"
                style={{ color: current.highlightColor }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {t("vedettes")}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.h2
                key={current.name + "-name" + currentDescription}
                className="text-2xl font-semibold"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {current.name}
              </motion.h2>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={current.name + "-description" + currentDescription}
                className="text-base leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {currentDescription}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Product Image */}
          <div className="md:w-[60%] w-full h-[30vh] relative rounded-4xl">
            <AnimatePresence mode="sync">
              <motion.img
                key={current.image}
                src={current.image}
                alt={current.name}
                className="w-ful h-full object-contain absolute md:right-0 rounded-4xl"
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Brand Selector */}
        <div className="mt-8 text-white px-4 md:px-0">
          <h3 className="text-base font-extrabold mb-3 tracking-wide opacity-80 text-white/80">
            NOS MARQUES
          </h3>
          <div className="flex gap-4  justify-between flex-wrap md:flex-nowrap">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => handleChangeProduct(product.id)}
                className="md:w-fit w-[20vw] md:h-30 h-20 bg-white/10 backdrop-blur-md rounded-xl p-3 flex flex-grow flex-col items-center justify-center hover:bg-white/20 transition"
              >
                <img
                  src={product.logo}
                  alt={product.name}
                  className="w-[80%] h-full object-contain"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
