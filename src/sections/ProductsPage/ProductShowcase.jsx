import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/Navbar";

const products = [
  {
    id: "OPTILLA",
    name: "OPTILLA",
    descriptionEN:
      "Optilla is the world of accessible indulgence for everyone, at any time. From the iconic spread to crunchy biscuits, convenient sticks, bars and glazing paste, the brand offers a variety of products to suit every taste and desire. Designed for children, young people, busy adults and families, Optilla accompanies every moment with generosity and pleasure. Quality, popularity and accessibility are the pillars of this joyful brand, which has become a staple of Algerians' daily life.",
    descriptionFR:
      "Optilla, c’est l’univers de la gourmandise accessible à tous, à tout moment. De la pâte à tartiner iconique aux biscuits croustillants, en passant par les sticks pratiques, les tablettes et la pate à glacer, la marque offre une variété de produits pour tous les goûts et toutes les envies. \n\n Pensée pour les enfants, les jeunes, les actifs et les familles, Optilla accompagne chaque instant avec générosité et plaisir. Qualité, popularité et accessibilité sont les piliers de cette marque joyeuse, devenue incontournable dans le quotidien des Algériens.",
    descriptionAR:
      "أوبتيلا، عالم من المتعة واللذة متاح للجميع في كل لحظة. ابتداءا من عجينة الطلي إلى البسكويت المقرمش، مروراً بالستيك والألواح، تقدّم العلامة مجموعة متنوعة ترضي جميع الأذواق وتلبي كل الرغبات. \n\nتُناسب الأطفال، الشباب، العاملين والعائلات، وترافق أوبتيلا كل لحظة بسخاء وفرح. الجودة، الشهرة، وسهولة الوصول هي ركائز هذه العلامة المرحة التي أصبحت جزءاً لا يتجزأ من حياة الجزائريين اليومية",
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
      "/slides/Asset-optilla-bars.png"
    ],
    logo: "/logos/optilla_logo.png",
    bgImage: "/backgrounds/bg-red.jpg",
    highlightColor: "#ffffff",
    textColor: "#ffffff",
  },
  {
    id: "MOON",
    name: "MOON",
    descriptionEN:
      "Moon embodies the perfect blend of expertise, know-how and passion for taste. Each creation, made with quality ingredients, delivers a unique flavor experience combining authenticity and pleasure. With an innovative approach, the brand pushes the boundaries of indulgence with original, well-crafted recipes. Moon is aimed at discerning lovers of refined, genuine and consistently delicious products.",
    descriptionFR:
      "Moon incarne l’alliance parfaite entre expertise, savoir-faire et passion du goût. Chaque création, conçue avec des produits de qualité, offre une expérience gustative unique mêlant authenticité et plaisir.\n\n Grâce à une approche innovante, la marque repousse les limites de la gourmandise avec des recettes originales et maîtrisées. Moon s’adresse aux amateurs exigeants qui recherchent des produits raffinés, sincères et toujours délicieux.",
    descriptionAR:
      "مون تجسّد مزيج متقن بين الخبرة، الحرفية وشغف المذاق. \n\nكل ابتكار يتم تحضيره بعناية فائقة وبمكونات عالية الجودة، ليمنح تجربة ذوق فريدة تجمع بين الأصالة والمتعة. ومن خلال نهج مبتكر، تدفع مون حدود اللذة إلى آفاق جديدة عبر وصفات أصلية ومتقنة. \n\nتتوجّه مون إلى عشّاق الذوق الرفيع الذين يبحثون عن منتجات راقية، صادقة ودائماً لذيذة.",
    images: ["/slides/Asset-moon.png", "/slides/Asset 5.png"],
    logo: "/logos/moon_logo.png",
    bgImage: "/backgrounds/bg-yellow.jpg",
    highlightColor: "#d6b08a",
    textColor: "#ffffff",
  },
  {
    id: "BANADO",
    name: "banado",
    descriptionEN:
      "Banado is the family spread par excellence, designed to satisfy both children and adults. Rich and creamy, it fits into every moment of the day with simplicity and pleasure. Available in several convenient sizes, it adapts to every household and routine.",
    descriptionFR:
      "Banado, c’est la pâte à tartiner familiale par excellence, pensée pour combler les petits comme les grands.\n\n Gourmande et onctueuse, elle s’invite à tous les moments de la journée avec simplicité et plaisir. \n\nDisponible en plusieurs formats pratiques, elle s’adapte à tous les foyers et toutes les habitudes.",
    descriptionAR:
      "بانادو هي شوكولاتة للطلي  مخصصة للعائلة بامتياز، صُمّمت لتُرضي الصغار والكبار على حدّ سواء. \n\nبقوامها الناعم وطعمها الغني، ترافقكم بانادو في كل لحظات اليوم ببساطة ومتعة. ومتوفّرة بعدة أحجام عملية، لتناسب جميع العائلات",
    images: ["/slides/Asset-banado.png", "/slides/Asset 1@2x.png"],
    logo: "/logos/banado_logo.png",
    bgImage: "/backgrounds/bg-light-blue.jpg",
    highlightColor: "#6A2F07",
    textColor: "#7B3F1F",
  },
  {
    id: "HENINA",
    name: "HENINA",
    descriptionEN:
      "Henina's Double Twist Végecao are delicately filled with cream; with their melting texture and generous flavor, they offer an irresistible sweet break with every bite. Available in several flavors, they combine pleasure, originality and softness in a convenient, shareable format.",
    descriptionFR:
      "Les Double Twist vegecao de Hnina délicatement fourrés à la crème; avec leur texture fondante et leur goût généreux, ils offrent une pause sucrée irrésistible à chaque bouchée. \n\nDéclinés en plusieurs saveurs, ils allient plaisir, originalité et douceur dans un format pratique à partager.",
    descriptionAR:
      "دوبل تويست فيجكاو من حنينة محشوة بعناية بكريمة ناعمة؛ وبفضل قوامها الذائب وطعمها الغني، تمنح استراحة حلوة لا تُقاوَم مع كل قضمة. \n\nمتوفّرة بعدة نكهات مميّزة، تجمع بين المتعة، الابتكار والنعومة",
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
      "Napolitano is the meeting of a tender base and a melting fruit syrup center. Each candy releases an explosion of fruity flavors, for an intense and surprising moment of pleasure.",
    descriptionFR:
      "Napolitano, c’est la rencontre entre une masse tendre et un cœur fondant au sirop de fruits.\n\nChaque bonbon libère une explosion de saveurs fruitées, pour un moment de plaisir intense et surprenant.",
    descriptionAR:
      "نابوليتانو هو لقاء بين عجينة طرية و قلب يذوب في شراب الفواكه. كل حلوى تطلق انفجارًا من النكهات الفاكهية، لتجربة لحظة متعة مكثفة ومفاجئة.",
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
      "DoyDoy is the brand of soft gummy candies that brings a touch of fun and sweetness to everyday life. With its tender textures and fruity flavors, it delights young and old with every bite. Colorful, joyful and accessible, DoyDoy turns every moment into a simple, sweet pleasure.",
    descriptionFR:
      "DoyDoy est la marque de bonbons gélifiés moelleux qui apporte une touche de fun et de douceur au quotidien. Avec ses textures tendres et ses saveurs fruitées, elle séduit petits et grands à chaque bouchée.\n\nColorée, joyeuse et accessible, DoyDoy transforme chaque moment en instant de plaisir simple et sucré.",
    descriptionAR:
      "دوي دوي هي علامة الحلوى الجيلاتينية الطرية التي تضيف لمسة من المرح والحلاوة إلى الحياة اليومية. بفضل قوامها الناعم ونكهاتها الفاكهية، تُغري دوي دوي الصغار والكبار مع كل قضمة. \n\nمفعمة بالألوان والبهجة وسهلة المنال، تحوّل دوي دوي كل لحظة إلى متعة بسيطة وحلوة.",
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
          className="flex-grow flex md:flex-row flex-col items-center justify-between gap-16 md:h-[30vw] h-[180vw]"
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
              className="text-base md:text-[0.9vw] leading-relaxed md:h-[10vw] h-[45vw whitespace-pre-wrap"
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
