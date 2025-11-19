import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaSpa, FaHeartbeat, FaChartLine, FaBars } from "react-icons/fa";
import { apiService } from "../services/apiService";
import "../styles/PanelRelaxify.css";
import img7 from "../assets/des7.jpg";
import img8 from "../assets/des8.jpeg";
import img9 from "../assets/des9.jpg";
import img10 from "../assets/Relaxify_Logotipo_V2.jpg";

export default function PanelRelaxify() {
  const [usuario, setUsuario] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const activo = apiService.obtenerUsuarioActivo();
    if (!activo) {
      localStorage.removeItem("sesionActiva");
      navigate("/login");
    } else {
      setUsuario(activo);
      localStorage.setItem("sesionActiva", "true");
    }
  }, [navigate]);

  const cerrarSesion = () => {
    apiService.cerrarSesion();
    localStorage.removeItem("sesionActiva");
    navigate("/login");
  };

  const irPerfil = () => navigate("/perfil");
  const irMeditaciones = () => navigate("/meditaciones");
  const irConsejos = () => navigate("/consejos");
  const irProgreso = () => navigate("/progreso");

  // Botón volver al inicio
  const irAInicio = () => {
    if (localStorage.getItem("sesionActiva") === "true") {
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  if (!usuario) return null;

  return (
    <div className={`panel-container ${sidebarOpen ? "open" : "closed"}`}>
      
      {/* Botón hamburguesa */}
      <button className="toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <FaBars />
      </button>

      {/* Sidebar */}
      <nav className="sidebar">
        <div className="sidebar-header">
          <h2>Relaxify</h2>
        </div>

        <ul className="nav-links">
          <li onClick={irPerfil}>
            <FaHome className="icon" /> <span>Mi Perfil</span>
          </li>

          <li onClick={irMeditaciones}>
            <FaSpa className="icon" /> <span>Meditaciones</span>
          </li>

          <li onClick={irConsejos}>
            <FaHeartbeat className="icon" /> <span>Consejos</span>
          </li>

          <li onClick={irProgreso}>
            <FaChartLine className="icon" /> <span>Progreso</span>
          </li>

          {/* NUEVO - Volver al inicio */}
          <li onClick={irAInicio}>
            <FaHome className="icon" /> <span>Volver al Inicio</span>
          </li>
        </ul>

        <button onClick={cerrarSesion} className="logout-btn">
          Cerrar sesión
        </button>
      </nav>

      {/* Contenido principal */}
      <main className="main-content">
        <header>
          <h1>Panel de Relaxify</h1>
        </header>

        <section className="tarjeta" onClick={irPerfil}>
          <img src={img10} alt="usuario" className="card-img" />
          <h3>Bienvenido, {usuario.nombre}</h3>
          <p>Correo: {usuario.correo}</p>
        </section>

        <section className="tarjeta" onClick={irMeditaciones}>
          <img src={img7} alt="Meditación" className="card-img" />
          <h3>Meditaciones y Técnicas</h3>
          <p>Accede a meditaciones guiadas y técnicas de relajación.</p>
        </section>

        <section className="tarjeta" onClick={irConsejos}>
          <img src={img8} alt="consejos" className="card-img" />
          <h3>Consejos de Bienestar</h3>
          <p>Recibe consejos diarios para mejorar tu bienestar emocional.</p>
        </section>

        <section className="tarjeta" onClick={irProgreso}>
          <img src={img9} alt="Progreso" className="card-img" />
          <h3>Seguimiento de Progreso</h3>
          <p>Visualiza tu progreso y mantente motivado.</p>
        </section>
      </main>
    </div>
  );
}
