import React, { useRef } from "react";
import BotonIconos from "../components/BotonIconos";
import BotonArriba from "../components/BotonArriba";
import { useHistory } from "react-router-dom";
import Cuadrado from "../components/Cuadrado";
import Urls from "../util/Urls";

const Diseño = () => {
  const scrollRef = useRef(null);
  const scrollRef2 = useRef(null);
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          className="portadaDiseño"
          src={`${Urls.Diseño}PORTADA.png`}
        />
        <div style={{ display: "flex", position: "absolute", top: "30%" }}>
          <BotonIconos imagen="redes_icon.png"></BotonIconos>
        </div>
        <div style={{ display: "flex", position: "absolute", top: "50%" }}>
          <h1>DISEÑO GRÁFICO REDES</h1>
        </div>
        <hr
          style={{ display: "flex", position: "absolute", top: "60%" }}
          color="darkslategray"
          width="300"
        ></hr>
        <div style={{ display: "flex", position: "absolute", top: "80%" }}>
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
      <div style={{display:"flex", marginLeft:"20%"}}>
        <h2>Espacio Puebla</h2>
      </div>
      <div className="fotosEfecto">
        <img src={`${Urls.Diseño}1 diseño.png`}></img>
      </div>
      <div className="fotosEfecto2">
        <img src={`${Urls.Diseño}2 diseño.png`}></img>
      </div>
      <div className="fotosEfecto3">
        <img src={`${Urls.Diseño}3 diseño.png`}></img>
      </div>
      <div style={{display:"flex", marginLeft:"10%", marginTop:"5%"}}>
      <h2>MTR Servicios Informáticos</h2>
      </div>
      <div className="fotosEfecto4">
        <img src={`${Urls.Diseño}4 diseño.png`}></img>
      </div>
      <div className="fotosEfecto4">
        <img src={`${Urls.Diseño}5 diseño.png`}></img>
      </div>
      <div style={{display:"flex", marginLeft:"19%"}}>
      <h2>Campaña demostración (Adidas)</h2>
      </div>
      <div className="fotosEfecto5">
        <img src={`${Urls.Diseño}6 diseño.png`}></img>
      </div>
      <div className="fotosEfecto5">
        <img
          style={{ marginTop: 100 }}
          src={`${Urls.Diseño}7 diseño.png`}
        ></img>
      </div>
      <div className="fotosEfecto6">
        <img
          style={{ height: 400 }}
          src={`${Urls.Diseño}8 diseño.png`}
        />
        <img
          style={{ height: 400 }}
          src={`${Urls.Diseño}9 diseño.png`}
        />
      </div>
      <div className="fotosEfecto5">
        <img
          style={{ marginTop: 50 }}
          src={`${Urls.Diseño}10 diseño.png`}
        />
      </div>
      <div style={{ marginTop: 80, marginBottom: 80 }}>
        <Cuadrado
          imagen1={`${Urls.Diseño}11 diseño.png`}
          imagen2={`${Urls.Diseño}12 diseño.png`}
          imagen3={`${Urls.Diseño}13 diseño.png`}
          imagen4={`${Urls.Diseño}14 diseño.png`}
        ></Cuadrado>
      </div>
    </div>
  );
};

export default Diseño;
