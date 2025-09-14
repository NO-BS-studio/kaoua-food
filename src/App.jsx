import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import CareerPage from "./pages/CareerPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produits" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/carriere" element={<CareerPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
