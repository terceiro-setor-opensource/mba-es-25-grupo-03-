import styled from 'styled-components/native';
import { Icon } from '~/components';

export const Button = styled.TouchableOpacity`
	top: -25px;
	justify-content: center;
	align-items: center;
`;

export const ItemIcon = styled(Icon).attrs(({ theme }) => ({
    color: theme.colors.primary,
}))``;
