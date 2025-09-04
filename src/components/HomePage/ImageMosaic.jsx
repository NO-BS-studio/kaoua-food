import { motion } from "framer-motion";

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
    y: "10vw",
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
  ["/mosaic/Rectangle 42.png", "/mosaic/Rectangle 43.png", "/mosaic/Rectangle 48.png"],

  // 2nd column (2 images)
  ["/mosaic/Rectangle 50.png", "/mosaic/Rectangle 51.png"],

  // 3rd column (1 image)
  ["/mosaic/Rectangle 73.png"],

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
  ["/mosaic/Rectangle 71.png", "/mosaic/Rectangle 52.png", "/mosaic/Rectangle 42.png"], // repeated last one if needed
];


export default function ImageMosaic() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="absolute inset-0 flex justify-center gap-[1vw] pointer-events-none"
    >
      {imagesLayout.map((col, colIndex) => (
        <div
          key={colIndex}
          className={`flex flex-col  gap-[1vw] ${
            colIndex % 2 === 0 ? ( colIndex % 4 === 0 ? "mt-[0vw]" : "mt-[4vw]") : "mt-[2vw]"
          }`}
        >
          {col.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`img-${colIndex}-${i}`}
              variants={itemVariants}
              className="w-[8vw] h-[10.5vw]  object-cover rounded-xl shadow-md"
            />
          ))}
        </div>
      ))}
    </motion.div>
  );
}
