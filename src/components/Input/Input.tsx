import React, { forwardRef, useState, useCallback, ReactElement } from 'react';
import { TextInputProps, GestureResponderEvent } from 'react-native';



import { Content, Container, TInput, Label, Required, FieldIcon, Button } from './styles';

export interface InputProps extends TextInputProps {
	label?: string;
	leftIcon?: string;
	rightIcon?: string;
	onPressRightIcon?: ((event: GestureResponderEvent) => void) | undefined;
	required?: boolean;
	isFlex?: boolean;
	messageError?: string;
	rightIconSize?: number;
	editable?: boolean;
}

export const TextInput = forwardRef<ReactElement, InputProps>((props, ref: any) => {
	const {
		label,
		leftIcon,
		rightIcon,
		onPressRightIcon,
		required,
		isFlex,
		messageError,
		rightIconSize = 25,
		editable = true,
		...rest
	} = props;
	const [isFocused, setIsFocused] = useState(false);

	const handleInputFocus = useCallback(() => {
		setIsFocused(true);
	}, []);

	const handleInputBlur = useCallback(() => {
		setIsFocused(false);
	}, []);

	return (
		<Content isFlex={!!isFlex}>
			{!!label && (
				<Label>
					{required && <Required>*</Required>}
					{label}
				</Label>
			)}

			<Container isFocused={isFocused} editable={editable}>
				{leftIcon && <FieldIcon size={25} name={leftIcon} isFocused={isFocused} />}

				<TInput
					ref={ref}
					onFocus={handleInputFocus}
					onBlur={handleInputBlur}
					autoCapitalize="none"
					autoCorrect={false}
					editable={editable}
					{...rest}
				/>

				{rightIcon && <Button name={rightIcon} onPress={onPressRightIcon} size={rightIconSize} />}
			</Container>

		{/* 	<FieldMessage message={messageError} /> */}
		</Content>
	);
});
