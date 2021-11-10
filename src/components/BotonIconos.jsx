import React from "react";
import { useHistory } from "react-router-dom";
import { useResponsive } from "../hooks/useWindowSize";
import Urls from "../util/Urls";

const BotonIconos = (props) => {
  const isMobile = useResponsive();
  const { nombreBoton, imagen, ruta } = props;
  const history = useHistory();
  return (
    <div className="botonesInicio">
      <img
        src={`${Urls.Inicio}${imagen}`}
        className={isMobile ? "imagenesBotonesMobile" : "imagenesBotones"}
        onClick={() => {
          history.push(ruta);
        }}
      />
      <div className={isMobile ? "nombreBotoncitosMobile" : "nombreBotoncitos"}>
        {nombreBoton}
      </div>
    </div>
  );
};

export default BotonIconos;
