import React from 'react'
import { Pagination, PaginationItem } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import styles from './styles.module.css'

const theme = createTheme({
	palette: {
		primary: {
			main: '#DFFF4F',
			backgroundColor: 'rgb(223 255 79)'
		}
	}
})

function Paginat({ item }) {
	return (
		<ThemeProvider theme={theme}>
			<div className={styles.wrapper}>
				<Pagination count={10} color='primary' showFirstButton showLastButton />
			</div>
		</ThemeProvider>
	)
}

export default Paginat
