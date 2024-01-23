import React from 'react';
import {GestureResponderEvent} from 'react-native';

import {Loading} from '../Loading';
import {Container, Icon, Label} from './styles';

interface IconButtonProps {
  name: string;
  colorButton?: string;
  colorIcon?: string;
  size?: number;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  loading?: boolean;
  label?: string;
}

export function IconButton({
  colorButton,
  colorIcon,
  name,
  size,
  onPress,
  loading,
  label,
  ...rest
}: IconButtonProps) {
  return (
    <Container
      disabled={loading}
      colorButton={colorButton}
      {...rest}
      onPress={onPress}>
      {loading ? (
        <Loading size="large" />
      ) : (
        <Icon name={name} colorIcon={'#FFFF'} size={size} />
      )}

      {!loading && !!label && <Label>{label}</Label>}
    </Container>
  );
}
