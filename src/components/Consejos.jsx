import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Consejos.css";

import img1 from "../assets/des18.jpg";
import img2 from "../assets/des16.jpeg";
import img3 from "../assets/des17.png";
import img4 from "../assets/des13.png";
import img5 from "../assets/desv.jpg";
import img6 from "../assets/desv1.jpeg";
import img7 from "../assets/desv2.jpg";
import img8 from "../assets/desd.jpg";
import img9 from "../assets/desd1.jpeg";
import img10 from "../assets/desd2.jpg";
import img11 from "../assets/res.jpg";
import img12 from "../assets/10.jpeg";
import img13 from "../assets/pos.jpeg";
import img14 from "../assets/y.jpg";
import img15 from "../assets/yo.jpg";
import img16 from "../assets/yog.jpeg";


export default function Consejos() {
  const navigate = useNavigate();
  const [showModalAlimentacion, setShowModalAlimentacion] = useState(false);
  const [showModalRutina, setShowModalRutina] = useState(false);
  const [showModalEmocional, setShowModalEmocional] = useState(false);
  const [showModalYoga, setShowModalYoga] = useState(false);

  // Datos de ejemplo para el modal de Alimentación saludable
  const recetas = [
    {
      img: img5,
      titulo: "Ensalada de quinoa",
      descripcion: "Ingredientes: quinoa, tomate, pepino. Preparación: mezclar y aderezar con aceite de oliva."
    },
    {
      img: img6,
      titulo: "Batido verde",
      descripcion: "Ingredientes: espinaca, manzana, plátano. Preparación: licuar todos los ingredientes hasta obtener textura suave."
    },
    {
      img: img7,
      titulo: "Tostadas integrales",
      descripcion: "Ingredientes: pan integral, aguacate, huevo. Preparación: tostar el pan, añadir aguacate y huevo pochado."
    },
  ];

  // Datos de ejemplo para el modal de Rutina diaria
  const rutinas = [
    {
      img: img8,
      titulo: "Trote matutino",
      descripcion: "Trotar 30 minutos a ritmo moderado para activar el cuerpo y mejorar la resistencia cardiovascular."
    },
    {
      img: img9,
      titulo: "Caminar ligero",
      descripcion: "Caminar 15 minutos después de cada comida principal para mejorar la digestión y mantener movilidad."
    },
    {
      img: img10,
      titulo: "Estiramiento y core",
      descripcion: "15 minutos de estiramientos y ejercicios de core para fortalecer abdomen, espalda y mejorar postura."
    },
  ];

  // Datos de ejemplo para el modal de Control emocional
  const emociones = [
    {
      img: img11,
      titulo: "Respira profundamente",
      descripcion: "Inhala contando hasta 4, retén 4 y exhala contando hasta 6. Repite varias veces para calmar el cuerpo y la mente."
    },
    {
      img: img12,
      titulo: "Cuenta hasta 10",
      descripcion: "Cuando sientas ira o frustración, cuenta lentamente hasta 10 antes de reaccionar, para evitar decisiones impulsivas."
    },
    {
      img: img13,
      titulo: "Visualización positiva",
      descripcion: "Cierra los ojos e imagina un lugar seguro y tranquilo durante 2-3 minutos para reducir estrés y ansiedad."
    },
  ];

  // Datos de ejemplo para el modal de Yoga
  const yoga = [
    {
      img: img14,
      titulo: "Postura del árbol",
      descripcion: "Párate sobre un pie, apoya la planta del otro pie sobre el muslo interno y junta las manos al pecho. Mejora equilibrio y concentración."
    },
    {
      img: img15,
      titulo: "Perro boca abajo",
      descripcion: "Desde posición de cuatro apoyos, levanta caderas y estira brazos y piernas formando una V invertida. Fortalece brazos y espalda."
    },
    {
      img: img16,
      titulo: "Postura del niño",
      descripcion: "Arrodíllate, inclina el torso hacia adelante y apoya frente y brazos en el suelo. Relaja la espalda y calma la mente."
    },
  ];

  return (
    <>
      <div className="consejos-grid-container">
        <button className="volver-c" onClick={() => navigate("/panel")}>
          ← Volver al Panel
        </button>

        <h1 className="titulo-c">Consejos de Bienestar</h1>

        <div className="grid-c">
          {/* Alimentación saludable */}
          <div className="grid-item-c" onClick={() => setShowModalAlimentacion(true)}>
            <img src={img1} alt="Alimentación saludable" />
            <h2>Alimentación saludable</h2>
          </div>

          {/* Rutina diaria */}
          <div className="grid-item-c" onClick={() => setShowModalRutina(true)}>
            <img src={img2} alt="Rutina diaria" />
            <h2>Rutina diaria</h2>
          </div>

          {/* Control emocional */}
          <div className="grid-item-c" onClick={() => setShowModalEmocional(true)}>
            <img src={img3} alt="Control emocional" />
            <h2>Control emocional</h2>
          </div>

          {/* Yoga */}
          <div className="grid-item-c" onClick={() => setShowModalYoga(true)}>
            <img src={img4} alt="Yoga" />
            <h2>Yoga</h2>
          </div>
        </div>
      </div>

      {/* MODAL ALIMENTACIÓN SALUDABLE */}
      {showModalAlimentacion && (
        <div className="modal-overlay">
          <div className="modal-card">
            <button className="close-modal" onClick={() => setShowModalAlimentacion(false)}>×</button>
            <h2>Recetas para dietas personalizadas</h2>
            <div className="recetas-container">
              {recetas.map((r, i) => (
                <div className="receta-item" key={i}>
                  <img src={r.img} alt={r.titulo} />
                  <div className="receta-info">
                    <h3>{r.titulo}</h3>
                    <p>{r.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MODAL RUTINA DIARIA */}
      {showModalRutina && (
        <div className="modal-overlay">
          <div className="modal-card">
            <button className="close-modal" onClick={() => setShowModalRutina(false)}>×</button>
            <h2>Rutinas deportivas diarias</h2>
            <div className="recetas-container">
              {rutinas.map((r, i) => (
                <div className="receta-item" key={i}>
                  <img src={r.img} alt={r.titulo} />
                  <div className="receta-info">
                    <h3>{r.titulo}</h3>
                    <p>{r.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MODAL CONTROL EMOCIONAL */}
      {showModalEmocional && (
        <div className="modal-overlay">
          <div className="modal-card">
            <button className="close-modal" onClick={() => setShowModalEmocional(false)}>×</button>
            <h2>Técnicas de control emocional</h2>
            <div className="recetas-container">
              {emociones.map((r, i) => (
                <div className="receta-item" key={i}>
                  <img src={r.img} alt={r.titulo} />
                  <div className="receta-info">
                    <h3>{r.titulo}</h3>
                    <p>{r.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MODAL YOGA */}
      {showModalYoga && (
        <div className="modal-overlay">
          <div className="modal-card">
            <button className="close-modal" onClick={() => setShowModalYoga(false)}>×</button>
            <h2>Posturas de Yoga</h2>
            <div className="recetas-container">
              {yoga.map((r, i) => (
                <div className="receta-item" key={i}>
                  <img src={r.img} alt={r.titulo} />
                  <div className="receta-info">
                    <h3>{r.titulo}</h3>
                    <p>{r.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
