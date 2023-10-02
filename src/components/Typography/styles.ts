import styled, { css } from 'styled-components/native';

export interface TTextProps {
	size?: 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
}

export const Text = styled.Text<TTextProps>`
	font-family: 'Poppins-SemiBold';
	color:  ${({ theme }) => theme.colors.text};

	${({ size }) =>
		size === 'xxxs' &&
		css`
			font-size: 8px;
		`}

	${({ size }) =>
		size === 'xxs' &&
		css`
			font-size: 10px;
		`}

	${({ size }) =>
		size === 'xs' &&
		css`
			font-size: 12px;
		`}

	${({ size }) =>
		size === 'sm' &&
		css`
			font-size: 14px;
		`}

    ${({ size }) =>
		size === 'md' &&
		css`
			font-size: 16px;
		`}

    ${({ size }) =>
		size === 'lg' &&
		css`
			font-size: 18px;
		`}

    ${({ size }) =>
		size === 'xl' &&
		css`
			font-size: 20px;
		`}

	${({ size }) =>
		size === 'xxl' &&
		css`
			font-size: 22px;
		`}

	${({ size }) =>
		size === 'xxxl' &&
		css`
			font-size: 24px;
		`}
`;
