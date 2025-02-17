import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({ message: "", success: null });

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Enviando...");

    console.log("Enviando datos:", formDetails); // 👈 Depuración en consola

    try {
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDetails),
      });

      let result = await response.json();
      setFormDetails(formInitialDetails);
      setButtonText("Enviar");

      if (response.ok) {
        setStatus({ success: true, message: "Mensaje enviado con éxito." });
      } else {
        setStatus({ success: false, message: "Error al enviar el mensaje." });
      }
    } catch (error) {
      console.error("Error enviando el formulario:", error);
      setStatus({ success: false, message: "No se pudo conectar con el servidor." });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Contáctame</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="firstName" value={formDetails.firstName} placeholder="Nombre" onChange={(e) => onFormUpdate('firstName', e.target.value)} required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="lastName" value={formDetails.lastName} placeholder="Apellido" onChange={(e) => onFormUpdate('lastName', e.target.value)} required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="email" value={formDetails.email} placeholder="Correo" onChange={(e) => onFormUpdate('email', e.target.value)} required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="phone" value={formDetails.phone} placeholder="Teléfono" onChange={(e) => onFormUpdate('phone', e.target.value)} required />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea name="message" rows="6" value={formDetails.message} placeholder="Mensaje" onChange={(e) => onFormUpdate('message', e.target.value)} required></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {status.message && (
                      <Col>
                        <p className={status.success ? "success" : "danger"}>{status.message}</p>
                      </Col>
                    )}
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
