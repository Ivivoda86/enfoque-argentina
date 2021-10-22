import React from "react";

const Footer = (imagen) => {
  return (
    <div className="footer" >
        <div className="redesFooter"><img style={{height:30}} src="http://127.0.0.1:8887/ig.png" />@EnfoqueArgentina </div>
      <div className="enfoqueFooter" >
        <img
          style={{ height: 40 }}
          src="http://127.0.0.1:8887/Enfoque.png"
        ></img>
      </div>
      <div className="contactoFooter" >
          <img style={{height:30}} src="http://127.0.0.1:8887/telefono.png" alt="" />
        Contacto
      </div>
    </div>
    
  );
};

export default Footer;
