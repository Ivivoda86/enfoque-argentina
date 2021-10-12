import React, { useState } from "react";

const Formulario = ({
  inputs,
  onSubmit,
  tituloBoton,
  selects,
  nombreSelect1,
  nombreSelect2,
}) => {
  const [valorSelect, setValorSelect] = useState("efectivo");
  return (
    <form
      class="formulario"
      onSubmit={(evento) => {
        evento.preventDefault();
        if (onSubmit) {
          onSubmit(evento);
        }
      }}
    >
      {inputs?.map((item) => {
        return (
          <input
            class="inputFormulario"
            key={item.name}
            placeholder={item.placeholder}
            name={item.name}
            type={item.tipo}
            
          />
        );
      })}

      {selects?.map((item) => {
        return (
          <select
            class="selectFormulario"
            key={item.name}
            name={item.name}
            onChange={(evento) => {
              setValorSelect(evento.target.value);
            }}
          >
            <option>{nombreSelect1}</option>
            <option>{nombreSelect2}</option>
          </select>
        );
      })}
      <button
        class="botonFormulario"
        style={{ display: "flex", height: "40px", width: "90px" }}
        type={"submit"}
      >
        {tituloBoton}
      </button>
    </form>
  );
};

export default Formulario;
