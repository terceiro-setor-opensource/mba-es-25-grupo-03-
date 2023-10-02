import React from 'react';
import { TextProps } from 'react-native';

import { Text, TTextProps } from './styles';

interface TypographyProps extends TextProps, TTextProps {}

export function Typography({ size = 'sm', children, ...rest }: TypographyProps) {
	return (
		<Text size={size} {...rest}>
			{children}
		</Text>
	);
}
