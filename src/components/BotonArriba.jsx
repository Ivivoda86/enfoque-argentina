import React from 'react'
import Urls from '../util/Urls'

const BotonArriba = ({ onClickProp }) => {
	return (
		<button className="flechitaAbajo" onClick={onClickProp}>
			<img style={{ height: 70 }} src={`${Urls.Inicio}flechablanca.png`} />
		</button>
	)
}

export default BotonArriba
