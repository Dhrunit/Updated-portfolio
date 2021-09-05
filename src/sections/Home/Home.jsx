import { Container, Grid, useMediaQuery } from '@material-ui/core'
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.styles.js'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import HomeSvg from '../../assets/svgs/Homesvg-svg.svg'
import Fade from 'react-reveal/Fade'
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
			<Grid container justifyContent='center'>
				<Fade down>
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
				</Fade>
				<Subtitle darkMode={props.darkMode}>
					<Fade down>
						having experience of building Web applications with MERN
						Stack and some other cool libraries and frameworks.
					</Fade>
				</Subtitle>
			</Grid>
			<Grid className='btn_container' container justifyContent='center'>
				<Fade up>
					<ActionButtons target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/1pSggJDBapELUuR5QN-awFV0P92JLjWN4/view?usp=sharing'>
						<AttachFileIcon />
						<p>{isMobile ? 'Resume' : 'My Resume'}</p>
					</ActionButtons>
					<ActionButtons href='#contact'>
						<MailOutlineIcon />
						<p>{isMobile ? 'Contact' : 'Contact me'}</p>
					</ActionButtons>
				</Fade>
			</Grid>
			<Grid>
				<AnimateHome>
					<Fade up>
						<HomeSvgImg src={HomeSvg} />
					</Fade>
				</AnimateHome>
			</Grid>
			<br />
			<br />
			<br />
			<br />
			<br />
		</Container>
	)
}
