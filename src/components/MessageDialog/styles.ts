import styled from 'styled-components/native';
import Lottie from 'lottie-react-native';
import { IconButton } from '~/components/IconButton';
import { Typography } from '~/components/Typography';
import { heightPercentageToDP } from '~/utils';

export const Container = styled.View`
	height: ${heightPercentageToDP(45)}px;
	padding: 5px 10px;
	background-color: ${({ theme }) => theme.colors.button};
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
`;

export const Header = styled.View`
	align-items: flex-end;
	justify-content: center;
`;

export const Close = styled(IconButton).attrs(({ theme }) => ({
	colorIcon: theme.colors.cinza2,
}))``;

export const Content = styled.View`
	flex: 1;
	align-items: center;
`;

export const LottieView = styled(Lottie)`
	height: ${heightPercentageToDP(15)}px;
`;

export const Title = styled(Typography).attrs({
	size: 'lg',
})`
	margin: 10px 5px 0 5px;
	font-family: ${({ theme }) => theme.fonts.semibold};
	color: ${({ theme }) => theme.colors.light};
	text-align: center;
`;

export const Mensagem = styled(Typography).attrs({
	size: 'md',
})`
	margin: 5px;
	color: ${({ theme }) => theme.colors.light};
	text-align: center;
`;
