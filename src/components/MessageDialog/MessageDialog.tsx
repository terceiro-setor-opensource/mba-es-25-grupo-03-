import React from 'react';
import RNModal from 'react-native-modal';
import {useMessageDialog, IMessage as IMessageProps} from './useMessageDialog';
import {
  Container,
  Header,
  Close,
  Content,
  LottieView,
  Title,
  Mensagem,
} from './styles';

export interface IMessage extends IMessageProps {}

export function MessageDialog() {
  const {isVisible, message, messageSource, handleClose} = useMessageDialog();

  return (
    <RNModal
      isVisible={isVisible}
      swipeDirection={['down']}
      onBackButtonPress={handleClose}
      onBackdropPress={handleClose}
      onSwipeComplete={handleClose}
      style={{justifyContent: 'flex-end', margin: 0}}>
      <Container>
        <Header>
          <Close name="close" onPress={handleClose} />
        </Header>

        <Content>
          {!!messageSource && (
            <LottieView
              source={messageSource}
              autoPlay
              /* autoSize */
              loop={false}
              resizeMode="contain"
            />
          )}

          {!!message.title && <Title>{message.title}</Title>}

          {!!message.description && <Mensagem>{message.description}</Mensagem>}
        </Content>
      </Container>
    </RNModal>
  );
}
