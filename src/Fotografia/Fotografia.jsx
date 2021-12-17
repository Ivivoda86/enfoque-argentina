import React from 'react'
import BotonIconos from '../components/BotonIconos'

const Fotografia = () => {
	return (
		<div>
			<div style={{ marginTop: 100 }}>
				<BotonIconos imagen="fotografia_icon.png" ruta={'/fotografia'}></BotonIconos>
			</div>
			<h1 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>Fotografia</h1>
		</div>
	)
}

export default Fotografia
