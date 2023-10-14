import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	padding: 0 10px;
    background: ${({ theme }) => theme.colors.appBackground};
`;