import styled, { css } from 'styled-components/native';
import { Icon as IconComponent } from '../Icon';
import { Typography } from '../Typography';

interface ContainerProps {
	colorButton?: string;
}

interface IconProps {
	colorIcon?: string;
	size?: number;
}

export const Container = styled.TouchableOpacity.attrs({
	hitSlop: { top: 15, bottom: 15, left: 15, right: 15 },
})<ContainerProps>`
	border-radius: 10px;
	padding: 5px;

	${({ colorButton }) =>
		colorButton &&
		css`
			background-color: ${colorButton};
		`}

	align-items: center;
	justify-content: center;

	${({ disabled }) =>
		disabled &&
		css`
			opacity: 0.5;
		`}
`;

export const Icon = styled(IconComponent)<IconProps>`
	font-size: ${({ size }) => size || 25}px;

	${({ colorIcon }) =>
		colorIcon &&
		css`
			color: ${colorIcon};
		`}
`;

export const Label = styled(Typography).attrs({
	size: 'xxs',
})``;
