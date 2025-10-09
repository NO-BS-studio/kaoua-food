import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/Navbar";

const products = [
  {
    id: "OPTILLA",
    name: "OPTILLA",
    descriptionEN:
      "A versatile range of creamy chocolate spreads, filled chocolates, and biscuits. Optilla offers classic, indulgent tastes like hazelnut and caramel for everyday moments of sweetness.",
    descriptionFR:
      "Une gamme polyvalente de pâtes à tartiner au chocolat crémeuses, chocolats fourrés et biscuits. Optilla propose des saveurs classiques et gourmandes comme la noisette et le caramel pour des moments de douceur au quotidien.",
    images: [
      "/slides/Asset 2@2x.png",
      "/slides/Asset 1.png",
      "/slides/Asset 2.png",
      "/slides/Asset 3.png",
      "/slides/Asset 3@2x.png",
      "/slides/Asset 7@2x.png",
      "/slides/Asset 9@2x.png",
      "/slides/Asset 10@2x.png",
      "/slides/Asset 11@2x.png",
      "/slides/Asset 12@2x.png",
      "/slides/Asset 13@2x.png",
      "/slides/Asset 14@2x.png",
    ],
    logo: "/logos/optilla_logo.png",
    bgImage: "/backgrounds/bg-red.jpg",
    highlightColor: "#ffffff",
    textColor: "#ffffff",
  },
  {
    id: "MOON",
    name: "Moon (Mon Excellence)",
    descriptionEN:
      "MOON EXCELLENCE defines premium quality with its rich, gourmet hazelnut spreads. Made with 13% real hazelnuts, it's the ultimate indulgence for the most discerning palates.",
    descriptionFR:
      "MOON EXCELLENCE définit la qualité premium avec ses pâtes à tartiner gourmandes à la noisette. Composées de 13% de véritables noisettes, elles représentent l’indulgence ultime pour les palais les plus exigeants.",
    images: ["/slides/Asset 5@2x.png", "/slides/Asset 5.png"],
    logo: "/logos/moon_logo.png",
    bgImage: "/backgrounds/bg-yellow.jpg",
    highlightColor: "#d6b08a",
    textColor: "#ffffff",
  },
  {
    id: "BANADO",
    name: "banado",
    descriptionEN:
      "Banado specializes in high-quality compound coatings in dark, milk, and white chocolate variations. Ideal for baking, confectionery, or simply enjoying as a delicious snack.",
    descriptionFR:
      "Banado est spécialisé dans les enrobages composés de haute qualité, déclinés en chocolat noir, au lait et blanc. Idéal pour la pâtisserie, la confiserie ou simplement à déguster comme un en-cas délicieux.",
    images: ["/slides/Asset 1@2x.png", "/slides/Asset 4.png"],
    logo: "/logos/banado_logo.png",
    bgImage: "/backgrounds/bg-light-blue.jpg",
    highlightColor: "#6A2F07",
    textColor: "#7B3F1F",
  },
  {
    id: "HENINA",
    name: "HENINA",
    descriptionEN:
      "Discover Henina's filled chocolate tablets, where a smooth Végécao shell gives way to a burst of fruity or creamy flavors. Each piece is a delightful surprise, perfect for sharing.",
    descriptionFR:
      "Découvrez les tablettes de chocolat fourrées Henina, où une coque lisse en Végécao révèle une explosion de saveurs fruitées ou crémeuses. Chaque morceau est une délicieuse surprise, parfaite à partager.",
    images: ["/slides/Asset 8@2x.png"],
    logo: "/logos/henina_logo.png",
    bgImage: "/backgrounds/bg-pink.jpg",
    highlightColor: "#d72a27",
    textColor: "#7B3F1F",
  },
  {
    id: "NAPOLITANO",
    name: "Napolitano",
    descriptionEN:
      "Indulge in Napolitano's soft candy thickets, offering a uniquely tender texture and vibrant fruit tastes. A playful and colorful confectionery that melts in your mouth.",
    descriptionFR:
      "Savourez les confiseries tendres Napolitano, offrant une texture unique et des goûts fruités intenses. Une confiserie ludique et colorée qui fond dans la bouche.",
    images: ["/slides/Asset 4@2x.png"],
    logo: "/logos/napolitano-logo.png",
    bgImage: "/backgrounds/bg-blue.png",
    highlightColor: "#ffffff",
    textColor: "#ffffff",
  },
  {
    id: "DOYDOY",
    name: "DoyDoy",
    descriptionEN:
      "DoyDoy brings joy with its soft, fruity jelly candies in a rainbow of natural flavors. These light and chewy treats are a fun, gluten-free option for all ages.",
    descriptionFR:
      "DoyDoy apporte de la joie avec ses bonbons gélifiés tendres et fruités, disponibles dans un arc-en-ciel de saveurs naturelles. Ces friandises légères et moelleuses sont une option amusante et sans gluten pour tous les âges.",
    images: ["/products/DOYDOY/doy doy bag_trimmed.png"],
    logo: "/logos/doydoy-logo.png",
    bgImage: "/backgrounds/bg-sky.jpg",
    highlightColor: "#6A2F07",
    textColor: "#7B3F1F",
  },
];

const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

export default function ProductShowcase({ onBrandSelect }) {
  const [index, setIndex] = useState(0); // current product
  const [imageIndex, setImageIndex] = useState(0); // current image of product
  const current = products[index];

  const { t, i18n } = useTranslation();
  const lang = i18n.language || "en";

  const currentDescription =
    current[`description${lang.toUpperCase()}`] || current.descriptionEN;

  // Cycle product images every 1.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % current.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [current]); // reset when product changes

  const handleChangeProduct = (id) => {
    const newIndex = products.findIndex((p) => p.id === id);
    if (newIndex !== -1) {
      setIndex(newIndex);
      onBrandSelect(id);

      setImageIndex(0); // reset to first image
    }
  };

  const handleNextProduct = () => {
    setIndex((prev) => (prev + 1) % products.length);
    setImageIndex(0);
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
        <Navbar />

        <div
          className="flex-grow flex md:flex-row flex-col items-center justify-between gap-16 md:h-[30vw]"
          onClick={handleNextProduct}
        >
          {/* Text Block */}
          <div className="max-w-xl md:w-[40%] w-full space-y-6 text-white">
            <motion.h1
              key={current.name + "-title"}
              className="text-[5vw] leading-none font-bold"
              style={{ color: current.highlightColor }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {t("vedettes")}
            </motion.h1>

            <motion.h2
              key={current.name}
              className="md:text-[2vw] text-[6vw] font-semibold"
              style={{ color: current.textColor }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {current.name}
            </motion.h2>

            <motion.p
              key={currentDescription}
              className="text-base leading-relaxed md:h-[10vw] h-[45vw]"
              style={{ color: current.textColor }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {currentDescription}
            </motion.p>
          </div>

          {/* Product Image (cycled) */}
          <div className="md:w-[60%] w-full md:h-full h-[30vh] relative ">
            <AnimatePresence mode="sync">
              <motion.img
                key={current.images[imageIndex]} // ✅ cycle images
                src={current.images[imageIndex]}
                alt={current.name}
                className="absolute right-0 left-0 top-0 bottom-0 m-auto max-w-full max-h-full md:h-full object-contain rounded-4xl"
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
          <div className="grid md:grid-cols-6 grid-cols-3 gap-4">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => handleChangeProduct(product.id)}
                className="md:w-full md:h-30 h-20 bg-white/10 backdrop-blur-md rounded-xl p-3 flex flex-col items-center justify-center hover:bg-white/20 transition"
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
