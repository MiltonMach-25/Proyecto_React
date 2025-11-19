import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiService } from "../services/apiService";
import "../styles/LoginRelaxify.css";

export default function LoginRelaxify() {
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await apiService.iniciarSesion(correo, contrasena);

            // Guardar la sesión activa
            localStorage.setItem("sesionActiva", "true");

            // Revisión de la ruta pendiente
            const rutaGuardada = localStorage.getItem("rutaPendiente");

            if (rutaGuardada) {
                localStorage.removeItem("rutaPendiente"); // limpiar
                return navigate(rutaGuardada); // ir a la sección seleccionada
            }

            // Si no hay ruta pendiente, ir al panel normal
            navigate("/panel");

        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Iniciar Sesión</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)}
                        required
                    />
                    <button type="submit">Entrar</button>
                </form>

                {error && <p className="mensaje">{error}</p>}

                <p className="register-link">
                    ¿No tienes cuenta? <a href="/registro">Regístrate aquí</a>
                </p>

                <button
                    className="back-btn"
                    onClick={() => navigate("/")}
                >
                    Volver al Inicio
                </button>
            </div>
        </div>
    );
}
