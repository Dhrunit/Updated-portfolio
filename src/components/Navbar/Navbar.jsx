import React from 'react'
import './Navbar.styles.js'
import NavBrandSvg from '../../assets/svgs/NavBrandSvg.svg'
import {
	IOSSwitch,
	NavBtn,
	NavContainer,
	StyledBrandImg,
	Typoh1,
} from './Navbar.styles.js'
import { Hidden } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

export default function Navbar(props) {
	return (
		<>
			<NavContainer>
				<Hidden only={['sm', 'xs']}>
					<div
						style={{
							alignItems: 'center',
							display: 'inline-flex',
						}}>
						<Typoh1 white>Dhrunit</Typoh1>
						<Typoh1 secondary>Prajapati</Typoh1>
						<StyledBrandImg src={NavBrandSvg} />
					</div>
					<div style={{ display: 'inline-flex' }}>
						<NavBtn href='#home'>
							<p>Home</p>
						</NavBtn>
						<NavBtn href='#about'>
							<p>About</p>
						</NavBtn>
						<NavBtn href='#skills'>
							<p>Skills</p>
						</NavBtn>
						<NavBtn href='#work'>
							<p>Work</p>
						</NavBtn>
						<NavBtn href='#contact'>
							<p>Contact</p>
						</NavBtn>
					</div>
					<>
						<IOSSwitch
							checked={props.darkMode}
							onChange={(evt) =>
								props.setDarkMode(evt.target.checked)
							}
							name='checkedB'
						/>
					</>
				</Hidden>
			</NavContainer>
			<Hidden only={['xl', 'lg', 'md']}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}>
					<div
						style={{
							alignItems: 'center',
							display: 'inline-flex',
						}}>
						<Typoh1 white>Dhrunit</Typoh1>
						<Typoh1 secondary>Prajapati</Typoh1>
						<StyledBrandImg src={NavBrandSvg} />
					</div>
					<MenuIcon
						style={{ color: '#fff', height: '45px', width: '45px' }}
					/>
				</div>
			</Hidden>
		</>
	)
}