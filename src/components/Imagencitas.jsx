import React from "react";
import { useResponsive } from "../hooks/useWindowSize";
import Urls from "../util/Urls";

const imagenes = [
  "illustrator",
  "audition",
  "photoshop",
  "xd",
  "ae",
  "cubase",
  "blender",
  ,
  "fruta",
  "wing",
  "pt",
  "studioOne",
  "substance",
  "houdini",
];

const Imagencitas = () => {
  const isMobile = useResponsive();
  return (
    <div className={isMobile ? "imagencitasMobile" : "imagencitas"}>
      {imagenes.map((nombre) => (
        <img
          style={{ height: isMobile ? 30 : 50 }}
          src={`${Urls.Inicio}${nombre}.png`}
        />
      ))}
    </div>
  );
};

export default Imagencitas;
