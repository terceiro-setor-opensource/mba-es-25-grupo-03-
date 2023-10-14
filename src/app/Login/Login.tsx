import {useState} from 'react';
import {AreaView} from '~/components';
import {
  Container,
  ButtonSubmit,
  TextInputStyle,
  TextStyle,
  TextEntrarStyle,
  TextCadastroStyle,
} from './styles';
import {useAuth} from '~/app/hooks';
import {showMessage} from '~/utils/message';
import {validarEmail} from '~/utils';

interface ILogin {
  email: string;
  senha: string;
}

export function Login() {
  const [dadosLogin, setDadosLogin] = useState<ILogin>({} as ILogin);
  const [loading, setLoading] = useState<boolean>(false);
  const {onAddAuth} = useAuth();

  function onChangeForm(field: string, value: string) {
    setDadosLogin((prevState: any) => ({...(prevState || {}), [field]: value}));
  }

  function validaCamposObrigatorios() {
    if (
      !dadosLogin.email ||
      (dadosLogin.email && !validarEmail(dadosLogin.email)) ||
      !dadosLogin.senha
    ) {
      showMessage({
        type: 'warning',
        title: 'E-mail ou senha não informado !',
        description: 'Informe o e-mail e a senha nos campos corretos !',
      });
      return false;
    }

    return true;
  }

  function onSubmit() {
    setLoading(true);

    if (!validaCamposObrigatorios()) {
      setLoading(false);
      return;
    }

    setTimeout(() => {
      onAddAuth();
      setLoading(false);
    }, 1000);
  }

  return (
    <AreaView>
      <Container>
        <>
          <TextEntrarStyle>Entrar</TextEntrarStyle>
          <TextInputStyle
            autoCorrect={false}
            autoCapitalize="none"
            label="E-mail"
            /*  leftIcon="person" */
            returnKeyType="next"
            /*  editable={!loading} */
            value={dadosLogin.email}
            onChangeText={text => onChangeForm('email', text)}
            onBlur={() => {}}
          />
          <TextInputStyle
            autoCorrect={false}
            autoCapitalize="none"
            label="Senha"
            /*   leftIcon="person" */
            returnKeyType="next"
            /*  editable={!loading} */
            value={dadosLogin.senha}
            onChangeText={text => onChangeForm('senha', text)}
            onBlur={() => {}}
          />
          <TextStyle>Esqueceu sua senha?</TextStyle>
          <ButtonSubmit onPress={() => onSubmit()} loading={loading}>
            Entrar
          </ButtonSubmit>
          <TextCadastroStyle>Não tem uma conta? Cadastre-se</TextCadastroStyle>
        </>
      </Container>
    </AreaView>
  );
}
