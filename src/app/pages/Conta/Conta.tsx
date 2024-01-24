import {AreaView, Header, IconButton} from '~/components';
import {Container, Card, Row, TextoIcon} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Alert} from 'react-native';
import {useAuth} from '~/app/hooks';

export function Conta() {
  const {onLogout} = useAuth();

  const onBackPress = () => {
    Alert.alert(
      'Sair',
      'Tem certeza que deseja sair?',
      [
        {text: 'Não', onPress: () => {}, style: 'cancel'},
        {
          text: 'Sim',
          onPress: () => onLogout(),
        },
      ],
      {cancelable: false},
    );

    return true;
  };

  return (
    <>
      <AreaView>
        <Header title="Conta"></Header>
        <Container>
          <Card>
            <TouchableOpacity>
              <Row>
                <TextoIcon>Sair</TextoIcon>
                <IconButton
                  name="chevron-right"
                  size={25}
                  onPress={() => onBackPress()}
                />
              </Row>
            </TouchableOpacity>
          </Card>
        </Container>
      </AreaView>
    </>
  );
}
