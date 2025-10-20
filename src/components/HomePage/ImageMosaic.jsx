import { motion } from "framer-motion";
import useIsMobile from "../../utils/isMobile";

const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: "-100vh", opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      type: "tween",
      stiffness: 120,
      damping: 14,
    },
  },
};

const imagesLayout = [
  // 1st column (3 images)
  [
    "/mosaic/Rectangle 42.png",
    "/mosaic/Rectangle 43.png",
    "/mosaic/Rectangle 48.png",
  ],

  // 2nd column (2 images)
  ["/mosaic/Rectangle 50.png", "/mosaic/Rectangle 51.png"],

  // 3rd column (1 image)
  ["/slides/Asset 2@2x.png"],

  // 4th column (1 image)
  ["/mosaic/Rectangle 53.png"],

  // 5th column (1 image)
  ["/mosaic/Rectangle 55.png"],

  // 6th column (1 image)
  ["/mosaic/Rectangle 56.png"],

  // 7th column (1 image)
  ["/mosaic/Rectangle 57.png"],

  // 8th column (2 images)
  ["/mosaic/Rectangle 58.png", "/mosaic/Rectangle 60.png"],

  // 9th column (3 images)
  [
    "/slides/Asset 11@2x.png",
    "/mosaic/Rectangle 52.png",
    "/slides/Asset 5.png",
  ], // repeated last one if needed
];

export default function ImageMosaic() {
  const isMobile = useIsMobile();
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex w-[150vw] justify-center gap-[1vw] pointer-events-none"
    >
      {imagesLayout.map((col, colIndex) => (
        <div
          key={colIndex}
          className={`flex  flex-col  gap-[1vw] ${
            colIndex % 2 === 0
              ? colIndex % 4 === 0
                ? "mt-[0vw]"
                : "md:mt-[4vw] mt-[10vw]"
              : "md:mt-[2vw] mt-[5vw]"
          }`}
        >
          {col.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`img-${colIndex}-${i}`}
              variants={{
                hidden: itemVariants.hidden,
                show: {
                  ...itemVariants.show,
                  y: isMobile ? "10vw" : "5vw",
                },
              }}
              className="md:max-w-[8vw] aspect-[9/12] max-w-[15vw] object-cover rounded-xl shadow-md"
            />
          ))}
        </div>
      ))}
    </motion.div>
  );
}
