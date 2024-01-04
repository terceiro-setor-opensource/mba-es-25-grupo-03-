import styled, { css } from 'styled-components/native';
import { Text } from 'react-native';

export const Container = styled.View`
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
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;






