import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container, ContainerTitle, Title, ButtonIcon, SubTitle} from './styles';

interface HeaderProps {
  title: string;
  leftIcon?: string;
  rightIcon?: string;
  onPressLeftIcon?: () => void;
  colorLeftIcon?: string;
  onPressRightIcon?: () => void;
  colorRightIcon?: string;
  subTitle?: string;
  labelLeftIcon?: string;
  labelRightIcon?: string;
}

export function Header({
  title,
  leftIcon,
  onPressLeftIcon,
  colorLeftIcon,
  rightIcon,
  onPressRightIcon,
  colorRightIcon,
  subTitle,
  labelLeftIcon,
  labelRightIcon,
}: HeaderProps) {
  const {goBack} = useNavigation();

  function handleLeftIcon() {
    if (onPressLeftIcon && typeof onPressLeftIcon === 'function') {
      onPressLeftIcon();
    } else {
      goBack();
    }
  }

  return (
    <Container>
      {!!leftIcon && (
        <ButtonIcon
          name={leftIcon}
          onPress={handleLeftIcon}
          label={labelLeftIcon}
          colorIcon={colorLeftIcon}
        />
      )}

      <ContainerTitle
        alignItem={
          leftIcon
            ? 'center'
            : !leftIcon && !rightIcon
            ? 'center'
            : 'flex-start'
        }>
        <Title>{title}</Title>
        {!!subTitle && <SubTitle>{subTitle}</SubTitle>}
      </ContainerTitle>

      {!!rightIcon && (
        <ButtonIcon
          name={rightIcon}
          onPress={onPressRightIcon}
          colorIcon={colorRightIcon}
          label={labelRightIcon}
        />
      )}
    </Container>
  );
}
