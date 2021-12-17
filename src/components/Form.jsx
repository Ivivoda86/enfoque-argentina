import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

export const BasicButtons = () => {
	return (
		<Stack spacing={2} direction="row">
			<Button type="submit" variant="contained">
				Enviar
			</Button>
		</Stack>
	)
}

const Form = ({ tituloBoton }) => {
	const [value, setValue] = React.useState()

	const handleChange = (event) => {
		setValue(event.target.value)
	}

	return (
		<div>
			<Box
				component="form"
				sx={{
					'& .MuiTextField-root': { m: 1, width: '25ch' },
				}}
				noValidate
				autoComplete="off"
			>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<TextField id="nombre" label="Nombre y Apellido" multiline maxRows={10} value={value} />
					<TextField id="telefono" label="Teléfono" multiline maxRows={10} value={value} />
					<TextField id="mail" label="Mail" maxRows={10} value={value} />
					<TextField id="consulta" label="Consulta" multiline maxRows={30} value={value} />
				</div>
				<div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
					<BasicButtons></BasicButtons>
				</div>
			</Box>
		</div>
	)
}
export default Form
