import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiService } from "../services/apiService";
import "../styles/RegistroRelaxify.css";

export default function RegistroRelaxify() {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [mensaje, setMensaje] = useState("");
    const navigate = useNavigate();

    const handleRegistro = async (e) => {
        e.preventDefault();
        try {
            await apiService.registrarUsuario(nombre, correo, contrasena);
            setMensaje("Registro exitoso. Revisa tu correo para verificar tu cuenta.");

            // Envia al usuario a la pantalla  despues de verificar código
            setTimeout(() => navigate(`/verificar?correo=${correo}`), 1800);
        } catch (err) {
            setMensaje(err.message);
        }
    };

    return (
        <div className="form-container">
            <div className="registro-box">
                <h2>Registrarse en Relaxify</h2>
                <form onSubmit={handleRegistro}>
                    <input
                        type="text"
                        placeholder="Nombre completo"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
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
                    <button type="submit">Registrarse</button>
                </form>

                {mensaje && <p className="mensaje">{mensaje}</p>}

                <p>
                    ¿Ya tienes cuenta? <a href="/login">Inicia sesión</a>
                </p>

                <button className="back-btn" onClick={() => navigate("/")}>
                    Volver al Inicio
                </button>
            </div>
        </div>
    );
}
