import React from 'react';
import {ButtonProps} from 'react-native';

import {Loading} from '~/components/Loading';

import {ContainerButton, ButtonText, Icon} from './styles';

interface IButtonProps extends Omit<ButtonProps, 'title'> {
  children: string;
  loading?: boolean;
  iconSize?: number;
  leftIcon?: string;
  rightIcon?: string;
}

export function Button({
  children,
  loading = false,
  iconSize,
  leftIcon,
  rightIcon,
  disabled,
  ...rest
}: IButtonProps) {
  return (
    <ContainerButton disabled={loading || disabled} {...rest}>
      {loading ? (
        <Loading size="large" />
      ) : (
        <>
          {leftIcon && <Icon name={leftIcon} size={iconSize} />}

          <ButtonText>{children}</ButtonText>

          {rightIcon && <Icon name={rightIcon} size={iconSize} />}
        </>
      )}
    </ContainerButton>
  );
}
