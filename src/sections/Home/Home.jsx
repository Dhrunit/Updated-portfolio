import { Container, Grid, useMediaQuery } from '@material-ui/core'
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.styles.js'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import HomeSvg from '../../assets/svgs/Homesvg-svg.svg'
import {
	ActionButtons,
	AnimateHome,
	HomeSvgImg,
	Subtitle,
	Title,
} from './Home.styles.js'
import { GeneralTypo } from '../../components/Navbar/Navbar.styles'
export default function Home(props) {
	const isMobile = useMediaQuery('(max-width:400px)')
	const { darkMode, setDarkMode } = props
	return (
		<Container maxWidth='lg' style={{ padding: '0 3rem' }}>
			<Navbar
				darkMode={darkMode}
				setDarkMode={(flag) => setDarkMode(flag)}
			/>
			<Grid container justifyContent='center' data-aos='fade-left'>
				<Title>
					<GeneralTypo white darkMode={props.darkMode}>
						Hi there 👋, I am a
					</GeneralTypo>
					<GeneralTypo primary bold darkMode={props.darkMode}>
						&nbsp;Full Stack
					</GeneralTypo>
					<GeneralTypo secondary bold darkMode={props.darkMode}>
						&nbsp;Software Developer
					</GeneralTypo>
				</Title>
				<Subtitle darkMode={props.darkMode}>
					having experience of building Web applications with MERN
					Stack and some other cool libraries and frameworks.
				</Subtitle>
			</Grid>
			<Grid className='btn_container' container justifyContent='center'>
				<ActionButtons href='#'>
					<AttachFileIcon />
					<p>{isMobile ? 'Resume' : 'My Resume'}</p>
				</ActionButtons>
				<ActionButtons href='#contact'>
					<MailOutlineIcon />
					<p>{isMobile ? 'Contact' : 'Contact me'}</p>
				</ActionButtons>
			</Grid>
			<Grid>
				<AnimateHome data-aos='fade-up'>
					<HomeSvgImg src={HomeSvg} />
				</AnimateHome>
			</Grid>
		</Container>
	)
}
