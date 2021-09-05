import styled from 'styled-components';

export const IconContainer = styled.div`
    color: ${(props) => {
		if (props.darkMode) return 'var(--color-white)'
		return '#000'
	}};
`