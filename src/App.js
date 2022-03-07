import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Todays from "./pages/Todays";
import MainLayout from "./components/layout/MainLayout";
import AddFragrance from "./pages/AddFragrance";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="todays" element={<Todays />} />
        <Route path="addfragrance" element={<AddFragrance />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
