import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { Button, TextInput } from '~/components';
import { Text } from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
	enabled: Platform.OS === 'ios',
	behavior: 'padding',
})`
	flex: 1;
	justify-content: center;
	align-items: center;

	padding: 0 20px;
	background: ${({ theme }) => theme.colors.appBackground};
`;

export const ButtonSubmit = styled(Button)`
	width: 100%;
	margin: 10px 20px;
	border-radius: 15px;
	margin-top: 12px;
	background: ${({ theme }) => theme.colors.button};
`;

export const TextInputStyle = styled(TextInput)`
	
`;

export const TextStyle = styled(Text)`
    color: ${({ theme }) => theme.colors.light};
	font-family: ${({ theme }) => theme.fonts.regular};
	display: flex;
	align-items: flex-end;
	padding-left: 200px;
	font-size: 14px;
`;

export const TextCadastroStyle = styled(Text)`
    color: ${({ theme }) => theme.colors.light};
	font-family: ${({ theme }) => theme.fonts.regular};
	display: flex;
	align-items: center;
	margin-top: 10px;
	font-size: 14px;
`;

export const TextEntrarStyle = styled(Text)`
    color: ${({ theme }) => theme.colors.light};
	font-family: ${({ theme }) => theme.fonts.bold};
	display: flex;
	align-items: flex-end;
	padding-right: 240px;
	font-size: 40px;
	margin-bottom: 50px;
`;


