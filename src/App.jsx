import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import EquipmentDetails from "./pages/EquipmentDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import RequestForm from "./pages/RequestForm";
import LessonPlan from "./pages/LessonPlan";

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equipment" element={<Catalog />} />
          <Route path="/equipment/:id" element={<EquipmentDetails />} />
          <Route path="/equipment/:id/request" element={<RequestForm />} />
          <Route path="/lessons/:id" element={<LessonPlan />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
