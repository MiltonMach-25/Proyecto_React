import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiService } from "../services/apiService";
import "../styles/MiPerfil.css";

export default function MiPerfil() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(apiService.obtenerUsuarioActivo() || {});
  const [nuevoNombre, setNuevoNombre] = useState(usuario?.nombre || "");
  const [nuevaContraseña, setNuevaContraseña] = useState("");
  const [nuevaFoto, setNuevaFoto] = useState(null);
  const [mensajeError, setMensajeError] = useState("");

  const handleGuardarCambios = async () => {
    try {
      const actualizacion = {
        nombre: nuevoNombre,
        contraseña: nuevaContraseña,
        foto: nuevaFoto,
      };

      const respuesta = await apiService.actualizarPerfil(actualizacion);

      if (respuesta.exito) {
        setUsuario(respuesta.usuarioActualizado);
        setMensajeError("");
      } else {
        setMensajeError(respuesta.mensajeError);
      }
    } catch (error) {
      console.error("Error al actualizar perfil:", error);
      setMensajeError("Hubo un error al guardar los cambios.");
    }
  };

  const handleFotoChange = (event) => {
    const archivo = event.target.files[0];
    if (archivo) {
      setNuevaFoto(archivo);
    }
  };

  const handleVolverAlPanel = () => {
    navigate("/panel");
  };

  return (
    <div className="perfil-container">
      <header></header>

      <section className="perfil-info">
        <div className="perfil-header">
          <div className="perfil-foto">
            <h2>Mi Perfil</h2>

            <img
              src={(usuario?.foto) || "/assets/default-avatar.jpg"}
              alt="Foto de perfil"
              className="perfil-img"
            />

            <input
              type="file"
              accept="image/*"
              onChange={handleFotoChange}
              className="perfil-file-input"
            />
          </div>

          <div className="perfil-datos">
            <label>
              Nombre:
              <input
                type="text"
                value={nuevoNombre}
                onChange={(e) => setNuevoNombre(e.target.value)}
              />
            </label>

            <label>
              Nueva Contraseña:
              <input
                type="password"
                value={nuevaContraseña}
                onChange={(e) => setNuevaContraseña(e.target.value)}
              />
            </label>

            {mensajeError && <p className="error-message">{mensajeError}</p>}
          </div>
        </div>

        <button onClick={handleGuardarCambios} className="guardar-btn">
          Guardar Cambios
        </button>

        <button onClick={handleVolverAlPanel} className="volver-btn">
          Volver al Panel
        </button>
      </section>
    </div>
  );
}
