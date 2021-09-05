import React from 'react'
import { Grid, Hidden, Tooltip } from '@material-ui/core'
import Fade from 'react-reveal/Fade'
import AboutSvg from '../../assets/svgs/About.svg'
import Vscode from '../../assets/svgs/vsCode.svg'
import Figma from '../../assets/svgs/Figma.svg'
import Javascript from '../../assets/svgs/javascript.svg'

import {
	AboutContainer,
	AboutSvgImg,
	BorderPrimary,
	GeneralAbout,
	PageTitle,
	ToolsImages,
} from './About.styles'
import { GeneralTypo } from '../../components/Navbar/Navbar.styles'

export default function About(props) {
	return (
		<AboutContainer container id="about">
			<Fade down>
				<PageTitle darkMode={props.darkMode}>About Me</PageTitle>
			</Fade>
			<Grid container alignItems={'center'}>
				<Grid item lg={6} xl={6} md={6} sm={12} sx={12}>
					<Fade left>
						<AboutSvgImg src={AboutSvg} alt='About image' />
					</Fade>
				</Grid>
				<Grid item lg={6} xl={6} md={6} sm={12} sx={12}>
					<Fade right>
						<Hidden only={['sm', 'xs']}>
							<div style={{ width: '75%', marginLeft: '2rem' }}>
								<GeneralAbout darkMode={props.darkMode}>
									Hi there my name is{' '}
									<GeneralTypo
										style={{ fontSize: '22px' }}
										secondary
										bold
										darkMode={props.darkMode}>
										Dhrunit Prajapati.
									</GeneralTypo>
								</GeneralAbout>
								<br />
								<GeneralAbout darkMode={props.darkMode}>
									I am a{' '}
									<GeneralTypo
										style={{ fontSize: '22px' }}
										primary
										bold
										darkMode={props.darkMode}>
										Full Stack web developer{' '}
									</GeneralTypo>
									living in Ahmedabad, Gujarat having 8 months
									of Web development experience in total.
								</GeneralAbout>
								<br />
								<GeneralAbout darkMode={props.darkMode}>
									I completed my bachelors in Computer
									Engineering in 2021 from Silver oak college
									of engineering and technology.
								</GeneralAbout>
								<br />
								<GeneralAbout darkMode={props.darkMode}>
									Apart from web development I like UI/UX
									designing as well.
								</GeneralAbout>
							</div>
							<div
								style={{
									border: '1px solid var(--color-primary)',
									width: '65%',
									margin: '1rem 2rem',
								}}></div>
							<div
								style={{
									textAlign: 'left',
									marginLeft: '2rem',
								}}>
								<GeneralTypo
									style={{
										fontSize: '22px',
										textAlign: 'left',
									}}
									secondary
									bold
									darkMode={props.darkMode}>
									Languages/Softwares I love
								</GeneralTypo>
							</div>
							<div
								style={{
									textAlign: 'left',
									margin: '1rem 2rem',
								}}>
								<Tooltip title='Vs Code'>
									<ToolsImages src={Vscode} />
								</Tooltip>
								<Tooltip title='Figma'>
									<ToolsImages src={Figma} />
								</Tooltip>
								<Tooltip title='JavaScript'>
									<ToolsImages src={Javascript} />
								</Tooltip>
							</div>
						</Hidden>

						<Hidden only={['lg', 'xl', 'md']}>
							<div style={{ width: '100%', padding: '2rem' }}>
								<GeneralAbout darkMode={props.darkMode}>
									Hi there my name is{' '}
									<GeneralTypo
										style={{ fontSize: '22px' }}
										secondary
										bold
										darkMode={props.darkMode}>
										Dhrunit Prajapati.
									</GeneralTypo>
								</GeneralAbout>
								<br />
								<GeneralAbout darkMode={props.darkMode}>
									I am a{' '}
									<GeneralTypo
										style={{ fontSize: '22px' }}
										primary
										bold
										darkMode={props.darkMode}>
										Full Stack web developer{' '}
									</GeneralTypo>
									living in Ahmedabad, Gujarat having 8 months
									of Web development experience in total.
								</GeneralAbout>
								<br />
								<GeneralAbout darkMode={props.darkMode}>
									I completed my bachelors in Computer
									Engineering in 2021 from Silver oak college
									of engineering and technology.
								</GeneralAbout>
								<br />
								<GeneralAbout darkMode={props.darkMode}>
									Apart from web development I like UI/UX
									designing as well.
								</GeneralAbout>
							</div>
							<BorderPrimary
								className='border-primary'
								></BorderPrimary>
							<div
								style={{
									textAlign: 'center',
									marginLeft: '2rem',
								}}>
								<GeneralTypo
									style={{
										fontSize: '22px',
									}}
									secondary
									bold
									darkMode={props.darkMode}>
									Languages/Softwares I love
								</GeneralTypo>
							</div>
							<div
								style={{
									textAlign: 'center',
									margin: '1rem 2rem',
								}}>
								<Tooltip title='Vs Code'>
									<ToolsImages src={Vscode} />
								</Tooltip>
								<Tooltip title='Figma'>
									<ToolsImages src={Figma} />
								</Tooltip>
								<Tooltip title='JavaScript'>
									<ToolsImages src={Javascript} />
								</Tooltip>
							</div>
						</Hidden>
					</Fade>
				</Grid>
			</Grid>
			<br />
			<br />
			<br />
			<br />
			<br />
		</AboutContainer>
	)
}
