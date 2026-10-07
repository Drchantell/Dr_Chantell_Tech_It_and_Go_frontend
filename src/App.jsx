import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import EquipmentDetails from "./pages/EquipmentDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import RequestForm from "./pages/RequestForm";
import LessonPlan from "./pages/LessonPlan";
import ManageEquipment from "./pages/ManageEquipment";

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equipment" element={<Catalog />} />
          <Route path="/equipment/:id" element={<EquipmentDetails />} />
          <Route path="/lessons/:id" element={<LessonPlan />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/equipment/:id/request"
            element={
              <ProtectedRoute>
                <RequestForm />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/manage/equipment"
            element={
              <ProtectedRoute staffOnly>
                <ManageEquipment />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
