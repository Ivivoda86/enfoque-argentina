import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Inicio from "./Inicio/Inicio";
import Contacto from "./Contacto/Contacto";
import TresD from "./3D/TresD";
import Diseño from "./Diseño/Diseño";
import AudioVisual from "../src/AudioVisual/AudioVisual";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { useHistory } from "react-router";
import BotonIconos from "./components/BotonIconos";
import useWindowSize, { useResponsive } from "./hooks/useWindowSize";
import CustomLink from "./components/CustomLink/CustomLinks";
import Footer from "./components/Footer";
import Carru from "./components/Carru";
import Urls from "./util/Urls";
import Dashboard from "./components/Dashboard";
import Fotografia from "./screens/Fotografia";
import Web from "./screens/Web"

const rutas = [
  { ruta: "/audiovisual", nombre: "AudioVisual" },
  { ruta: "/diseño", nombre: "Diseño" },
  { ruta: "/3D", nombre: "3D" },
  { ruta: "/fotografia", nombre: "Fotografía" },
  { ruta: "/web", nombre: "Páginas Web y Streamings" },
  { ruta: "/contacto", nombre: "Contacto" },
  
];

const routes = [
  { nombre: "/", componente: <Inicio /> },
  { nombre: "/audiovisual", componente: <AudioVisual /> },
  { nombre: "/diseño", componente: <Diseño /> },
  { nombre: "/3D", componente: <TresD /> },
  { nombre: "/fotografia", componente: <Fotografia /> },
  { nombre: "/contacto", componente: <Contacto />},
  { nombre: "/web", componente: <Web />}
];

const App = () => {
  const { height, width } = useWindowSize();
  const isMobile = useResponsive();
  const history = useHistory();

  const getRoutes = (routes) => {
    return routes.map((item) => {
      return (
        <Route key={item.nombre} exact path={item.nombre}>
          {item.componente}
        </Route>
      );
    });
  };

  const getLink = () => {
    return rutas.map((item) => {
      return (
        <li key={item.ruta} className="rutitas">
          <Link
            to={item.ruta}
            component={(props) => <CustomLink {...props} {...item} />}
          />
        </li>
      );
    });
  };

  return (
    <Router>
      <nav className="barra">
        <Link
          to={"/"}
          component={(props) => {
            return (
              <button
                className="botonEnfoque"
                onClick={() => {
                  props.navigate("/");
                }}
              >
                <img style={{ height: 37 }} src={`${Urls.Inicio}Enfoque.png`} />
              </button>
            );
          }}
        />

        <div style={{ flex: 1 }} />

        {isMobile ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <Dashboard
              ruta={
                <div>
                  <ul className="linksMobile">{getLink(rutas)}</ul>
                </div>
              }
            />
          </div>
        ) : (
          <ul className="links">{getLink(rutas)}</ul>
        )}
      </nav>
      <div style={{ minHeight: height && height - 114 }}>
        <Switch>{getRoutes(routes)}</Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
