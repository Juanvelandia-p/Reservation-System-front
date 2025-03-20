import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/App.css"; // Importamos los estilos

function App() {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* Botón con onClick */}
      <button className="custom-button" onClick={() => navigate("/reserva")}>
        RESERVE AHORA
        <span className="icon">➜</span>
      </button>
    </div>
  );
}

export default App;
