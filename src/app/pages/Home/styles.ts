import styled from 'styled-components/native';
import { Text } from '~/components/Typography/styles';
import LinearGradient from 'react-native-linear-gradient';

interface ItemCursoProps {
	color?: string;
}


export const Container = styled.View`
	flex: 1;
	padding: 0 10px;
    background: ${({ theme }) => theme.colors.appBackground};
`;

export const ContainerHeader = styled.View`
flex: 1;
max-height: 200px;
padding: 0 10px;
background: ${({ theme }) => theme.colors.button};
`;


export const TitleName = styled.Text`
	color: ${({ theme }) => theme.colors.background};
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: 22px;
`;

export const SubTitleName = styled.Text`
	color: ${({ theme }) => theme.colors.background};
	font-size: 14px;
`;

export const ContainerTexto = styled.View`
  flex: 1;
  padding: 20px 5px;
  
`;

export const CardCurso = styled.TouchableOpacity<ItemCursoProps>`
	padding: 5px;
	background-color: ${props => props.color ? props.color : props.theme.colors.cinzaCard};
	height: 120px;
	border-radius: 15px;
	margin: 10px;
	margin-top: -50px;
	
`;

export const ContainerCardCurso = styled.View`
	flex: 1;
`;

export const ContainerCardCursoTexto = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const TextCardCurso = styled.Text`
	margin-left: 10px;
	color: ${({ theme }) => theme.colors.cinza5};
    margin-top: 20px;
	font-size: 14px;
`;

export const TextMeusCursos = styled(Text)`
    color: ${({ theme }) => theme.colors.button};
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: 12px;
	position: absolute;
	/* bottom: 0; */
	right: 0;
	margin: 20px;
`;

export const TextHoras = styled.Text`
	margin-left: 10px;
	margin-top: 4px;
	color: ${({ theme }) => theme.colors.cinza5};
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: 20px;
`;

export const ContainerTempo = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const TextTotalHoras = styled.Text`
    margin-top: 4px;
	margin-left: 5px;
	color: ${({ theme }) => theme.colors.cinza5};
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: 12px;
`;

export const ProgressBarContainer = styled.View`
  width: 100%;
  height: 8px;
  border-radius: 10px;
  overflow: hidden;
`;

export const ProgressBar = styled.View`
  height: 100%;
  width: 70%;

`;


export const StyledLinearGradient = styled(LinearGradient)`
  height: 100%;
`;

export const ContainerScroll = styled.ScrollView.attrs({
	showsVerticalScrollIndicator: false,
})``;

export const ItemCurso = styled.TouchableOpacity<ItemCursoProps>`
	padding: 5px;
	background-color: ${props => props.color ? props.color : ''};
	height: 140px;
	width: 250px;
	border-radius: 15px;
	margin: 10px;
	align-items: center;
	margin-top: 20px;
	justify-content: center;
`;

export const TextFind = styled(Text)`
    color: ${({ theme }) => theme.colors.light};
	font-size: 20px;
	margin-top: 10px;
	/* flex: 1; */
	margin-left: 10px;
	
`;


export const CardMatricula = styled.View`
 background-color: ${({ theme }) => theme.colors.cinzaCard};
 /* padding: 20px; */
 margin: 10px;
 border-radius: 10px;
 flex-direction: row;
 justify-content: space-between;
`;

export const TextMatriculaCurso = styled.Text`
    /*  margin-left: 10px; */
	margin-top: 4px;
	color: ${({ theme }) => theme.colors.light};
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: 12px;
	flex-wrap: wrap;
`;

export const TextMatriculaCarga = styled.Text`
     margin-left: 10px;
	margin-top: 4px;
	color: ${({ theme }) => theme.colors.light};
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: 14px;
	
`;

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




