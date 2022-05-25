import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Todays from "./pages/Todays";
import MainLayout from "./components/layout/MainLayout";
import AddFragrance from "./pages/AddFragrance";
import { useContext } from "react";
import AuthContext from "./store/auth-context";
import MyFragrances from "./pages/MyFragrances";
import UserPage from "./pages/UserPage";

function App() {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Login />} />
        {isLoggedIn && <Route path="/home" element={<Home />} />}
        {isLoggedIn && <Route path="todays" element={<Todays />} />}
        {isLoggedIn && <Route path="myfragrances" element={<MyFragrances />} />}
        {isLoggedIn && <Route path="account" element={<UserPage />} />}
        {isLoggedIn && <Route path="addfragrance" element={<AddFragrance />} />}
        <Route path="*" element={<Login />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
