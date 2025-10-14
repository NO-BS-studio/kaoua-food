import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import useIsMobile from "../../utils/isMobile";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";
import { useState, useMemo } from "react";

export default function ProductGallery({ products }) {
  const [selected, setSelected] = useState(null);
  const [hasSelectedOnce, setHasSelectedOnce] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const isMobile = useIsMobile(); // true if < 768px
  const { t, i18n } = useTranslation();

  const firstSelection = useRef(true);
  const justSelected = useRef(false);

  const handleSelect = (product) => {
    justSelected.current = true;
    setSelected(product);
    if (firstSelection.current) {
      setHasSelectedOnce(true);
      firstSelection.current = false;
    }
  };

  const filterColors = {
    OPTILLA: "#EC1C24",
    MOON: "#AA7D29",
    BANADO: "#5FA2BC",
    HENINA: "#FDC6CF",
    NAPOLITANO: "#1C86C8",
    DOYDOY: "#1C86C8",
  };

  const scale = ["scale-50", "scale-75", "scale-100"];

  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    setSelectedType(null);
    setSelected(products[0]);
  }, [products]);

  // Compute unique types for the current brand’s products
  const types = useMemo(
    () => [...new Set(products.map((p) => p.type))],
    [products]
  );

  // Apply type filter
  const visibleProducts = selectedType
    ? products.filter((p) => p.type === selectedType)
    : products;

  return (
    <motion.div
      className="relative  h-fit md:px-[15vw] px-[8vw] py-10 bg-transparent"
      transition={{ duration: 0.4 }}
    >
      {/* Top title */}
      <div className="mb-8">
        <h2 className="text-5xl md:text-[2.5vw] font-black text-black">
          {t("nosProduits")}
        </h2>
      </div>

      {types.length > 0 && (
        <div className="flex gap-3  mb-6 overflow-auto pb-2">
          {/* "All" button */}
          <button
            onClick={() => setSelectedType(null)}
            style={{
              backgroundColor:
                selectedType === null
                  ? "black"
                  : filterColors[products[0].brand],
              // color: selectedType === null ? "white" : "black",
            }}
            className={`md:px-4 px-3 md:py-2 py-1 md:text-[0.8vw] text-[3vw] rounded-full  transition 
              ${selectedType === null ? " text-white" : " text-white"}
              `}
          >
            TOUS
          </button>

          {types.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedType(t)}
              style={{
                backgroundColor:
                  selectedType === t
                    ? "black"
                    : filterColors[products[0].brand],
                // color: selectedType === null ? "white" : "black",
              }}
              className={`md:px-4 px-3 md:py-2 py-1 md:text-[0.8vw] text-[3vw] rounded-full  transition 
                ${selectedType === t ? " text-white" : " text-white"}`}
            >
              {t}
            </button>
          ))}
        </div>
      )}

      {/* Product scroll row */}
      <div
        className="grid md:grid-cols-6 grid-cols-2  gap-4  md:p-4 p-0 mb-16 overflow-hidden w-full no-scrollbar  scroll-smooth pb-8 md:mb-[10vh] "
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 1%, black 99%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 1%, black 99%, transparent 100%)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      >
        {visibleProducts.map((product, index) => (
          <ScrollLink
            key={product.id}
            className="relative flex overflow-y-visible md:h-[10vw] w-full  h-[40vw]  grow z-20 "
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleSelect(product)}
            to="details"
            duration={600}
            smooth={true}
            offset={-300}
          >
            <motion.div
              className="  rounded-2xl shadow-xl p-4 cursor-pointer w-full z-30 bg-[#FFE9C2] "
              style={{ backgroundColor: product.bgColor }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={product.image}
                // alt={product.name}
                className={`h-full object-contain mx-auto ${
                  product.size ? scale[product.size - 1] : ""
                }`}
              />
            </motion.div>

            <AnimatePresence mode="wait">
              {/* {hoveredIndex === index && ( */}
              {false && (
                <motion.div
                  className=" rounded-2xl py-4 shadow-xl overflow-y-visible relative z-10 hidden md:block"
                  style={{ backgroundColor: product.bgColor }}
                  initial={{
                    width: 0,
                    opacity: 0,
                    marginLeft: 0,
                    paddingLeft: "0rem",
                  }}
                  animate={{
                    width: 288,
                    opacity: 1,
                    marginLeft: "1rem",
                    paddingLeft: "1rem",
                  }}
                  exit={{
                    width: 0,
                    opacity: 0,
                    marginLeft: 0,
                    paddingLeft: "0rem",
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <motion.div
                    className="w-[256px]" // Ensure stable layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                  >
                    <h2 className="text-xl font-bold text-black leading-tight">
                      {product.name}
                    </h2>
                    <p className="text-gray-600 mt-2">{product.description}</p>
                    <p className="text-xl font-bold text-gray-500 mt-4">
                      {product.sizes[0]}
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </ScrollLink>
        ))}
      </div>

      {/* Detail panel */}
      <AnimatePresence mode="wait">
        <div className="h-0" name="details"></div>
        {hasSelectedOnce && (
          <motion.div
            className="flex relative "
            layout
            initial={{ opacity: 1, y: 0, height: "0" }}
            animate={{ opacity: 1, y: 0, height: isMobile ? "200vw" : "25vw" }}
            transition={{ duration: 0.4 }}
          >
            {selected && (
              <motion.div
                key={selected.id}
                initial={() => {
                  justSelected.current = false;
                  return {
                    opacity: 0,
                    y: 20,
                    // height: isInitial ? 0 : "20vh",
                  };
                }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className=" relative  flex gap-8 md:items-center justify-start md:flex-row flex-col items-center md:h-full h-[150vw] "
              >
                {/* Image section */}
                <div className="relative h-full md:w-[20vw] items-start justify-center flex">
                  {/* <div className="absolute md:w-[18vw] md:h-[18vw] w-[60vw] h-[60vw] bg-amber-800/80 rotate-[-10deg] rounded-3xl" /> */}
                  <img
                    src={selected.image}
                    alt={selected.name}
                    className={`relative  z-10 md:h-[20vw] h-[60vw] md:top-[-2vw] top-[-5vw]  w-[40vw] object-contain 
                      ${selected.size ? scale[selected.size - 1] : ""}`}
                  />
                </div>

                {/* Textual content */}
                <div className="pl-[5vw] space-y-4 max-w-2xl md:h-full h-[100vw] relative">
                  <h3 className="text-3xl md:text-[2vw] font-bold text-black leading-tight">
                    {selected.name}
                  </h3>
                  <p className="text-gray-600 text-lg md:text[1vw] leading-relaxed">
                    {selected.description}
                  </p>

                  <div className="text-sm text-gray-400 mt-4">
                    @kaouafood.algerie
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className=" h-full w-full flex flex-col items-center text-center justify-end gap-[1.5vw] py-[2vw] leading-none">
        <h1 className="md:text-[5vw] text-[10vw] font-bold whitespace-pre uppercase">
          {t("catalogue.title")}{" "}
        </h1>
        <p className="md:text-[1.1vw] text-[2.2vw]">
          {" "}
          {t("catalogue.subtitle")}{" "}
        </p>
        <a
          href="/files/catalogue.pdf"
          download="catalogue.pdf"
          className="bg-[#D70F38] text-white font-semibold rounded-full md:px-[2vw] px-[4vw] py-[1vw] md:py-[0.5vw] md:text-[1.2vw] text-[2.4vw] "
        >
          {t("catalogue.button")}{" "}
        </a>
      </div>
    </motion.div>
  );
}
