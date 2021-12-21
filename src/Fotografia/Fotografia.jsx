import React from "react";
import BotonArriba from "../components/BotonArriba";
import BotonIconos from "../components/BotonIconos";
import useWindowSize, { useResponsive } from "../hooks/useWindowSize";

const Fotografia = () => {
  const { height, width } = useWindowSize();
  const isMobile = useResponsive();
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: isMobile ? "60%" : "30%",
          }}
        >
          <BotonIconos
            imagen="fotografia_icon.png"
            ruta={"/fotografia"}
          ></BotonIconos>
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: isMobile ? "52%" : "50%",
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? "small" : undefined,
            }}
          >
            Fotografia
          </h1>
        </div>
        <hr
          style={{ display: "flex", position: "absolute", top: "60%" }}
          color="darkslategray"
          width="300"
        ></hr>

        <div
          style={{
            display: "flex",
            position: "absolute",
            top: "80%",
          }}
        >
          <BotonArriba classname="botonAbajo" />
        </div>
      </div>
    </div>
  );
};

export default Fotografia;
