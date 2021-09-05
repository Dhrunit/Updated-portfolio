import styled from 'styled-components'

export const ContactSection = styled.div`
    position: relative;
    background: var(--color-secondary);
    width: 100%;
    padding: 2rem 2rem 2rem 0;
    height: 50%;
`

export const SocialSection = styled.div`
    max-width: 47%;
    margin: 2.5rem 2.5rem;
    @media (max-width: 950px) {
        margin:2.5rem 2.5rem;
        max-width: 100%;
        text-align: center;
	}
    @media (max-width: 500px) {
        margin:1rem auto;
        margin-left: 2.5rem;
	}
    @media (max-width: 320px) {
        margin:1rem 1rem 0 1rem;
	}
`

export const SocialIcon = styled.a`
    display: inline-flex;
    padding: 1rem;
    font-size: 2rem;
    margin-right: 1rem;
    transition: all 0.2s;
    svg{
        color: var(--color-white);
    }
    :hover{
        background: var(--color-primary);
        border-radius: 50%;
        svg{
            color: var(--color-secondary);
        }
    }
    @media (max-width: 515px) {
        font-size: 1.5rem;
        margin-right: 0.5rem;
	}
`


export const ContactImg = styled.img`
    position: absolute;
    width: 300px;
    top: -35%;
    right: 5%;
`

export const ContactTitle = styled.p`
    color: var(--color-white);
    line-height: 25px;
    font-size: 1.1rem;
`

export const TitleSection = styled.div`
    max-width:47%;
    margin:0 3.5rem;
    @media (max-width: 950px) {
        margin:0 auto;
        margin-left: 2rem;
        max-width: 90%;
        text-align: center;
	}
`

export const FooterText = styled.div`
    color: var(--color-white);
    text-align: center;
    @media (max-width: 500px) {
        margin-left: 2rem;
	}
`
