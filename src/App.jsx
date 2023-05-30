import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./screens/HomeView";
import "./reset.css";
import HigieneYSeguridad from "./screens/HigieneYSeguridad";
import GestionAmbiental from "./screens/GestionAmbiental";
import CienciaDeDatosIA from "./screens/CienciaDeDatosIA";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <NavBar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/Higiene-y-Seguridad" element={<HigieneYSeguridad />} />
                    <Route path="/Gestion-Ambiental" element={<GestionAmbiental />} />
                    <Route path="/Ciencia-de-Datos" element={<CienciaDeDatosIA />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
