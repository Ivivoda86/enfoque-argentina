import React from "react";
import BotonArriba from "../components/BotonArriba";
import BotonIconos from "../components/BotonIconos";
import useWindowSize, { useResponsive } from "../hooks/useWindowSize";

const Fotografia = () => {
  const { height, width } = useWindowSize();
  const isMobile = useResponsive();
  return (
    <div>
      <div style={{ marginTop: isMobile? 200 : 100 }}>
        <BotonIconos
          imagen="fotografia_icon.png"
          ruta={"/fotografia"}
        ></BotonIconos>
        <h1
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
			marginTop:-50
			
          }}
        >
          Fotografia
        </h1>
      </div>
      <div style={{marginTop:100, display:"flex", flexDirection:"column", alignItems:"center"}}>
        <BotonArriba />
      </div>
    </div>
  );
};

export default Fotografia;
