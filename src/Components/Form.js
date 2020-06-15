import React, { useState } from "react";
import { calcularTotal } from "../helpers";

export default function Form({ cantidad, handleCantidad, plazo, handlePlazo }) {
  const [error, setError] = useState(false);
  const [total, setTotal] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (cantidad === 0 || plazo === "") {
      setError(true);
      return;
    }
    setError(false);

    const total = calcularTotal(cantidad, plazo);
    setTotal(total);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div>
            <label>Cantidad Préstamo</label>
            <input
              className="u-full-width"
              type="number"
              placeholder="Ejemplo: 3000"
              onChange={handleCantidad}
            />
          </div>

          <div>
            <label>Plazo para Pagar</label>
            <select className="u-full-width" onChange={handlePlazo}>
              <option value="">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
            </select>
          </div>
          <div>
            <input
              type="submit"
              value="Calcular"
              className="button-primary u-full-width"
            />
          </div>
        </div>
      </form>
      {error && <p className="error"> Llene Todos los Campos por favor </p>}
        
        {total > 0 && (
        <div style =  {{width: '80%', margin: '0 auto'}}>
          <p>Monto solicitado: {cantidad}$</p>
          <p>Plazo: {plazo} meses</p>
          <p>Total a pagar: {total}$</p>
        
        </div>
      )}
      
    </div>
  );
}
