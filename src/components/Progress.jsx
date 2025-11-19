import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Progress.css";

export default function Progress() {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState(null);

  const volverPanel = () => {
    navigate("/panel");
  };

  // Estadísticas por día
  const dayStats = {
    L: { racha: "2 días", meditado: 30, sesiones: 3, bienestar: "60%", bars: [40, 30, 50, 25] },
    M: { racha: "4 días", meditado: 50, sesiones: 5, bienestar: "70%", bars: [60, 50, 70, 40] },
    Mi: { racha: "3 días", meditado: 40, sesiones: 4, bienestar: "65%", bars: [50, 45, 60, 35] },
    J: { racha: "5 días", meditado: 60, sesiones: 6, bienestar: "75%", bars: [65, 55, 75, 50] },
    V: { racha: "7 días", meditado: 80, sesiones: 8, bienestar: "85%", bars: [80, 70, 90, 60] },
    S: { racha: "6 días", meditado: 70, sesiones: 7, bienestar: "80%", bars: [70, 60, 80, 50] },
    D: { racha: "1 día", meditado: 20, sesiones: 2, bienestar: "50%", bars: [30, 25, 40, 20] },
  };

  // Datos generales
  const defaultBars = [70, 55, 85, 45];
  const weeklyData = [35, 55, 70, 40, 85, 60, 45];
  const days = ["L", "M", "Mi", "J", "V", "S", "D"];
  const progressLabels = ["Meditación diaria", "Control emocional", "Respiración consciente", "Hábitos saludables"];

  // Usar barras del día seleccionado o default
  const barsToShow = selectedDay ? dayStats[selectedDay].bars : defaultBars;

  return (
    <div className="progress-container">

      <header>
        <h1>Tu progreso en Relaxify</h1>
        <p className="sub">Un vistazo general a tu bienestar</p>
        <button className="back-btn" onClick={volverPanel}>← Volver</button>
      </header>

      {/* TARJETAS DE ESTADÍSTICAS */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Racha activa</h3>
          <p>{selectedDay ? dayStats[selectedDay].racha : "7 días"}</p>
        </div>
        <div className="stat-card">
          <h3>Tiempo meditado</h3>
          <p>{selectedDay ? dayStats[selectedDay].meditado : 148} min</p>
        </div>
        <div className="stat-card">
          <h3>Sesiones completadas</h3>
          <p>{selectedDay ? dayStats[selectedDay].sesiones : 23}</p>
        </div>
        <div className="stat-card">
          <h3>Bienestar general</h3>
          <p>{selectedDay ? dayStats[selectedDay].bienestar : "82%"}</p>
        </div>
      </div>

      {/* BARRAS DE PROGRESO */}
      <div className="bars-section">
        <h2>Progreso actual</h2>
        {barsToShow.map((value, i) => (
          <div className="bar-item" key={i}>
            <span>{progressLabels[i]}</span>
            <div className="bar">
              <div className="bar-fill" style={{ width: `${value}%` }}></div>
            </div>
            <p className="percent">{value}%</p>
          </div>
        ))}
      </div>

      {/*  GRÁFICA SEMANAL */}
      <div className="graph-section">
        <h2>Actividad semanal</h2>
        <div className="graph">
          {days.map((day, i) => (
            <div 
              className={`graph-col ${selectedDay === day ? "active-day" : ""}`} 
              key={i} 
              onClick={() => setSelectedDay(day)}
            >
              <div
                className="graph-fill"
                style={{ height: `${weeklyData[i]}%` }}
              ></div>
              <span>{day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
