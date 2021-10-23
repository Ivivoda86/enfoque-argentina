import React, { useState } from 'react'
import { useEffect } from 'react'
import Urls from '../util/Urls'

const Carru = () => {
	const [imagen, setImagen] = useState(0)

	const item = ['_MG_8745.jpg', '11.JPG', '88_urban_poster_mockup.png', 'render%20full1ps.jpg']
	const siguiente = (
		<button
			className="botonCarro"
			onClick={() => {
				setImagen(imagen === 3 ? 0 : imagen + 1)
			}}
		>
			Siguiente
		</button>
	)

	const atras = (
		<button
			className="botonCarro"
			onClick={() => {
				setImagen(imagen === 0 ? 3 : imagen - 1)
			}}
		>
			Atrás
		</button>
	)

	useEffect(() => {
		setTimeout(() => {
			setImagen(imagen === 3 ? 0 : imagen + 1)
		}, 3000)
	}, [imagen])

	return (
		<div className="fotosCarro">
			<img src={`${Urls.Inicio}${item[imagen]}`} style={{ height: 300, width: '100%' }} />
		</div>
		// <div className="carroFotos">
		// 	<div className="botonCarro2">
		// 		{atras}
		// 		{siguiente}
		// 	</div>
		// </div>
	)
}

export default Carru
