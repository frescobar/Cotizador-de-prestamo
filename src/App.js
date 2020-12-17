import React, { useState } from "react";
import "./index.css";
import Header from "./Components/Header";
import Form from "./Components/Form";

function App() {
  // state de la cantidad del Formulario
  let [cantidad, setCantidad] = useState(0);

  let [plazo, setPlazo] = useState("");

  const handleCantidad = (e) => {
    setCantidad(parseFloat((cantidad = e.target.value)));
  };

  const handlePlazo = (e) => {
    setPlazo((plazo = parseInt(e.target.value)));
  };
  return (
    <div>
      <Header
        titulo='Cotizador de Préstamos'
        descripcion='Llena los Campos en el formulario y obten una cotización al instante'
      />
      <Form
        cantidad={cantidad}
        handleCantidad={handleCantidad}
        plazo={plazo}
        handlePlazo={handlePlazo}
      />
      <p>Por Freddys Escobar</p>
      <p>Profesor:Roberto Elias</p>
    </div>
  );
}

export default App;
