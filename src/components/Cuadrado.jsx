import React from "react";

const Cuadrado = (props) => {
    const {imagen1,imagen2,imagen3,imagen4} = props
  return (
    <div style={{ display: "flex", flexDirection: "column", height: 600, marginLeft:"25%" }}>
      <div style={{ display: "flex", height: "100%", width: "60%" }}>
        <img
          style={{ margin: 10, width: 500, height: 250 }}
          src={imagen1}
        />
        <img
          style={{ margin: 10, width: 500, height: 250 }}
          src={imagen2}
        ></img>
      </div>

      <div style={{ display: "flex", height: "100%", width: "60%" }}>
        <img
          style={{ margin: 10, width: 500, height: 250 }}
          src={imagen3}
        ></img>
        <img
          style={{ margin: 10, width: 500, height: 250 }}
          src={imagen4}
        ></img>
      </div>
    </div>
  );
};

export default Cuadrado;
