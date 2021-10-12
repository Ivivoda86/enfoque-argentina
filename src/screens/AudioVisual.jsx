import React, { useRef } from "react";
import BotonIconos from "../components/BotonIconos";
import BotonArriba from "../components/BotonArriba";

const AudioVisual = () => {
  const scrollRef = useRef(null);
  return (
    <div>
      <div className="portadaaudiovisual">
        <div style={{ display: "flex", justifyContent: "center" }}>
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
      {/* <div className="cuadradoFotos">
            <div>Foto 1</div>
            <div>Foto 2</div>
            <div>Foto 3</div>
            <div>Foto 4</div>
      </div> */}
    </div>
  );
};

export default AudioVisual;
