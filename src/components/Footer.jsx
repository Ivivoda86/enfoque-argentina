import React from "react";
import useWindowSize, { useResponsive } from "../hooks/useWindowSize";
import Urls from "../util/Urls";

const Footer = (imagen) => {
  const { height, width } = useWindowSize();
  const isMobile = useResponsive();
  return (
    <div
      style={{
        display: isMobile? "grid" : "flex",
        backgroundColor: "black",
        minHeight: 200,
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <img
          style={{ display: "flex", height: isMobile ? 15 : 30 , marginRight:10}}
          src={`${Urls.Inicio}ig.png`}
        />
        @EnfoqueArgentina
      </div>
      <div>
        <img
          style={{ display: "flex", height: isMobile ? 40 : 80 }}
          src={`${Urls.Inicio}Enfoque.png`}
        />
      </div>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <img
          style={{ display: "flex", height: isMobile ? 15 : 30 , marginRight:10}}
          src={`${Urls.Inicio}telefono.png`}
          title=""
        />1151311892
      </div>
    </div>
    // <div className={isMobile ? "footerMobile" : "footer"}>
    //   <div className={isMobile ? "redesFooterMobile" : "redesFooter"}>
    //     <img
    //       style={{ height: isMobile ? 15 : 30 }}
    //       src={`${Urls.Inicio}ig.png`}
    //     />
    //     @EnfoqueArgentina
    //   </div>
    //   <div className={isMobile ? "enfoqueFooterMobile" : "enfoqueFooter"}>
    //     <img style={{ height: 40 }} src={`${Urls.Inicio}Enfoque.png`}></img>
    //   </div>
    //   <div className={isMobile ? "contactoFooterMobile" : "contactoFooter"}>
    //     <img
    //       style={{ height: isMobile ? 15 : 30 }}
    //       src={`${Urls.Inicio}telefono.png`}
    //       alt=""
    //     />{" "}
    //     Contacto
    //   </div>
    // </div>
  );
};

export default Footer;
