const express = require("express");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Transporte de información  para Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,  // Conexiones dentro del .env
    pass: process.env.GMAIL_PASS, 
  },
});

// Base de datos temporal en memoria
let usuarios = [];

// REGISTRO DE USUARIO
app.post("/registro", (req, res) => {
  const { nombre, correo, contrasena } = req.body;

  // Validar usuario existente
  if (usuarios.find((u) => u.correo === correo)) {
    return res.status(400).json({ message: "El correo ya está registrado" });
  }

  // Código de verificación
  const codigoVerificacion = crypto.randomBytes(3).toString("hex");

  usuarios.push({
    nombre,
    correo,
    contrasena,
    codigoVerificacion,
    verificado: false,
  });

  // Configuración del correo
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: correo,
    subject: "Verificación de cuenta - Relaxify",
    text: `Tu código de verificación es: ${codigoVerificacion}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error al enviar:", error);
      return res.status(500).json({ message: "Error enviando el correo" });
    }

    console.log("Correo enviado:", info.response);
    return res.status(200).json({ message: "Código enviado al correo" });
  });
});

// VERIFICAR CÓDIGO DE CORREO
app.post("/verificar", (req, res) => {
  const { correo, codigo } = req.body;

  const usuario = usuarios.find((u) => u.correo === correo);

  if (!usuario) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  if (usuario.codigoVerificacion === codigo) {
    usuario.verificado = true;
    return res.status(200).json({ message: "Cuenta verificada con éxito" });
  }

  return res.status(400).json({ message: "Código incorrecto" });
});

// LOGIN (la ruta temporal del  backend)
app.post("/login", (req, res) => {
  const { correo, contrasena } = req.body;

  const usuario = usuarios.find(
    (u) => u.correo === correo && u.contrasena === contrasena
  );

  if (!usuario) {
    return res.status(400).json({ message: "Credenciales incorrectas" });
  }

  if (!usuario.verificado) {
    return res.status(403).json({ message: "Tu cuenta no está verificada" });
  }

  // Respuesta
  return res.status(200).json({
    message: "Inicio de sesión exitoso",
    usuario: {
      nombre: usuario.nombre,
      correo: usuario.correo,
    },
  });
});

// Servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
