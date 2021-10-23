import React from 'react'
import { useHistory } from 'react-router-dom'
import Urls from '../util/Urls'

const BotonIconos = (props) => {
	const { nombreBoton, imagen, ruta } = props
	const history = useHistory()
	return (
		<div className="botonesInicio">
			<img
				src={`${Urls.Inicio}${imagen}`}
				style={{ height: '150px', width: '150px', borderRadius: '50%', cursor: 'pointer' }}
				onClick={() => {
					history.push(ruta)
				}}
			/>
			<div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>{nombreBoton}</div>
		</div>
	)
}

export default BotonIconos
