import axios from "axios";

export async function enviarResrva(reserva) {
    return  await axios.post("https://reservationsystem-gzhyfceygda3fdfu.canadacentral-01.azurewebsites.net/api/reservations", reserva);
}