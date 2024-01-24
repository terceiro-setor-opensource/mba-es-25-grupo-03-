import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	padding: 0 10px;
    background: ${({ theme }) => theme.colors.appBackground};
`;

export const Card = styled.View`
	background-color: ${props => props.theme.colors.appBackground};
	border-radius: 15px;
	padding: 5px 10px;
	margin: 10px 0;
`;


export const Row = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin: 0 5px;
`;

export const TextoIcon = styled.Text`
	font-size: 16px;
	font-family: 'Poppins-Regular';
	flex: 1;
	color: ${props => props.theme.colors.branco}
`;



