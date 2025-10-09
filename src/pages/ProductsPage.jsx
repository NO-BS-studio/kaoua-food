import MobileNav from "../components/MobileNav";
import Footer from "../sections/ProductsPage/Footer";
import ProductGallery from "../sections/ProductsPage/ProductGallery";
import ProductShowcase from "../sections/ProductsPage/ProductShowcase";
import products from "../data/products";
import { useState } from "react";

export default function ProductsPage() {
  const [selectedBrand, setSelectedBrand] = useState(null);

  const brandProducts = selectedBrand
    ? products.filter((p) => p.brand === selectedBrand)
    : [];

  return (
    <div
      className="bg-[#fffaf0]"
      style={{ backgroundImage: `url("/backgrounds/transparent_bg.png")` }}
    >
      <MobileNav />

      <ProductShowcase onBrandSelect={setSelectedBrand} />

      {/* Pass brand-filtered products only */}
      <ProductGallery products={brandProducts} />

      <Footer />
    </div>
  );
}
