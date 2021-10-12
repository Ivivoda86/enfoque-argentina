import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Inicio from "./screens/Inicio";
import Contacto from "./screens/Contacto";
import Audio from "./screens/Audio";
import TresD from "./screens/TresD";
import Diseño from "./screens/Diseño";
import AudioVisual from "./screens/AudioVisual";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router";
import BotonIconos from "./components/BotonIconos";

const rutas = [
  { ruta: "/audiovisual", nombre: "AudioVisual" },
  { ruta: "/diseño", nombre: "Diseño" },
  { ruta: "/3D", nombre: "3D" },
  { ruta: "/audio", nombre: "Audio" },
  { ruta: "/contacto", nombre: "Contacto" },
];

const routes = [
  { nombre: "/", componente: <Inicio /> },
  { nombre: "/audiovisual", componente: <AudioVisual /> },
  { nombre: "/diseño", componente: <Diseño /> },
  { nombre: "/3D", componente: <TresD /> },
  { nombre: "/audio", componente: <Audio /> },
  { nombre: "/contacto", componente: <Contacto /> },
];

const App = () => {
  const history = useHistory();
  const getRoutes = (routes) => {
    return routes.map((item) => {
      return (
        <Route exact="true" path={item.nombre}>
          {item.componente}
        </Route>
      );
    });
  };
  const getLink = () => {
    return rutas.map((item) => {
      return (
        <li className="rutitas">
          <Link to={item.ruta}>{item.nombre}</Link>
        </li>
      );
    });
  };

  return (
    <div className="barra">
      <a href="/" style={{ width: "50px", height: "5px" }}>
        <button className="botonenfoque" type="button" value="Enfoque Sindical">
          <img src="src\imagenes\Enfoque.png" className="botonEnfoque"></img>
        </button>
      </a>

      <Router>
        <div>
          <nav>
            <ul className="links">{getLink(rutas)}</ul>
          </nav>
          <Switch>{getRoutes(routes)}</Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
