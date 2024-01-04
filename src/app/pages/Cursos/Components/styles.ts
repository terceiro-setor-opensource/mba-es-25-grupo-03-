import styled, { css } from 'styled-components/native';
import { Text } from 'react-native';
import { Icon } from '~/components';

interface ItemCursoProps {
    color?: string;
}

export const ItemCursoVertical = styled.TouchableOpacity<ItemCursoProps>`
	padding: 5px;
	background-color: ${props => props.color ? props.color : props.theme.colors.cinzaCard};
	height: 120px;
	border-radius: 15px;
	margin: 10px;
	margin-top: 10px;
	
`;

export const ItemCursoVerticalInside = styled.View<ItemCursoProps>`
	background-color: ${props => props.color ? props.color : props.theme.colors.cinza5};
	height: 90px;
	width: 90px;
	border-radius: 10px;
	margin: 10px;
	margin-top: 10px;
`;


export const TextCursoVerticalInside = styled(Text)`
    color: ${({ theme }) => theme.colors.light};
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: 14px;
	margin: 10px;
`;


export const RowFlatList = styled.View`
	flex-direction: row;
	margin: 0 10px;
`;

export const TextHorasVerticalInside = styled(Text)`
    color: ${({ theme }) => theme.colors.laranja};
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: 12px;
	position: absolute;
	bottom: 0;
	right: 0;
	margin: 10px;
`;

export const ContainerCard = styled.View`
	flex: 1;
`;

export const IconeProfessor = styled(Icon)`
   color: ${({ theme }) => theme.colors.cinza5};
   margin-left: 5px;
`;


export const ContainerProfessor = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const TextProfessor = styled.Text`
	margin-left: 5px;
	color: ${({ theme }) => theme.colors.cinza5};
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: 14px;
`;
