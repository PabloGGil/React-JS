import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Opcional: para los iconos de las flechas
import './Calesita.modules.css';

 const Calesita = ({ imagenes }) => {
  const [indiceActual, setIndiceActual] = useState(0);

  // Ir a la imagen anterior (si está en la primera, vuelve a la última)
  const anteriorImagen = () => {
    setIndiceActual((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
  };

  // Ir a la siguiente imagen (si está en la última, vuelve a la primera)
  const siguienteImagen = () => {
    setIndiceActual((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
  };

  // Ir a una imagen específica mediante las viñetas (dots)
  const irAImagen = (index) => {
    setIndiceActual(index);
  };

  if (!imagenes || imagenes.length === 0) return null;

  return (
    <div className="carrusel-container">
      {/* Botón Anterior */}
      <button className="carrusel-btn btn-left" onClick={anteriorImagen} aria-label="Anterior">
        <ChevronLeft size={28} />
      </button>

      {/* Imagen Actual */}
      <div className="carrusel-slide">
        <img src={imagenes[indiceActual]} alt={`Slide ${indiceActual + 1}`} />
      </div>

      {/* Botón Siguiente */}
      <button className="carrusel-btn btn-right" onClick={siguienteImagen} aria-label="Siguiente">
        <ChevronRight size={28} />
      </button>

      <div className="carrusel-dots">
        {imagenes.map((_, index) => (
          <button
            key={index}
            className={`dot ${indiceActual === index ? 'active' : ''}`}
            onClick={() => irAImagen(index)}
            aria-label={`Ir a la imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
export default Calesita;