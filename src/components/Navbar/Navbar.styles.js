import styled from 'styled-components'
import Switch from '@material-ui/core/Switch'
export const StyledBrandImg = styled.img`
	width: 80px;
	margin-left: -10px;
`
export const NavContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`

export const Typoh1 = styled.h1`
	color: ${(props) => {
		if (props.primary) {
			return 'var(--color-primary)'
		} else if (props.secondary) {
			return 'var(--color-secondary)'
		} else {
			return 'var(--color-white)'
		}
	}};
	font-family: ObjectSansBold;
	margin-right: 0.5rem;
	font-size: 28px;
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
		if (props.primary) {
			return 'var(--color-primary)'
		} else if (props.secondary) {
			return 'var(--color-secondary)'
		} else {
			return 'var(--color-white)'
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
	/* background: var(--color-secondary); */
	p {
		color: var(--color-white);
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
export const IOSSwitch = styled(Switch)`
	&.MuiSwitch-root {
		padding: 0;
		border-radius: 28px;
		height: 28px;
		margin-left: 1rem;
		span.MuiSwitch-switchBase.Mui-checked {
			transform: translateX(30px);
			padding: 4px;
		}
		span.MuiSwitch-colorSecondary.Mui-checked {
			color: var(--color-white);
		}
		span.MuiSwitch-switchBase {
			padding: 4px;
		}
		span.MuiSwitch-track {
			background: var(--color-primary);
			opacity: 0.8;
		}
	}
`
