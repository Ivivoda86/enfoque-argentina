import React from "react";
import { useHistory } from "react-router-dom";

const BotonIconos = (props) => {
  const { id, nombreBoton, imagen, ruta } = props;
  const history = useHistory();
  return (
    <div>
      <button style={{display:"flex", height:"150px", width: "150px"}}
        id={id}
        ruta={ruta}
        onClick={() => {
          history.push(ruta);
        }}
      ></button>
      <div style={{display: "flex",justifyContent: "center" ,marginTop: "30px"}}>
      {nombreBoton}
      </div>
    </div>
  );
};

export default BotonIconos;
