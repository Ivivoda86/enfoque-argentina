import React, { useRef } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import BotonIconos from "../components/BotonIconos";
import BotonArriba from "../components/BotonArriba";
import Imagencitas from "../components/Imagencitas";
import Carrousell from "../components/Carrousell";
import Carru from "../components/Carru";
import { useResponsive } from "../hooks/useWindowSize";

const Inicio = () => {
  const isMobile = useResponsive();
  const scrollRef = useRef(null);
  return (
    <div className="inicio">
      <div className={isMobile ? "produMobile" : "produ"}>
        <h1>PRODUCCIONES AUDIOVISUALES</h1>
      </div>
      <hr align="center" color="darkslategray" width="500" />

      <div className="botoncitos">
        <BotonIconos
          nombreBoton={"AUDIOVISUAL"}
          imagen="video_icon.png"
          ruta={"/audiovisual"}
        ></BotonIconos>
        <BotonIconos
          nombreBoton={"DISEÑO GRÁFICO Y REDES"}
          imagen="redes_icon.png"
          ruta={"/diseño"}
        ></BotonIconos>
        <BotonIconos
          nombreBoton={"3D"}
          imagen="3d_icon.png"
          ruta={"/3D"}
        ></BotonIconos>
      </div>

      <div ref={scrollRef} className={isMobile ? "tituloMobile" : "titulo"}>
        <div>
          <BotonArriba
            onClickProp={() => {
              scrollRef.current.scrollIntoView();
            }}
          ></BotonArriba>
        </div>
        {isMobile ? (
          <div style={{ display: "flex", fontSize: "initial" }}>
            <h1>QUIENES SOMOS</h1>
          </div>
        ) : (
          <h1>QUIENES SOMOS</h1>
        )}

        <hr align="center" color="darkslategray" width="500" />
      </div>
      <div className={isMobile ? "videoMobile" : "video"}>
        {isMobile ? (
          <iframe
            width="400"
            height="250"
            src="https://www.youtube.com/embed/wDJ9nkADSF8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        ) : (
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wDJ9nkADSF8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p className={isMobile? "texto1Mobile" : "texto1"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <hr style={{ width: "400px", marginTop: "100px" }}></hr>
      <Carru />
      <div className="imagenesInicio">
        <Imagencitas />
      </div>
    </div>
  );
};

export default Inicio;
