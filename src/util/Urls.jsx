const { VITE_BASE_URL } = import.meta.env

const baseUrl = VITE_BASE_URL
const imagenes = `${baseUrl}images/`

const Urls = {
	Inicio: `${imagenes}Inicio/`,
	Audiovisual: `${imagenes}Audiovisual/`,
	TresD: `${imagenes}TresD/`,
	Diseño: `${imagenes}Diseño/`,
}

export default Urls
