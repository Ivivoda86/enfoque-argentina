import React, { useRef } from "react";
import BotonIconos from "../components/BotonIconos";
import BotonArriba from "../components/BotonArriba";
import Cuadrado from "../components/Cuadrado";

const AudioVisual = () => {
  const scrollRef = useRef(null);
  return (
    <div>
      <div className="portadaaudiovisual">
        <div style={{ display: "flex", justifyContent: "center"}}>
          <BotonIconos id="botonaudiovisual"></BotonIconos>
        </div>
        <div>
          <h1 className="tituloAudio">AUDIOVISUAL</h1>
        </div>
        <h3>Preproducción, producción y postproducción. Motion graphics.</h3>
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

      <div ref={scrollRef} className="livesession">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/sEAEkVDe2x4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="textolive">
          <h2>LIVE SESSION</h2>
          <p>
            Grabación y producción de Live Session para Adviento, una banda de
            Buenos Aires formada por 5 amigos. Realizamos la grabación en una
            terraza logrando un muy buen sonido y video.
          </p>
        </div>
      </div>
      <div style={{ width: "50" }}>
        <Cuadrado
          imagen1="http://127.0.0.1:8887/1.jpg"
          imagen2="http://127.0.0.1:8887/2.JPG"
          imagen3="http://127.0.0.1:8887/3.png"
          imagen4="http://127.0.0.1:8887/4.png"
        ></Cuadrado>
      </div>
      <hr align="center" color="darkslategray" width="500"></hr>
      <div className="videoclipAudiovisual">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/sEAEkVDe2x4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="textolive2">
          <h3>VIDEOCLIP</h3>
          <p>Grabación y producción de Videoclip para Hachesito</p>
        </div>
      </div>
      <Cuadrado
        imagen1="http://127.0.0.1:8887/IMG_0938.JPG"
        imagen2="http://127.0.0.1:8887/IMG_0939.png"
        imagen3="http://127.0.0.1:8887/IMG_0938.png"
        imagen4="http://127.0.0.1:8887/IMG_0939.PNG"
      ></Cuadrado>
      <hr align="center" color="darkslategray" width="500"></hr>
      <h1 className="tituloSpot">SPOT/ ENFOQUE RADIO</h1>
      <h4 className="descripcionSpot">
        Video promocional de la radio FM 101.7 El único noticiero gremial
        conducido integramente por mujeres.
      </h4>
      <div style={{ display: "flex", justifyContent: "center", height: 400 }}>
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

      <hr align="center" color="darkslategray" width="500"></hr>
      <div>
        <h1 className="ute">UTE</h1>
        <h4 className="descripcionUte">
          Realizamos la cobertura de convocatorias y actividades de la Union de
          Trabajadores de la Educación
        </h4>
        <h2 style={{ display: "flex", marginLeft: "30%" }}>
          Jornada de Luto y Homenaje
        </h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/tUtJBGirW9I"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: 20,
            justifyContent: "center",
          }}
        >
          <img
            style={{ display: "flex", width: "20%", height: 400, margin: 10 }}
            src="http://127.0.0.1:8887/1UTE.png"
          />
          <img
            style={{ display: "flex", width: "60%", height: 400, margin: 10 }}
            src="http://127.0.0.1:8887/2UTE.png"
          />
        </div>
      </div>
      <h2 style={{ display: "flex", marginLeft: "30%" }}>Frazadazo</h2>
      <div className="frazadazo">
        <div className="videoFraza">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/zVcCVoYnhT4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: 20,
            justifyContent: "center",
            height: 600,
          }}
        >
          <img
            style={{ display: "flex", width: "40%", height: 400, margin: 10 }}
            src="http://127.0.0.1:8887/2Fraza.png"
          ></img>
          <img
            style={{ display: "flex", width: "20%", height: 400, margin: 10 }}
            src="http://127.0.0.1:8887/1Fraza.png"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default AudioVisual;
