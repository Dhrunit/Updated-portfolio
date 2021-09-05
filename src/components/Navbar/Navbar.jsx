import React, { useState } from 'react'
import './Navbar.styles.js'
import NavBrandSvg from '../../assets/svgs/NavBrandSvg.svg'
import {
	IOSSwitch,
	NavBtn,
	NavContainer,
	ResponsiveDrawer,
	ResponsiveNavBtn,
	ResponsiveNavSection,
	StyledBrandImg,
	Typoh1,
} from './Navbar.styles.js'
import { Hidden } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer';
import Collapse from '@material-ui/core/Collapse';

export default function Navbar(props) {
	const [openDrawer, setDrawer] = useState(false)
	return (
		<>
			<NavContainer>
				<Hidden only={['sm', 'xs']}>
					<div
						style={{
							alignItems: 'center',
							display: 'inline-flex',
						}}>
						<Typoh1 darkMode={props.darkMode} white>
							Dhrunit
						</Typoh1>
						<Typoh1 secondary>Prajapati</Typoh1>
						<StyledBrandImg src={NavBrandSvg} />
					</div>
					<div style={{ display: 'inline-flex' }}>
						<NavBtn href='#home' darkMode={props.darkMode}>
							<p>Home</p>
						</NavBtn>
						<NavBtn href='#about' darkMode={props.darkMode}>
							<p>About</p>
						</NavBtn>
						<NavBtn href='#skills' darkMode={props.darkMode}>
							<p>Skills</p>
						</NavBtn>
						<NavBtn href='#work' darkMode={props.darkMode}>
							<p>Work</p>
						</NavBtn>
						<NavBtn href='#contact' darkMode={props.darkMode}>
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
						<Typoh1 darkMode={props.darkMode} white>
							Dhrunit
						</Typoh1>
						<Typoh1 secondary>Prajapati</Typoh1>
						<StyledBrandImg src={NavBrandSvg} />
					</div>
					<MenuIcon
						className='MenuIcon'
						style={{
							color: props.darkMode ? '#fff' : '#000',
							height: '35px',
							width: '35px',
							cursor: 'pointer'
						}}
						onClick={()=>setDrawer(!openDrawer)}
					/>
				</div>
				{/* <ResponsiveDrawer darkMode={props.darkMode} anchor={'right'} open={openDrawer} onClose={()=>setDrawer(false)}>
					<div style={{textAlign:'center'}}>
						<ResponsiveNavBtn href='#home' darkMode={props.darkMode}>
							<p>Home</p>
						</ResponsiveNavBtn>
						<ResponsiveNavBtn href='#about' darkMode={props.darkMode}>
							<p>About</p>
						</ResponsiveNavBtn>
						<ResponsiveNavBtn href='#skills' darkMode={props.darkMode}>
							<p>Skills</p>
						</ResponsiveNavBtn>
						<ResponsiveNavBtn href='#work' darkMode={props.darkMode}>
							<p>Work</p>
						</ResponsiveNavBtn>
						<ResponsiveNavBtn href='#contact' darkMode={props.darkMode}>
							<p>Contact</p>
						</ResponsiveNavBtn>
						<div>
							<IOSSwitch
								checked={props.darkMode}
								onChange={(evt) =>
									props.setDarkMode(evt.target.checked)
								}
								name='checkedB'
							/>
						</div>
					</div>
				</ResponsiveDrawer> */}
				<Collapse in={openDrawer}>
					<ResponsiveNavSection darkMode={props.darkMode}>
						<>
							<ResponsiveNavBtn href='#home' darkMode={props.darkMode}>
								<p>Home</p>
							</ResponsiveNavBtn>
							<ResponsiveNavBtn href='#about' darkMode={props.darkMode}>
								<p>About</p>
							</ResponsiveNavBtn>
							<ResponsiveNavBtn href='#skills' darkMode={props.darkMode}>
								<p>Skills</p>
							</ResponsiveNavBtn>
							<ResponsiveNavBtn href='#work' darkMode={props.darkMode}>
								<p>Work</p>
							</ResponsiveNavBtn>
							<ResponsiveNavBtn href='#contact' darkMode={props.darkMode}>
								<p>Contact</p>
							</ResponsiveNavBtn>
							<div>
								<IOSSwitch
									checked={props.darkMode}
									onChange={(evt) =>
										props.setDarkMode(evt.target.checked)
									}
									name='checkedB'
								/>
							</div>
						</>
					</ResponsiveNavSection>
				</Collapse>
			</Hidden>
		</>
	)
}
