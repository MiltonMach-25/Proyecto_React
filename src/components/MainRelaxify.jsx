import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiService } from "../services/apiService";

import HeaderRelaxify from "./HeaderRelaxify";
import FooterRelaxify from "./FooterRelaxify";
import "./MainRelaxify.css";

// Importar imágenes
import logo from "../assets/Relaxify_Logotipo_V4.jpg";
import img1 from "../assets/des1.jpg";  
import img2 from "../assets/des2.jpg";   
import img3 from "../assets/des3.jpg";   
import img4 from "../assets/des4.jpg";   
import img5 from "../assets/des5.jpg";  
import img6 from "../assets/des6.jpg";   

export default function MainRelaxify() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);

  // Revisar sesión al cargar la página
  useEffect(() => {
    const activo = apiService.obtenerUsuarioActivo();
    setUsuario(activo || null);
  }, []);

  // Función de navegación protegida
  const irA = (ruta) => {
    if (!usuario) {
      // Guardar ruta pendiente para redirigir después del login
      localStorage.setItem("rutaPendiente", ruta);
      return navigate("/login");
    }
    navigate(ruta);
  };

  // Función para ir al panel completo
  const irPanel = () => {
    if (usuario) navigate("/panel");
    else navigate("/login");
  };

  return (
    <>
      <HeaderRelaxify />

      <main className="main-relaxify">

        

        {/* Sección destacada de tarjetas */}
        <section className="featured-container">
          <div className="featured-card" onClick={() => irA("/meditaciones")}>
            <img src={img1} alt="Meditación" />
            <h3>Medita</h3>
          </div>

          <div className="featured-card" onClick={() => irA("/meditaciones")}>
            <img src={img2} alt="Respira" />
            <h3>Respira</h3>
          </div>

          <div className="featured-card" onClick={() => irA("/meditaciones")}>
            <img src={img3} alt="Calma" />
            <h3>Encuentra Paz</h3>
          </div>
        </section>

        <section className="featured-container">
          <div className="featured-card" onClick={() => irA("/meditaciones")}>
            <img src={img4} alt="Modo Viaje" />
            <h3>Modo viaje</h3>
          </div>

          <div className="featured-card" onClick={() => irA("/consejos")}>
            <img src={img5} alt="Re-Laxx" />
            <h3>Re-Laxx</h3>
          </div>

          <div className="featured-card" onClick={() => irA("/consejos")}>
            <img src={img6} alt="Modo Off" />
            <h3>Modo-Off</h3>
          </div>
        </section>

        {/*  Logo centrado  */}
        <div className="logo-container">
          <img src={logo} alt="Relaxify Logo" className="logo" />
        </div>

        {/* Texto de bienvenida  */}
        <section className="welcome-text">
          <h2>Bienvenido a Relaxify</h2>
          <p>
            Una plataforma de bienestar digital que te ayuda a relajarte,
            concentrarte y mejorar tu salud emocional mediante técnicas guiadas.
          </p>
        </section>
      </main>

      <FooterRelaxify />
    </>
  );
}

