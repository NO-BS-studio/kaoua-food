import Footer from "../sections/ProductsPage/Footer";
import ProductGallery from "../sections/ProductsPage/ProductGallery";
import ProductShowcase from "../sections/ProductsPage/ProductShowcase";

const products = [
  {
    id: "moon-chocolate",
    name: "Pâte a tartiner MOON - Chocolat",
    description: "Epic pâte à tartiner super nice sur du pain ca fait plaisir.",
    features: ["Riche en goût", "100% naturel", "Onctueux", "Saveur Premium"],
    sizes: ["750g", "200g", "2.5kg"],
    reference: "012088",
    image: "/products/moon.png",
    bgColor: "#fef2e0",
    overlayColor: "#1f5135",
  },
  {
    id: "moon-chocolate1",
    name: "Pâte a tartiner MOON - Chocolat",
    description: "Epic pâte à tartiner super nice sur du pain ca fait plaisir.",
    features: ["Riche en goût", "100% naturel", "Onctueux", "Saveur Premium"],
    sizes: ["750g", "200g", "2.5kg"],
    reference: "012088",
    image: "/logos/henina_logo.png",
    bgColor: "#fef2e0",
    overlayColor: "#1C85C7",
  },
  {
    id: "moon-chocolate2",
    name: "Pâte a tartiner MOON - Chocolat",
    description: "Epic pâte à tartiner super nice sur du pain ca fait plaisir.",
    features: ["Riche en goût", "100% naturel", "Onctueux", "Saveur Premium"],
    sizes: ["750g", "200g", "2.5kg"],
    reference: "012088",
    image: "/products/moon.png",
    bgColor: "#fef2e0",
    overlayColor: "#1f5135",
  },
  {
    id: "moon-chocolate3",
    name: "Pâte a tartiner MOON - Chocolat",
    description: "Epic pâte à tartiner super nice sur du pain ca fait plaisir.",
    features: ["Riche en goût", "100% naturel", "Onctueux", "Saveur Premium"],
    sizes: ["750g", "200g", "2.5kg"],
    reference: "012088",
    image: "/logos/henina_logo.png",
    bgColor: "#fef2e0",
    overlayColor: "#1C85C7",
  },
  {
    id: "moon-chocolate4",
    name: "Pâte a tartiner MOON - Chocolat",
    description: "Epic pâte à tartiner super nice sur du pain ca fait plaisir.",
    features: ["Riche en goût", "100% naturel", "Onctueux", "Saveur Premium"],
    sizes: ["750g", "200g", "2.5kg"],
    reference: "012088",
    image: "/products/moon.png",
    bgColor: "#fef2e0",
    overlayColor: "#1f5135",
  },
  {
    id: "moon-chocolate5",
    name: "Pâte a tartiner MOON - Chocolat",
    description: "Epic pâte à tartiner super nice sur du pain ca fait plaisir.",
    features: ["Riche en goût", "100% naturel", "Onctueux", "Saveur Premium"],
    sizes: ["750g", "200g", "2.5kg"],
    reference: "012088",
    image: "/logos/henina_logo.png",
    bgColor: "#fef2e0",
    overlayColor: "#1C85C7",
  },
  {
    id: "moon-chocolate6",
    name: "Pâte a tartiner MOON - Chocolat",
    description: "Epic pâte à tartiner super nice sur du pain ca fait plaisir.",
    features: ["Riche en goût", "100% naturel", "Onctueux", "Saveur Premium"],
    sizes: ["750g", "200g", "2.5kg"],
    reference: "012088",
    image: "/products/moon.png",
    bgColor: "#fef2e0",
    overlayColor: "#1f5135",
  },
  {
    id: "moon-chocolate7",
    name: "Pâte a tartiner MOON - Chocolat",
    description: "Epic pâte à tartiner super nice sur du pain ca fait plaisir.",
    features: ["Riche en goût", "100% naturel", "Onctueux", "Saveur Premium"],
    sizes: ["750g", "200g", "2.5kg"],
    reference: "012088",
    image: "/logos/henina_logo.png",
    bgColor: "#fef2e0",
    overlayColor: "#1C85C7",
  },

 
 
  // Add more products...
];

export default function ProductsPage() {
  return (
    <div
      className="bg-[#fffaf0]"
      style={{ backgroundImage: `url("/backgrounds/transparent_bg.png")` }}
    >
      <ProductShowcase />
      <ProductGallery products={products} />
      <Footer/>
    </div>
  );
}
