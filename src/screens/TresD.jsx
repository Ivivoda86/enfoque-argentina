import React, { useRef } from "react";
import BotonArriba from "../components/BotonArriba";
import BotonIconos from "../components/BotonIconos";


const TresD = () => {
  const scrollRef = useRef(null);
  return (
    <div>
      <div className="portada3D">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <BotonIconos id="boton3d"></BotonIconos>
        </div>
        <div>
          <h1 align="center" className="titulo3D">
            3D
          </h1>
          <hr color="darkslategray" width="300"></hr>
        </div>
        <h3>Modelado, animación y texturizado 3D</h3>
        <div>
          {" "}
          <BotonArriba
            className="botonAbajo"
            onClickProp={() => {
              scrollRef.current.scrollIntoView();
            }}
          ></BotonArriba>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "500px",
          marginTop: "150px",
          marginBottom: "100px",
        }}
      >
        <img ref={scrollRef}  src="http://127.0.0.1:8887/1%203.png"></img>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="videoFraza">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/kNKB2DGCups"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="fotos3D">
          <img
            style={{ width: 500 }}
            src="http://127.0.0.1:8887/2%203.png"
          ></img>
        </div>
        <div className="teclados">
          <img
            style={{ width: 500 }}
            src="http://127.0.0.1:8887/3%203.png"
          ></img>
        </div>
        <div className="fotos3D">
            <img style={{width:500, marginBottom: 200, marginTop:-70}} src="http://127.0.0.1:8887/4%203.png"></img>
        </div>
      </div>
    </div>
  );
};

export default TresD;
