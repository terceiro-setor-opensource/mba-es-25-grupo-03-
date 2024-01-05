import styled from 'styled-components/native';
import { Text } from 'react-native';
import { Icon } from '~/components';

interface ItemCursoProps {
    color?: string;
}


export const ItemCursoVertical = styled.TouchableOpacity<ItemCursoProps>`
	padding: 5px;
	background-color: ${props => props.color ? props.color : props.theme.colors.cinzaCard};
	border-radius: 15px;
	margin: 10px;
	margin-top: 10px;
	
`;

export const RowFlatList = styled.View`
	flex-direction: row;
	margin: 0 10px;
`;

export const ItemCursoVerticalInside = styled.View<ItemCursoProps>`
	background-color: ${props => props.color ? props.color : props.theme.colors.azulCiano};
	height: 60px;
	width: 60px;
	border-radius: 15px;
	margin: 10px;
	margin-top: 10px;
`;

export const ItemNotificacao = styled.View<ItemCursoProps>`
	background-color: ${props => props.color ? props.color : props.theme.colors.branco};
	height: 60px;
	width: 60px;
	border-radius: 15px;
	margin: 10px;
	margin-top: 10px;
    justify-content: center;
    align-items: center;
`;

export const ItemNotificacaoIcon = styled(Icon)``;


export const MessageContainer = styled.View`
    margin-left: 20px;
`;

export const LoadingContainer = styled.View`
    margin-top: 50px;
`;

export const MessageText = styled(Text)`
color: ${({ theme }) => theme.colors.light};
font-family: ${({ theme }) => theme.fonts.bold};
font-size: 14px;
margin: 10px;
`;

export const ContainerCard = styled.View`
	flex: 1;
`;

export const ContainerProfessor = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const TextProfessor = styled.Text`
	margin-left: 5px;
	color: ${({ theme }) => theme.colors.cinza5};
	font-family: ${({ theme }) => theme.fonts.bold};
    margin-top: 20px;
	font-size: 14px;
`;

export const TextNotificacao = styled.Text`
	margin-left: 5px;
	color: ${({ theme }) => theme.colors.cinza5};
	font-family: ${({ theme }) => theme.fonts.bold};
    margin-top: 20px;
	font-size: 12px;
`;

export const TextHorasVerticalInside = styled(Text)`
    color: ${({ theme }) => theme.colors.laranja};
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: 12px;
	position: absolute;
	/* bottom: 0; */
	right: 0;
	margin: 10px;
`;



