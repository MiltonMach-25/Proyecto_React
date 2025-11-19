const apiUrl = "http://localhost:3001";

export const apiService = {
  registrarUsuario: async (nombre, correo, contrasena) => {
    const response = await fetch(`${apiUrl}/registro`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, correo, contrasena }),
    });

    if (!response.ok) throw new Error("Error al registrar el usuario");

    return await response.json();
  },

  verificarCodigo: async (correo, codigo) => {
    const response = await fetch(`${apiUrl}/verificar`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correo, codigo }),
    });

    if (!response.ok) throw new Error("Error al verificar el código");

    return await response.json();
  },

  
  iniciarSesion: async (correo, contrasena) => {
    const response = await fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correo, contrasena }),
    });

    if (!response.ok)
      throw new Error("Credenciales incorrectas o usuario no verificado");

    const data = await response.json();

    localStorage.setItem("usuarioActivo", JSON.stringify(data.usuario));

    return data;
  },

  obtenerUsuarioActivo: () =>
    JSON.parse(localStorage.getItem("usuarioActivo")) || null,

  cerrarSesion: () => localStorage.removeItem("usuarioActivo"),
};
