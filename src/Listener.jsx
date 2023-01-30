import React from 'react';
import { useEffect } from 'react';

export default function Listener() {
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log('Enviamos el form', evt);
  }

  function keyPress(evt) {
    let valor = evt.key.toLowerCase();
    const blockChars = 'aeiou';
    if (blockChars.includes(valor)) {
      evt.preventDefault();
      console.log('Pusiste una vocal:', valor);
    }
  }

  return (
    <div className="btn">
      <form onSubmit={handleSubmit}>
        <label for="ejemplo"></label>
        <input
          onKeyPress={keyPress}
          id="ejemplo"
          type="ejemplo"
          placeholder="Ingresa consonantes"
        />
        <button type="submit" id="button">
          Enviar
        </button>
      </form>
    </div>
  );
}
