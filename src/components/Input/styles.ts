import styled, { css } from 'styled-components/native';
import { TextInputProps, Platform } from 'react-native';
import { Typography } from '../Typography';
import { IconButton } from '../IconButton';
import { Icon } from '~/components/Icon';

interface ContentProps {
	isFlex?: boolean;
}

interface ContainerProps {
	isFocused: boolean;
	editable?: boolean;
}

export const Content = styled.View<ContentProps>`
	margin: 10px 5px;

	${({ isFlex }) =>
		isFlex &&
		css`
			flex: 1;
		`}
`;

export const Container = styled.View<ContainerProps>`
	width: 100%;
	height: 50px;
	padding: 0 5px;
	background: ${({ theme }) => theme.colors.input};
	border-radius: 10px;
	flex-direction: row;
	align-items: center;


	${({ isFocused, theme }) =>
		isFocused &&
		css`
		    border-color: ${theme.colors.button};
		    border-width: 2px;
		`}

	${({ editable, theme }) =>
		!editable &&
		css`
			background-color: ${theme.colors.cinza4};
			border-color: ${theme.colors.cinza3};
		`}
`;

export const Label = styled(Typography)`
	text-align: left;
	color: ${({ theme }) => theme.colors.texto1};
	font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Required = styled(Typography).attrs({
	size: 'md',
})`
	color: ${({ theme }) => theme.colors.error};
`;

export const FieldIcon = styled(Icon) <ContainerProps>`
	margin-right: 5px;
	color: ${({ isFocused, theme }) => (isFocused ? theme.colors.secundary : theme.colors.text)};
`;

export const Button = styled(IconButton)`
	margin-left: 5px;
`;

export const TInput = styled.TextInput.attrs(({ theme }) => ({
	placeholderTextColor: theme.colors.text,
})) <TextInputProps>`
	flex: 1;
	width: 100%;
	padding-top: ${() => (Platform.OS === 'android' ? 15 : 0)}px;
	color: ${({ theme }) => theme.colors.light};
	font-size: 14px;
	font-family: ${({ theme }) => theme.fonts.regular};
`;

