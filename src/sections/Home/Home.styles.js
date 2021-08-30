import styled from 'styled-components'

export const AnimateHome = styled.div`
	text-align: center;
`
export const HomeSvgImg = styled.img`
	width: 450px;
	height: 450px;
	margin-top: -15px;
	@media (max-width: 500px) {
		width: 350px;
	}
	@media (max-width: 420px) {
		width: 300px;
	}
	@media (max-width: 400px) {
		width: 280px;
	}
	@media (max-width: 350px) {
		width: 240px;
	}
`
export const Subtitle = styled.p`
	width: 50%;
	text-align: center;
	color: ${(props) => {
		if (!props.darkMode) {
			return '#000'
		} else {
			return 'var(--color-white)'
		}
	}};
	line-height: 1.75rem;
	margin-bottom: 1rem;
	@media (max-width: 768px) {
		width: 80%;
		font-size: 14px;
		line-height: 1.5rem;
	}
`
export const Title = styled.div`
	width: 100%;
	text-align: center;
	font-size: 26px;
	margin: 2rem 1rem 1rem 0;
	@media (max-width: 960px) {
		font-size: 20px;
	}
`
export const ActionButtons = styled.a`
	svg {
		color: var(--color-primary);
		@media (max-width: 470px) {
		}
	}
	display: flex;
	text-decoration: none;
	text-align: center;
	align-items: center;
	border: 1.5px solid var(--color-primary);
	padding: 10px 1rem;
	border-radius: 50px;
	margin: 15px 1rem;
	cursor: pointer;

	p {
		cursor: pointer;
		margin: 0 10px;
		color: var(--color-primary);
		font-size: 13px;
		@media (max-width: 470px) {
			font-size: 10px;
		}
	}
	:hover {
		border: 1.5px solid var(--color-primary);
		background: var(--color-primary);
		p {
			margin: 0 10px;
			color: var(--color-white);
		}
		svg {
			color: var(--color-white);
		}
	}
	transition: all 0.2s;
	@media (max-width: 470px) {
		padding: 10px 8px;
	}
	@media (max-width: 380px) {
		padding: 8px 8px;
	}
`
