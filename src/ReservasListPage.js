import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/ReservasListPage.css";
import "./styles/index.css";
import { useFetchReservations } from "./hooks/useFetchReservations.tsx";
import { eliminarReserva } from "./hooks/useDeleteReservation.tsx";

function ReservasListPage() {
  const navigate = useNavigate();
  const { reservations, loading, error } = useFetchReservations();
  const handleDelete = async (id) => {
    try {
        await eliminarReserva(id);
        toast.success("Reserva eliminada correctamente");
        setTimeout(() => {
            window.location.reload();
        }, 1500); // Espera 1.5 segundos para que el usuario vea el mensaje
    } catch (error) {
        toast.error("Error al eliminar la reserva");
        console.error("Error al eliminar la reserva:", error);
    }
};

  return (
    <div className="reservas-container">
      <h2>Lista de Reservas</h2>
      <p className="info-text">Aquí podrás ver las reservas realizadas en el sistema.</p>

      {loading && <p>Cargando reservas...</p>}
      {error && <p>Error: {error}</p>}

      <div className="reservas-list">
        {reservations.length > 0 ? (
          reservations.map((reserva) => (
            <div key={reserva.id} className="reserva-item">
              <strong>{reserva.lab}</strong>
              <p><strong>Fecha:</strong> {reserva.reserveDate}</p>
              <p><strong>Horario:</strong> {reserva.reserveTime}</p>
              <p><strong>Usuario:</strong> {reserva.userName}</p>
              <button className="delete-button" onClick={() => handleDelete(reserva.id)}>
                Eliminar
              </button>
            </div>
          ))
        ) : (
          !loading && <p>No hay reservas disponibles.</p>
        )}
      </div>

      <button className="back-button" onClick={() => navigate("/")}>
        Volver al inicio
      </button>
      <ToastContainer />
    </div>
  );
}

export default ReservasListPage;