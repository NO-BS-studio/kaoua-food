import MobileNav from "../components/MobileNav";
import Footer from "../sections/ProductsPage/Footer";
import ProductGallery from "../sections/ProductsPage/ProductGallery";
import ProductShowcase from "../sections/ProductsPage/ProductShowcase";
import products from "../data/products";

export default function ProductsPage() {
  return (
    <div
      className="bg-[#fffaf0]"
      style={{ backgroundImage: `url("/backgrounds/transparent_bg.png")` }}
    >
      <MobileNav />

      <ProductShowcase />
      <ProductGallery products={products} />
      <Footer />
    </div>
  );
}
