import React, { useRef } from "react";
import BotonIconos from "../components/BotonIconos";
import BotonArriba from "../components/BotonArriba";
import { useHistory } from "react-router-dom";
import Cuadrado from "../components/Cuadrado";

const Diseño = () => {
  const scrollRef = useRef(null);
  const scrollRef2 = useRef(null);
  return (
    <div>
      <div className="portadaDiseño">
        <div className="botonDiseño">
          <BotonIconos id="botonredes"></BotonIconos>
        </div>
        <div>
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              width: "auto",
            }}
          >
            DISEÑO GRÁFICO REDES
          </h1>
          <hr color="darkslategray" width="300"></hr>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <BotonArriba
            className="botonAbajo"
            onClickProp={() => {
              scrollRef.current.scrollIntoView();
            }}
          ></BotonArriba>
        </div>
      </div>
      <div>
        <h1 ref={scrollRef} className="tituloDiseño">
          FLYERS / PUBLICACIONES
        </h1>
        <hr color="darkslategray" width="400"></hr>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={{ width: "520px" }}>
          Analizamos tus redes sociales y buscamos la mejor estética y
          contenido. De esta manera es mucho mas fácil llegar al público
          objetivo. Todos los diseños estan pensados para que tus redes se vean
          profesionales y la altura de tu marca/empresa/proyecto{" "}
        </p>
      </div>
      <div className="fotosEfecto">
        <img src="http://127.0.0.1:8887/1%20dise%C3%B1o.png"></img>
      </div>
      <div className="fotosEfecto2">
        <img src="http://127.0.0.1:8887/2%20dise%C3%B1o.png"></img>
      </div>
      <div className="fotosEfecto3">
        <img src="http://127.0.0.1:8887/3%20dise%C3%B1o.png"></img>
      </div>
      <h2>MTR Servicios Informáticos</h2>
      <div className="fotosEfecto4">
        <img src="http://127.0.0.1:8887/4%20dise%C3%B1o.png"></img>
      </div>
      <div className="fotosEfecto4">
        <img src="http://127.0.0.1:8887/5%20dise%C3%B1o.png"></img>
      </div>
      <h2>Campaña demostración (Adidas)</h2>
      <div className="fotosEfecto5">
        <img src="http://127.0.0.1:8887/6.png"></img>
      </div>
      <div className="fotosEfecto5">
        <img
          style={{ marginTop: 100 }}
          src="http://127.0.0.1:8887/7%20dise%C3%B1o.png"
        ></img>
      </div>
      <div className="fotosEfecto6">
        <img
          style={{ height: 400 }}
          src="http://127.0.0.1:8887/8%20dise%C3%B1o.png"
        />
        <img
          style={{ height: 400 }}
          src="http://127.0.0.1:8887/9%20dise%C3%B1o.png"
        />
      </div>
      <div className="fotosEfecto5">
        <img
          style={{ marginTop: 50 }}
          src="http://127.0.0.1:8887/10%20dise%C3%B1o.png"
        />
      </div>
      <div style={{ marginTop: 80, marginBottom: 80 }}>
        <Cuadrado
          imagen1="http://127.0.0.1:8887/11%20dise%C3%B1o.png"
          imagen2="http://127.0.0.1:8887/12%20dise%C3%B1o.png"
          imagen3="http://127.0.0.1:8887/13%20dise%C3%B1o.png"
          imagen4="http://127.0.0.1:8887/14%20dise%C3%B1o.png"
        ></Cuadrado>
      </div>
    </div>
  );
};

export default Diseño;
