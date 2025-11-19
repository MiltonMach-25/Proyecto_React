import { useNavigate } from "react-router-dom";
import "../styles/Meditaciones.css";


// Audios importados
import rel1 from "../assets/rel1.mp3";
import rel2 from "../assets/rel2.mp3";
import rel3 from "../assets/rel3.mp3";

// Imágenes locales (/src/assets)
import img1 from "../assets/des11.jpg";
import img2 from "../assets/des12.jpeg";
import img3 from "../assets/des10.jpg";
import img4 from "../assets/des14.jpg";

export default function Meditaciones() {
  const navigate = useNavigate();

  return (
    <div className="meditaciones-container">
      
      {/* COLUMNA IZQUIERDA  */}
      <div className="left-panel">
        <h2 className="left-title">Relájate y disfruta</h2>
        <img src={img4} alt="relax image" className="hero-image" />
        <p className="left-description">
            
          Sumérgete en los mejores sonidos diseñados para calmar tu mente, 
          mejorar tu respiración y llevarte a un estado de paz profunda.
        </p>

      
      </div>

      {/* COLUMNA DERECHA (TARJETAS) */}
      <div className="right-panel">
        <button className="volver" onClick={() => navigate("/panel")}>
          ← Volver al Panel
        </button>

        <h1 className="titulo">Meditaciones</h1>

        <div className="cards-container">

          {/* TARJETA 1 */}
          <div className="card">
            <img src={img1} alt="Respira y Relájate" />
            <h3>Respira y Relájate</h3>
            <audio controls src={rel1}></audio>
          </div>

          {/* TARJETA 2 */}
          <div className="card">
            <img src={img2} alt="Meditación para Dormir" />
            <h3>Relax-off, Descansa </h3>
            <audio controls src={rel2}></audio>
          </div>

          {/* TARJETA 3 */}
          <div className="card">
            <img src={img3} alt="Calma tu Mente" />
            <h3>modo conductor</h3>
            <audio controls src={rel3}></audio>
          </div>

        </div>
      </div>

    </div>
  );
}
