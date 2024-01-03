import styled, { css } from 'styled-components/native';
import { Text } from 'react-native';

export const Container = styled.View`
	/* flex: 1; */
	padding: 0 10px;
    background: ${({ theme }) => theme.colors.appBackground};
`;

export const ContainerScrollBottom = styled.ScrollView.attrs({
	contentContainerStyle: { padding: 10 },
	showsVerticalScrollIndicator: false,
})`
 background: ${({ theme }) => theme.colors.appBackground};
`;


export const ContainerScroll = styled.ScrollView.attrs({
	showsVerticalScrollIndicator: false,
})``;

interface ItemCursoProps {
	color?: string;
}

export const ItemCurso = styled.TouchableOpacity<ItemCursoProps>`
	border: 1px solid ${props => props.theme.colors.secundary};
	padding: 5px;
	background-color: ${props => props.color ? props.color : ''};
	height: 120px;
	width: 250px;
	border-radius: 15px;
	margin: 3px;
	align-items: center;
	margin-top: 20px;
	justify-content: center;
`;

export const RowFlatList = styled.View`
	flex-direction: row;
	margin: 0 10px;
`;

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
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-self: center;
	margin-bottom: 60px;
	margin-left: 40px;
`;

export const TextHorasVerticalInside = styled(Text)`
    color: ${({ theme }) => theme.colors.light};
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: 12px;
	/* flex-direction: column; */
	/* justify-content: center; */
	align-items: center;
	align-self: center;
	margin-top: 70px;
	margin-left: 30px;
`;




export const TextCurso = styled(Text)`
    color: ${({ theme }) => theme.colors.light};
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: 20px;
	margin-top: 10px;
`;

interface CursoOpcoesProps {
	selected?: boolean;
	color?: string;
}

export const CursosOpcoes = styled.TouchableOpacity<CursoOpcoesProps>`
	padding: 8px 20px 8px 20px;
	background-color: ${props => props.theme.colors.texto1};
	height: 35px;
	width: 100px;
	border-radius: 40px;
	margin: 6px;
	align-items: center;
	justify-content: center;

	${props =>
		props.selected &&
		css`
			background-color: ${props.color || props.theme.colors.button};
		`}
`;

export const CursosOpcoesText = styled.Text<CursoOpcoesProps>`
	font-size: 14px;
	color: ${props => props.theme.colors.branco};

	${props =>
		props.selected &&
		css`
			color: ${props.theme.colors.light};
		`}
`;


export const ContainerCursosOpcoes = styled.View`
	margin: 15px 0;
	/* flex: 1; */
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

