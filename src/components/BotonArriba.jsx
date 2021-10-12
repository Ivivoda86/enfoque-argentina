import React from "react"
import { FaAngleDown } from "react-icons/fa";


const BotonArriba = ({ onClickProp}) => {
    return (
      <button onClick={onClickProp}>
        <FaAngleDown></FaAngleDown>
      </button>
    );
  };


  export default BotonArriba