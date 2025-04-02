import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://reservationsystem-gzhyfceygda3fdfu.canadacentral-01.azurewebsites.net/api/reservations/all";

export function useFetchReservations() {
    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await axios.get(API_URL);
                setReservations(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchReservations();
    }, []);

    return { reservations, loading, error };
}
