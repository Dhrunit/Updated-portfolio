import styled from 'styled-components'

export const AnimateHome = styled.div`
	text-align: center;
`
export const HomeSvgImg = styled.img`
	width: 450px;
	height: 450px;
	margin-top: -15px;
`
export const Subtitle = styled.p`
	width: 50%;
	text-align: center;
	color: var(--color-white);
`
export const Title = styled.div`
	width: 100%;
	text-align: center;
	font-size: 26px;
	margin: 1rem;
`
export const ActionButtons = styled.a`
	svg {
		color: var(--color-primary);
	}
	display: flex;
	text-decoration: none;
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
`
