import React, { useRef } from 'react'
import BotonIconos from '../components/BotonIconos'
import BotonArriba from '../components/BotonArriba'
import Cuadrado from '../components/Cuadrado'
import Urls from '../util/Urls'
import { useResponsive } from '../hooks/useWindowSize'
import '../AudioVisual/AudioVisual.css'

const AudioVisual = () => {
	const scrollRef = useRef(null)
	const isMobile = useResponsive()
	return (
		<div>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
				}}
			>
				<div style={isMobile ? { display: 'flex', position: 'absolute', top: '50%' } : { display: 'flex', position: 'absolute', top: '30%' }}>
					<BotonIconos imagen="video_icon.png"></BotonIconos>
				</div>
				<div style={{ display: 'flex', position: 'absolute', top: '50%' }}>
					<h1 className={isMobile ? 'tituloAudioMobile' : 'tituloAudio'}>AUDIOVISUAL</h1>
				</div>
				<h3
					style={
						isMobile
							? {
									width: '300px',
									fontSize: '12px',
									marginTop: '30px',
									position: 'absolute',
									top: '65%',
							  }
							: { display: 'flex', position: 'absolute', top: '65%' }
					}
				>
					Preproducción, producción y postproducción. Motion graphics.
				</h3>
				<div style={{ display: 'flex', position: 'absolute', top: '75%' }}>
					{' '}
					<BotonArriba
						className="botonAbajo"
						onClickProp={() => {
							scrollRef.current.scrollIntoView()
						}}
					></BotonArriba>
				</div>
				<img className="portadaaudiovisual" src={`${Urls.Audiovisual}PORTADA.jpg`} />
			</div>

			<div ref={scrollRef} className={isMobile ? 'livesessionMobile' : 'livesession'}>
				{isMobile ? (
					<iframe
						width="250"
						height="200"
						src="https://www.youtube.com/embed/sEAEkVDe2x4"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				) : (
					<iframe
						width="560"
						height="315"
						src="https://www.youtube.com/embed/sEAEkVDe2x4"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				)}

				<div className={isMobile ? 'textoLiveMobile' : 'textolive'}>
					<h2>LIVE SESSION</h2>
					<p>
						Grabación y producción de Live Session para Adviento, una banda de Buenos Aires formada por 5 amigos. Realizamos la grabación en una terraza logrando un muy
						buen sonido y video.
					</p>
				</div>
			</div>
			<div style={{ width: '50' }}>
				<Cuadrado
					imagen1={`${Urls.Audiovisual}1.JPG`}
					imagen2={`${Urls.Audiovisual}2.JPG`}
					imagen3={`${Urls.Audiovisual}3.png`}
					imagen4={`${Urls.Audiovisual}4.png`}
				></Cuadrado>
			</div>
			<hr align="center" color="darkslategray" width="500"></hr>
			<div className={isMobile ? 'videoClipAudiovisualMobile' : 'videoclipAudiovisual'}>
				{isMobile ? (
					<iframe
						width="250"
						height="200"
						src="https://www.youtube.com/embed/sEAEkVDe2x4"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				) : (
					<iframe
						width="560"
						height="315"
						src="https://www.youtube.com/embed/sEAEkVDe2x4"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				)}

				<div className={isMobile ? 'textolive2Mobile' : 'textolive2'}>
					<h3>VIDEOCLIP</h3>
					<p>Grabación y producción de Videoclip para Hachesito</p>
				</div>
			</div>
			<Cuadrado
				imagen1={`${Urls.Audiovisual}IMG_0938.JPG`}
				imagen2={`${Urls.Audiovisual}IMG_0939.png`}
				imagen3={`${Urls.Audiovisual}IMG_0938.png`}
				imagen4={`${Urls.Audiovisual}IMG_0891.JPG`}
			></Cuadrado>
			<hr align="center" color="darkslategray" width="500"></hr>
			<h1 className={isMobile ? 'tituloSpotMobile' : 'tituloSpot'}>SPOT/ ENFOQUE RADIO</h1>
			<h4 className={isMobile ? 'descripcionSpotMobile' : 'descripcionSpot'}>
				Video promocional de la radio FM 101.7 El único noticiero gremial conducido integramente por mujeres.
			</h4>
			<div style={{ display: 'flex', justifyContent: 'center', height: 300 }}>
				{isMobile ? (
					<iframe
						width="250"
						height="200"
						src="https://www.youtube.com/embed/wDJ9nkADSF8"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				) : (
					<iframe
						width="560"
						height="315"
						src="https://www.youtube.com/embed/wDJ9nkADSF8"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				)}
			</div>

			<hr align="center" color="darkslategray" width="500"></hr>
			<div>
				<h1 className="ute">UTE</h1>
				<h4 className="descripcionUte">Realizamos la cobertura de convocatorias y actividades de la Union de Trabajadores de la Educación</h4>
				<h2 style={isMobile ? { display: 'flex', marginLeft: '10%' } : { display: 'flex', marginLeft: '30%' }}>Jornada de Luto y Homenaje</h2>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					{isMobile ? (
						<iframe
							width="250"
							height="200"
							src="https://www.youtube.com/embed/tUtJBGirW9I"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					) : (
						<iframe
							width="800"
							height="500"
							src="https://www.youtube.com/embed/tUtJBGirW9I"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					)}
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						margin: 20,
						justifyContent: 'center',
					}}
				>
					<img
						style={isMobile ? { display: 'flex', width: '50%', height: 250, margin: 10 } : { display: 'flex', width: '20%', height: 400, margin: 10 }}
						src={`${Urls.Audiovisual}1UTE.png`}
					/>
					<img
						style={isMobile ? { display: 'flex', width: '50%', height: 250, margin: 10 } : { display: 'flex', width: '40%', height: 400, margin: 10 }}
						src={`${Urls.Audiovisual}2UTE.png`}
					/>
				</div>
			</div>
			<h2 style={{ display: 'flex', marginLeft: '30%' }}>Frazadazo</h2>
			<div className="frazadazo">
				<div className="videoFraza">
					{isMobile ? (
						<iframe
							width="250"
							height="200"
							src="https://www.youtube.com/embed/zVcCVoYnhT4"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					) : (
						<iframe
							width="800"
							height="500"
							src="https://www.youtube.com/embed/zVcCVoYnhT4"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					)}
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						margin: 20,
						justifyContent: 'center',
						height: 600,
					}}
				>
					<img
						style={isMobile ? { display: 'flex', width: '50%', height: 250, margin: 10 } : { display: 'flex', width: '40%', height: 400, margin: 10 }}
						src={`${Urls.Audiovisual}2.png`}
					></img>
					<img
						style={isMobile ? { display: 'flex', width: '50%', height: 250, margin: 10 } : { display: 'flex', width: '20%', height: 400, margin: 10 }}
						src={`${Urls.Audiovisual}1.png`}
					></img>
				</div>
			</div>
		</div>
	)
}

export default AudioVisual
