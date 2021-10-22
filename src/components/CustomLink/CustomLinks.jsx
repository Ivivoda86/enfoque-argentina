import React from 'react'
import { useHistory } from 'react-router-dom'
import './index.css'
const CustomLink = (props) => {
	const { nombre, ruta } = props
	const history = useHistory()

	const seleccionado = ruta === history.location.pathname

	return (
		<button
			style={{ textDecoration: seleccionado && 'underline', textDecorationColor: seleccionado && 'darkred' }}
			className="botonesLinks"
			onClick={() => {
				history.push(ruta)
			}}
		>
			{nombre}
		</button>
	)
}

export default CustomLink
