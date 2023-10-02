import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import { useTheme } from 'styled-components';

interface LoadingProps extends Omit<ActivityIndicatorProps, 'color'> {
	isDark?: boolean;
}

export function Loading({ isDark, size = 'small', ...rest }: LoadingProps) {
	const { colors } = useTheme();

	return <ActivityIndicator size={size} color={isDark ? colors.dark : colors.light} {...rest} />;
}
