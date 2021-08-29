import styled from 'styled-components'

export const AppContainer = styled.body`
	background: ${(props) => {
		if (props.darkMode) {
			return `var(--color-dark-blue)`
		} else {
			return `var(--color-white)`
		}
	}};
	width: 100vw;
	height: 100vh;
	overflow-x: hidden;
`
