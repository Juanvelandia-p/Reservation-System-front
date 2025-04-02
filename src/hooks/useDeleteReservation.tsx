import axios from "axios";

const API_URL = "https://reservationsystem-gzhyfceygda3fdfu.canadacentral-01.azurewebsites.net/api/reservations";

export async function eliminarReserva(id) {
  try {
    await axios.delete(`${API_URL}?id=${id}`);
    console.log("Reserva eliminada exitosamente");
  } catch (error) {
    console.error("Error al eliminar la reserva:", error);
    throw error;
  }
}
