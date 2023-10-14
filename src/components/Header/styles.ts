import styled from 'styled-components/native';
import { IconButton } from '~/components/IconButton';
import { Typography } from '~/components/Typography';

interface IconProps {
    alignItem: string;
}

export const Container = styled.View`
	background: ${({ theme }) => theme.colors.appBackground};
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding: 10px;
	min-height: 80px;
	width: 100%;
`;


export const ContainerTitle = styled.View<IconProps>`
	flex: 1;
	align-items: ${({ alignItem }) => alignItem};
	justify-content: ${({ alignItem }) => alignItem};
`;

export const Title = styled(Typography).attrs({
    size: 'xxl',
})`
	color: ${({ theme }) => theme.colors.background};
	font-family: ${({ theme }) => theme.fonts.bold};
`;

export const SubTitle = styled(Typography)`
	color: ${({ theme }) => theme.colors.background};
	font-family: ${({ theme }) => theme.fonts.bold};
`;

export const ButtonIcon = styled(IconButton).attrs(({ theme, colorIcon }) => ({
    colorButton: theme.colors.light,
    colorIcon: colorIcon || theme.colors.secundary,
}))``;