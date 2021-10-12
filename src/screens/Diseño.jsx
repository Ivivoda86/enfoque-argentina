import React from "react";
import BotonIconos from "../components/BotonIconos";
import BotonArriba from "../components/BotonArriba";

const Diseño = () => {
  return (
    <div>
        <div className="portadaDiseño">
      <div className="botonDiseño">
        <BotonIconos id="botonredes"></BotonIconos>
      </div>
      <div>
      <h1 style={{display:"flex", justifyContent: "center", width:"auto", height:"100px"}}>DISEÑO GRÁFICO REDES</h1>
      </div>
      <div style={{display:"flex", justifyContent: "center"}}>
          <BotonArriba></BotonArriba>
      </div>
      </div>
      <div>
          <h1 className="tituloDiseño">FLYERS / PUBLICACIONES</h1>
      </div>
        <div style={{display:"flex", justifyContent:"center"}}>
      <p style={{width:"520px"}}>Analizamos tus redes sociales y buscamos la mejor estética y contenido.
          De esta manera es mucho mas fácil llegar al público objetivo.
          Todos los diseños estan pensados para que tus redes se vean profesionales
          y la altura de tu marca/empresa/proyecto </p>
          </div>
          
    </div>
  );
};

export default Diseño;
