import React, {ReactNode} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Container} from './styles';

interface IAreaViewProps {
  children: ReactNode;
}

export function AreaView({children}: IAreaViewProps) {
  return <Container>{children}</Container>;
}

export function AreaProvider({children}: IAreaViewProps) {
  return <SafeAreaProvider>{children}</SafeAreaProvider>;
}
