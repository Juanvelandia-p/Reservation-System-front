import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Importamos axios
import "./styles/ReservaPage.css"; // Importamos los estilos
import { enviarReserva } from "./hooks/labhooks.tsx";

function ReservaPage() {
  const navigate = useNavigate(); // Hook para la navegación
  const [reserva, setReserva] = useState({
    salon: "",
    fecha: "",
    horario: "",
    nombre: "",
    apellido: "",
  });

  const horarios = [
    "07:00 - 08:30",
    "08:30 - 10:00",
    "10:00 - 11:30",
    "11:30 - 13:00",
    "13:00 - 14:30",
    "14:30 - 16:00",
    "16:00 - 17:30",
    "17:30 - 19:00",
  ];


  const salones = ["Lab Redes", "Lab Ico", "Lab Plaza"];

  const handleChange = (e) => {
    setReserva({ ...reserva, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Enviar la reserva al backend usando axios
      const response = enviarReserva(reserva)

      if (response.status === 200) {
        // Si la respuesta es exitosa, mostramos una alerta y redirigimos
        alert("Reserva realizada con éxito");
      } else {
        // Si hay algún problema con la respuesta, mostramos el mensaje de error
        alert("Hubo un problema al realizar la reserva.");
      }
    } catch (error) {
      // Manejo de errores en caso de que falle la solicitud
      console.error("Error al realizar la reserva:", error);
      alert("Error de conexión. Intenta nuevamente.");
    }
  };

  return (
    <div className="reserva-container">
      <h2>Reservar Espacio</h2>
      <p>Por favor, selecciona la fecha y hora de tu reserva.</p>

      <form onSubmit={handleSubmit} className="reserva-form">
        {/* Selección de Salón */}
        <label>Selecciona un salón:</label>
        <select name="salon" value={reserva.salon} onChange={handleChange} required>
          <option value="">Seleccione un salón</option>
          {salones.map((salon, index) => (
            <option key={index} value={salon}>
              {salon}
            </option>
          ))}
        </select>

        {/* Selección de Fecha */}
        <label>Selecciona una fecha:</label>
        <input type="date" name="fecha" value={reserva.fecha} onChange={handleChange} required />

        {/* Selección de Horario */}
        <label>Selecciona un horario:</label>
        <select name="horario" value={reserva.horario} onChange={handleChange} required>
          <option value="">Seleccione un horario</option>
          {horarios.map((hora, index) => (
            <option key={index} value={hora}>
              {hora}
            </option>
          ))}
        </select>

        {/* Campos de Nombre y Apellido */}
        <label>Nombre:</label>
        <input type="text" name="nombre" value={reserva.nombre} onChange={handleChange} required />

        <label>Apellido:</label>
        <input type="text" name="apellido" value={reserva.apellido} onChange={handleChange} required />

        {/* Botón de Enviar */}
        <button type="submit" className="submit-button">Reservar</button>
      </form>

      {/* Botón para volver a la página principal */}
      <button className="back-button" onClick={() => navigate("/")}>
        Volver al inicio
      </button>
    </div>
  );
}

export default ReservaPage;
