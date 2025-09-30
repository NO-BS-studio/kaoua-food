import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import CareerPage from "./pages/CareerPage";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import PrivateRoute from "./components/PrivateRoute";
import CreateJobPage from "./pages/admin/CreateJobPage";
import EditJobPage from "./pages/admin/EditJobPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produits" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/carriere" element={<CareerPage />} />

        {/* Admin routes */}
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminDashboardPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/create"
          element={
            <PrivateRoute>
              <CreateJobPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/edit/:id"
          element={
            <PrivateRoute>
              <EditJobPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
