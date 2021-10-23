import React from 'react'
import Urls from '../util/Urls'

const imagenes = ['illustrator', 'audition', 'photoshop', 'xd', 'cubase', 'blender', 'ae', 'fruta', 'wing', 'pt', 'studioOne', 'substance', 'houdini']

const Imagencitas = () => {
	return (
		<div className="imagencitas">
			{imagenes.map((nombre) => (
				<img style={{ height: 50 }} src={`${Urls.Inicio}${nombre}.png`} />
			))}
		</div>
	)
}

export default Imagencitas
