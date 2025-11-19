import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { apiService } from "../services/apiService";

export default function VerificacionRelaxify() {
    const [codigo, setCodigo] = useState("");
    const [mensaje, setMensaje] = useState("");

    const location = useLocation();
    const navigate = useNavigate();

    // Obtener el correo desde la URL
    const params = new URLSearchParams(location.search);
    const correo = params.get("correo");

    if (!correo) {
        return (
            <div style={{ padding: "20px", textAlign: "center" }}>
                <h2>Error</h2>
                <p>No se recibió el correo para verificar la cuenta.</p>
                <button onClick={() => navigate("/registro")}>
                    Volver al registro
                </button>
            </div>
        );
    }

    const handleVerificar = async (e) => {
        e.preventDefault();

        try {
            const response = await apiService.verificarCodigo(correo, codigo);
            setMensaje(response.message);

            setTimeout(() => navigate("/login"), 1500);
        } catch (err) {
            setMensaje(err.message);
        }
    };

    return (
        <div className="form-container">
            <div className="registro-box">
                <h2>Verifica tu cuenta</h2>
                <p>Hemos enviado un código a:</p>
                <strong>{correo}</strong>

                <form onSubmit={handleVerificar}>
                    <input
                        type="text"
                        placeholder="Código de verificación"
                        value={codigo}
                        onChange={(e) => setCodigo(e.target.value)}
                        required
                    />
                    <button type="submit">Verificar</button>
                </form>

                {mensaje && <p className="mensaje">{mensaje}</p>}

                <button className="back-btn" onClick={() => navigate("/login")}>
                    Volver al inicio de sesión
                </button>
            </div>
        </div>
    );
}
