import React from "react";
import ReactDOM from "react-dom/client"; // Importar desde "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import ReservaPage from "./ReservaPage"; // La página de reserva
import ReservasList from "./ReservasListPage"; // La nueva página de lista de reservas

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/reserva" element={<ReservaPage />} />
      <Route path="/reservas-lista" element={<ReservasList />}/>
    </Routes>
  </Router>
);
