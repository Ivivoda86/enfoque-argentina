import React from "react";
import BotonArriba from "../components/BotonArriba";
import BotonIconos from "../components/BotonIconos";
import useWindowSize, { useResponsive } from "../hooks/useWindowSize";

const Web = () => {
  const { height, width } = useWindowSize();
  const isMobile = useResponsive();
  return (
    <div>
      <div style={{ marginTop: isMobile ? 200 : 100 }}>
        <BotonIconos imagen="web_icon.png" ruta={"/web"}></BotonIconos>
        <h1
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: -50,
            fontSize: isMobile ? "large" : undefined,
          }}
        >
          Web y Streaming
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: isMobile ? 50 : 100,
        }}
      >
        <BotonArriba />
      </div>
    </div>
  );
};

export default Web;
