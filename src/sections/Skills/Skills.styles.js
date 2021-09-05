import styled  from 'styled-components';

export const GeneralText = styled.p`
	color: ${(props) => {
		if (props.darkMode) return 'var(--color-white)'
		return '#000'
	}};
	font-size: 17px;
`

export const SkillsSvgImage = styled.img`
	width: 45%;
    @media (max-width: 959px) {
        width: 65%;
	}
    @media (max-width: 768px) {
        width: 100%;
	}
`