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
    image: "https://mezehub.com/cdn/shop/products/milkahaselnut100gr_9ca496b1-bb79-44bc-9452-4d861bd43028.png?v=1586668180",
    bgColor: "#fef2e0",
    overlayColor: "#a036a3",
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
