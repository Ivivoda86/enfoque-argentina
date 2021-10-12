import React, { useState } from "react";
import Formulario from "../components/Formulario";
import Tabla from "../components/Tabla";

const Contacto = () => {
  const { contactos, setContactos } = useState([{}]);

  return (
    <div className="titulocontacto">
      <div>
        <h1> CONTACTO</h1>
      </div>
      <div className="formulario">
        <Formulario
          inputs={[
            { placeholder: "Nombre y Apellido", name: "nombre" },
            {
              placeholder: "Telefono de Contacto",
              name: "telefono",
              tipo: "number",
            },
            { placeholder: "Mail", name: "mail", tipo: "string" },
            { placeholder: "Consulta", name: "consulta"},
          ]}
          tituloBoton={"Enviar"}
          onSubmit={(evento) => {
            const data = {
              nombre: evento.target[0].value,
              telefono: evento.target[1].value,
              mail: evento.target[2].value,
              consulta: evento.target[3].value,
            }
            setVendido(()=>{
                const nuevoContacto = [...contactos, data]
                console.log(nuevoContacto)
                return nuevoContacto
            })
            
            return [contactos]
          }}
        ></Formulario>
      </div>
      <div >
          
      </div>
    </div>
  );
};

export default Contacto;
