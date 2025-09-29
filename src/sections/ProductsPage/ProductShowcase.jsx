import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/Navbar";

const products = [
  {
    id: "optilla",
    name: "OPTILLA",
    descriptionEN:
      "A versatile range of creamy chocolate spreads, filled chocolates, and biscuits. Optilla offers classic, indulgent tastes like hazelnut and caramel for everyday moments of sweetness.",
    descriptionFR:
      "Une gamme polyvalente de pâtes à tartiner au chocolat crémeuses, chocolats fourrés et biscuits. Optilla propose des saveurs classiques et gourmandes comme la noisette et le caramel pour des moments de douceur au quotidien.",
    image: "/products/optilla.png",
    logo: "/logos/optilla_logo.png",
    bgImage: "/backgrounds/bg-red.jpg",
    highlightColor: "#ffffff",
    textColor: "#ffffff",
  },
  {
    id: "Moon (Mon Excellence)",
    name: "Moon (Mon Excellence)",
    descriptionEN:
      "MOON EXCELLENCE defines premium quality with its rich, gourmet hazelnut spreads. Made with 13% real hazelnuts, it's the ultimate indulgence for the most discerning palates.",
    descriptionFR:
      "MOON EXCELLENCE définit la qualité premium avec ses pâtes à tartiner gourmandes à la noisette. Composées de 13% de véritables noisettes, elles représentent l’indulgence ultime pour les palais les plus exigeants.",
    image: "/products/moon_slide.png",
    logo: "/logos/moon_logo.png",
    bgImage: "/backgrounds/bg-yellow.jpg",
    highlightColor: "#d6b08a",
    textColor: "#ffffff",
  },
  {
    id: "banado",
    name: "banado",
    descriptionEN:
      "Banado specializes in high-quality compound coatings in dark, milk, and white chocolate variations. Ideal for baking, confectionery, or simply enjoying as a delicious snack.",
    descriptionFR:
      "Banado est spécialisé dans les enrobages composés de haute qualité, déclinés en chocolat noir, au lait et blanc. Idéal pour la pâtisserie, la confiserie ou simplement à déguster comme un en-cas délicieux.",
    image: "/products/banado.png",
    logo: "/logos/banado_logo.png",
    bgImage: "/backgrounds/bg-light-blue.jpg",
    highlightColor: "#6A2F07",
    textColor: "#7B3F1F",
  },
  {
    id: "henina",
    name: "HENINA",
    descriptionEN:
      "Discover Henina's filled chocolate tablets, where a smooth Végécao shell gives way to a burst of fruity or creamy flavors. Each piece is a delightful surprise, perfect for sharing.",
    descriptionFR:
      "Découvrez les tablettes de chocolat fourrées Henina, où une coque lisse en Végécao révèle une explosion de saveurs fruitées ou crémeuses. Chaque morceau est une délicieuse surprise, parfaite à partager.",
    image: "/products/Henina.png",
    logo: "/logos/henina_logo.png",
    bgImage: "/backgrounds/bg-pink.jpg",
    highlightColor: "#d72a27",
    textColor: "#7B3F1F",
  },
  {
    id: "Napolitano",
    name: "Napolitano",
    descriptionEN:
      "Indulge in Napolitano's soft candy thickets, offering a uniquely tender texture and vibrant fruit tastes. A playful and colorful confectionery that melts in your mouth.",
    descriptionFR:
      "Savourez les confiseries tendres Napolitano, offrant une texture unique et des goûts fruités intenses. Une confiserie ludique et colorée qui fond dans la bouche.",
    image: "/products/NAPOLITANO.png",
    logo: "/logos/napolitano-logo.png",
    bgImage: "/backgrounds/bg-blue.png",
    highlightColor: "#ffffff",
    textColor: "#ffffff",
  },
  {
    id: "DoyDoy",
    name: "DoyDoy",
    descriptionEN:
      "DoyDoy brings joy with its soft, fruity jelly candies in a rainbow of natural flavors. These light and chewy treats are a fun, gluten-free option for all ages.",
    descriptionFR:
      "DoyDoy apporte de la joie avec ses bonbons gélifiés tendres et fruités, disponibles dans un arc-en-ciel de saveurs naturelles. Ces friandises légères et moelleuses sont une option amusante et sans gluten pour tous les âges.",
    image: "/products/DOYDOY/doydoy_trimmed.png",
    logo: "/logos/doydoy-logo.png",
    bgImage: "/backgrounds/bg-sky.jpg",
    highlightColor: "#6A2F07",
    textColor: "#7B3F1F",
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
                className="md:text-[2vw] text-[6vw] font-semibold"
                style={{ color: current.textColor }}
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
                className="text-base leading-relaxed md:h-[12vw] h-[18vw]"
                style={{ color: current.textColor }}
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
                className="absolute  right-0 left-0 md:left-auto top-0 bottom-0   m-auto max-w-full max-h-full md:max-h-none  md:w-[70%]  object-contain rounded-4xl"
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
            {t("marques")}
          </h3>
          <div className="grid md:grid-cols-6 grid-cols-3 gap-4  justify-between flex-wrap md:flex-nowrap">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => handleChangeProduct(product.id)}
                className="md:w-fit w-[20vw] md:h-30 h-20 bg-white/10 backdrop-blur-md rounded-xl p-3 flex flex-grow flex-col items-center justify-center hover:bg-white/20 transition"
              >
                <img
                  src={product.logo}
                  alt={product.name}
                  className="md:w-[80%] h-full object-contain"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
