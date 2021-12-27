import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import AudioVisual from "../AudioVisual/AudioVisual";
import TresD from "../3D/TresD";
import Urls from "../util/Urls";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Dashboard = (props) => {
  const history = useHistory();
  const { ruta, ruta2, ruta3, ruta4, ruta5, menu, nombre } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls="fade-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img
          style={{ height: "40px" }}
          src={`${Urls.Inicio}botonMenu.png`}
        ></img>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        className="menuMejorado"
      >
        {menu.map((item) => {
          return (
            <MenuItem
              key={item.nombre}
              onClick={() => {
                history.push(item.ruta);
                handleClose(true)
            
              }}
            >
              {item.nombre}
            </MenuItem>
          );
        })}
        {/* <MenuItem onClick={handleClose}>{ruta}</MenuItem> */}

        {/* <MenuItem onClick={ruta1}>AudioVisual</MenuItem>
        <MenuItem onClick={ruta2}>Diseño</MenuItem>
        <MenuItem onClick={ruta3}>3D</MenuItem>
        <MenuItem onClick={ruta4}>Fotografia</MenuItem>
        <MenuItem onClick={ruta5}>Contacto</MenuItem> */}
      </Menu>
    </div>
  );
};

export default Dashboard;
