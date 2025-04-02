import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/ReservaPage.css"; // Importamos los estilos
import { enviarReserva } from "./hooks/labhooks.tsx";

function ReservaPage() {
  const navigate = useNavigate(); // Hook para la navegación
  const [reserva, setReserva] = useState({
    lab: "",
    reserveDate: "",
    reserveTime: "",
    userName: "",
  });

  const horarios = [
    "7:00-8:30",
    "8:30-10:00",
    "10:00-11:30",
    "11:30-13:00",
    "13:00-14:30",
    "14:30-16:00",
    "16:00-17:30",
    "17:30-19:00",
  ];

  const salones = ["Ingeniería de Software", "Plataformas computacionales", "Redes de computadores","Multimedia y Móviles","Fundamentos de Computación","Desarrollo de Videojuegos", ];

  const handleChange = (e) => {
    setReserva({ ...reserva, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await enviarReserva(reserva);

      if (response.status === 200) {
        alert("Reserva realizada con éxito");
      } else {
        alert("Hubo un problema al realizar la reserva.");
      }
    } catch (error) {
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
        <select name="lab" value={reserva.lab} onChange={handleChange} required>
          <option value="">Seleccione un salón</option>
          {salones.map((salon, index) => (
            <option key={index} value={salon}>
              {salon}
            </option>
          ))}
        </select>

        {/* Selección de Fecha */}
        <label>Selecciona una fecha:</label>
        <input type="date" name="reserveDate" value={reserva.reserveDate} onChange={handleChange} required />

        {/* Selección de Horario (sin espacios en reserveTime) */}
        <label>Selecciona un horario:</label>
        <select name="reserveTime" value={reserva.reserveTime} onChange={handleChange} required>
          <option value="">Seleccione un horario</option>
          {horarios.map((hora, index) => (
            <option key={index} value={hora}>
              {hora}
            </option>
          ))}
        </select>

        {/* Campo de Nombre Completo */}
        <label>Nombre Completo:</label>
        <input type="text" name="userName" value={reserva.userName} onChange={handleChange} required />

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
