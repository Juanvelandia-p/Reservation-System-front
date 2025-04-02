import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/ReservasListPage.css";

function ReservasListPage() {
  const navigate = useNavigate();

  return (
    <div className="reservas-container">
      <h2>Lista de Reservas</h2>
      <p className="info-text">Aquí podrás ver las reservas realizadas en el sistema.</p>
      <div className="reservas-list">
        {/* Aquí iría el mapeo de las reservas, por ahora solo texto */}
        <div className="reserva-item">
          <strong>Laboratorio A</strong>
          <p><strong>Fecha:</strong> 10/04/2025</p>
          <p><strong>Horario:</strong> 09:00 AM</p>
          <p><strong>Usuario:</strong> Juan Pérez</p>
        </div>
        <div className="reserva-item">
          <strong>Laboratorio B</strong>
          <p><strong>Fecha:</strong> 12/04/2025</p>
          <p><strong>Horario:</strong> 10:00 AM</p>
          <p><strong>Usuario:</strong> Ana Gómez</p>
        </div>
      </div>
      <button className="back-button" onClick={() => navigate("/")}>
        Volver al inicio
      </button>
      <ToastContainer />
    </div>
  );
}

export default ReservasListPage;
