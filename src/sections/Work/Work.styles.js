import styled from 'styled-components';

export const SkillsBoxPrimary = styled.div`
    border: 2px solid var(--color-primary);
    border-radius: 5px;
    color: var(--color-primary);
    padding: 1rem;
    transition: all 0.2s;
    :hover{
        background: var(--color-primary);
        color: var(--color-white)
    }
`

export const SkillsBoxSecondary = styled.div`
    border: 2px solid var(--color-secondary);
    border-radius: 5px;
    color: var(--color-secondary);
    padding: 1rem;
    transition: all 0.2s;
    :hover{
        background: var(--color-secondary);
        color: var(--color-white)
    }
`

export const TitleDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    svg{
        position: absolute;
        left: 0;
        font-size: 1.5rem;
    }
    span{
        text-decoration: underline;
        font-family: ObjectSansBold;
    }
`
export const SubTitleDiv = styled.div`
    font-size: 13px;
    padding: 1rem;
`

export const WorkActionButton = styled.a`
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
`