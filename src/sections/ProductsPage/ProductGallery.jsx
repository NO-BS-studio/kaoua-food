import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import useIsMobile from "../../utils/isMobile";

export default function ProductGallery({ products }) {
  const [selected, setSelected] = useState(null);
  const [hasSelectedOnce, setHasSelectedOnce] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const isMobile = useIsMobile(); // true if < 768px

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

  return (
    <motion.div
      layout
      className="relative  h-fit md:px-[15vw] px-[8vw] py-10 bg-transparent"
      transition={{ duration: 0.4 }}
    >
      {/* Top title */}
      <div className="mb-8">
        <h2 className="text-5xl md:text-[2.5vw] font-black text-black">NOS PRODUITS</h2>
      </div>

      {/* Product scroll row */}
      <div
        className="flex  md:gap-4 gap-1 md:p-4 p-0 mb-16 overflow-x-auto w-full no-scrollbar  scroll-smooth pb-8 md:mb-[10vh] "
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 1%, black 99%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 1%, black 99%, transparent 100%)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      >
        {products.map((product, index) => (
          <div
            key={product.id}
            className="relative flex overflow-y-visible z-20"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleSelect(product)}
          >
            <motion.div
              className=" md:w-40 w-20 rounded-2xl shadow-xl p-4 cursor-pointer z-30"
              style={{ backgroundColor: product.bgColor }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="  w-full h-full object-contain mx-auto"
              />
            </motion.div>

            <AnimatePresence mode="wait">
              {hoveredIndex === index && (
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
          </div>
        ))}
      </div>

      {/* Detail panel */}
      <AnimatePresence mode="wait">
        {hasSelectedOnce && (
          <motion.div
            className="flex relative "
            layout
            initial={{ opacity: 1, y: 0, height: "0" }}
            animate={{ opacity: 1, y: 0, height: isMobile ? "80vh" : "25vw" }}
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
                className=" relative  flex gap-8 md:items-center justify-start md:flex-row flex-col items-center md:h-full h-[40vh] "
              >
                {/* Image section */}
                <div className="relative h-full md:w-[20vw] items-start justify-center flex">
                  <div
                    className="absolute md:w-[18vw] md:h-[18vw] w-[40vw] h-[40vw] rotate-[-10deg] rounded-3xl"
                    style={{ backgroundColor: selected.overlayColor }}
                  />
                  <img
                    src={selected.image}
                    alt={selected.name}
                    className="relative z-10 md:w-[15vw] w-[40vw] object-contain"
                  />
                </div>

                {/* Textual content */}
                <div className="pl-[5vw] space-y-4 max-w-2xl md:h-full h-[50vh] relative">
                  <h3 className="text-3xl md:text-[2vw] font-bold text-black leading-tight">
                    {selected.name}
                  </h3>
                  <p className="text-gray-600 text-lg md:text[1vw] leading-relaxed">
                    {selected.description}
                  </p>

                  {/* Sizes */}
                  <div>
                    <span className="font-semibold text-sm md:text-[1vw] text-gray-500 block mb-1">
                      Poids
                    </span>
                    <div className="flex gap-2 flex-wrap">
                      {selected.sizes.map((size) => (
                        <span
                          key={size}
                          className="px-2 py-1 rounded-lg bg-gray-200 text-sm md:text-[1vw]"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex gap-8 mt-4 flex-wrap">
                    {selected.features.map((feat) => (
                      <div key={feat} className="flex flex-col items-center">
                        <div className="w-12 h-12 md:w-[2.5vw] md:h-[2.5vw] rounded-full bg-[#e8ded2]"></div>
                        <span className="text-xs md:text-[0.8vw] mt-2 text-center text-gray-700 font-semibold">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Reference */}
                  <div className="text-sm text-gray-400 mt-4">
                    @moon.algerie — ref. {selected.reference}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mb-8">
        <h2 className="text-4xl md:text-[2.5vw] font-black text-black w-1/2 pb-5">NOS GARANTIES</h2>
        <h2 className="text-sm md:text-[1.2vw] md:leading-[2vw]  text-black">
          Notre collection large de produits super sympas qui sont super bons à manger et ouais c’est incroyable... Vous me croyez pas? Testez vous-meme !
        </h2>
      </div>
    </motion.div>
  );
}
