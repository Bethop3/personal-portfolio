require("dotenv").config(); // Importar dotenv para leer las variables de entorno
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// Configurar el servidor
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running on port 5000"));

// Configurar el transporte de Nodemailer con variables de entorno
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Usa las credenciales desde .env
    pass: process.env.EMAIL_PASS,
  },
});

// Verificar conexión con el correo
contactEmail.verify((error) => {
  if (error) {
    console.log("Error al conectar con el correo:", error);
  } else {
    console.log("Servidor de correo listo para enviar mensajes.");
  }
});

// Ruta para recibir el formulario y enviar el correo
router.post("/contact", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;
  const name = `${firstName} ${lastName}`;

  const mail = {
    from: email, // Remitente (tu correo)
    to: process.env.EMAIL_USER,   // Receptor (tu correo también)
    subject: "Nuevo Mensaje de Contacto - Portafolio",
    html: `<p><strong>Nombre:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Teléfono:</strong> ${phone}</p>
           <p><strong>Mensaje:</strong> ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Error al enviar el correo:", error);
      res.status(500).json({ status: "Error", message: "No se pudo enviar el correo." });
    } else {
      console.log("Correo enviado correctamente.");
      res.status(200).json({ status: "Success", message: "Correo enviado correctamente." });
    }
  });
});
