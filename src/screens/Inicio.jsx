import React, { useRef } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import BotonIconos from "../components/BotonIconos";
import BotonArriba from "../components/BotonArriba";

const Inicio = () => {
  const scrollRef = useRef(null);
  return (
    <div className="inicio" style={{ display: "flex" }}>
      <div className="produ">
        <h1>PRODUCCIONES AUDIOVISUALES</h1>
      </div>
      <div className="botoncitos">
        <BotonIconos
          nombreBoton={"AUDIOVISUAL"}
          id="botonaudiovisual"
          ruta={"/audiovisual"}
        ></BotonIconos>
        <BotonIconos
          nombreBoton={"DISEÑO GRÁFICO Y REDES"}
          id="botonredes"
          ruta={"/diseño"}
        ></BotonIconos>
        <BotonIconos nombreBoton={"3D"} id="boton3d" ruta={"/3D"}></BotonIconos>
      </div>
      {/* <div classname="flechaAbajoInicio">
        <BotonArriba
          onClickProp={() => {
            scrollRef.current.scrollIntoView();
          }}
        ></BotonArriba>
      </div> */}

      <div ref={scrollRef} className="titulo" stlye={{ display: "flex" }}>
        <h1>QUIENES SOMOS</h1>
      </div>
      <div className="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/wDJ9nkADSF8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div className="texto1">
        <p>
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
      <div className="carrusel">
        <Carousel>
          <CarouselItem>
            <img className="carrousel1"></img>
          </CarouselItem>
          <CarouselItem>
            <img className="carrousel2"></img>
          </CarouselItem>
          <CarouselItem>
            <img className="carrousel3"></img>
          </CarouselItem>
        </Carousel>
      </div>
    </div>
  );
};

export default Inicio;
