import React from "react";
import useWindowSize, { useResponsive } from "../hooks/useWindowSize";
import Urls from "../util/Urls";

const Footer = (imagen) => {
  const { height, width } = useWindowSize();
  const isMobile = useResponsive();
  return (
    <div className={isMobile ? "footerMobile" : "footer"}>
      <div className={isMobile ? "redesFooterMobile" : "redesFooter"}>
        <img
          style={{ height: 30 }}
          src={`${Urls.Inicio}ig.png`}
        />
        @EnfoqueArgentina{" "}
      </div>
      <div className={isMobile ? "enfoqueFooterMobile" : "enfoqueFooter"}>
        <img
          style={{ height: 40 }}
          src={`${Urls.Inicio}Enfoque.png`}
        ></img>
      </div>
      <div className={isMobile ? "contactoFooterMobile" : "contactoFooter"}>
        <img
          style={{ height: 30 }}
          src={`${Urls.Inicio}telefono.png`}
          alt=""
        />
        Contacto
      </div>
    </div>
  );
};

export default Footer;
