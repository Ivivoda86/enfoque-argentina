import React from "react"
import { FaAngleDown } from "react-icons/fa";


const BotonArriba = ({ onClickProp}) => {
    return (
      <button className="flechitaDelOrto" onClick={onClickProp}>
        <img  style={{height:70}} src="http://127.0.0.1:8887/flechablanca2.png"></img>
      </button>
    );
  };


  export default BotonArriba