import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Inicio from './screens/Inicio'
import Contacto from './screens/Contacto'
import Audio from './screens/Audio'
import TresD from './screens/TresD'
import Diseño from './screens/Diseño'
import AudioVisual from './screens/AudioVisual'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom'
import { useHistory } from 'react-router'
import BotonIconos from './components/BotonIconos'
import useWindowSize from './hooks/useWindowSize'
import CustomLink from './components/CustomLink/CustomLinks'

const rutas = [
	{ ruta: '/audiovisual', nombre: 'AudioVisual' },
	{ ruta: '/diseño', nombre: 'Diseño' },
	{ ruta: '/3D', nombre: '3D' },
	{ ruta: '/audio', nombre: 'Audio' },
	{ ruta: '/contacto', nombre: 'Contacto' },
]

const routes = [
	{ nombre: '/', componente: <Inicio /> },
	{ nombre: '/audiovisual', componente: <AudioVisual /> },
	{ nombre: '/diseño', componente: <Diseño /> },
	{ nombre: '/3D', componente: <TresD /> },
	{ nombre: '/audio', componente: <Audio /> },
	{ nombre: '/contacto', componente: <Contacto /> },
]

const App = () => {
	const { height, width } = useWindowSize()
	const history = useHistory()

	const getRoutes = (routes) => {
		return routes.map((item) => {
			return (
				<Route key={item.nombre} exact path={item.nombre}>
					{item.componente}
				</Route>
			)
		})
	}

	const getLink = () => {
		return rutas.map((item) => {
			return (
				<li key={item.ruta} className="rutitas">
					<Link to={item.ruta} component={(props) => <CustomLink {...props} {...item} />} />
				</li>
			)
		})
	}

	return (
		<Router>
			<nav className="barra">
				<Link
					to={'/'}
					component={(props) => {
            console.log(props)
						return (
							<button onClick={() => {props.navigate("/")}}>
								<img style={{ height: 40 }} src="src\images\Enfoque.png" />
							</button>
						)
					}}
				/>
				<div style={{ flex: 1 }} />
				<ul className="links">{getLink(rutas)}</ul>
			</nav>
			<div style={{ minHeight: height && height - 114 }}>
				<Switch>{getRoutes(routes)}</Switch>
			</div>
			<div>FOOTER</div>
		</Router>

		// <div className="barra">
		// <a href="/" style={{ width: "50px", height: "5px" }}>
		//   <button className="botonenfoque" type="button" value="Enfoque Sindical">
		//     <img src="src\images\Enfoque.png" className="botonEnfoque"></img>
		//   </button>
		// </a>

		//   <Router>
		//     <div>
		//       <nav>
		// <ul className="links">{getLink(rutas)}</ul>
		//       </nav>
		// <Switch>{getRoutes(routes)}</Switch>
		//     </div>
		//   </Router>
		// </div>
	)
}

export default App
