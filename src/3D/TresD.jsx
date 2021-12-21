import React, { useRef } from 'react'
import BotonArriba from '../components/BotonArriba'
import BotonIconos from '../components/BotonIconos'
import { useResponsive } from '../hooks/useWindowSize'
import Urls from '../util/Urls'
import '../3D/TresD.css'

const TresD = () => {
	const isMobile = useResponsive()

	const scrollRef = useRef(null)
	return (
		<div>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
				}}
			>
				<img className="portada3D" src={`${Urls.TresD}portada3D.png`} />
				<div style={isMobile ? { display: 'flex', position: 'absolute', top: '60%' } : { display: 'flex', position: 'absolute', top: '30%' }}>
					<BotonIconos imagen="3d_icon.png"></BotonIconos>
				</div>
				<div style={{ display: 'flex', position: 'absolute', top: '50%' }}>
					<h1>3D</h1>
				</div>
				<hr style={{ display: 'flex', position: 'absolute', top: '60%' }} color="darkslategray" width="300"></hr>
				<h3 style={{ display: 'flex', position: 'absolute', top: '65%' }}>Modelado, animación y texturizado 3D</h3>
				<div style={{ display: 'flex', position: 'absolute', top: '80%' }}>
					{' '}
					<BotonArriba
						className="botonAbajo"
						onClickProp={() => {
							scrollRef.current.scrollIntoView()
						}}
					></BotonArriba>
				</div>
			</div>
			<div
				style={{
					display: 'flex',
					width: isMobile ? 50 : undefined,
					height: isMobile ? 500 : 500,
					marginTop: '150px',
					marginBottom: isMobile ? 10 : 100,
				}}
			>
				<img style={isMobile ? { height: 400, width: 300 } : undefined} ref={scrollRef} src={`${Urls.TresD}13.png`}></img>
			</div>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<div className="videoFraza">
					<iframe
						width="560"
						height="315"
						src="https://www.youtube.com/embed/kNKB2DGCups"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
				<div className="fotos3D">
					<img style={isMobile ? { width: 250, height: 200 } : { width: 500 }} src={`${Urls.TresD}23.png`}></img>
				</div>
				<div className="teclados">
					<img style={isMobile ? { width: 250, height: 200 } : { width: 500 }} src={`${Urls.TresD}33.png`}></img>
				</div>
				<div className="fotos3D">
					<img style={isMobile ? { width: 250, marginBottom: 100, height: 200 } : { width: 500, marginBottom: 200, marginTop: -70 }} src={`${Urls.TresD}43.png`}></img>
				</div>
			</div>
		</div>
	)
}

export default TresD
