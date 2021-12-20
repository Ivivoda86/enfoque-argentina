import React, { useRef } from "react";
import BotonIconos from "../components/BotonIconos";
import BotonArriba from "../components/BotonArriba";
import { useHistory } from "react-router-dom";
import Cuadrado from "../components/Cuadrado";
import Urls from "../util/Urls";
import "../Diseño/Diseño.css";
import useWindowSize, { useResponsive } from "../hooks/useWindowSize";

const Diseño = () => {
  const { height, width } = useWindowSize();
  const isMobile = useResponsive();
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
        <img className="portadaDiseño" src={`${Urls.Diseño}PORTADA.png`} />
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: isMobile ? "60%" : "30%",
          }}
        >
          <BotonIconos imagen="redes_icon.png"></BotonIconos>
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: isMobile ? "52%" : "50%",
          }}
        >
          <h1 style={{ fontSize: isMobile ? "small" : undefined }}>
            DISENO GRAFICO REDES
          </h1>
          <div
            style={{
              display: "flex",
              position: "absolute",
              top: isMobile ? "400%" : "140%",
            }}
          >
            <h3 style={{ fontSize: isMobile ? "small" : undefined }}>
              Publicaciones para tu Instagram, Facebook, Twitter. Videos,
              posters y afiches para campañas
            </h3>
          </div>
        </div>

        <div></div>
        <hr
          style={{ display: "flex", position: "absolute", top: "60%" }}
          color="darkslategray"
          width="300"
        ></hr>
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: isMobile ? "100%" : "80%",
          }}
        >
          <BotonArriba
            className="botonAbajo"
            onClickProp={() => {
              scrollRef.current.scrollIntoView();
            }}
          ></BotonArriba>
        </div>
      </div>
      <div>
        <h1
          ref={scrollRef}
          style={{
            display: "flex",
            justifyContent: "center",
            height: "50px",
            marginTop: "80px",
            fontSize: isMobile ? "large" : undefined,
          }}
        >
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
      <div style={{ display: "flex" }}>
        <h2>Espacio Puebla</h2>
      </div>
      <div className={isMobile ? "fotosEfectoMobile" : "fotosEfecto"}>
        <img
          style={{
            height: isMobile ? "200px" : undefined,
            width: isMobile ? "300px" : undefined,
          }}
          src={`${Urls.Diseño}1_diseño.png`}
        ></img>
      </div>
      <div className={isMobile ? "fotosEfecto2Mobile" : "fotosEfecto2"}>
        <img
          style={{
            height: isMobile ? "200px" : undefined,
            width: isMobile ? "300px" : undefined,
          }}
          src={`${Urls.Diseño}2_diseño.png`}
        ></img>
      </div>
      <div className={isMobile ? "fotosEfecto3Mobile" : "fotosEfecto3"}>
        <img
          style={{
            height: isMobile ? "300px" : undefined,
            width: isMobile ? "350px" : undefined,
          }}
          src={`${Urls.Diseño}3_diseño.png`}
        ></img>
      </div>
      <div style={{ display: "flex", marginLeft: "10%", marginTop: "5%" }}>
        <h2>MTR Servicios Informáticos</h2>
      </div>
      <div className={isMobile ? "fotosEfecto4Mobile" : "fotosEfecto4"}>
        <img
          style={{
            height: isMobile ? "400px" : undefined,
            width: isMobile ? "400px" : undefined,
          }}
          src={`${Urls.Diseño}4_diseño.png`}
        ></img>
      </div>
      <div className={isMobile ? "fotosEfecto4Mobile" : "fotosEfecto4"}>
        <img
          style={{
            height: isMobile ? "300px" : undefined,
            width: isMobile ? "300px" : undefined,
          }}
          src={`${Urls.Diseño}5_diseño.png`}
        ></img>
      </div>
      <div style={{ display: "flex", marginLeft: isMobile ? "5%" : "19%" }}>
        <h2>Campaña demostración (Adidas)</h2>
      </div>
      <div className={isMobile? "fotosEfecto5Mobile" : "fotosEfecto5"}>
        <img
          style={{
            height: isMobile ? "200px" : undefined,
            width: isMobile ? "300px" : undefined,
          }}
          src={`${Urls.Diseño}6_diseño.png`}
        ></img>
      </div>
      <div className={isMobile ? "fotosEfecto5Mobile" : "fotosEfecto5"}>
        <img
          style={{
            height: isMobile ? "200px" : undefined,
            width: isMobile ? "300px" : undefined,
            marginTop: isMobile ? undefined : 100,
          }}
          src={`${Urls.Diseño}7_diseño.png`}
        ></img>
      </div>
      <div className={isMobile ? "fotosEfecto6" : "fotosEfecto6"}>
        <img
          style={{
            height: isMobile ? "200px" : 400,
            width: isMobile ? "150px" : undefined,
          }}
          src={`${Urls.Diseño}8_diseño.png`}
        />
        <img
          style={{
            height: isMobile ? "200px" : 400,
            width: isMobile ? "150px" : undefined,
          }}
          src={`${Urls.Diseño}9_diseño.png`}
        />
      </div>
      <div className={isMobile? "fotosEfecto5Mobile" : "fotosEfecto5"}>
        <img
          style={{
            height: isMobile ? "200px" : 400,
            width: isMobile ? "300px" : undefined,
            marginTop: 50,
          }}
          src={`${Urls.Diseño}10_diseño.png`}
        />
      </div>
      <div style={{ marginBottom: 80 }}>
        <Cuadrado
          imagen1={`${Urls.Diseño}11_diseño.png`}
          imagen2={`${Urls.Diseño}12_diseño.png`}
          imagen3={`${Urls.Diseño}13_diseño.png`}
          imagen4={`${Urls.Diseño}14_diseño.png`}
        ></Cuadrado>
      </div>
    </div>
  );
};

export default Diseño;
