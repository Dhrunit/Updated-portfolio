import { Container, Grid } from '@material-ui/core'
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.styles.js'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import HomeSvg from '../../assets/svgs/Homesvg.svg'
import {
	ActionButtons,
	AnimateHome,
	HomeSvgImg,
	Subtitle,
	Title,
} from './Home.styles.js'
import { GeneralTypo } from '../../components/Navbar/Navbar.styles'
export default function Home(props) {
	const { darkMode, setDarkMode } = props
	return (
		<Container maxWidth='lg' style={{ padding: '0 3rem' }}>
			<Navbar
				darkMode={darkMode}
				setDarkMode={(flag) => setDarkMode(flag)}
			/>
			<Grid container justifyContent='center' data-aos='fade-left'>
				<Title>
					<GeneralTypo white>Hi there 👋, I am a</GeneralTypo>
					<GeneralTypo primary bold>
						&nbsp;Full Stack
					</GeneralTypo>
					<GeneralTypo secondary bold>
						&nbsp;Software Developer
					</GeneralTypo>
				</Title>
				<Subtitle>
					having an experience of building Web applications with MERN
					Stack and some other cool libraries and frameworks.
				</Subtitle>
			</Grid>
			<Grid container justifyContent='center'>
				<ActionButtons href='#'>
					<AttachFileIcon />
					<p>My Resume</p>
				</ActionButtons>
				<ActionButtons href='#contact'>
					<MailOutlineIcon />
					<p>Contact me</p>
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
