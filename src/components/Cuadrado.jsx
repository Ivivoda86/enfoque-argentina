import React from 'react'
import { useResponsive } from '../hooks/useWindowSize'

const Cuadrado = (props) => {
	const { imagen1, imagen2, imagen3, imagen4 } = props
	const imagenes1 = [imagen1, imagen2]
	const imagenes2 = [imagen3, imagen4]
	const isMobile = useResponsive()
	return (
		<div
			style={
				isMobile
					? {
							display: 'flex',
							flexDirection: 'column',
							height: 400,
					  }
					: {
							display: 'flex',
							flexDirection: 'column',
							height: 600,
							marginLeft: '25%',
					  }
			}
		>
			<div style={isMobile ? { display: 'flex', height: '100%', justifyContent: 'center' } : { display: 'flex', height: '100%', width: '60%' }}>
				{imagenes1.map((item) => {
					return <img style={isMobile ? { width: '120px', height: '120px', margin:10 } : { margin: 10, width: 500, height: 250 }} src={item} />
				})}
				{/* <img style={{ margin: 10, width: 500, height: 250 }} src={imagen1} />
        <img
          style={{ margin: 10, width: 500, height: 250 }}
          src={imagen2}
        ></img> */}
			</div>

			<div style={isMobile ? { display: 'flex', height: '100%', justifyContent: 'center' } : { display: 'flex', height: '100%', width: '60%' }}>
				{imagenes2.map((item) => {
					return <img style={isMobile ? { width: '120px', height: '120px', margin:10 } : { margin: 10, width: 500, height: 250 }} src={item} />
				})}
				{/* <img
          style={{ margin: 10, width: 500, height: 250 }}
          src={imagen3}
        ></img>
        <img
          style={{ margin: 10, width: 500, height: 250 }}
          src={imagen4}
        ></img> */}
			</div>
		</div>
	)
}

export default Cuadrado
