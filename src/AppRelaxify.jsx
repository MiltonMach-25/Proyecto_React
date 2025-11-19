import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginRelaxify from "./components/LoginRelaxify";
import RegistroRelaxify from "./components/RegistroRelaxify";
import PanelRelaxify from "./components/PanelRelaxify";
import MainRelaxify from "./components/MainRelaxify";
import MiPerfil from "./components/MiPerfil";
import VerificacionRelaxify from "./components/VerificacionRelaxify";
import Meditaciones from "./components/Meditaciones";  // IMPORT NECESARIO
import Consejos from "./components/Consejos";
import Progress from "./components/Progress";

import "./index.css";

export default function AppRelaxify() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainRelaxify />} />
        <Route path="/login" element={<LoginRelaxify />} />
        <Route path="/registro" element={<RegistroRelaxify />} />
        <Route path="/verificar" element={<VerificacionRelaxify />} />
        <Route path="/panel" element={<PanelRelaxify />} />
        <Route path="/perfil" element={<MiPerfil />} />
        <Route path="/meditaciones" element={<Meditaciones />} /> {/* Ahora sí existe */}
        <Route path="/consejos" element={<Consejos />} />
        <Route path="/progreso" element={<Progress />} />


      </Routes>
    </BrowserRouter>
  );
}
