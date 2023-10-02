import styled, { css } from 'styled-components/native';
import { Icon as IconComponent } from '~/components/Icon';
import { Typography } from '~/components/Typography';

interface IconProps {
	colorIcon?: string;
	size?: number;
}

export const ContainerButton = styled.TouchableOpacity`
	width: 100%;
	height: 50px;
	background: ${({ theme }) => theme.colors.primary};
	border-radius: 10px;

	justify-content: center;
	align-items: center;
	flex-direction: row;

	${({ disabled }) =>
		disabled &&
		css`
			opacity: 0.5;
		`}
`;

export const ButtonText = styled(Typography).attrs({
	size: 'xl',
})`
	color: ${({ theme }) => theme.colors.light};
	font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Icon = styled(IconComponent) <IconProps>`
	font-size: ${({ size }) => size || 30}px;
	color: ${({ theme }) => theme.colors.light};
	padding: 5px 10px;
	margin-bottom: 3px;
`;
