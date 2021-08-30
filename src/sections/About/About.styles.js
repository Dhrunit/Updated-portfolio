import styled from 'styled-components'

export const PageTitle = styled.h1`
	text-align: center;
	color: ${(props) => {
		if (props.darkMode) {
			return 'var(--color-white)'
		}
	}};
	font-family: ObjectSansBold;
	text-decoration: underline;
	margin-bottom: 2rem;
`

export const AboutContainer = styled.div`
	text-align: center;
	margin-top: 1rem;
`

export const AboutSvgImg = styled.img`
	width: 80%;
	margin-left: 5rem;
	margin-top: 1rem;
	@media (max-width: 700px) {
		width: 70%;
		margin-left: 0;
	}
	@media (max-width: 550px) {
		width: 65%;
	}
`
export const GeneralAbout = styled.div`
	text-align: left;
	color: ${(props) => {
		if (props.darkMode) return 'var(--color-white)'
		return '#000'
	}};
	font-size: 18px;
	@media (max-width: 959px) {
		text-align: center;
	}
`
export const ToolsImages = styled.img`
	margin: 0.5rem;
	width: 55px;
	transition: all 0.2s;
	cursor: pointer;
	:hover {
		transform: scale(1.3);
	}
`
