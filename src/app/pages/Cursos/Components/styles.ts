import styled, { css } from 'styled-components/native';
import { Text, Image } from 'react-native';
import { Icon, IconButton } from '~/components';
import { heightPercentageToDP } from '~/utils';

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

export const ImageAvatar = styled.Image`
	width: 200px;
    height: 200px;
    resize: horizontal;
`;


export const Container = styled.View`
	height: ${heightPercentageToDP(80)}px;
	padding: 5px 10px;
	background-color: ${({ theme }) => theme.colors.cinzaCard};
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
`;

export const HeaderClose = styled.View`
	align-items: flex-end;
	justify-content: center;
`;

export const Close = styled(IconButton).attrs(({ theme }) => ({
	colorIcon: theme.colors.cinza2,
}))``;

export const Content = styled.View`
	flex: 1;
	/* align-items: center; */
`;

export const ContainerCategorias = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const ContainerClassificacao = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const ContainerDuracao = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const ContainerSlider = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const ContainerBotoes = styled.View`
	flex-direction: row;
	justify-content: center;
	margin-top: 20px;
`;


export const TextClassificacao = styled.Text`
	margin-left: 5px;
	color: ${({ theme }) => theme.colors.light};
	font-family: ${({ theme }) => theme.fonts.bold};
    margin-top: 20px;
	font-size: 16px;
`;

export const TextDuracao = styled.Text`
	margin-left: 5px;
	color: ${({ theme }) => theme.colors.light};
	font-family: ${({ theme }) => theme.fonts.bold};
    margin-top: 20px;
	font-size: 16px;
`;


export const TextCategorias = styled.Text`
	margin-left: 5px;
	color: ${({ theme }) => theme.colors.light};
	font-family: ${({ theme }) => theme.fonts.bold};
    margin-top: 20px;
	font-size: 16px;
`;

interface OptionCategoriasProps {
	selected?: boolean;
	color?: string;
}

export const OptionCategorias = styled.TouchableOpacity<OptionCategoriasProps>`
	padding: 8px 20px 8px 20px;
	background-color: ${props => props.theme.colors.texto1};
	height: 35px;
	border-radius: 10px;
	margin: 6px;
	align-items: center;
	justify-content: center;

	${props =>
		props.selected &&
		css`
			background-color: ${props.color || props.theme.colors.button};
		`}
`;

export const OptionCategoriasText = styled.Text<OptionCategoriasProps>`
	font-size: 12px;
	color: ${props => props.theme.colors.branco};

	${props =>
		props.selected &&
		css`
			color: ${props.theme.colors.light};
		`}
`;

export const OptionCategoriasContainer = styled.View`
	flex-direction: row;
	flex-wrap: wrap;
	padding: 10px;
`;

export const TextoFilter = styled(Text)`
    color: ${({ theme }) => theme.colors.light};
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: 20px;
	margin-top: 10px;
	text-align: center;
`;

export const ButtonApplyFilters = styled.TouchableOpacity`
	background-color: ${({ theme }) => theme.colors.button};
	height: 50px;
	border-radius: 10px;
	margin: 6px;
	align-items: center;
	justify-content: center;
	width: 250px;
`;

export const ButtonCleanFilters = styled.TouchableOpacity`
	background-color: ${({ theme }) => theme.colors.texto1};
	height: 50px;
	border-radius: 10px;
	margin: 6px;
	align-items: center;
	justify-content: center;
	width: 100px;
`;

export const TextoApplyFilter = styled(Text)`
    color: ${({ theme }) => theme.colors.light};
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: 14px;
	margin-top: 10px;
	text-align: center;
`;

export const TextCleanFilter = styled(Text)`
    color: ${({ theme }) => theme.colors.light};
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: 14px;
	margin-top: 10px;
	text-align: center;
`;

export const TextSlider = styled(Text)`
    color: ${({ theme }) => theme.colors.light};
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: 14px;
	margin-top: 20px;
	text-align: center;

`;

