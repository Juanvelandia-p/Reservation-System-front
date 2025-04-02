import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/App.css"; // Importamos los estilos

function App() {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* Botón grande para reservar */}
      <button className="custom-button" onClick={() => navigate("/reserva")}>
        RESERVE AHORA
        <span className="icon">➜</span>
      </button>

      {/* Botón pequeño para ver reservas debajo del botón grande */}
      <button className="small-button" onClick={() => navigate("/reservas-lista")}>
        VER RESERVAS
      </button>
    </div>
  );
}

export default App;
