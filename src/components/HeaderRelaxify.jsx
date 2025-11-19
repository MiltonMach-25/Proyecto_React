import "./HeaderRelaxify.css";
import { apiService } from "../services/apiService";
import { useNavigate } from "react-router-dom";

export default function HeaderRelaxify() {
  const usuario = apiService.obtenerUsuarioActivo();
  const navigate = useNavigate();

  const irAlPanel = () => navigate("/panel");
  const cerrarSesion = () => {
    apiService.cerrarSesion();
    navigate("/login");
  };

  return (
    <header className="header-relaxify">

      {/* Navegación superior */}
      <nav className="top-nav">
        {!usuario ? (
          <>
            <a href="/" className="top-link">Inicio</a>
            <a href="/login" className="top-link">Iniciar Sesión</a>
            <a href="/registro" className="top-link">Registrarse</a>
          </>
        ) : (
          <div className="user-box no-photo">

            <span className="bienvenido">Bienvenido</span>
            <span className="user-name">{usuario.nombre}</span>

            <button className="panel-btn" onClick={irAlPanel}>
              Panel
            </button>

            <button className="logout-btn" onClick={cerrarSesion}>
              Cerrar Sesión
            </button>

          </div>
        )}
      </nav>

      {/* Logo + Título */}
      <div className="header-left">
        <h1 className="header-title">RELAXIFY</h1>
      </div>

    </header>
  );
}
