import styled from 'styled-components'
import Switch from '@material-ui/core/Switch'
import Drawer from '@material-ui/core/Drawer';

export const StyledBrandImg = styled.img`
	width: 80px;
	margin-left: -10px;
	@media (max-width: 1050px) {
		width: 60px;
	}
`
export const NavContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin-top: 0.5rem;
	@media (max-width: 1050px) {
		font-size: 12px;
	}
`

export const Typoh1 = styled.h1`
	color: ${(props) => {
		if (props.primary) {
			return 'var(--color-primary)'
		} else if (props.secondary) {
			return 'var(--color-secondary)'
		} else if (props.darkMode && props.white) {
			return 'var(--color-white)'
		} else {
			return '#000'
		}
	}};
	font-family: ObjectSansBold;
	margin-right: 0.5rem;
	font-size: 28px;
	@media (max-width: 1050px) {
		font-size: 20px;
	}
	@media (max-width: 960px) {
		font-size: 25px;
	}
	@media (max-width: 450px) {
		width: 80%;
		font-size: 22px;
	}
	@media (max-width: 360px) {
		font-size: 18px;
	}
`
export const Typoh2 = styled.h2`
	color: ${(props) => {
		if (props.primary) {
			return 'var(--color-primary)'
		} else if (props.secondary) {
			return 'var(--color-secondary)'
		} else {
			return 'var(--color-white)'
		}
	}};
`
export const GeneralTypo = styled.span`
	color: ${(props) => {
		if (props.primary && props.darkMode) {
			return 'var(--color-primary)'
		} else if (props.secondary && props.darkMode) {
			return 'var(--color-secondary)'
		} else if (props.white && props.darkMode) {
			return 'var(--color-white)'
		} else if (!props.darkMode && props.primary) {
			return 'var(--color-primary)'
		} else if (!props.darkMode && props.secondary) {
			return 'var(--color-secondary)'
		}
	}};
	font-family: ${(props) => {
		if (props.bold) {
			return 'ObjectSansBold'
		} else {
			return 'ObjectSansRegular'
		}
	}};
`
export const Typoh4 = styled.h4``
export const NavBtn = styled.a`
	p {
		color: ${(props) => {
			if (!props.darkMode) {
				return '#000'
			} else {
				return 'var(--color-white)'
			}
		}};
	}
	:hover {
		background: var(--color-secondary);
		p {
			color: var(--color-primary);
		}
	}
	transition: all 0.2s;
	padding: 0.8rem 1.5rem;
	cursor: pointer;
	text-decoration: none;
	border-radius: 50px;
	margin: 0 1rem;
`

export const ResponsiveNavBtn = styled.a`
	p {
		color: ${(props) => {
			if (!props.darkMode) {
				return '#000'
			} else {
				return 'var(--color-white)'
			}
		}};
		margin: 2rem;
	}
	cursor: pointer;
`

export const ResponsiveNavSection = styled.div`
	background: ${(props) => {
		if (props.darkMode) {
			return 'var(--color-dark-blue)'
		} else {
			return 'var(--color-white)'
		}
	}};
	width: 100%;
	text-align: center;
`

export const ResponsiveDrawer = styled(Drawer)`
	div.MuiDrawer-paper{
		background-color: ${(props) => {
			if (props.darkMode) {
				return 'var(--color-dark-blue)'
			} else {
				return 'var(--color-white)'
			}
		}};
		width: 40%;
	}
`

export const IOSSwitch = styled(Switch)`
	&.MuiSwitch-root {
		padding: 0;
		border-radius: 28px;
		height: 28px;
		margin-left: 1rem;
		@media (max-width: 1050px) {
			height: 20px;
			width: 40px;
		}
		span.MuiSwitch-switchBase.Mui-checked {
			transform: translateX(30px);
			padding: 4px;
			@media (max-width: 1050px) {
				transform: translateX(15px);
				padding: 1px;
			}
		}
		span.MuiSwitch-colorSecondary.Mui-checked {
			color: var(--color-white);
			@media (max-width: 1050px) {
				transform: translateX(18px);
				padding: 2.5px;
			}
		}
		span.MuiSwitch-thumb {
			@media (max-width: 1050px) {
				width: 15px;
				height: 15px;
			}
		}
		span.MuiSwitch-switchBase {
			padding: 4px;
			@media (max-width: 1050px) {
				padding: 2.5px;
			}
		}
		span.MuiSwitch-track {
			background: var(--color-primary);
			opacity: 0.8;
		}
	}
`
