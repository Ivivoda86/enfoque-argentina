import React, { useState } from "react";

const Carru = () => {
  const [imagen, setImagen] = useState(0);
  const item = [
    "http://127.0.0.1:8887/_MG_8745.jpg",
    "http://127.0.0.1:8887/11.JPG",
    "http://127.0.0.1:8887/88_urban_poster_mockup.png",
    "http://127.0.0.1:8887/render%20full1ps.jpg",
  ];
  const siguiente = (
    <button
    className="botonCarro"
      onClick={() => {
        setImagen(imagen + 1);
      }}
    >
      Siguiente
    </button>
  );
  const atras = (
    <button
    className="botonCarro"
      onClick={() => {
        setImagen(imagen - 1);
      }}
    >
      Atrás
    </button>
  );
  return (
    <div className="carroFotos">
      <div className="fotosCarro">
        <img src={item[imagen]} style={{ height: 300, width: "100%", borderRadius:"20px", border: "1px solid red"  }}></img>
      </div>
      <div className="botonCarro2">
        {atras}
        {siguiente}
      </div>
    </div>
  );
};
export default Carru;
