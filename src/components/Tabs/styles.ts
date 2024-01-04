import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { TabView, TabBar, TabBarItem, TabBarIndicator } from 'react-native-tab-view';
import { Typography } from '../Typography/index';

const { width } = Dimensions.get('window');

interface ContainerProps {
	focused?: boolean;
}

export const TabContainer = styled(TabView).attrs(({ theme }) => ({
	initialLayout: { width },
	sceneContainerStyle: { backgroundColor: theme.colors.appBackground },
}))`
	background-color: ${({ theme }) => theme.colors.appBackground};
`;

export const TabBarContainer = styled(TabBar)`
	background-color: ${({ theme }) => theme.colors.appBackground};
`;

export const TabBarItemContainer = styled(TabBarItem).attrs(({ theme, activeColor, inactiveColor }) => ({
	activeColor: theme.colors.primary,
	inactiveColor: theme.colors.cinza1,
	contentContainerStyle: { color: activeColor || inactiveColor },
	labelStyle: { textAlign: 'center', fontFamily: theme.fonts.regular },
}))`
	background-color: transparent;
	margin: 0 5px;
`;


export const TextTabBar = styled(Typography) <ContainerProps>`
	border-radius: 15px;
	text-align: center;
	background-color: transparent;
	color: ${({ theme }) => theme.colors.branco};
	margin: 0 5px;
	opacity: ${({ focused }) => (focused ? 1 : 0.5)};
`;

export const SubTitleTabBar = styled(Typography).attrs({
	size: 'xs',
}) <ContainerProps>`
	border-radius: 15px;
	text-align: center;
	color: ${({ theme }) => theme.colors.appBackground};
	background-color: transparent;
	margin: 0 1px;
	opacity: ${({ focused }) => (focused ? 1 : 0.5)};
`;
